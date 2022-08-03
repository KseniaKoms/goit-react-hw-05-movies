import React from 'react';
import MovieItem from 'components/MovieItem/MovieItem';

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
