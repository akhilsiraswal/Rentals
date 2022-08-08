require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const userRoutes = require("./routes/auth");
const roomRoutes = require("./routes/room");
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Rentals");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", () => {
  console.log("Connected Successfully");
});

app.use("/api", userRoutes);
app.use("/api", roomRoutes);
app.listen(port, () => {
  console.log("listening on port ", port);
});
