import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal } from 'emotion';
import { extractCritical } from 'emotion-server';
import NProgress from 'nprogress';
import { Router } from '../../server/routes/next';

import { globalStyles } from '../shared/styles';
import { change } from '../shared/themes';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const customStyles = `
  #nprogress {
    pointer-events: none;

    & .bar {
      background: ${change.colors.p500};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }

    & .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${change.colors.p500}, 0 0 5px ${change.colors.p500};
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }
  }
`;

injectGlobal(globalStyles({ theme: change, custom: customStyles }));

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    /* eslint-disable react/no-danger */
    return (
      <html lang="en-US">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
    /* eslint-enable react/no-danger */
  }
}
