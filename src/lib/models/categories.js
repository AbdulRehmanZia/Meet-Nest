import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  thumbnail: {type: String, required: true}
});

export const Category = mongoose.models.categories || mongoose.model("categories", categoriesSchema);
