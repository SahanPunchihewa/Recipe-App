import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "./api/UserAPI";
import { makeToast } from "../components";

const UserContext = createContext();

export function UserProvider({ children }) {
	const navigate = useNavigate();
	const [mailError, setMailError] = useState("");
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		password: "",
	});

	const login = (value) => {
		UserAPI.login(value).then((response) => {
			if (response.data.permissionLevel === "USER") {
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				localStorage.setItem("authToken", response.data.token);
				makeToast({ type: "success", message: "Login Successful" });
				navigate("/user/food-items");
			} else {
				makeToast({ type: "error", message: "Invalid email or password" });
			}
		});
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				mailError,
				setMailError,
				users,
				setUsers,
				navigate,
				login,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
