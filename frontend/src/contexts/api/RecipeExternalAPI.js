import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
class RecipeExternalAPI {
	static getAllRecipes() {
		return axios.get(`${BASE_URL}/proxy/api/json/v1/1/categories.php`, requestConfig);
	}
}

export default RecipeExternalAPI;
