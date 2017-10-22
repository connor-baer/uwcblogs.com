import PropTypes from 'prop-types';
import { isEmpty, sortBy } from 'lodash';
import { withStyles } from 'change';
import YearGroup from './YearGroup';

const CollegeGroup = ({ college, years, styles: { fonts } }) => {
  if (isEmpty(years)) {
    return null;
  }
  const sortedYears = sortBy(years, 'year').reverse();
  return (
    <section>
      <h2>{college}</h2>
      <ul>
        {sortedYears.map((yearGroup, yearIndex) => (
          <YearGroup key={yearIndex} {...yearGroup} />
        ))}
      </ul>
      <style jsx>{`
        h2 {
          font-size: ${fonts.size.t3};
          font-weight: ${fonts.weight.bold};
          line-height: ${fonts.lineHeight.small};
          margin-top: 3rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

CollegeGroup.propTypes = {
  college: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired
};

export default withStyles(CollegeGroup);
