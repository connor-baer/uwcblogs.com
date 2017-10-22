import PropTypes from 'prop-types';
import { isEmpty, sortBy } from 'lodash';
import { withStyles } from 'change';
import BlogItem from './BlogItem';

const YearGroup = ({ year, blogs, styles: { fonts } }) => {
  if (isEmpty(blogs)) {
    return null;
  }

  const sortedBlogs = sortBy(blogs, 'firstName');
  return (
    <li>
      <h3>{year}</h3>
      <ul>
        {sortedBlogs.map((blog, blogIndex) => (
          <BlogItem key={blogIndex} {...blog} />
        ))}
      </ul>
      <style jsx>{`
        h3 {
          font-size: ${fonts.size.t1};
          display: block;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </li>
  );
};

YearGroup.propTypes = {
  year: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired
};

export default withStyles(YearGroup);
