const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/v1/productRouter");

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", router);

app.get("/", (req, res) => {
  res.send("Server is ready to fight ! YaY!");
});

module.exports = app;
