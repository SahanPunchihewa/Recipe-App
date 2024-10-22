import RecipeModel from "../models/Recipe.model";

// Insert a recipe into the database
export const insertLikeRecipe = async (data) => {
	return await RecipeModel.create(data)
		.then(async (recipe_data) => {
			await recipe_data.save();
			return recipe_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all recipe
export const getLikedRecipe = async () => {
	return await RecipeModel.find({})
		.then((recipe) => {
			return recipe;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
