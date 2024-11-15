import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router.get("/", (req, res) => {
	res.send("Recipe API");
});

router.post("/create", controllers.insertLikeRecipe);
router.get("/liked", controllers.getAllLikedRecipe);

module.exports = router;
