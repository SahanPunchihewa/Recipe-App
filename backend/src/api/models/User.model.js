const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "Please provide a first name"],
		},

		lastName: {
			type: String,
			required: [true, "Please provide a last name"],
		},

		email: {
			type: String,
			required: [true, "Please provide an email address"],
			unique: true,
		},

		phoneNumber: {
			type: String,
			required: [true, "Please provide a phone number"],
		},
		password: {
			type: String,
			required: true,
		},

		permissionLevel: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
			required: true,
		},
		authToken: {
			type: String,
			required: false,
		},
		deletedAt: {
			type: Date,
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}

	// Number of rounds hash function will execute
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

UserSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign(
		{
			_id: user._id,
			permissionLevel: user.permissionLevel,
		},
		secret
	);
	user.authToken = authToken;
	await user.save();
	return authToken;
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);