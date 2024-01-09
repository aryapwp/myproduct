// utils/api.ts
import axios from 'axios';

const apiUrl = 'https://your-rest-api-endpoint.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};