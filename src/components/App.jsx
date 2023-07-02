import { Routes, Route } from 'react-router-dom';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  useEffect(() => {});
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
