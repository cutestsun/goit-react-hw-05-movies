import { ReviewsList } from 'components/ReviewsList/ReviewsList';

import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const movieData = await getReviewsById(movieId);

        setReviewsInfo(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  console.log(reviewsInfo);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error} </p>}
      {reviewsInfo.length > 0 ? (
        <ReviewsList reviews={reviewsInfo} />
      ) : (
        <p>Sorry, no reviews</p>
      )}
    </>
  );
};
