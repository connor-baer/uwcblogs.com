import { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import Input from './Input';
import Spinner from './Spinner';
import Blogs from './Blogs';

export default class BlogsContainer extends Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);
    let search = '';
    if (typeof window !== 'undefined') {
      const parsed = queryString.parse(window.location.search);
      search = parsed.search;
    }
    this.state = {
      search,
      loading: false,
      blogs: []
    };
  }

  componentDidMount() {
    const { blogs } = this.props;
    this.setState({ blogs });
  }

  setHash = value => {
    if (typeof document === 'undefined') {
      return;
    }
    const hash = encodeURIComponent(value);

    if (hash !== '') {
      window.location.hash = hash;
    } else {
      // Remove trailing # to prevent scrolling
      history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  handleSearch = async e => {
    if (typeof window === 'undefined') {
      return;
    }
    e.persist();
    const { value: search } = e.target;
    this.setState(() => ({ search, loading: true }));
    this.setHash(search);

    const { origin: siteUrl } = window.location;
    const blogs = await fetch(
      `${siteUrl}/api/blogs?search=${search}`
    ).then(resp => resp.json());
    this.setState(() => ({ blogs, loading: false }));
  };

  render() {
    const { search, loading, blogs } = this.state;
    return (
      <article className="l-ctnr cf">
        <div className="l-w100">
          <Input
            label="Enter a college, year, country, language, or name:"
            name="search"
            type="search"
            value={search}
            placeholder="Type to filter the blogs..."
            onChange={this.handleSearch}
            autoComplete={false}
            required
          />
          <Spinner active={loading} />
          <Blogs blogs={blogs} />
          <style jsx>{`
            article {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
          `}</style>
        </div>
      </article>
    );
  }
}
