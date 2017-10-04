import PropTypes from 'prop-types';
import Link from '../components/Link';
import { animations, colors, fonts } from '../styles';

const BlogItem = ({ firstName, url, languages, countries }) => {
  const languagesString = languages.map(l => l.name).join(', ');
  const countriesString = countries.map(c => c.name).join(', ');
  return (
    <li>
      <Link href={url}>
        <a target="_blank" rel="noopener noreferrer">
          {firstName}
        </a>
      </Link>&ensp;
      {`${countriesString} — ${languagesString}`}
      <style jsx>{`
        div {
          font-size: ${fonts.size.s0};
          display: block;
        }

        a {
          transition: box-shadow ${animations.short};
          color: ${colors.primary};
          font-weight: ${fonts.weight.bold};

          &:hover,
          &:focus {
            box-shadow: inset 0 -0.08em 0 0 ${colors.primary};
          }
        }
      `}</style>
    </li>
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
