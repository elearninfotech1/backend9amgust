const express = require("express");
const SubService = require("../model/subServiceModel");
const subServiceRouting = express.Router();

subServiceRouting.post("/subservice", async (req, res) => {
  try {
    const subservicedata = new SubService(req.body);
    const result = await subservicedata.save();
    res.send(result);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to add Sub Service", details: err.message });
  }
});

subServiceRouting.get("/subservice", async (req, res) => {
  try {
    const subservice = await SubService.find();
    res.send(subservice);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to get Sub Service Data", details: err.message });
  }
});

subServiceRouting.delete("/subservice/:sid", async (req, res) => {
  try {
    const service = await SubService.deleteOne({ _id: req.params.sid });
    res.send("service deleted successfully");
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Service Data", details: err.message });
  }
});

subServiceRouting.get("/subservice/:sid", async (req, res) => {
  try {
    const service = await SubService.findOne({ _id: req.params.sid });
    res.send(service);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Service Data", details: err.message });
  }
});

subServiceRouting.get("/subservicename/:sname", async (req, res) => {
  try {
    const service = await SubService.find({ sname: req.params.sname });
    res.send(service);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Service Data", details: err.message });
  }
});

subServiceRouting.put("/subservice/:sid", async (req, res) => {
  try {
    const service = await SubService.updateOne(
      { _id: req.params.sid },
      { $set: req.body }
    );
    res.send(service);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Update Service Data", details: err.message });
  }
});

module.exports = subServiceRouting;
