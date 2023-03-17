const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware

app.use(express.json());
app.use(cors());

//Schema
const productSchema = mongoose.Schema();

app.get("/", (req, res) => {
  res.send("Server is ready to fight ! YaY!");
});

module.exports = app;
