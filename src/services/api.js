import axios from 'axios';

export const requestApi = async (q, page, imgPerPage) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '35829510-9a51be363aad92e9acd99befc',
      per_page: imgPerPage,
      q: `${q}`,
      image_type: 'photo',
      orientation: 'horizontal',
      page,
    },
  });
  return data;
};