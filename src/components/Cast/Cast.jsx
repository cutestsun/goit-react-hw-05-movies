import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const movieData = await getCastById(movieId);

        setCastInfo(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error} </p>}
      {castInfo.length > 0 && <CastList cast={castInfo} />}
    </>
  );
};
