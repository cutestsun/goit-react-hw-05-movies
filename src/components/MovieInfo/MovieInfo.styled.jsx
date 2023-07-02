import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MainWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 40px;

  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const Title = styled.h1``;

export const StyledLink = styled(Link)`
  font-size: 20px;
  padding: 8px;
  margin-left: 20px;
  margin-top: 12px;
  display: inline-block;
  border: 2px solid teal;
  border-radius: 5px;
`;
