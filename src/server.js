const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const port = 8000;
const users_collection1 = require("./UserDataBase/UserData");
require("./UserDataBase/MongooseConnection");

const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

let mainFolder = path.join(__dirname, "../");

app.get("/register", (req, res) => {
  res.sendFile(mainFolder + "/index.html");
});

app.post("/register", (req, res) => {
  let req_userData = new users_collection1(req.body);
  req_userData
    .save()
    .then(() => {
      res.sendFile(mainFolder + "/index2.html"); // Success, show success page
    })
    .catch((err) => {
      console.error(err);
      res.status(500).sendFile(mainFolder + "/error.html"); // Error, show error page
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
