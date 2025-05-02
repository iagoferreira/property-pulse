import mongoose from "mongoose";

let connected = false;

const connectDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB connected");
    return;
  }

  try {
    if (process.env.MONGODB_URI === undefined) {
      console.error("Database connection URI is not defined in the environment variables");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDB;
