const express = require("express");
const Service = require("../model/serviceModel");
const serviceRouting = express.Router();

serviceRouting.post("/service", async (req, res) => {
  try {
    const servicedata = new Service(req.body);
    const result = await servicedata.save();
    res.send(result);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to add admin", details: err.message });
  }
});

serviceRouting.get("/service", async (req, res) => {
  try {
    const service = await Service.find();
    res.send(service);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to get Service Data", details: err.message });
  }
});

serviceRouting.delete("/service/:sid", async (req, res) => {
  try {
    const service = await Service.deleteOne({ _id: req.params.sid });
    res.send("service deleted successfully");
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Service Data", details: err.message });
  }
});

serviceRouting.get("/service/:sid", async (req, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.sid });
    res.send(service);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Service Data", details: err.message });
  }
});

serviceRouting.put("/service/:sid", async (req, res) => {
  try {
    const service = await Service.updateOne(
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

module.exports = serviceRouting;
