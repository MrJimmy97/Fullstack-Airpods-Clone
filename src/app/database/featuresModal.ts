import mongoose, { Schema } from "mongoose";

const featuresSchema = new Schema({
  title: String,
  image: String,
  description: String,
  className: String,
  content: String,
  sup: Number,
});

const Item = mongoose.models.Item || mongoose.model("Item", featuresSchema);
export default Item;
