import { useState, useEffect } from 'react';
import { getTrendFilms } from '../../services/FilmApi';
import MoviesList from 'components/MoviesList/MoviesList';

function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function trendFilms() {
      try {
        const movies = await getTrendFilms();
        setFilms(movies);
      } catch (error) {
        console.log(error);
      }
    }
    trendFilms();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList films={films} />
    </>
  );
}

export default HomePage;
