import React from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const permissionLevel = localStorage.getItem("permissionLevel");

const logout = () => {
	localStorage.removeItem("permissionLevel");
	localStorage.removeItem("uId");
	localStorage.removeItem("email");
	localStorage.removeItem("authToken");

	window.location.href = "/";
};
const Header = () => {
	return (
		<>
			{permissionLevel === "USER" ? (
				<header className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
					<div className="text-3xl font-bold text-pink-500">
						<img src="/logo.png" alt="Logo" className="h-16" />
					</div>
					<nav className="space-x-8 text-sm font-medium">
						<Link to="/user/food-items" className="hover:text-gray-700">
							HOME
						</Link>
						<Link to="/user/favourite-foods" className="font-semibold text-black">
							FAVOURITE
						</Link>
					</nav>
					<button className="text-gray-600 hover:text-black" onClick={logout}>
						<ArrowRightOnRectangleIcon className="h-6 w-6" />
					</button>
				</header>
			) : null}
		</>
	);
};

export default Header;
