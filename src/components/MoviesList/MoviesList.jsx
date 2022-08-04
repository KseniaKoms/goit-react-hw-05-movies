import React from 'react';
import MovieItem from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';

const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => {
        return <MovieItem id={id} key={id} title={title} />;
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propType = {
  films: PropTypes.array.isRequired,
};
