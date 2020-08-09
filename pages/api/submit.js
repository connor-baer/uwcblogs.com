import validator from 'validator';

import akismet from '../../services/akismet';
import contentful from '../../services/contentful';

function mapLocalise(value, locale) {
  return { [locale]: value };
}

function mapLink(id) {
  if (!id) {
    return undefined;
  }
  return {
    sys: {
      type: 'Link',
      linkType: 'Entry',
      id,
    },
  };
}

export default async (req, res) => {
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

  const validFirstName = typeof firstName === 'string';
  const validEmail = validator.isEmail(email);
  const validUrl = validator.isURL(url);
  const validCollege = typeof firstName === 'string';
  const validCountries = (() => {
    const isArray = Array.isArray(countries);
    if (!isArray) {
      return false;
    }
    const isMin = countries.length >= 1;
    const isMax = countries.length <= 3;
    return isArray && isMin && isMax;
  })();
  const validLanguages = (() => {
    const isArray = Array.isArray(languages);
    if (!isArray) {
      return false;
    }
    const isMin = languages.length >= 1;
    const isMax = languages.length <= 3;
    return isArray && isMin && isMax;
  })();
  const validYear = validator.isInt(year, { min: 1961, max: 2025 });

  const valid =
    validFirstName &&
    validEmail &&
    validUrl &&
    validCollege &&
    validCountries &&
    validLanguages &&
    validYear;

  if (!valid) {
    return res.status(422).json({ error: 'Validation failed.' });
  }

  const collegeValue = mapLink(college);
  const countriesValue = countries.map((country) => mapLink(country.value));
  const languagesValue = languages.map((language) => mapLink(language.value));

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
    .then((entry) => res.json(entry))
    .catch((error) => res.status(422).json({ error }));
};
