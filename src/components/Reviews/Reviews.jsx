import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/FilmApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const filmReviews = async () => {
      try {
        const reviewInfo = await getFilmReviews(movieId);
        console.log(reviewInfo);
        setReviews(reviewInfo);
      } catch (error) {
        console.log(error.message);
      }
    };
    filmReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>no reviews</p>
      )}
    </div>
  );
};

export default Reviews;
