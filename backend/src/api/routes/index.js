import { Router } from "express";
import UserRouter from "./UserAuth.route";
import RecipeRouter from "./Recipe.route";

const router = Router();

router.use("/user", UserRouter);
router.use("/recipe", RecipeRouter);

export default router;
