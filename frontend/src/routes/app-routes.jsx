import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";


import {

    Home,
    Register,
    FoodItems,


} from "../pages";


const AppRoutes = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/food-items" element={<FoodItems />} />
                </Routes>


            </Router>



        </>
    )



}

export default AppRoutes;