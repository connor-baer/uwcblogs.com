import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal } from 'emotion';
import { extractCritical } from 'emotion-server';

import { globalStyles } from '../shared/styles';
import { change } from '../shared/themes';

injectGlobal(globalStyles({ theme: change }));

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
