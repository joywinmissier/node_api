// app.js
const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route");
const auth = require("./routes/auth.route");
var cors = require("cors");
const errorHandler = require("./middleware/error-handler");

// initialize our express app
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);
app.use("/authenticate", auth);

// Set up mongoose connection
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/product", { useNewUrlParser: true })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

app.use(errorHandler);
let port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
