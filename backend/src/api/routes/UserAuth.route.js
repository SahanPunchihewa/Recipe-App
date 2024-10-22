import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router.get("/", (req, res) => {
	res.send("User Auth API");
});

router.post("/register", controllers.registerUser);
router.post("/login", controllers.loginUser);

module.exports = router;