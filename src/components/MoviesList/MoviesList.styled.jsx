import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  grid-gap: 24px;
  padding: 24px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieTitle = styled.p`
  margin-top: 8px;
  font-weight: 600;
`;

export const Title = styled.h1`
  margin-left: 20px;
`;
