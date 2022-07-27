import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendFilms } from '../services/FilmApi';

function Home() {
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
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
        <Home films={films} />
        <Outlet />
      </nav>
    </div>
  );
}

export default Home;
