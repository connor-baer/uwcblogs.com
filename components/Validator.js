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
      const isMin = options.min ? value.length >= options.min : true;
      const isMax = options.max ? value.length <= options.max : true;
      valid = isArray && isMin && isMax;
      error = `Please provide between ${options.min} and ${options.max} items.`;
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
