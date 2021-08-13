import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Form, Field } from 'react-final-form';
import {
  Input,
  AutocompleteInput,
  AutocompleteMultiSelect,
  Paragraph,
  Button,
  Hr,
  LoadingBar,
  propTypes,
} from '@madebyconnor/bamboo-ui';
import { isEmpty, sortBy } from 'lodash/fp';
import { FORM_ERROR } from 'final-form';

import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import contentful from '../services/contentful';
import { BlogGroup } from '../components/BlogGroup/BlogGroup';
import { BlogSection } from '../components/BlogSection';
import { BlogItem } from '../components/BlogItem';

const fieldStyles = (theme) => css`
  margin-bottom: ${theme.spacing.m};
`;

const formErrorStyles = ({ theme }) => css`
  color: ${theme.color.red[700]};
`;

const FormError = styled(Paragraph)(formErrorStyles);

const required = (value) =>
  isEmpty(value) ? 'This field is required' : undefined;

export default function Page({
  title,
  subtitle,
  image,
  colleges,
  countries,
  languages,
}) {
  const [isLoading, setLoading] = useState(false);
  const [blog, setBlog] = useState();

  const fields = [
    {
      type: 'text',
      name: 'firstName',
      label: "What's your first name?",
      placeholder: 'Jane',
      autoComplete: 'given-name',
      component: Input,
      validateFn: required,
    },
    {
      type: 'email',
      name: 'email',
      label: "What's your email address?",
      placeholder: 'jane@example.com',
      autoComplete: 'email',
      component: Input,
      validateFn: required,
    },
    {
      type: 'url',
      name: 'url',
      label: "What's the link to your blog?",
      placeholder: 'https://example.com/blog',
      autoComplete: 'url',
      component: Input,
      validateFn: required,
    },
    {
      name: 'college',
      label: 'Which college do/did you attend?',
      placeholder: 'Add a college...',
      component: AutocompleteInput,
      items: colleges.map((c) => c.name),
      validateFn: required,
    },
    {
      name: 'countries',
      label: 'Which country are you from?',
      placeholder: 'Add a country...',
      component: AutocompleteMultiSelect,
      initialSelectedItems: [],
      items: countries.map((c) => c.name),
      validateFn: required,
    },
    {
      name: 'languages',
      label: 'Which language do you write in?',
      placeholder: 'Add a language...',
      component: AutocompleteMultiSelect,
      initialSelectedItems: [],
      items: languages.map((l) => l.name),
      validateFn: required,
    },
    {
      type: 'number',
      name: 'year',
      label: 'Which year did/will you finish UWC?',
      placeholder: new Date().getFullYear().toString(),
      component: Input,
      validateFn: required,
    },
  ];

  const onSubmit = (values) => {
    setLoading(true);
    return (
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        // eslint-disable-next-line consistent-return
        .then((res) => {
          if (res.errors) {
            return res.errors;
          }
          setBlog(values);
        })
        .catch((error) => ({
          [FORM_ERROR]:
            error.message || 'An unexpected error occurred. Please try again.',
        }))
        .finally(() => {
          setLoading(false);
        })
    );
  };

  return (
    <>
      <Meta title={title} description={subtitle} pathname="/submit" />
      <LoadingBar isLoading={isLoading} />
      <Navigation />
      <Split title={title} subtitle={subtitle} image={image}>
        {blog ? (
          <>
            <Paragraph lineHeight="m">
              {
                "Thank you for your submission! It might take a couple of minutes until your blog is shown in the blog list. Here's a preview of how it will look:"
              }
            </Paragraph>
            <Hr />
            <BlogSection title={blog.college}>
              <li>
                <BlogGroup title={blog.year}>
                  <BlogItem {...blog} />
                </BlogGroup>
              </li>
            </BlogSection>
            <Hr />
            <Button variant="secondary" onClick={() => setBlog(null)}>
              ← Submit another blog
            </Button>
          </>
        ) : (
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, submitError, hasSubmitErrors }) => (
              <>
                <form onSubmit={handleSubmit} noValidate>
                  {fields.map(
                    ({ component: Component, name, validateFn, ...rest }) => (
                      <Field key={name} name={name} validate={validateFn}>
                        {({ input, meta }) => (
                          <Component
                            {...rest}
                            {...input}
                            invalid={meta.touched && meta.invalid}
                            validationHint={
                              (meta.touched && meta.error) ||
                              (!meta.dirtySinceLastSubmit && meta.submitError)
                            }
                            css={fieldStyles}
                          />
                        )}
                      </Field>
                    ),
                  )}

                  {hasSubmitErrors && <FormError>{submitError}</FormError>}

                  <Button type="submit" variant="primary">
                    Submit blog →
                  </Button>
                </form>
              </>
            )}
          </Form>
        )}
      </Split>
      <Footer />
    </>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape(propTypes.imagePropType),
  colleges: PropTypes.array,
  countries: PropTypes.array,
  languages: PropTypes.array,
};

export async function getStaticProps() {
  const title = 'Submit a blog';
  const subtitle =
    'Share your UWC experience with the world and gain more readers.';
  const image = {
    src: 'https://images.ctfassets.net/wgin2u9ggvsy/1ITM0m6MLO8m0ECk26O84c/26200e9757217369f4cf7dd6d88f9702/photo-1452421822248-d4c2b47f0c81.jpeg',
    alt: 'An open and empty journal rests next to a camera, a map and a loupe.',
  };
  const [colleges, countries, languages] = await Promise.all([
    contentful.getEntries({
      content_type: 'college',
      select: 'fields.name',
      include: 2,
    }),
    contentful.getEntries({
      content_type: 'country',
      select: 'fields.name',
      include: 2,
    }),
    contentful.getEntries({
      content_type: 'language',
      select: 'fields.name',
      include: 2,
    }),
  ]);

  return {
    props: {
      title,
      subtitle,
      image,
      colleges: sortBy('name', colleges.items),
      countries: sortBy('name', countries.items),
      languages: sortBy('name', languages.items),
    },
    revalidate: 60 * 60,
  };
}
