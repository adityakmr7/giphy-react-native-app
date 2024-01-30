const BASE_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "sgmap4jZGBd2eEmo1deADbzIgc1nujFF";

const END_POINT = {
  TRENDING_GIF: "/trending",
  SEARCH_GIF: "/search",
};

export const get_trending_gif = (limit = 25) => {
  const url = `${BASE_URL}${END_POINT.TRENDING_GIF}?api_key=${API_KEY}&limit=${limit}&offset=0&rating=g&bundle=messaging_non_clips`;
  return fetch(url).then((response) => response.json());
};

export const get_search_gif = (queryString = "", limit = 25) => {
  const url = `${BASE_URL}${END_POINT.SEARCH_GIF}?api_key=${API_KEY}&q=${queryString}&limit=${limit}&offset=0&rating=g&bundle=messaging_non_clips`;
  return fetch(url).then((response) => response.json());
};
