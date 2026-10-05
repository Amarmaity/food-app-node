import express from 'express';
import { middleware } from '../middlewares/authMiddleware.js';
import { createFoodController } from '../controllers/foodController.js';

const foodRoute = express.Router();


foodRoute.get("/create-food", middleware, createFoodController);




export default foodRoute;