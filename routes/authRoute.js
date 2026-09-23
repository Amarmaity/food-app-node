import express from "express";
import authController from "../controllers/authController.js";



const router = express.Router();

// Register || POST
router.post('/register', authController.registerController)

// Login || POST
router.post('/login', authController.loginController)

export default router;

