import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema({
  fullname: String,
  email: String,
  password: String,
  address: String,
  bio: String,
  profileImg: String,
  location: {
    lat: Number,
    long: Number,
  },
});

export const userModal = mongoose.model("users", usersSchema);
