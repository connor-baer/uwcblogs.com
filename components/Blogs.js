import PropTypes from 'prop-types';
import { chain, isEmpty, sortBy, zipObject } from 'lodash';
import CollegeGroup from './CollegeGroup';

function groupPairs(blogs, property) {
  return chain(blogs)
    .groupBy(property)
    .toPairs()
    .value()
    .map(pair => zipObject([property, 'blogs'], pair));
}

const orderBlogs = blogs => {
  const groupedByCollege = groupPairs(blogs, 'college.name');
  const sortedByCollege = sortBy(groupedByCollege, group => group.college);
  const groupedByYear = sortedByCollege.map(group => ({
    college: group['college.name'],
    years: groupPairs(group.blogs, 'year')
  }));
  return groupedByYear;
};

const Blogs = ({ blogs }) => {
  if (isEmpty(blogs)) {
    return (
      <p>
        {'No blogs found. 😿'}
        <style jsx>{`
          p {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
        `}</style>
      </p>
    );
  }
  const orderedBlogs = orderBlogs(blogs);
  return (
    <div>
      {orderedBlogs.map((collegeGroup, collegeIndex) => (
        <CollegeGroup key={collegeIndex} {...collegeGroup} />
      ))}
      <style jsx>{`
        div {
          margin-top: 3rem;
          margin-bottom: 3rem;
        }
      `}</style>
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Blogs;
