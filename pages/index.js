/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, memo } from 'react';
import { css } from '@emotion/core';
import { Input, Paragraph, Emoji } from '@madebyconnor/bamboo-ui';
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

export default function Page({ title, subtitle, image, blogs: initialBlogs }) {
  const [search, setSearch] = useState('');
  const [blogs, setBlogs] = useState(initialBlogs);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    request(`/api/blogs?search=${debouncedSearch}`).then((data) =>
      setBlogs(data),
    );
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
          css={(theme) =>
            css`
              margin-bottom: ${theme.spacing.xxxxl};
            `
          }
        />

        <BlogList blogs={blogs} />
      </Split>
      <Footer />
    </>
  );
}

const BlogList = memo(({ blogs }) => {
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
    <BlogSection key={college} title={college}>
      {years.map(({ year, blogs: items }) => (
        <BlogGroup key={`${college}-${year}`} title={year}>
          {items.map((blog) => (
            <BlogItem
              key={`${college}-${year}-${blog.firstName}-${blog.url}`}
              {...blog}
            />
          ))}
        </BlogGroup>
      ))}
    </BlogSection>
  ));
});

BlogList.displayName = 'BlogList';

export async function getStaticProps() {
  const { items, total } = await contentful.getEntries({
    content_type: 'blog',
    include: 2,
  });
  const blogs = mapBlogs(items);

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
