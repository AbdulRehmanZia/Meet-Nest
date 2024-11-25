import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://abdulrehmanzia2021:meetnest@firstproject.dq2hr.mongodb.net/MeetNest"
    );
    console.log("DB Connected=>")
  } catch (error) {
    console.log("error in connecting data base ", error);
    process.exit(1);
  }
}
