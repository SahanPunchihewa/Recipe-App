import RecipeService from "../services/RecipeService";
import logger from "../../util/logger";

export const fetchRecipesByCategory = async (request, response, next) => {
    const { category } = request.params;  // Assuming category is passed as a URL parameter
    
    if (!category) {
        logger.error("Category is missing in the request");
        request.handleResponse.errorRespond(response)("Category is missing");
        next();
    } else {
        await RecipeService.getRecipesByCategory(category)
            .then((recipes) => {
                request.handleResponse.successRespond(response)(recipes);
                next();
            })
            .catch((error) => {
                logger.error(`Error fetching recipes: ${error.message}`);
                request.handleResponse.errorRespond(response)(`Error fetching recipes: ${error.message}`);
                next();
            });
    }
};