import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, propTypes } from '@madebyconnor/bamboo-ui';

import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
// import SubmissionForm from '../components/SubmissionForm';
import contentful from '../services/contentful';

// const createHandler = (setFn) => (event) => {
//   setFn(event.target.value);
// };

export default function Page({
  title,
  subtitle,
  image,
  colleges,
  countries,
  languages,
}) {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleFirstName = createHandler(setFirstName);
  // const handleEmail = createHandler(setEmail);
  // console.log(colleges, countries, languages);
  return (
    <>
      <Meta title={title} description={subtitle} pathname="/submit" />
      <Navigation />
      <Split title={title} subtitle={subtitle} image={image}>
        <Paragraph slope="italic">Coming back soon...</Paragraph>
        {/* <SubmissionForm
          colleges={colleges}
          countries={countries}
          languages={languages}
        />
        <Input
          label="What's your first name?"
          placeholder="Jane"
          onChange={handleFirstName}
          value={firstName}
        />
        <Input
          label="What's your email address?"
          placeholder="jane@uwc.org"
          type="email"
          onChange={handleEmail}
          value={email}
        /> */}
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
    src:
      'https://images.ctfassets.net/wgin2u9ggvsy/1ITM0m6MLO8m0ECk26O84c/26200e9757217369f4cf7dd6d88f9702/photo-1452421822248-d4c2b47f0c81.jpeg',
    alt: 'An open and empty journal rests next to a camera, a map and a loupe.',
  };
  const [colleges, countries, languages] = await Promise.all([
    contentful.getEntries({
      content_type: 'college',
      include: 2,
    }),
    contentful.getEntries({
      content_type: 'country',
      include: 2,
    }),
    contentful.getEntries({
      content_type: 'language',
      include: 2,
    }),
  ]);

  return {
    props: {
      title,
      subtitle,
      image,
      colleges: colleges.items,
      countries: countries.items,
      languages: languages.items,
    },
    revalidate: 60 * 60,
  };
}
