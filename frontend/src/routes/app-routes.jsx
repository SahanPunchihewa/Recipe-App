import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";


import {

    Login,
    Register,
    FoodItems,


} from "../pages";


const AppRoutes = () => {

    return (
        <>
            <Router>
                    <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/food-items" element={<FoodItems />} />
                </Routes>


            </Router>



        </>
    )



}

export default AppRoutes;