const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_API_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = 'cdd89e33678d0a9ed3d093bd086b11c6';
const EXXEN_ID = 4405;

export const MOVIES_PATH = `discover/tv?language=tr&api_key=${API_KEY}&with_networks=${EXXEN_ID}`;
export const POPULAR_MOVIES_PATH = `discover/tv?language=tr&sort_by=popularity.desc&api_key=${API_KEY}&with_networks=${EXXEN_ID}`;

export default function fetchMovies(path) {
  return fetch(API_URL + path);
}

export function createImageLink(path) {
  return IMAGE_API_URL + path;
}
