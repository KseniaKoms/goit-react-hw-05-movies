import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { getFilmDetails } from 'services/FilmApi';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const MoviesDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  const poster = film.poster_path
    ? ` https://image.tmdb.org/t/p/w500${film.poster_path}`
    : 'https://www.freeiconspng.com/uploads/camera-icon-images--pictures--becuo-3.png';

  useEffect(() => {
    if (movieId === '') {
      return;
    }

    const filmInfo = async () => {
      try {
        const movie = await getFilmDetails(movieId);
        setFilm(movie);
      } catch (error) {
        console.log(error.message);
      }
    };
    filmInfo();
  }, [movieId]);
  return (
    <>
      <GoBackButton goBackLink={goBackLink} />
      <MovieInfo
        title={film.title}
        poster={poster}
        userScore={film.vote_average}
        genres={film.genres}
      />
      <NavLink to="cast" state={{ from: goBackLink }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: goBackLink }}>
        Reviews
      </NavLink>
      <Outlet />
    </>
  );
};

export default MoviesDetails;