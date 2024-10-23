import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckLoginStatus = () => {
	const permissionLevel = localStorage.getItem("permissionLevel");
	if (permissionLevel === "USER") {
		return <Navigate to="/user/login" />;
	} else {
		return <Outlet />;
	}
};

export default CheckLoginStatus;
