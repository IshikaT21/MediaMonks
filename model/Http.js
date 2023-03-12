import mongoose from "mongoose";
const keyValueSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const KeyValue = mongoose.model("KeyValue", keyValueSchema);

export default KeyValue;
