import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../views/HomePage/HomePage';
import Movies from '../views/Movies/Movies';
import Navbar from './Navbar/Navbar';
import MovieDetails from '../views/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
