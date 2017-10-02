import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { fonts } from '../styles';
import YearGroup from './YearGroup';

const CollegeGroup = ({ college, years }) => {
  if (isEmpty(years)) {
    return null;
  }
  return (
    <div>
      <h2>{college}</h2>
      <ul>
        {years.map((yearGroup, yearIndex) => (
          <YearGroup key={yearIndex} {...yearGroup} />
        ))}
      </ul>
      <style jsx>{`
        h2 {
          font-size: ${fonts.size.t3};
          margin-top: 3rem;
          margin-bottom: 1rem;
          font-weight: ${fonts.weight.bold};
        }
      `}</style>
    </div>
  );
};

CollegeGroup.propTypes = {
  college: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired
};

export default CollegeGroup;
