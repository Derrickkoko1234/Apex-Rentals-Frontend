// Determine if we're running on localhost
const isLocalhost = 
  typeof window !== 'undefined' && window.location.hostname === 'localhost';

// Use localhost URL for local development, otherwise use production URL
export const API_URL = isLocalhost 
  ? "http://localhost:3000/v1"
  : "https://httn-backend.onrender.com/v1";


