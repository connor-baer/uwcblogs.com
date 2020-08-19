import { countBy, zipObject } from 'lodash';
import {
  groupBy,
  map,
  toPairs,
  sortBy,
  reverse,
  flatten,
  keys,
  flow,
  reduce,
} from 'lodash/fp';

export function count(arr, prop) {
  const props = arr.map((item) => item[prop]);
  const occurences = countBy(flatten(props));
  return keys(occurences).length;
}

export function mapBlogs(blogs) {
  return blogs.map(({ college, countries, languages, id, ...rest }) => ({
    college: college.name,
    languages: languages.map(({ name }) => name),
    countries: countries.map(({ name }) => name),
    ...rest,
  }));
}

export function groupBlogs(blogs) {
  const groupedByCollege = groupPairs(blogs, 'college');
  const sortedByCollege = sortBy('college', groupedByCollege);

  return sortedByCollege.map((college) => {
    const groupedByYear = groupPairs(college.blogs, 'year');
    const sortedByYear = reverse(sortBy('year', groupedByYear));

    return {
      college: college.college,
      years: sortedByYear,
    };
  });
}

function groupPairs(blogs, property) {
  return flow(
    groupBy(property),
    toPairs,
    map((pair) => zipObject([property, 'blogs'], pair)),
  )(blogs);
}

export function searchBlogs(blogs, search) {
  if (!search) {
    return blogs;
  }
  const lowercaseSearch = search.toLowerCase();
  return blogs.filter((blog) => {
    const lowercaseValues = reduce(
      (result, value) => {
        if (typeof value === 'string') {
          result.push(value.toLowerCase());
        } else if (typeof value === 'number') {
          result.push(value.toString().toLowerCase());
        } else if (value.constructor === Array) {
          value.map((item) => result.push(item.toLowerCase()));
        }
        return result;
      },
      [],
      blog,
    );
    return lowercaseValues.some((value) => value.includes(lowercaseSearch));
  });
}
