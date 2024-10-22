import axios from 'axios';

// Fetch Recipes by Category (e.g., Beef)
export const getRecipesByCategory = async (category) => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`);
        return response.data.meals;  // Assuming the 'meals' array holds the recipes
    } catch (error) {
        throw new Error(`Failed to fetch recipes: ${error.message}`);
    }
};