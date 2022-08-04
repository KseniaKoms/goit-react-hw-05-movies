import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCredits } from 'services/FilmApi';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const castInfo = await getFilmCredits(movieId);
        setCast(castInfo);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCastInfo();
  }, [movieId]);

  const poster = poster => {
    return poster
      ? ` https://image.tmdb.org/t/p/w500${poster}`
      : 'https://www.freeiconspng.com/uploads/camera-icon-images--pictures--becuo-3.png';
  };

  return (
    <div>
      {cast.length === 0 ? (
        <p>No cast info</p>
      ) : (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img src={poster(profile_path)} alt={name} width="100" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
