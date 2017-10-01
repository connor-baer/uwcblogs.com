import { Component } from 'react';
import PropTypes from 'prop-types';
import { chain, sortBy, zipObject } from 'lodash';
import fetch from 'isomorphic-fetch';
import BlogItem from '../components/BlogItem';

export default class Blogs extends Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      blogs: []
    };
  }

  componentDidMount() {
    const { blogs } = this.props;
    this.setState({ blogs });
  }

  handleSearch = async e => {
    if (typeof window === 'undefined') {
      return;
    }
    e.persist();
    const { href: siteUrl } = window.location;
    const { value: search } = e.target;
    this.setState(() => ({ search }));
    const blogs = await fetch(
      `${siteUrl}api/blogs?search=${search}`
    ).then(resp => resp.json());
    this.setState(() => ({ blogs }));
  };

  group = (blogs, property) =>
    chain(blogs)
      .groupBy(property)
      .toPairs()
      .value()
      .map(pair => zipObject([property, 'blogs'], pair));

  orderBlogs = blogs => {
    const groupedByCollege = this.group(blogs, 'college.name');
    const sortedByCollege = sortBy(groupedByCollege, group => group.college);
    const groupedByYear = sortedByCollege.map(group => ({
      college: group['college.name'],
      years: this.group(group.blogs, 'year')
    }));
    return groupedByYear;
  };

  render() {
    const { blogs } = this.state;
    const orderedBlogs = this.orderBlogs(blogs);
    return (
      <div>
        <input
          type="search"
          value={this.state.search}
          onChange={this.handleSearch}
        />
        {orderedBlogs.map((collegeGroup, collegeIndex) => {
          const { college, years } = collegeGroup;
          return (
            <div key={collegeIndex}>
              <h2>{college}</h2>
              <ul>
                {years.map((yearGroup, yearIndex) => {
                  const { year, blogs } = yearGroup;
                  return (
                    <li key={yearIndex}>
                      <h3>{year}</h3>
                      <ul>
                        {blogs.map((blog, blogIndex) => (
                          <BlogItem key={blogIndex} {...blog} />
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
