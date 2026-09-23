import express from "express"
import { testUserController } from "../controllers/testController"
const router = express.Router()


// routes GET | POST | DELETE 
router.get('/test-user', testUserController)


// export 
module.exports = router