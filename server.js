import cors from "cors"
import morgan from "morgan"
import express from "express"
import dotenv from "dotenv"

const app = express()

// confing dotenv
dotenv.config();

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// route

app.use("/api/v1/test", require("./routes/route"));


app.get("/", (req, resp) => {
    return resp.status(200).send("Hello World! Happy to learn.")
})

const PORT = process.env.PORT || 3900

app.listen(PORT, () =>{
    console.log(`Node Server is running on ${PORT}`);
})