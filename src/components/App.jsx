import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../views/HomePage';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="movies" element={<Movies />}> */}
        {/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
        {/* <Route path="movies/:movieId/cast" element={<Cast />} /> */}
        {/* <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
        {/* </Route> */}
        {/* </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
