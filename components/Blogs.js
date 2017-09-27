import { Component } from 'react';
import {
  chain,
  filter,
  groupBy,
  includes,
  map,
  reduce,
  sortBy,
  toPairs,
  zipObject
} from 'lodash';
import Link from '../components/Link';

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  filterBlogs = blogs =>
    filter(blogs, blog => {
      const lowercaseSearch = this.state.search.toLowerCase();
      if (lowercaseSearch === '') {
        return true;
      }
      const lowercaseValues = reduce(
        blog,
        (result, value, key) => {
          if (typeof value === 'string') {
            result.push(value.toLowerCase());
          }
          return result;
        },
        []
      );
      return lowercaseValues.some(value => includes(lowercaseSearch, value));
    });

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
    const { blogs } = this.props;
    const filteredBlogs = this.filterBlogs(blogs);
    const orderedBlogs = this.orderBlogs(filteredBlogs);
    return (
      <div>
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
                        {blogs.map((blog, blogIndex) => {
                          const { firstName, lastName } = blog;
                          return (
                            <div key={blogIndex}>
                              <span>{firstName}</span>
                            </div>
                          );
                        })}
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
