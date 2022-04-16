const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection
  .on("open", (streme) => [console.log("Connected to database Sucessfully")])
  .once("error", (streme) => {
    console.log("Failed to connect to database");
  });

module.exports = mongoose;
