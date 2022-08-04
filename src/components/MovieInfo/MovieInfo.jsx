import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.module.css';

const MovieInfo = ({
  title,
  poster,
  userScore,
  genres,
  releaseDate,
  overview,
}) => {
  return (
    <div className={styles.filmContainer}>
      <img src={poster} alt={title} width="200" />
      <div className={styles.infoBox}>
        <h2>
          {title} {releaseDate && <span>({releaseDate.slice(0, 4)})</span>}
        </h2>
        <h3>User score: {userScore}% </h3>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
      </div>
    </div>
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
