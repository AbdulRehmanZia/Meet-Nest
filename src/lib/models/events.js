import mongoose from "mongoose";
const { Schema } = mongoose;

const eventsSchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  category: {type: mongoose.Types.ObjectId, ref: "categories"},
  subcategory: {type: mongoose.Types.ObjectId, ref: "subcategories"},
  createdBy: {type: mongoose.Types.ObjectId, ref: "users"},
  going: [{type: mongoose.Types.ObjectId, ref: "users"}],
  address: String,
  location: {
    lat: Number,
    long: Number,
  },
});

export const Events = mongoose.models.events || mongoose.model("events", eventsSchema);
