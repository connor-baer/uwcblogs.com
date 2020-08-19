import { isEmail, isURL, isInt } from 'validator';
import { flow, isEmpty } from 'lodash/fp';
import { FORM_ERROR } from 'final-form';

import akismet from '../../services/akismet';
import contentful from '../../services/contentful';

const fiveYearsFromNow = new Date().getFullYear() + 5;

export default async (req, res) => {
  const [
    { items: collegeEntries },
    { items: countryEntries },
    { items: languageEntries },
  ] = await Promise.all([
    contentful.getEntries({
      content_type: 'college',
      select: 'sys.id,fields.name',
    }),
    contentful.getEntries({
      content_type: 'country',
      select: 'sys.id,fields.name',
    }),
    contentful.getEntries({
      content_type: 'language',
      select: 'sys.id,fields.name',
    }),
  ]);

  const validations = [
    {
      name: 'firstName',
      validateFn: isString,
      validationHint: 'Please enter your first name',
    },
    {
      name: 'email',
      validateFn: isEmail,
      validationHint: 'Please enter a valid email address',
    },
    {
      name: 'url',
      validateFn: isURL,
      validationHint: 'Please enter a valid URL',
    },
    {
      name: 'college',
      validateFn: flow(validateInEntries(collegeEntries)),
      validationHint: 'Please select a college from the provided options',
    },
    {
      name: 'countries',
      validateFn: validateFactory(
        validateArrayLength(1, 3),
        validateInEntries(countryEntries),
      ),
      validationHint:
        'Please select between 1 and 3 countries from the provided options',
    },
    {
      name: 'languages',
      validateFn: validateFactory(
        validateArrayLength(1, 3),
        validateInEntries(languageEntries),
      ),
      validationHint:
        'Please select between 1 and 3 languages from the provided options',
    },
    {
      name: 'year',
      validateFn: validateYear(1961, fiveYearsFromNow),
      validationHint: `Please enter a year between 1961 and ${fiveYearsFromNow}`,
    },
  ];

  const errors = validations.reduce((acc, validation) => {
    const { name, validateFn, validationHint } = validation;
    const value = req.body[name];
    const valid = validateFn(value);

    if (valid) {
      return acc;
    }

    return { ...acc, [name]: validationHint };
  }, {});

  if (!isEmpty(errors)) {
    return res.status(422).json({ errors });
  }

  const {
    firstName,
    email,
    url,
    college,
    countries,
    languages,
    year,
  } = req.body;
  const { remoteAddress } = req.connection;
  const userAgent = req.headers['user-agent'];
  const referrer = req.headers.referer;
  const locale = 'en-US';

  const collegeValue = mapLink(college, collegeEntries);
  const countriesValue = countries.map((country) =>
    mapLink(country, countryEntries),
  );
  const languagesValue = languages.map((language) =>
    mapLink(language, languageEntries),
  );

  const localisedFirstName = mapLocalise(firstName, locale);
  const localisedEmail = mapLocalise(email, locale);
  const localisedUrl = mapLocalise(url, locale);
  const localisedCollege = mapLocalise(collegeValue, locale);
  const localisedCountries = mapLocalise(countriesValue, locale);
  const localisedLanguages = mapLocalise(languagesValue, locale);
  const localisedYear = mapLocalise(Number(year), locale);

  const isSpam = await akismet
    .checkSpam({
      user_ip: remoteAddress,
      user_agent: userAgent,
      referrer,
      permalink: 'https://uwcblogs.com/submit',
      comment_type: 'contact-form',
      comment_author: firstName,
      comment_author_email: email,
      comment_author_url: url,
      blog_lang: 'en',
    })
    .then(({ spam }) => spam);

  const fields = {
    firstName: localisedFirstName,
    email: localisedEmail,
    url: localisedUrl,
    college: localisedCollege,
    countries: localisedCountries,
    languages: localisedLanguages,
    year: localisedYear,
  };

  return contentful
    .createEntry('blog', fields, !isSpam)
    .then((entry) =>
      res.json({ success: true, entry: contentful.unpackData(entry) }),
    )
    .catch((error) =>
      res
        .status(422)
        .json({ errors: { [FORM_ERROR]: JSON.parse(error.message).message } }),
    );
};

function isString(value) {
  return typeof value === 'string';
}

function validateFactory(...validators) {
  return (value) => validators.find((validateFn) => validateFn(value));
}

function validateArrayLength(min, max) {
  return (array) => {
    const isArray = Array.isArray(array);
    if (!isArray) {
      return false;
    }
    const isMin = array.length >= min;
    const isMax = array.length <= max;
    return isMin && isMax;
  };
}

function validateInEntries(entries) {
  return (value) => {
    const array = Array.isArray(value) ? value : [value];
    return array.every((item) => entries.find((entry) => entry.name === item));
  };
}

function validateYear(min, max) {
  return (year) => isInt(year, { min, max });
}

function mapLink(name, entries) {
  const entry = entries.find((e) => e.name === name);
  return {
    sys: {
      type: 'Link',
      linkType: 'Entry',
      id: entry.id,
    },
  };
}

function mapLocalise(value, locale) {
  return { [locale]: value };
}
