import PropTypes from 'prop-types';
import Link from '../components/Link';

const BlogItem = ({ firstName, url, languages, countries, college }) => {
  const languagesString = languages.map(l => l.name).join(', ');
  const countriesString = countries.map(c => c.name).join(', ');
  return (
    <div>
      <Link href={url}>
        <a target="_blank" rel="noreferrer">
          {firstName}
        </a>
      </Link>
      {` | ${countriesString} - ${languagesString}`}
    </div>
  );
};

BlogItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  url: PropTypes.string,
  languages: PropTypes.array,
  countries: PropTypes.array,
  college: PropTypes.object
};

BlogItem.defaultProps = {
  languages: [],
  countries: []
};

export default BlogItem;
