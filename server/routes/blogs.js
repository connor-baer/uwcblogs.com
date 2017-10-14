import express from 'express';
import { filter, get, includes, reduce } from 'lodash';
import validator from 'validator';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';
import { mapLink, mapLocalise } from '../lib/mappers';

const router = express.Router();

function searchBlogs(blogs, search) {
  return filter(blogs, blog => {
    const lowercaseSearch = search.toLowerCase();
    if (lowercaseSearch === '') {
      return true;
    }
    const lowercaseValues = reduce(
      blog,
      (result, value) => {
        if (typeof value === 'string') {
          result.push(value.toLowerCase());
        } else if (typeof value === 'number') {
          result.push(value.toString().toLowerCase());
        } else if (value.constructor === Object) {
          result.push(value.name.toLowerCase());
        } else if (value.constructor === Array) {
          value.map(item => result.push(item.name.toLowerCase()));
        }
        return result;
      },
      []
    );
    return lowercaseValues.some(value => includes(value, lowercaseSearch));
  });
}

/* GET blogs */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const { query } = req;
    const search = get(query, 'search');
    const college = get(query, 'college');
    const language = get(query, 'language');
    const country = get(query, 'country');

    const { items: blogs } = await api.contentful.getEntries({
      content_type: 'blog',
      include: 2
    });

    const filteredBlogs = filter(blogs, blog => {
      const hasCollege = college ? blog.college.slug === college : true;
      const hasLanguage = language
        ? blog.languages.some(blogLanguage => blogLanguage === language)
        : true;
      const hasCountry = country
        ? blog.countries.some(blogCountry => blogCountry === country)
        : true;

      return hasCollege && hasLanguage && hasCountry;
    });

    if (!search) {
      return res.json(filteredBlogs);
    }

    const searchedBlogs = searchBlogs(filteredBlogs, search);
    return res.json(searchedBlogs);
  })
);

/* POST blogs */
router.post(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const {
      firstName,
      email,
      url,
      college,
      countries,
      languages,
      year
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
    const countriesValue = countries.map(country => mapLink(country.value));
    const languagesValue = languages.map(language => mapLink(language.value));

    const localisedFirstName = mapLocalise(firstName, locale);
    const localisedEmail = mapLocalise(email, locale);
    const localisedUrl = mapLocalise(url, locale);
    const localisedCollege = mapLocalise(collegeValue, locale);
    const localisedCountries = mapLocalise(countriesValue, locale);
    const localisedLanguages = mapLocalise(languagesValue, locale);
    const localisedYear = mapLocalise(Number(year), locale);

    const isSpam = await api.akismet
      .checkSpam({
        user_ip: remoteAddress,
        user_agent: userAgent,
        referrer,
        permalink: 'https://uwcblogs.com/submit',
        comment_type: 'contact-form',
        comment_author: firstName,
        comment_author_email: email,
        comment_author_url: url,
        blog_lang: 'en'
      })
      .then(({ spam }) => spam);

    const fields = {
      firstName: localisedFirstName,
      email: localisedEmail,
      url: localisedUrl,
      college: localisedCollege,
      countries: localisedCountries,
      languages: localisedLanguages,
      year: localisedYear
    };
    api.contentful
      .createEntry('blog', fields, !isSpam)
      .then(entry => res.json(entry))
      .catch(error => res.status(422).json({ error }));
  })
);

export default router;
