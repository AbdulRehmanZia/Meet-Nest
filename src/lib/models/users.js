import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  password: { type: String, required: true },
  address: { type: String },
  bio: { type: String },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
    required : true
  },
  fullname: { type: String },
  email: { type: String, required: true, unique: true },
  profileImg: { type: String },
  location: {
    lat: Number,
    long: Number,
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
