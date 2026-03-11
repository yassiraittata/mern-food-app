import mongoose from "mongoose";
import env from "../lib/envalidate.ts";

export default async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};
