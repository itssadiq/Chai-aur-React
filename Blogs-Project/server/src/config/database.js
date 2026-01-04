const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const uri = process.env.DB_URI;
  await mongoose.connect(uri);
};

module.exports = {
  connectDB,
};
