import React from "react";
import FoodItems from "./FoodItems";
import { RecipeExternalProvider } from "../../contexts/RecipeExternalContext";

const index = () => {
	return (
		<>
			<RecipeExternalProvider>
				<FoodItems />
			</RecipeExternalProvider>
		</>
	);
};
export default index;
