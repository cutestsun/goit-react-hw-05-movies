import { Description, List, Name } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <Name>{author}</Name>
          <Description>{content}</Description>
        </li>
      ))}
    </List>
  );
};
