import { Component } from 'react';
import api from '../services/api';
import Site from '../layouts/Site';
import Main from '../components/Main';
import Header from '../components/Header';
import Link from '../components/Link';
import Prefooter from '../components/Prefooter';

export default class Page extends Component {
  static async getInitialProps({ req, query }) {
    const site = await api.getEntry('wL0L3aRGsSsCGqOOSGmUE');
    const entries = await api.getEntries({ content_type: 'blog' });
    const { items: blogs } = entries;
    return { site, blogs };
  }

  render() {
    const { site, blogs } = this.props;
    return (
      <Site site={site}>
        <Main>
          <Header title="no" subtitle="what" />
          <div className="l-ctnr cf">
            {blogs.map((blog, i) => {
              const { firstName, lastName } = blog.fields;
              return (
                <div key={i}>
                  <span>{firstName} </span>
                  <span>{lastName}</span>
                </div>
              );
            })}
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
