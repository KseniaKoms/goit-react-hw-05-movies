import { useState, useEffect } from 'react';
import { getTrendFilms } from '../services/FilmApi';

function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function trendFilms() {
      try {
        const movies = await getTrendFilms();
        setFilms(movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    trendFilms();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {films.map(({ id, original_title }) => {
          return <li key={id}>{original_title}</li>;
        })}
      </ul>
    </>
  );
}

export default HomePage;
