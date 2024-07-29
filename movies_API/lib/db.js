import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connectDB = async () => {
  try {
    await mongoose.connect(
       process.env.MONGODB_URI
    );
    console.log("Connected To db")
  } catch (error) {
    console.error(error.message);
    process.exit(1)//when err comes connection will terminate
  }
};
export default connectDB