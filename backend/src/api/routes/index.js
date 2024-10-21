import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("API");
	next();
});


export default router;