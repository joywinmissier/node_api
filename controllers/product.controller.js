const Product = require("../models/product.model");
var jwt = require("jsonwebtoken");
var config = require("../config/config");

exports.product_create = function(req, res, next) {
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfullyyy");
  });
};

exports.product_details = function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next("NotFound");
    else if (product === null) {
      return next("NotFound");
    }
    res.send(product);
  });
};

exports.product_update = function(req, res, next) {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    function(err, product) {
      if (err) return next(err);
      res.send(product);
    }
  );
};

exports.product_delete = function(req, res, next) {
  Product.findByIdAndDelete(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.all_product_details = function(req, res, next) {
  // var token = req.headers["x-access-token"];
  // if (!token) return next("UnauthorizedError");

  // jwt.verify(token, config.secret, function(err, decoded) {
  //   if (err)
  //     return res
  //       .status(500)
  //       .send({ auth: false, message: "Failed to authenticate token." });

  Product.find({}).exec(function(err, employees) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.json(employees);
    }
  });
  // });
};
