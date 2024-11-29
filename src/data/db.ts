import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const db_username: string = process.env.DB_USERNAME ?? '';
const db_password: string = process.env.DB_PASSWORD ?? '';

const uri = `mongodb+srv://${db_username}:${db_password}@cluster0.2ngvx.mongodb.net/`;

const connectDB = async() => {
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
      } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
      }
}

export default connectDB;