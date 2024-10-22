import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class RecipeAPI {
	static getAllRecipes() {
		return axios.get(`${BASE_URL}/proxy/api/json/v1/1/categories.php`, requestConfig);
	}

	static getAllLikedRecipes() {
		return axios.get(`${BASE_URL}/api/recipe/liked`, requestConfig);
	}

	static create(values) {
		return axios.post(`${BASE_URL}/api/recipe/create`, values, requestConfigJson);
	}
}

export default RecipeAPI;
