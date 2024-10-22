import UserService from "../services";
import logger from "../../util/logger";
import UserModel from "../models/User.model";

// user register
export const registerUser = async (request, response, next) => {
	if (await UserModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email Already Exists");
		next();
	} else if (await UserModel.findOne({ phoneNumber: request.body.phoneNumber })) {
		request.handleResponse.errorRespond(response)("Phone Number Already Exists");
		next();
	} else {
		const user = {
			firstName: request.body.firstName,
			lastName: request.body.lastName,
			email: request.body.email,
			phoneNumber: request.body.phoneNumber,
			password: request.body.password,
			permissionLevel: request.body.permissionLevel,
		};

		await UserService.insertUser(user)
			.then((data) => {
				logger.info(`New user with ID ${data._id} created`);
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};

// user login
export const loginUser = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await UserService.loginUser(email, password)
			.then(async (user) => {
				const authToken = await user.generateAuthToken();
				const data = {
					_id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					phoneNumber: user.phoneNumber,
					token: authToken,
					permissionLevel: user.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};
