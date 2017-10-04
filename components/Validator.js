import PropTypes from 'prop-types';
import validator from 'validator';

const SubmissionForm = ({ value, type, options, children }) => {
  let valid = true;
  let error = `Please provide a valid ${type}.`;
  switch (type) {
    case 'email': {
      valid = validator.isEmail(value);
      break;
    }
    case 'url': {
      valid = validator.isURL(value);
      break;
    }
    case 'number': {
      valid = validator.isInt(value, options);
      error = `Please provide a number between ${options.min} and ${options.max}.`;
      break;
    }
    default: {
      valid = validator.isAlpha(value, 'de-DE');
    }
  }
  if (valid) {
    return children({ valid });
  }
  return children({ valid, error });
};

SubmissionForm.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.object,
  children: PropTypes.func.isRequired
};

export default SubmissionForm;
