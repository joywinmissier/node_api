var jwt = require("jsonwebtoken");
var config = require("../config/config");

exports.verifyJWTToken = function(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secret, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
};
