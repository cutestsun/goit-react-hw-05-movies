import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const trendingMoviesData = await getTrendingMovies();

        setTrendingMovies(trendingMoviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {error && <p>{error} </p>}
      {!isLoading && trendingMovies.length > 0 && (
        <MoviesList movies={trendingMovies} />
      )}
    </>
  );
}
