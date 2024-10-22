import { createContext, useState, useEffect, useCallback } from "react";
import RecipeAPI from "./api/RecipeAPI";
import { makeToast } from "../components";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
	const [recipes, setRecipes] = useState([]);
	const [likedRecipes, setLikedRecipes] = useState([]);
	const [foodData, setFoodData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [recipe, setRecipe] = useState({
		strCategory: "",
		strCategoryThumb: "",
		strCategoryDescription: "",
		email: "",
		strMeal: "",
		status: "",
	});

	// Fetch all recipe categories
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

	const fetchFoodData = useCallback(async (selectedCategory) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
			if (!response.ok) {
				throw new Error("Failed to fetch food data.");
			}
			const data = await response.json();
			setFoodData(data.meals || []);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	// Fetch liked recipes
	useEffect(() => {
		const fetchLikedRecipes = async () => {
			try {
				const response = await RecipeAPI.getAllLikedRecipes();
				setLikedRecipes(response.data);
			} catch (err) {
				console.error("Failed to fetch liked recipes:", err);
				setError(err.message);
			}
		};

		fetchLikedRecipes();
	}, []);

	// like a recipe and insert it into the database
	const likeRecipe = async (values) => {
		try {
			const response = await RecipeAPI.create(values);
			setRecipes([...recipes, response]);
			makeToast({ type: "success", message: "Added to Favourite" });
		} catch (error) {
			makeToast({ type: "error", message: "Please try again" });
		}
	};

	return (
		<RecipeContext.Provider
			value={{
				recipes,
				likedRecipes,
				setRecipes,
				foodData,
				fetchFoodData,
				isLoading,
				error,
				likeRecipe,
				recipe,
				setRecipe,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
}

export default RecipeContext;
