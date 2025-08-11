const express = require("express");
const Register = require("../model/registerModel");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/adminMiddleware");
const registerRouting = express.Router();

registerRouting.post("/register", async (req, res) => {
  try {
    const registerdata = new Register(req.body);
    const result = await registerdata.save();
    res.send(result);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to add admin", details: err.message });
  }
});

registerRouting.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await Register.findOne({ email: email });
    if (!exists) {
      res.send("Invalid Username");
    } else if (exists.password !== password) {
      res.send("Invalid Password");
    } else {
      let payload = {
        user: {
          id: exists._id,
        },
      };
      jwt.sign(
        payload,
        "JSONString12345",
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    }
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to add admin", details: err.message });
  }
});

registerRouting.get("/admindashboard", adminMiddleware, (req, res) => {
  res.send("Admin");
});

module.exports = registerRouting;
