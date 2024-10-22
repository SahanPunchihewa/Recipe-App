import { createContext, useState, useEffect, useCallback } from "react";
import RecipeAPI from "./api/RecipeAPI";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
	const [recipes, setRecipes] = useState([]); // For fetched recipe categories
	const [likedRecipes, setLikedRecipes] = useState([]); // For liked recipes
	const [foodData, setFoodData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// Fetch all recipe categories when the component mounts
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await RecipeAPI.getAllRecipes();
				setRecipes(response.data.categories);
			} catch (err) {
				console.error("Failed to fetch categories:", err);
				setError(err.message);
			}
		};

		fetchCategories();
	}, []);

	// Memoized function to fetch food data based on selected category
	const fetchFoodData = useCallback(async (selectedCategory) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
			if (!response.ok) {
				throw new Error("Failed to fetch food data.");
			}
			const data = await response.json();
			setFoodData(data.meals || []); // Assuming 'meals' is the correct key for the list
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	// Fetch liked recipes separately
	useEffect(() => {
		const fetchLikedRecipes = async () => {
			try {
				const response = await RecipeAPI.getAllLikedRecipes();
				setLikedRecipes(response.data); // Assuming response.data contains the liked recipes
			} catch (err) {
				console.error("Failed to fetch liked recipes:", err);
				setError(err.message);
			}
		};

		fetchLikedRecipes();
	}, []);

	return (
		<RecipeContext.Provider
			value={{
				recipes,        // For recipe categories
				likedRecipes,   // For liked recipes
				setRecipes,     // Setter for categories (if needed)
				foodData,       // Fetched food data
				fetchFoodData,  // Method to fetch food data
				isLoading,      // Loading state
				error,          // Error state
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
}

export default RecipeContext;

