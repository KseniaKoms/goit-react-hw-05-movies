import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = ({
  title,
  poster,
  userScore,
  genres,
  releaseDate,
  overview,
}) => {
  return (
    <>
      <img src={poster} alt={title} width="300" />
      <h2>
        {title} {releaseDate && releaseDate.slice(0, 4)}
      </h2>
      <h3>User score: {userScore}% </h3>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
    </>
  );
};

export default MovieInfo;

MovieInfo.propType = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  releaseDate: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
