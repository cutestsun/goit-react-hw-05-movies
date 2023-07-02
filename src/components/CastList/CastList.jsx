import {
  Grid,
  GridItem,
  MovieTitle,
} from 'components/MoviesList/MoviesList.styled';

export const CastList = ({ cast }) => {
  return (
    <Grid>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <GridItem key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png'
            }
            alt={name}
          />
          <MovieTitle>{name}</MovieTitle>
          <MovieTitle>Character: {character}</MovieTitle>
        </GridItem>
      ))}
    </Grid>
  );
};
