import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
