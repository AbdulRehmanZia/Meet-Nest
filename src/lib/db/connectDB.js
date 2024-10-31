import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Muhammad-Farooq:mongodbApp85@farooq-cluster.wsbfu.mongodb.net/?retryWrites=true&w=majority&appName=Farooq-Cluster"
    );
  } catch (error) {
    console.log("error in connecting data base ", error);
    process.exit(1);
  }
}
