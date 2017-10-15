import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Site from '../layouts/Site';
import Layout from '../layouts/Layout';
import Header from 'change/Header';
import Prefooter from 'change/Prefooter';

export default class Page extends Component {
  static async getInitialProps({ req, query }) {
    const { protocol } = req || {};
    const { slug } = query || {};
    const siteUrl = req ? `${protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site/`).then(resp => resp.json());
    const page = await fetch(`${siteUrl}/api/page/${slug}/`).then(resp =>
      resp.json()
    );

    return { site, page };
  }

  static propTypes = {
    site: PropTypes.object,
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
      <Site site={site} title={title}>
        <Layout navigation sidebar={hasSidebar} prefooter footer>
          <Header title={title} subtitle={subtitle} image={image} />
        </Layout>
      </Site>
    );
  }
}
