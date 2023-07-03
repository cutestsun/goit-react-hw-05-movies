import { useState, useEffect } from 'react';
import { getMovieByName } from 'services/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const moviesData = await getMovieByName(query);

        setMovies(moviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const onQueryChange = newQuery => {
    setQuery(newQuery);
  };

  return (
    <>
      <Searchbar onQueryChange={onQueryChange} />
      {isLoading && <Loader />}
      {error && <p>{error} </p>}
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
