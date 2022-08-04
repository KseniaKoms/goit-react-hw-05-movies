import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../GoBackButton/GoBackButton.module.css';

const GoBackButton = ({ goBackLink }) => {
  return (
    <button type="button" className={styles.button}>
      <Link to={goBackLink} className={styles.link}>
        go back
      </Link>
    </button>
  );
};

export default GoBackButton;

GoBackButton.propType = {
  goBackLink: PropTypes.string.isRequired,
};
