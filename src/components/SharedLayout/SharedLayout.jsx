import { Loader } from 'components/Loader/Loader';
import { StyledNavLink } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
