const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/database");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser);

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    console.log("Database connected Succesfully!");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
