import { getTrendFilms } from 'services/FilmApi';

const Home = ({ films }) => {
  return (
    <ul>
      {films.map(film => {
        return <li key={film.id}>{film.name}</li>;
      })}
    </ul>
  );
};

export default Home;
