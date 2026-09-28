import express from "express"
import userController from "../controllers/userController.js";
import {middleware} from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

userRouter.get('/getUser-Data', middleware, userController.getUserController)
userRouter.post('/udate-user', middleware, userController.updateUserController)
userRouter.post('/reset-password', middleware, userController.resetPasswordController)
userRouter.delete('/delete-user/:id', middleware, userController.deleteUserController)

export default userRouter;
