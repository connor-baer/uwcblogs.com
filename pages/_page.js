import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Site from '../layouts/Site';
import Main from '../components/Main';
import Header from '../components/Header';
import Prefooter from '../components/Prefooter';

export default class Page extends Component {
  static async getInitialProps({ req, query }) {
    const { protocol } = req || {};
    const { slug } = query || {};
    const siteUrl = req ? `${protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site`).then(resp => resp.json());
    const page = await fetch(`${siteUrl}/api/page/${slug}`).then(resp =>
      resp.json()
    );

    return { site, page };
  }

  static propTypes = {
    site: PropTypes.shape({
      domain: PropTypes.string,
      name: PropTypes.string
    }),
    page: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.object
    })
  };

  render() {
    const { site, page } = this.props;
    const { title, subtitle, image } = page;
    const hasSidebar = !!image;
    return (
      <Site site={site} sidebar={hasSidebar}>
        <Main>
          <Header title={title} subtitle={subtitle} image={image} />
          <Prefooter
            text="Let’s be friends!"
            linkLabel="Say hi!"
            linkUrl="https://twitter.com/connor_baer"
          />
        </Main>
      </Site>
    );
  }
}
