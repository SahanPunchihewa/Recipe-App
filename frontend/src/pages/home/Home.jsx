import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png" // Replace this with your actual logo path
            alt="Logo"
            className="h-24"
          />
        </div>

        {/* Login Form */}
        <h2 className="text-2xl font-bold">Login</h2>
        <form className="space-y-4">
          {/* Email Input */}
          <div className="relative mt-10">
            <input
              type="email"
              id="email"
              className="peer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm placeholder-transparent"
              placeholder="john@gmail.com"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
            >
              Email address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer mt-1 block w-full px-3 py-2 border border-red-500 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm placeholder-transparent"
              placeholder="••••••••"
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
            >
              Password
            </label>
            <p className="mt-1 text-xs text-red-600">Please enter a password</p>
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Sign In
            </button>
          </div>

          {/* Error Message */}
          <p className="text-center text-sm text-red-600">
            Your password or username is incorrect
          </p>
        </form>

        {/* Create Account */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-pink-500 font-medium">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
