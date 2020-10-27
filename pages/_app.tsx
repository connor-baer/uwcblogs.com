import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Image from 'next/image';
import {
  ComponentsProvider,
  Theme,
  Align,
  LoadingBar,
  BaseStyles,
  themes,
} from '@madebyconnor/bamboo-ui';

import Link from '../components/Link';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));

    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, []);

  return (
    <ComponentsProvider value={{ Head, Link, Align, Image }}>
      <Theme theme={themes.standard}>
        <BaseStyles />
        <LoadingBar isLoading={isLoading} />
        <Component {...pageProps} />
      </Theme>
    </ComponentsProvider>
  );
}
