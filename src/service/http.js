import axios from "axios";

/**
 * Axios request interceptors
 */
const env = import.meta.env;
const api_url = env.VITE_API_URL //env.VITE_GIPHY_SEARCH_ENDPOINT;
const api_key = env.VITE_GIPHY_API_KEY;

const http = axios.create({
	baseURL: api_url,
	withCredentials: true,

	headers: {
		'Content-Type': 'application/json',
	},

	params: {api_key}
});

// http.interceptors.response.use(
// 	(response) => {return response.data},
// 	(error) => {return Promise.reject(error)}
// );

export default http;