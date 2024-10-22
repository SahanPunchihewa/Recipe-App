import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Login = () => {
	const { login } = useContext(UserContext);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	let emailregext =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// Email Validation
	const checkEmail = () => {
		let email = document.getElementById("email").value;
		if (emailregext.test(email)) {
			setEmailError("");
		} else {
			setEmailError("Please enter a email");
		}
	};

	// Password Validation
	const checkPassword = () => {
		let password = document.getElementById("password").value;
		if (!password) {
			setPasswordError("Please enter a password");
		} else {
			setPasswordError("");
		}
	};

	// user login and form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		login(newUser);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
				<div className="flex justify-center mb-6">
					<img src="/logo.png" alt="Logo" className="h-16" />
				</div>
				<h2 className="text-2xl font-roboto mb-6">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Email Input */}
					<div className="relative">
						<input
							type="email"
							id="email"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm placeholder-transparent"
							placeholder="john@gmail.com"
							onChange={() => {
								checkEmail();
							}}
						/>
						<label
							htmlFor="email"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Email address
						</label>
						<p className="mt-1 text-xs text-red-600">{emailError}</p>
					</div>

					{/* Password Input */}
					<div className="relative">
						<input
							type="password"
							id="password"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm placeholder-transparent"
							placeholder="••••••••"
							onChange={() => {
								checkPassword();
							}}
						/>
						<label
							htmlFor="password"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Password
						</label>
						<p className="mt-1 text-xs text-red-600">{passwordError}</p>
					</div>
					<div>
						<button
							type="submit"
							className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
						>
							Sign In
						</button>
					</div>
					<p className="text-center text-sm text-red-600">Your password or username is incorrect</p>
				</form>
				<div className="mt-6 text-center">
					<p className="text-sm">
						Don't have an account?{" "}
						<Link to="/user/register" className="text-pink-500 font-medium">
							Create an account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
