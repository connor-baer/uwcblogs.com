import React from 'react';
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
} from 'lodash/fp';

import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import contentful from '../services/contentful';
import { BlogSection } from '../components/BlogSection';
import { BlogGroup } from '../components/BlogGroup';
import { BlogItem } from '../components/BlogItem';

export default function Page({ title, subtitle, image, blogs: items }) {
  return (
    <>
      <Meta title={title} description={subtitle} pathname={''} />

      <Navigation />

      <Split title={title} subtitle={subtitle} image={image}>
        {items.map(({ college, years }) => (
          <BlogSection key={college} title={college}>
            {years.map(({ year, blogs }) => (
              <BlogGroup key={`${college}-${year}`} title={year}>
                {blogs.map((blog) => (
                  <BlogItem
                    key={`${college}-${year}-${blog.firstName}-${blog.url}`}
                    {...blog}
                  />
                ))}
              </BlogGroup>
            ))}
          </BlogSection>
        ))}
      </Split>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { items, total } = await contentful.getEntries({
    content_type: 'blog',
    include: 2,
  });
  const blogs = items.map(({ college, countries, languages, id, ...rest }) => ({
    college: college.name,
    languages: languages.map(({ name }) => name),
    countries: countries.map(({ name }) => name),
    ...rest,
  }));

  const collegeCount = count(blogs, 'college');
  const languageCount = count(blogs, 'languages');
  const countryCount = count(blogs, 'countries');

  const groupedBlogs = groupBlogs(blogs);

  const title = 'UWC Blogs';
  const subtitle = `A collection of ${total} blogs written by UWC students in ${languageCount} languages from ${countryCount} countries at the ${collegeCount} United World Colleges.`;
  const image = {
    src:
      'https://images.ctfassets.net/wgin2u9ggvsy/1rCrSbXDO4ECoKow2QKkyg/e068c16bb6e71eb6eae6a4befffe1418/aidan-meyer-129877.jpg',
    alt: 'A boy is writing into his journal on top of a mountain.',
  };

  return {
    props: { title, subtitle, image, blogs: groupedBlogs },
    revalidate: 60,
  };
}

function count(arr, prop) {
  const props = arr.map((item) => item[prop]);
  const occurences = countBy(flatten(props));
  return keys(occurences).length;
}

function groupPairs(blogs, property) {
  return flow(
    groupBy(property),
    toPairs,
    map((pair) => zipObject([property, 'blogs'], pair)),
  )(blogs);
}

function groupBlogs(blogs) {
  const groupedByCollege = groupPairs(blogs, 'college');
  const sortedByCollege = sortBy('college', groupedByCollege);

  return sortedByCollege.map((college) => {
    const groupedByYear = groupPairs(college.blogs, 'year');
    const sortedByYear = reverse(sortBy('year', groupedByYear));

    return {
      college: college.college,
      years: sortedByYear.map((year) => {
        const sortedByName = sortBy('firstName', year.blogs);

        return {
          year: year.year,
          blogs: sortedByName,
        };
      }),
    };
  });
}
