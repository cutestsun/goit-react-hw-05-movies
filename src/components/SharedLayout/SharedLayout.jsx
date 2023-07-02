import { StyledNavLink } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="movies">Movies</StyledNavLink>
      </nav>
      <Outlet />
    </>
  );
}
