import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
});

export const categoryModal = mongoose.model("categories", categoriesSchema);
