import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35829510-9a51be363aad92e9acd99befc';

export const fetchApi = async (q, page, imgPerPage) => {
  const response = await axios.get(
    `?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${imgPerPage}`
  );
  return response.data;
};
