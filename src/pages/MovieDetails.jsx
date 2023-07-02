import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { StyledLink } from 'components/MovieInfo/MovieInfo.styled';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { original_title, overview, poster_path, popularity, budget, genres } =
    movieInfo || {};

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const movieData = await getMovieById(movieId);

        setMovieInfo(movieData);
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
      <MovieInfo
        original_title={original_title}
        overview={overview}
        poster_path={poster_path}
        popularity={popularity}
        budget={budget}
        genres={genres}
      />
      <StyledLink to={'cast'}>Cast</StyledLink>
      <StyledLink to={'reviews'}>Reviews</StyledLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
