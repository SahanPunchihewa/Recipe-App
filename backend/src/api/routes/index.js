import { Router } from "express";
import UserRouter from "./UserAuth.route";

const router = Router();

router.use("/user", UserRouter);


export default router;