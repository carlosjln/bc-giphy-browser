import http from "@/service/http.js";

const env = import.meta.env;

export default {
	giphy_search: async (query) => {
		const data = {params: {q: query}};
		const response = await http.get('', data);

		return response;
	}
}