import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li key={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
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
