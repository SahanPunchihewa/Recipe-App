import React from "react";
import Register from "./Register";
import { UserProvider } from "../../contexts/UserContext";

const index = () => {
	return (
		<>
			<UserProvider>
				<Register />
			</UserProvider>
		</>
	);
};

export default index;
