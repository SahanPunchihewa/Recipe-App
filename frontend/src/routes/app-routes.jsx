import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

import Header from "../components/Header";

import { Login, Register, FoodItems } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* Default Route */}
					<Route path="/" element={<Navigate to="/user/login" />} />

					{/* User Routes */}
					<Route path="/user/login" element={<Login />} />
					<Route path="/user/register" element={<Register />} />

					{/* User Check Login Status */}
					<Route path="/user/login" element={<CheckLoginStatus />}>
						<Route path="/user/login" element={<Login />} />
					</Route>

					{/* User Private Routes */}
					<Route path="/user" element={<PrivateRoute permissionLevel="USER" />}>
						<Route path="/user/food-items" element={<FoodItems />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
