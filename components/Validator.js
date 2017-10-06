import PropTypes from 'prop-types';
import validator from 'validator';

const Validator = ({ value, type, options, children }) => {
  let valid = true;
  let error = `Please provide a valid ${type}.`;
  switch (type) {
    case 'array': {
      const isArray = Array.isArray(value);
      if (!options || !isArray) {
        valid = isArray;
        break;
      }
      const { min, max } = options;
      const isMin = min ? value.length >= min : true;
      const isMax = max ? value.length <= max : true;
      valid = isArray && isMin && isMax;
      if (min && max) {
        error = `Please provide between ${min} and ${max} items.`;
      } else if (min) {
        error = `Please provide at least ${min} items.`;
      } else if (max) {
        error = `Please provide at most ${min} items.`;
      }
      break;
    }
    case 'object': {
      valid = typeof value === 'object';
      break;
    }
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
      valid = typeof value === 'string';
    }
  }
  if (valid) {
    return children({ valid });
  }
  return children({ valid, error });
};

Validator.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  type: PropTypes.string,
  options: PropTypes.object,
  children: PropTypes.func.isRequired
};

export default Validator;
