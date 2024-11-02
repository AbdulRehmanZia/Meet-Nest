import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  bio: { type: String },
  profileImg: { type: String },
  location: {
    lat: Number,
    long: Number,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
