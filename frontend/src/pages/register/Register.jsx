import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Register = () => {
	const { register } = useContext(UserContext);
	const [phoneError, setPhoneError] = useState("");
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	let emailregext =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let contact = /^[0-9]{3} [0-9]{4} [0-9]{3}$/;

	// Phone Validation
	const checkPhone = () => {
		let phone = document.getElementById("phoneNumber").value;
		if (contact.test(phone)) {
			setPhoneError("");
		} else {
			setPhoneError("Please enter a phone number");
		}
	};

	// Email Validation
	const checkEmail = () => {
		let email = document.getElementById("email").value;
		if (emailregext.test(email)) {
			setEmailError("");
		} else {
			setEmailError("Please enter a email");
		}
	};

	// first name Validation
	const checkName = () => {
		let name = document.getElementById("firstName").value;
		if (!name) {
			setNameError("Please enter a name");
		} else {
			setNameError("");
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

	const checkConfirmPassword = () => {
		let password = document.getElementById("password").value;
		let confirmpassword = document.getElementById("confirmPassword").value;
		if (password === confirmpassword) {
			setConfirmPasswordError("");
		} else {
			setConfirmPasswordError("Password not matched");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
			email: e.target.email.value,
			phoneNumber: e.target.phoneNumber.value,
			password: e.target.password.value,
		};

		register(newUser);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
				<div className="flex justify-center">
					<img src="/logo.png" alt="Logo" className="h-16" />
				</div>

				<h2 className="text-2xl font-roboto mb-6">Register</h2>
				<form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
					<div className="relative mb-3">
						<label
							htmlFor="firstName"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							First name *
						</label>
						<input
							type="text"
							id="firstName"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
							placeholder="First name"
							required
							onChange={() => {
								checkName();
							}}
						/>
						<p className="mt-1 text-xs text-red-600">{nameError}</p>
					</div>
					<div className="relative">
						<label
							htmlFor="lastName"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Last name *
						</label>
						<input
							type="text"
							id="lastName"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
							placeholder="Last name"
							required
							onChange={() => {
								checkName();
							}}
						/>
						<p className="mt-1 text-xs text-red-600">{nameError}</p>
					</div>

					<div className="relative mb-3">
						<label
							htmlFor="email"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Email *
						</label>
						<input
							type="email"
							id="email"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
							placeholder="abc@gmail.com"
							required
							onChange={() => {
								checkEmail();
							}}
						/>
						<p className="mt-1 text-xs text-red-600">{emailError}</p>
					</div>

					<div className="relative">
						<label
							htmlFor="phone"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Phone number *
						</label>
						<input
							type="tel"
							id="phoneNumber"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
							placeholder="011 2222 333"
							pattern="[0-9]{3} [0-9]{4} [0-9]{3}"
							required
							onChange={() => {
								checkPhone();
							}}
						/>
						<p className="mt-1 text-xs text-red-600">{phoneError}</p>
					</div>

					<div className="relative mb-3">
						<label
							htmlFor="password"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Password *
						</label>
						<input
							type="password"
							id="password"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
							required
							placeholder="••••••••"
							onChange={() => {
								checkPassword();
							}}
						/>
						<p className="mt-1 text-xs text-red-600">{passwordError}</p>
					</div>
					<div className="relative">
						<label
							htmlFor="confirmPassword"
							className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
						>
							Confirm Password *
						</label>
						<input
							type="password"
							id="confirmPassword"
							className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
							required
							placeholder="••••••••"
							onChange={() => {
								checkConfirmPassword();
							}}
						/>

						<p className="mt-1 text-xs text-red-600">{confirmPasswordError}</p>
					</div>
					<div className="col-span-2">
						<button
							type="submit"
							className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
						>
							Create Account
						</button>
					</div>
					<div className="col-span-2 mt-6 text-center">
						<p className="text-sm">
							Already have an account?{" "}
							<Link to="/" className="text-pink-500 font-medium">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
