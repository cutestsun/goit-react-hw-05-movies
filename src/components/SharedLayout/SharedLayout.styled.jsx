import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 15px;
  margin: 15px;
  margin-left: 20px;
  display: inline-block;
  border: 2px solid teal;
  border-radius: 5px;
  font-weight: 700;
  font-size: 17px;

  &.active {
    color: red;
  }
`;
