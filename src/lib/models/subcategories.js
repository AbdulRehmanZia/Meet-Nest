import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategoriesSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  category: { type: mongoose.Types.ObjectId, ref: "categories" },
});

export const subcategoryModal = mongoose.model("subategories",subcategoriesSchema);
