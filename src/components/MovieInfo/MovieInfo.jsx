import { useLocation } from 'react-router-dom';
import {
  InfoWrapper,
  MainWrapper,
  StyledLink,
  Text,
  Title,
} from './MovieInfo.styled';

export const MovieInfo = ({
  original_title,
  overview,
  poster_path,
  popularity,
  budget,
  genres,
  release_date,
  vote_average,
}) => {
  const location = useLocation();

  return (
    <>
      <StyledLink to={location?.state?.from || '/'}>Back</StyledLink>
      <MainWrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png'
          }
          alt={original_title}
          width="320"
        />
        <InfoWrapper>
          <Title>{original_title}</Title>
          <Text>{overview}</Text>
          <Text>User score: {(vote_average * 10).toFixed(0)}%</Text>
          <Text>Popularity: {popularity}</Text>
          {budget > 0 && <Text>Budget: {budget}$</Text>}
          <Text>Genres: {genres?.map(({ name }) => name).join(', ')}</Text>
          <Text>Release date: {release_date}</Text>
        </InfoWrapper>
      </MainWrapper>
    </>
  );
};
