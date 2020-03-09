var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../config/config");

exports.auth_token = function(req, res, next) {
  // Create a new token with the username in the payload
  // and which expires 300 seconds after issue
  const token = jwt.sign({ name: "Joy" }, config.secret, {
    algorithm: "HS256",
    expiresIn: 10000
  });
  console.log("token:", token);
  res.status(200).send({ auth: true, token: token });
};
