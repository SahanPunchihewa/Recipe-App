import RecipeService from "../services";

// insert Like Recipe into database
export const insertLikeRecipe = async (request, response, next) => {
	await RecipeService.insertLikeRecipe(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getAllLikedRecipe = async (request, response, next) => {
	try {
		const allRecipe = await RecipeService.getLikedRecipe("recipe");
		const recipe = allRecipe.filter((recipes) => recipes.status === "LIKE");
		request.handleResponse.successRespond(response)(recipe);
		next();
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.message);
		next();
	}
};
