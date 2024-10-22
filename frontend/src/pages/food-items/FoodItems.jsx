import React, { useState, useContext, useEffect } from "react";
import RecipeContext from "../../contexts/RecipeContext";

const categoryData = [
	{
		idCategory: "1",
		strCategory: "Pork",
		strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
		strCategoryDescription: "Delicious pork recipes.",
	},
	{
		idCategory: "2",
		strCategory: "Beef",
		strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
		strCategoryDescription: "Tasty beef dishes.",
	},
	{
		idCategory: "3",
		strCategory: "Chicken",
		strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
		strCategoryDescription: "Chicken meals.",
	},
	{
		idCategory: "4",
		strCategory: "Lamb",
		strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
		strCategoryDescription: "Lamb recipes.",
	},
	{
		idCategory: "5",
		strCategory: "Pasta",
		strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
		strCategoryDescription: "Pasta dishes.",
	},
];

const categories = ["pork", "beef", "chicken", "lamb", "pasta"];

const FoodItems = () => {
	const { foodData, fetchFoodData, isLoading, error, likeRecipe } = useContext(RecipeContext);
	const [selectedCategory, setSelectedCategory] = useState("pork");

	useEffect(() => {
		fetchFoodData(selectedCategory);
	}, [selectedCategory, fetchFoodData]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	const handleLike = (item) => {
		const categoryInfo = categoryData.find(
			(category) => category.strCategory.toLowerCase() === selectedCategory.toLowerCase()
		);

		likeRecipe({
			strCategory: categoryInfo.strCategory,
			strCategoryThumb: categoryInfo.strCategoryThumb || "",
			strCategoryDescription: categoryInfo.strCategoryDescription || "",
			email: localStorage.getItem("email"),
			strMeal: item.strMeal,
		});
	};

	return (
		<div className="container mx-auto p-4 mt-10">
			<div className="mb-20 flex space-x-4 gap-2 sm:ml-12">
				{categories.map((category) => (
					<button
						key={category}
						className={`px-8 py-2 rounded-full ${selectedCategory === category ? "bg-pink-500 text-white" : "border border-pink-500 text-pink-500"}`}
						onClick={() => setSelectedCategory(category)}
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:ml-12">
				{foodData.map((item) => {
					const categoryInfo = categoryData.find(
						(category) => category.strCategory.toLowerCase() === selectedCategory.toLowerCase()
					);
					const categoryName = categoryInfo ? categoryInfo.strCategory : "Unknown Category";

					return (
						<div key={item.idMeal}>
							<img className="w-36 h-36 bg-gray-200 rounded-[2rem] mb-4" src={item.strMealThumb} alt={item.strMeal} />
							<div className="grid-cols-2 flex flex-grow justify-start">
								<p className="text-md text-gray-500">{categoryName}</p>
								<span className="text-lg text-gray-400 ml-3" onClick={() => handleLike(item)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
										/>
									</svg>
								</span>
							</div>
							<h3 className="text-md font-semibold">{item.strMeal}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FoodItems;
