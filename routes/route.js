import express from "express";
import { testUserController } from "../controllers/testController.js";
const router = express.Router();

// routes GET | POST | DELETE
router.get("/test-user", testUserController);

// export
export default router;
