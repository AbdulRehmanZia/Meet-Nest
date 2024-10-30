import mongoose from "mongoose";
const { Schema } = mongoose;

const eventsSchema = new Schema({
  title: String,
  description: String,
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  createdBy: {type: mongoose.Types.ObjectId, ref: "users"},
  going: [{type: mongoose.Types.ObjectId, ref: "users"}],
  address: String,
  location: {
    lat: Number,
    long: Number,
  },
});

export const eventModal = mongoose.model("events", eventsSchema);
