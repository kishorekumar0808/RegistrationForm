const mongoose = require("mongoose");
const users_collection1 = require("./UserData");

mongoose
  .connect("mongodb://localhost:27017/newDB")
  .then(() => {
    console.log("Mongoose connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
