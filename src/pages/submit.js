import { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Site from '../layouts/Site';
import Layout from '../layouts/Layout';
import { Header } from 'change';
import SubmissionForm from '../components/SubmissionForm';

export default class Page extends Component {
  static async getInitialProps({ req, asPath, pathname }) {
    const siteUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const site = await fetch(`${siteUrl}/api/site`).then(resp => resp.json());
    const page = await fetch(`${siteUrl}/api/single${asPath}`).then(resp =>
      resp.json()
    );
    const colleges = await fetch(`${siteUrl}/api/colleges`).then(resp =>
      resp.json()
    );
    const countries = await fetch(`${siteUrl}/api/countries`).then(resp =>
      resp.json()
    );
    const languages = await fetch(`${siteUrl}/api/languages`).then(resp =>
      resp.json()
    );

    return { site, page, colleges, countries, languages };
  }

  static propTypes = {
    site: PropTypes.object,
    page: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.object,
      colleges: PropTypes.array,
      countries: PropTypes.array,
      languages: PropTypes.array
    })
  };

  render() {
    const { site, page } = this.props;
    const { title, subtitle, image, colleges, countries, languages } = page;

    return (
      <Site site={site} title={title}>
        <Layout navigation sidebar footer>
          <Header title={title} subtitle={subtitle} image={image} />
          <SubmissionForm
            colleges={colleges}
            countries={countries}
            languages={languages}
          />
        </Layout>
      </Site>
    );
  }
}
