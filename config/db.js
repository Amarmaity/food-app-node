import mongoose from "mongoose";
import "colors";


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}` .bgGreen.white);

    } catch (error){
        console.log(`MongoDB connsection Error: ${error.message}` .bgRed.white);
        process.exit(1);
    }
};

export default connectDb;

