import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@madebyconnor/bamboo-ui';

import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ErrorPage({ statusCode }) {
  let notice = {};

  switch (statusCode) {
    case 404: {
      notice = {
        title: 'Page not found 🕵️',
        subtitle: 'What’s worse, a hilarious 404 page can’t be found either.',
      };
      break;
    }
    case 500: {
      notice = {
        title: 'Bear with me please 🐼',
        subtitle:
          'I’m currently carrying out some maintenance on this website. It will only take a minute.',
      };
      break;
    }
    default: {
      notice = {
        title: 'An error occured ⚠️',
        subtitle: 'Apologies, I’m not quite sure what went wrong.',
      };
    }
  }

  const image = {
    src:
      'https://images.ctfassets.net/wgin2u9ggvsy/1rCrSbXDO4ECoKow2QKkyg/e068c16bb6e71eb6eae6a4befffe1418/aidan-meyer-129877.jpg',
    alt: 'A boy is writing into his journal on top of a mountain.',
  };

  return (
    <>
      <Meta {...notice} index={false} />

      <Navigation />

      <Split {...notice} image={image}>
        <Button href="/">← Return home</Button>
      </Split>
      <Footer />
    </>
  );
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};
