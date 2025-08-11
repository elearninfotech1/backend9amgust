const express = require("express");
const Offer = require("../model/offerModel");
const offerRouting = express.Router();

offerRouting.post("/offer", async (req, res) => {
  try {
    const offerdata = new Offer(req.body);
    const result = await offerdata.save();
    res.send(result);
  } catch (err) {
    res.status(500).send({ error: "Failed to offer", details: err.message });
  }
});

offerRouting.get("/offer", async (req, res) => {
  try {
    const offer = await Offer.find();
    res.send(offer);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to get Offer Data", details: err.message });
  }
});

offerRouting.delete("/offer/:sid", async (req, res) => {
  try {
    const offer = await Offer.deleteOne({ _id: req.params.sid });
    res.send("service deleted successfully");
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Offer Data", details: err.message });
  }
});

offerRouting.get("/offer/:sid", async (req, res) => {
  try {
    const offer = await Offer.findOne({ _id: req.params.sid });
    res.send(offer);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Delete Offer Data", details: err.message });
  }
});

offerRouting.put("/offer/:sid", async (req, res) => {
  try {
    const offer = await Offer.updateOne(
      { _id: req.params.sid },
      { $set: req.body }
    );
    res.send(offer);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Unable to Update Offer Data", details: err.message });
  }
});

module.exports = offerRouting;
