import { Router } from "express";
import { signUp } from "./../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
//authRouter.post("/sign-in");


export default authRouter;