import React from "react";
import Login from "./login";
import { UserProvider } from "../../contexts/UserContext";
const index = () => {

    return (
        <>
            <UserProvider>
                <Login />
            </UserProvider>
        </>
    )

};

export default index;