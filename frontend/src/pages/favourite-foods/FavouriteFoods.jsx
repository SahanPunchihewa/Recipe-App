import React, { useContext } from "react";
import RecipeContext from "../../contexts/RecipeContext";
import { Link } from "react-router-dom";

const FavouriteFoods = () => {
    const { likedRecipes } = useContext(RecipeContext);
    const email = localStorage.getItem("email");

    return (
        <>
            {/* Food items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:ml-12 mt-12">
                {likedRecipes
                    .filter((elem) => elem.email === email)
                    .map((item) => (
                        <div key={item.idMeal}>
                            <img
                                className="w-36 h-36 bg-gray-200 rounded-[2rem] mb-4"
                                src={item.strCategoryThumb}
                                alt={item.strCategory}
                            />
                            <div className="grid-cols-2 flex flex-grow justify-start">
                                <p className="text-md text-gray-500">{item.strCategory}</p>
                                <Link to="#" className="ml-3">
                                    <span className="text-lg text-red-400"> {/* This will apply red color */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="#ff0000"  // Fill with red color
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
                                </Link>


                            </div>
                            <h3 className="text-md font-semibold">{item.strMeal}</h3>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default FavouriteFoods;
