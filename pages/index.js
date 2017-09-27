import { Component } from 'react';
import api, { unpackData } from '../services/api';
import Site from '../layouts/Site';
import Main from '../components/Main';
import Header from '../components/Header';
import Link from '../components/Link';
import Blogs from '../components/Blogs';
import Prefooter from '../components/Prefooter';

export default class Page extends Component {
  static async getInitialProps({ req, query }) {
    const site = await api.getEntry('wL0L3aRGsSsCGqOOSGmUE');
    const blogs = await api.getEntries({ content_type: 'blog', include: 2 });
    return { site, blogs };
  }

  render() {
    const { site, blogs } = this.props;
    return (
      <Site site={site} sidebar={true}>
        <Main>
          <Header
            title={site.name}
            subtitle={`A collection of ${blogs.length} blogs written by UWC students in {languages.length} languages from {countries.length} countries at the {colleges.length} United World Colleges.`}
          />
          <div className="l-ctnr cf">
            <Blogs blogs={blogs} />
          </div>
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
