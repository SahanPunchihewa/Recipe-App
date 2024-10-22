import { createContext, useState, useEffect, useCallback } from "react";
import RecipeExternalAPI from "./api/RecipeExternalAPI";

const RecipeExternalContext = createContext();

export function RecipeExternalProvider({ children }) {
	const [recipes, setRecipes] = useState([]);
	const [foodData, setFoodData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// Fetch all categories when the component mounts
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await RecipeExternalAPI.getAllRecipes();
				setRecipes(response.data.categories);
			} catch (err) {
				console.error("Failed to fetch categories:", err);
			}
		};

		fetchCategories();
	}, []);

	// Memoized function to fetch food data
	const fetchFoodData = useCallback(async (selectedCategory) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
			if (!response.ok) {
				throw new Error("Failed to fetch food data.");
			}
			const data = await response.json();
			setFoodData(data.meals || []); // Assuming 'meals' is the key for the list
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
		<RecipeExternalContext.Provider
			value={{
				recipes,
				setRecipes,
				foodData,
				fetchFoodData,
				isLoading,
				error,
			}}
		>
			{children}
		</RecipeExternalContext.Provider>
	);
}

export default RecipeExternalContext;
