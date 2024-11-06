import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategoriesSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  thumbnail: {type: String, required: true},
  category: { type: mongoose.Types.ObjectId, ref: "categories", required: true },
});

export const Subcategory = mongoose.models.subcategories || mongoose.model("subcategories", subcategoriesSchema);
