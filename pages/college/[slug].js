import React from 'react';
import PropTypes from 'prop-types';

import { mapBlogs, groupBlogs } from '../../services/blogs';
import { Split } from '../../layouts/Split';
import Meta from '../../components/Meta';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import contentful from '../../services/contentful';
import { BlogGroup } from '../../components/BlogGroup';
import { BlogItem } from '../../components/BlogItem';

export default function College({ title, subtitle, image, blogs }) {
  return (
    <>
      <Meta title={title} description={subtitle} pathname={''} />

      <Navigation />

      <Split title={title} subtitle={subtitle} image={image}>
        {blogs.map(({ college, years }) =>
          years.map(({ year, blogs: items }) => (
            <BlogGroup key={`${college}-${year}`} title={year}>
              {items.map((blog) => (
                <BlogItem
                  key={`${college}-${year}-${blog.firstName}-${blog.url}`}
                  {...blog}
                />
              ))}
            </BlogGroup>
          )),
        )}
      </Split>
      <Footer />
    </>
  );
}

College.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  blogs: PropTypes.arrayOf(
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
  ),
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const college = await contentful.getEntry({
    'content_type': 'college',
    'fields.slug': slug,
    'include': 2,
  });

  const { items } = await contentful.getEntries({
    content_type: 'blog',
    links_to_entry: college.id,
    include: 2,
    order: 'fields.firstName',
  });

  const blogs = mapBlogs(items);

  const groupedBlogs = groupBlogs(blogs);

  const title = college.name;
  const subtitle = college.description;
  const image = {
    src: college.image.file.url,
    alt: college.image.description,
  };

  return {
    props: { title, subtitle, image, college, blogs: groupedBlogs },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { items: colleges } = await contentful.getEntries({
    content_type: 'college',
    select: 'fields.slug',
  });

  return {
    paths: colleges.map((college) => ({
      params: { slug: college.slug },
    })),
    fallback: false,
  };
}
