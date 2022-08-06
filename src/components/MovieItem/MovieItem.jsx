import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../MovieItem/MovieItem.module.css';

const MovieItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li className={styles.item}>
      <NavLink
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MovieItem;

MovieItem.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
