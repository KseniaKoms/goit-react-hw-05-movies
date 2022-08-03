import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieItem = ({ id, title }) => {
  return (
    <li key={id}>
      <NavLink to={`movies/${id}`}>{title}</NavLink>
    </li>
  );
};

export default MovieItem;
