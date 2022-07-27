import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="movies" element={<Movies />}>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
