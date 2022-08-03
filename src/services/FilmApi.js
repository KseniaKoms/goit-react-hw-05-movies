import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '3c9b3437ebab156a512248e157c99300';

export const getTrendFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getSearchFilms = async searchValue => {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${searchValue}`
  );
  return response.data.results;
};

export const getFilmDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const getFilmCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
  return response.data.cast;
};

export const getFilmReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return response.data.results;
};
