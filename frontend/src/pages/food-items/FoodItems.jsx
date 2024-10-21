import React, { useState } from "react";

// Sample food data
const foodData = [
  { id: 1, category: "pork", name: "Pork Noodle Soup" },
  { id: 2, category: "beef", name: "Beef Steak" },
  { id: 3, category: "chicken", name: "Chicken Noodle Soup" },
  { id: 4, category: "lamb", name: "Lamb Chops" },
  { id: 5, category: "pasta", name: "Pasta Carbonara" },
  { id: 6, category: "pork", name: "Pork Stir Fry" },
  { id: 7, category: "beef", name: "Beef Burger" },
  { id: 8, category: "chicken", name: "Grilled Chicken" },
];

// Available categories for filter buttons
const categories = ["pork", "beef", "chicken", "lamb", "pasta"];

const FoodItems = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("pork");

  // Filter the food items based on the selected category
  const filteredItems = foodData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top Categories</h1>
      
      {/* Category filter buttons */}
      <div className="mb-6 flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-pink-500 text-white"
                : "border border-pink-500 text-pink-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Food items grid */}
      <div className="flex gap-8 grid-cols-2 md:grid-cols-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            
          >
            <div className="w-36 h-36 bg-gray-200 rounded-[2rem] mb-4"></div>
            <div className="grid-cols-2 flex flex-grow justify-start">
            <p className="text-md text-gray-500">Soups</p>
            <span className="text-md text-gray-400 ml-2">♡</span>
            </div>
            
            <h3 className="text-lg font-semibold">{item.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
