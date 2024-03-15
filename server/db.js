const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Week8")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed:", error);
  });
