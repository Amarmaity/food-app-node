import express from "express";
import { middleware } from "../middlewares/authMiddleware.js";
import { createCategoryController, deleteCategoryController, editCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const categoryRoute = express.Router();

categoryRoute.post("/create-category", middleware, createCategoryController)
categoryRoute.get("/edit-category/:id", middleware, editCategoryController);
categoryRoute.post("/update-category/:id", middleware, updateCategoryController);
categoryRoute.delete("/delete-category/:id", middleware,deleteCategoryController);




export default categoryRoute;