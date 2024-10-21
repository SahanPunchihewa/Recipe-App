import React, { useState } from "react";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("The password does not match");
    } else {
      setErrorMessage("");
      // Handle form submission
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-24"
          />
        </div>

        {/* Register Form */}
        <h2 className="text-2xl font-roboto mb-20">Register</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div className="relative">
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
            />
          </div>

          {/* Last Name */}
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
            />
          </div>

          {/* Email Input */}
          <div className="relative">
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
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
            >
              Phone number *
            </label>
            <input
              type="tel"
              id="phone"
              className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="011 2222 333"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              required
            />
          </div>

          {/* Confirm Password */}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              required
            />
            {errorMessage && (
              <p className="mt-1 text-xs text-red-600">{errorMessage}</p>
            )}
          </div>

          {/* Create Account Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Create Account
            </button>
          </div>

          {/* Already have an account */}
          <div className="col-span-2 mt-6 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="#" className="text-pink-500 font-medium">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
