import express from "express";
import { middleware } from "../middlewares/authMiddleware.js";
import { createCategoryController } from "../controllers/categoryController.js";

const categoryRoute = express.Router();

categoryRoute.post("/create-category", middleware, createCategoryController)



export default categoryRoute;