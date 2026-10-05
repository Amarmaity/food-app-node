import cors from "cors";
import morgan from "morgan";
import express from "express";
import dotenv from "dotenv";



import connectDb from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import restaurentRoute from "./routes/restaurentRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import foodRoute from "./routes/foodRoute.js";


const app = express();


// confing dotenv
dotenv.config();


// DB connect
connectDb();


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", restaurentRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", foodRoute);



app.get("/", (req, resp) => {
  return resp.status(200).send("Hello World! Happy to learn.");
});



const PORT = process.env.PORT || 3900;

app.listen(PORT, () => {
  console.log(`Node Server is running on ${PORT}`);
});
