var verifyJWTToken = require("./jwt");

exports.verifyJWT_MW = function(req, res, next) {
  var token = req.headers["x-access-token"];
  console.log("token", token);

  verifyJWTToken
    .verifyJWTToken(token)
    .then(decodedToken => {
      req.user = decodedToken.data;
      next();
    })
    .catch(err => {
      next("UnauthorizedError");
    });
};
