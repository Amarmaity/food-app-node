import express from "express";
import authController from "../controllers/authController.js";



const authRouter = express.Router();

// Register || POST
authRouter.post('/register', authController.registerController)

// Login || POST
authRouter.post('/login', authController.loginController)

export default authRouter;

