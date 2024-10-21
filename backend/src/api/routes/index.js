import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("API");
	next();
});

router.post("/user/register", controller.registerUser);
router.post("/user/login", controller.loginUser);


export default router;