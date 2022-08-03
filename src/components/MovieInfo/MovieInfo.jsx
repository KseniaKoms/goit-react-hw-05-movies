import React from 'react';

const MovieInfo = ({ title, poster, userScore, genres }) => {
  console.log(genres);
  return (
    <>
      <img src={poster} alt={title} width="300" />
      <h2>{title}</h2>
      <h3>User score: {userScore} </h3>
      <h3>Genres</h3>
      {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
    </>
  );
};

export default MovieInfo;
