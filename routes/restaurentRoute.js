import express from "express";

import { createRestaurantController } from "../controllers/restaurantController.js";

import { middleware } from "../middlewares/authMiddleware.js";

const restaurantRoute = express.Router();

restaurantRoute.post("/create-restaurant", middleware, createRestaurantController
);

export default restaurantRoute;