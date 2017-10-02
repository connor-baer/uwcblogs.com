import { Component } from 'react';
import PropTypes from 'prop-types';
import { chain, sortBy, zipObject } from 'lodash';
import fetch from 'isomorphic-fetch';
import Input from '../components/Input';
import CollegeGroup from '../components/CollegeGroup';

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
    const { value: search } = e.target;
    this.setState(() => ({ search }));

    const { href: siteUrl } = window.location;
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
      <div className="l-w100">
        <Input
          label="Enter a college, year, country, language, or name:"
          name="search"
          type="search"
          value={this.state.search}
          placeholder="Type to filter the blogs..."
          onChange={this.handleSearch}
          autoComplete={false}
          required
        />
        {orderedBlogs.map((collegeGroup, collegeIndex) => (
          <CollegeGroup key={collegeIndex} {...collegeGroup} />
        ))}
        <style jsx>{`
          div {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
        `}</style>
      </div>
    );
  }
}
