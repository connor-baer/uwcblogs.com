import { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import Field from 'change/Field';
import Input from 'change/Input';
import Spinner from './Spinner';
import Blogs from './Blogs';

export default class BlogsContainer extends Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
    filter: PropTypes.object
  };

  static defaultProps = {
    filter: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      loading: false,
      blogs: props.blogs
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const { search } = queryString.parse(location.hash);
      if (!search) {
        return;
      }
      this.setState({ search });
      this.updateBlogs(search);
    }
  }

  setHash = value => {
    if (typeof window === 'undefined') {
      return;
    }
    const oldHash = queryString.parse(location.hash);
    const newHash = { ...oldHash, search: value };

    if (newHash.search !== '') {
      location.hash = queryString.stringify(newHash);
    } else {
      // Remove trailing # to prevent scrolling
      history.replaceState(
        '',
        document.title,
        location.pathname + location.search
      );
    }
  };

  updateBlogs = async search => {
    const { origin: siteUrl } = window.location;
    const filter = queryString.stringify(this.props.filter);
    const blogs = await fetch(
      `${siteUrl}/api/blogs?search=${search}&${filter}`
    ).then(resp => resp.json());
    this.setState(() => ({ blogs, loading: false }));
  };

  handleSearch = async e => {
    if (typeof window === 'undefined') {
      return;
    }
    e.persist();
    const { value: search } = e.target;
    this.setState(() => ({ search, loading: true }));
    this.setHash(search);
    this.updateBlogs(search);
  };

  render() {
    const { search, loading, blogs } = this.state;
    return (
      <article className="l-ctnr cf">
        <div className="l-w100">
          <Field
            value={search}
            label="Enter a college, year, country, language, or name:"
            name="search"
          >
            <Input
              type="search"
              placeholder="Type to filter the blogs..."
              onChange={this.handleSearch}
              autoComplete={false}
            />
          </Field>
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
