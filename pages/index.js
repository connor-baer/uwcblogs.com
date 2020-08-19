/* eslint-disable jsx-a11y/accessible-emoji, jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { css } from '@emotion/core';
import { Input, Paragraph, Emoji, LoadingIcon } from '@madebyconnor/bamboo-ui';
import { isEmpty } from 'lodash/fp';

import { request } from '../services/request';
import { count, mapBlogs, groupBlogs } from '../services/blogs';
import useDebounce from '../hooks/use-debounce';
import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import contentful from '../services/contentful';
import { BlogSection } from '../components/BlogSection';
import { BlogGroup } from '../components/BlogGroup';
import { BlogItem } from '../components/BlogItem';

export default function Page({
  title,
  subtitle,
  image,
  blogs: initialBlogs,
  colleges,
}) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(initialBlogs);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setLoading(true);
    request(`/api/blogs?search=${debouncedSearch}`).then((data) => {
      setBlogs(data);
      setLoading(false);
    });
  }, [debouncedSearch]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Meta title={title} description={subtitle} pathname={''} />

      <Navigation />

      <Split title={title} subtitle={subtitle} image={image}>
        <Input
          label="Enter a college, year, country, language, or name:"
          type="search"
          placeholder="Type to filter the blogs..."
          onChange={handleSearch}
          value={search}
          suffix={loading && LoadingIcon}
          css={(theme) =>
            css`
              margin-bottom: ${theme.spacing.xxxxl};
            `
          }
        />

        <BlogList blogs={blogs} colleges={colleges} />
      </Split>
      <Footer />
    </>
  );
}

const blogsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    college: PropTypes.string,
    years: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.string,
        blogs: PropTypes.arrayOf(
          PropTypes.shape({
            firstName: PropTypes.string,
            url: PropTypes.string,
            college: PropTypes.string,
            countries: PropTypes.arrayOf(PropTypes.string),
            languages: PropTypes.arrayOf(PropTypes.string),
            yarn: PropTypes.number,
          }),
        ),
      }),
    ),
  }),
);

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  blogs: blogsPropType,
  colleges: PropTypes.object,
};
const BlogList = memo(({ blogs, colleges }) => {
  if (isEmpty(blogs)) {
    return (
      <Paragraph
        css={(theme) =>
          css`
            padding: ${theme.spacing.xl} 0;
          `
        }
      >
        No blogs found. <Emoji label="crying cat">😿</Emoji> Try a different
        search.
      </Paragraph>
    );
  }
  return blogs.map(({ college, years }) => (
    <BlogSection
      key={college}
      title={
        <Link href="/college/[slug]" as={`/college/${colleges[college]}`}>
          <a>{college}</a>
        </Link>
      }
    >
      {years.map(({ year, blogs: items }) => (
        <li key={`${college}-${year}`}>
          <BlogGroup title={year}>
            {items.map((blog) => (
              <BlogItem
                key={`${college}-${year}-${blog.firstName}-${blog.url}`}
                {...blog}
              />
            ))}
          </BlogGroup>
        </li>
      ))}
    </BlogSection>
  ));
});

BlogList.displayName = 'BlogList';

BlogList.propTypes = {
  blogs: blogsPropType,
  colleges: PropTypes.object,
};

export async function getStaticProps() {
  const [
    { items: blogs, total: blogCount },
    { items: colleges },
  ] = await Promise.all([
    contentful.getEntries({
      content_type: 'blog',
      include: 2,
      order: 'fields.firstName',
    }),
    contentful.getEntries({
      content_type: 'college',
    }),
  ]);

  const mappedBlogs = mapBlogs(blogs);
  const mappedColleges = colleges.reduce(
    (acc, { name, slug }) => ({ ...acc, [name]: slug }),
    {},
  );

  const collegeCount = count(mappedBlogs, 'college');
  const languageCount = count(mappedBlogs, 'languages');
  const countryCount = count(mappedBlogs, 'countries');

  const groupedBlogs = groupBlogs(mappedBlogs);

  const title = 'UWC Blogs';
  const subtitle = `A collection of ${blogCount} blogs written by UWC students in ${languageCount} languages from ${countryCount} countries at the ${collegeCount} United World Colleges.`;
  const image = {
    src:
      'https://images.ctfassets.net/wgin2u9ggvsy/1rCrSbXDO4ECoKow2QKkyg/e068c16bb6e71eb6eae6a4befffe1418/aidan-meyer-129877.jpg',
    alt: 'A boy is writing into his journal on top of a mountain.',
  };

  return {
    props: {
      title,
      subtitle,
      image,
      blogs: groupedBlogs,
      colleges: mappedColleges,
    },
    revalidate: 60,
  };
}
