import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  shortCode: String,
  longurl: String,
});

export const Url = mongoose.model("shorturl", UrlSchema);
