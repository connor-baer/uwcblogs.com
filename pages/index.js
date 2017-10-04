import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Site from '../layouts/Site';
import Main from '../components/Main';
import Header from '../components/Header';
import BlogsContainer from '../components/BlogsContainer';
import Prefooter from '../components/Prefooter';

export default class Page extends Component {
  static async getInitialProps({ req }) {
    const { protocol } = req || {};
    const siteUrl = req ? `${protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site`).then(resp => resp.json());
    const page = await fetch(`${siteUrl}/api/single/`).then(resp =>
      resp.json()
    );
    const blogs = await fetch(`${siteUrl}/api/blogs`).then(resp => resp.json());

    return { site, page, blogs };
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
    }),
    blogs: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { site, page, blogs } = this.props;
    const { title, subtitle, image } = page;

    return (
      <Site site={site} title={title} sidebar={true}>
        <Main>
          <Header title={title} subtitle={subtitle} image={image} />
          <BlogsContainer blogs={blogs} />
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
