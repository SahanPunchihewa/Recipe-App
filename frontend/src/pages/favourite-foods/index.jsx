import React from "react";
import FavouriteFoods from "./FavouriteFoods";
import { RecipeProvider } from "../../contexts/RecipeContext";


const index = () => {

    return(
        <>
            <RecipeProvider>
                <FavouriteFoods />
            </RecipeProvider>
        </>
    )
}

export default index;