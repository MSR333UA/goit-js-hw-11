import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '27687056-f14cdc56d168c42ac76f46ae3';

export async function fetchImages(query, page, pageSize) {
  const response = await axios.get(
    `${BASE_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`
  );
  return response;
}
