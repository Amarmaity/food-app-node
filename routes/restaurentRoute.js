import express from "express";

import { createRestaurantController,
    deleteRestaruntController,
    editRestaurentController,
    updateRestaurentController } from "../controllers/restaurantController.js";
import { middleware } from "../middlewares/authMiddleware.js";

const restaurantRoute = express.Router();

restaurantRoute.post("/create-restaurant", middleware, createRestaurantController);
restaurantRoute.get("/edit-restaurant-data/:id", middleware, editRestaurentController);
restaurantRoute.post('/update-restaurent-data/:id', middleware, updateRestaurentController);
restaurantRoute.delete('/delet-restaurent/:id', middleware, deleteRestaruntController);

export default restaurantRoute;