import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		if (permissionLevel === "USER") {
			return <Navigate to="/user/login" />;
		} else {
			return <Navigate to="/" />;
		}
	}
};

export default PrivateRoute;
