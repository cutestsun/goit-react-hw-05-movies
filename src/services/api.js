import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9d34841870d4a368aa4ed0dbf6da47b4';

export async function getTrendingMovies() {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data.results;
}

export async function getMovieByName(query) {
  const { data } = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
    },
  });

  return data.results;
}

export async function getMovieById(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data;
}

export async function getCastById(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data.cast;
}

export async function getReviewsById(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data.results;
}
