const express = require("express");
const BookService = require("../model/bookServiceModel");
const bookServiceRouting = express.Router();

bookServiceRouting.post("/bookservice", async (req, res) => {
  try {
    const bookservicedata = new BookService(req.body);
    const result = await bookservicedata.save();
    res.send(result);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to Book Service", details: err.message });
  }
});

bookServiceRouting.get("/bookservice", async (req, res) => {
  try {
    const bookservice = await BookService.find();
    res.send(bookservice);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to get Book Service Data", details: err.message });
  }
});

module.exports = bookServiceRouting;
