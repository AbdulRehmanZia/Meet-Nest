import { Import } from "lucide-react";
import mongoose from "mongoose";

export async function connectDB() {
  let connection;
  try {
    connection = await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("error in connecting data base ", error);
  }
}
