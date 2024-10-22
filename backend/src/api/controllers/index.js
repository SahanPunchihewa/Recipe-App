import { registerUser, loginUser } from "./User.controller";

import {insertLikeRecipe, getAllLikedRecipe} from "./Recipe.controller";

export default {
	registerUser,
	loginUser,
	insertLikeRecipe,
	getAllLikedRecipe,
};
