import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchFilms } from '../../services/FilmApi';
import { Notify } from 'notiflix';
import MoviesList from 'components/MoviesList/MoviesList';
import styles from './Movies.module.css';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const searchMovies = async () => {
      try {
        const movies = await getSearchFilms(query);
        setSearchQuery(movies);
        if (movies.length === 0) {
          return Notify.failure(`Sorry, we have no films named ${inputValue}`);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovies();
  }, [query, inputValue]);

  const handleChange = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      Notify.warning('Please, type something');
      return;
    }
    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="search"
          value={inputValue}
          placeholder="start search"
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
      {searchQuery.length > 0 && query && <MoviesList films={searchQuery} />}
    </div>
  );
}

export default Movies;
