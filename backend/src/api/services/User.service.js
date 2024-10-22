import UserModel from "../models/User.model";

// User Registration
export const insertUser = async (user) => {
	return await UserModel.create(user)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// User Login
export const loginUser = async (email, password) => {
	return await UserModel.findOne({ email })
		.then(async (user) => {
			if (user && (await user.matchPassword(password))) {
				return user;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
