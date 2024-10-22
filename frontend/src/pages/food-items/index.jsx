import React from "react";
import FoodItems from "./FoodItems";
import { RecipeProvider } from "../../contexts/RecipeContext";

const index = () => {
	return (
		<>
			<RecipeProvider>
				<FoodItems />
			</RecipeProvider>
		</>
	);
};
export default index;
