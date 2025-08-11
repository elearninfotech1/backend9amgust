const express = require("express");
const Employee = require("../model/empModel");
const empRouting = express.Router();

empRouting.post("/emp", async (req, res) => {
  try {
    const emp = new Employee(req.body);
    const result = await emp.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

empRouting.get("/emp", async (req, res) => {
  try {
    const result = await Employee.find();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No employees found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

empRouting.delete("/emp/:eid", async (req, res) => {
  try {
    const result = await Employee.deleteOne({ _id: req.params.eid });
    if (result.deletedCount > 0) {
      res.send("Employee deleted successfully");
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

empRouting.get("/emp/:eid", async (req, res) => {
  try {
    const result = await Employee.findOne({ _id: req.params.eid });
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

empRouting.put("/emp/:eid", async (req, res) => {
  try {
    const result = await Employee.updateOne(
      { _id: req.params.eid },
      { $set: req.body }
    );
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = empRouting;
