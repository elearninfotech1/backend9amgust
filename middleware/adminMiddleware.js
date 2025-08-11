const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  let token = req.header("x-token");
  if (!token) {
    res.send("No Token Found");
  }

  let decode = jwt.verify(token, "JSONString12345");
  req.user = decode.user;
  next();
};

module.exports = adminMiddleware;
