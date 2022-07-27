import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '3c9b3437ebab156a512248e157c99300';

export const getTrendFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  return response.data;
};

export const getSearchFilms = async searchValue => {
  const response = await axios.get(`/${searchValue}/movie?api_key=${KEY}`);
  return response.data;
};

export const getFilmDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const getFilmCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
  return response.data;
};

export const getFilmReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data;
};
