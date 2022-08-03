import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackButton = ({ goBackLink }) => {
  return (
    <button type="button">
      <Link to={goBackLink}> go back </Link>
    </button>
  );
};

export default GoBackButton;

GoBackButton.propType = {
  goBackLink: PropTypes.string.isRequired,
};
