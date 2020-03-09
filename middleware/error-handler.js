function errorHandler(err, req, res, next) {
  console.log("error", err);

  //   if (typeof err === "string") {
  //     // custom application error
  //     return res.status(400).json({ message: err });
  //   }

  if (err === "ValidationError") {
    // mongoose validation error
    return res.status(400).json({ message: err.message });
  }

  if (err === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Unauthorised User !" });
  }

  if (err == "NotFound") {
    // data not available
    return res.status(404).json({ message: "Data Not Found !" });
  }

  // default to 500 server error
  return res.status(500).json({ message: "Internal Server Error !" });
}

module.exports = errorHandler;
