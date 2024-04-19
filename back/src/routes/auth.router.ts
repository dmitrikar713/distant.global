import { Router } from "express";
import authController from "../controllers/auth.controller.ts";

const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", (req, res, next) => {});

export default authRouter;
