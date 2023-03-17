const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB is Connected with Mongoose");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running at the port of ${PORT}`);
});
