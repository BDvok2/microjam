const API_URL = import.meta.env.MODE === 'production' 
  ? 'https://microjam-backend-8l29.vercel.app'
  : 'http://localhost:3000';

export { API_URL };