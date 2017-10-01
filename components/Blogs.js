import { Component } from 'react';
import { chain, sortBy, toPairs, zipObject } from 'lodash';
import BlogItem from '../components/BlogItem';

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

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
    const orderedBlogs = this.orderBlogs(blogs);
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
