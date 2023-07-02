import {
  Grid,
  GridItem,
  MovieTitle,
} from 'components/MoviesList/MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const selectUrl = id => {
    if (location.pathname === '/movies') {
      return `${id}`;
    }

    return `movies/${id}`;
  };

  return (
    <Grid>
      {movies.map(({ id, title, poster_path }) => (
        <GridItem key={id}>
          <Link to={selectUrl(id)} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png'
              }
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
