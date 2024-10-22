const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
	{
		strCategory: {
			type: String,
			required: true,
		},
		strCategoryThumb: {
			type: String,
			required: true,
		},
		strCategoryDescription: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["LIKE", "UNLIKE"],
			default: "LIKE",
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Recipe", RecipeSchema);
