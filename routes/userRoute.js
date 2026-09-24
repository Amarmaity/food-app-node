import express from "express"
import userController from "../controllers/userController.js";
import middleware from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

userRouter.get('/getUser-Data', middleware, userController.getUserController)



export default userRouter;
