import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/FilmApi';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const filmReviews = async () => {
      try {
        const reviewInfo = await getFilmReviews(movieId);
        setReviews(reviewInfo);
      } catch (error) {
        console.log(error.message);
      }
    };
    filmReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>no reviews</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p className={styles.title}>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
