import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Site from '../layouts/Site';
import Layout from '../layouts/Layout';
import Header from 'change/Header';
import BlogsContainer from '../components/BlogsContainer';

export default class Page extends Component {
  static async getInitialProps({ req }) {
    const { protocol } = req || {};
    const siteUrl = req ? `${protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site`).then(resp => resp.json());
    const page = await fetch(`${siteUrl}/api/single`).then(resp => resp.json());
    const blogs = await fetch(`${siteUrl}/api/blogs`).then(resp => resp.json());

    return { site, page, blogs };
  }

  static propTypes = {
    site: PropTypes.object,
    page: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.object
    }),
    blogs: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { site, page, blogs } = this.props;
    const { title, subtitle, image } = page;

    return (
      <Site site={site}>
        <Layout navigation sidebar prefooter footer>
          <Header title={title} subtitle={subtitle} image={image} />
          <BlogsContainer blogs={blogs} />
        </Layout>
      </Site>
    );
  }
}
