import express from "express";
import mongoose from "mongoose";
import KeyValue from "./model/Http.js";
import Message from "./model/Websocket.js";

import { WebSocketServer } from "ws";
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/keyvaluestore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/:key", async (req, res) => {
  const key = req.params.key;
  console.log(key);
  try {
    const doc = await KeyValue.findOne({ key: key });
    if (doc) {
      console.log(doc.value);
      res.send(doc.value);
    } else if (!doc) {
      res.status(404).send({ status: 404, message: "Key not found" });
    } else {
      res.status(500).send("error");
    }
  } catch (error) {
    console.log(error);
  }
});

//   ----------WEBSOCKET------------

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.send(JSON.stringify("Hi from Client"));

  ws.on("message", function incoming(data) {
    console.log("Received message:", data);
    const message = JSON.parse(data);
    const dbMessage = new Message({ key: message.key, value: message.value });
    dbMessage.save();
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});
