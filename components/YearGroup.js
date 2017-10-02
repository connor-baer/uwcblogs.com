import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { fonts } from '../styles';
import BlogItem from './BlogItem';

const YearGroup = ({ year, blogs }) => {
  if (isEmpty(blogs)) {
    return null;
  }
  return (
    <li>
      <h3>{year}</h3>
      <ul>
        {blogs.map((blog, blogIndex) => <BlogItem key={blogIndex} {...blog} />)}
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

export default YearGroup;
