import React from 'react';
import { Button } from '@madebyconnor/bamboo-ui';

import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NotFound() {
  const title = 'Page not found 🕵️';
  const subtitle = 'What’s worse, a hilarious 404 page can’t be found either.';

  const image = {
    src: 'https://images.ctfassets.net/wgin2u9ggvsy/1RGLKbeyBV11Bfvj40YhXp/e97eeb457a383813849790196695bfd1/drew-graham-_Sr03VSKIeg-unsplash.jpg',
    alt: 'Binoculars pointing to nowhere',
  };

  return (
    <>
      <Meta title={title} description={subtitle} index={false} />

      <Navigation />

      <Split title={title} subtitle={subtitle} image={image}>
        <Button href="/">← Return home</Button>
      </Split>
      <Footer />
    </>
  );
}
