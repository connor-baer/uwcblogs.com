import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Site from '../layouts/Site';
import Layout from '../layouts/Layout';
import Header from 'change/Header';
import Link from 'change/Link';
import BlogsContainer from '../components/BlogsContainer';
import { animations, colors } from 'styles';

export default class Page extends Component {
  static async getInitialProps({ req, query }) {
    const { protocol } = req || {};
    const { slug } = query || {};
    const siteUrl = req ? `${protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site/`).then(resp => resp.json());
    const college = await fetch(`${siteUrl}/api/college/${slug}/`).then(resp =>
      resp.json()
    );
    const blogs = await fetch(
      `${siteUrl}/api/blogs/?college=${slug}`
    ).then(resp => resp.json());

    return { site, college, blogs };
  }

  static propTypes = {
    site: PropTypes.object,
    college: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.object
    }),
    blogs: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { site, college, blogs } = this.props;
    const {
      name: title,
      description: subtitle,
      website,
      image,
      slug
    } = college;
    const meta = (
      <Link href={website}>
        <a target="_blank" rel="noreferrer noopener">
          Visit the school’s website →
          <style jsx>{`
            a {
              transition: box-shadow ${animations.short},
                color ${animations.short};

              &:hover {
                color: ${colors.primary};
                box-shadow: inset 0 -0.08em 0 0 ${colors.primary};
              }
            }
          `}</style>
        </a>
      </Link>
    );
    const hasSidebar = !!image;
    return (
      <Site site={site} title={title}>
        <Layout navigation sidebar={hasSidebar} prefooter footer>
          <Header title={title} subtitle={subtitle} meta={meta} image={image} />
          <BlogsContainer blogs={blogs} filter={{ college: slug }} />
        </Layout>
      </Site>
    );
  }
}
