const express = require("express");
const Student = require("../model/studentModel");
const studentRouting = express.Router();

studentRouting.get("/student", async (req, res) => {
  try {
    const studentdata = await Student.find();
    res.send(studentdata);
  } catch (err) {
    res.status(500).send(err);
  }
});

studentRouting.post("/student", async (req, res) => {
  try {
    const studentdata = new Student(req.body);
    const result = await studentdata.save();
    res.send(result);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to add student", details: err.message });
  }
});

studentRouting.delete("/student/:sid", async (req, res) => {
  try {
    const studentdata = await Student.deleteOne({ _id: req.params.sid });
    res.send("Student Deleted Successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

studentRouting.get("/student/:sid", async (req, res) => {
  try {
    const studentdata = await Student.findOne({ _id: req.params.sid });
    res.send(studentdata);
  } catch (err) {
    res.status(500).send(err);
  }
});

studentRouting.put("/student/:sid", async (req, res) => {
  try {
    const studentdata = await Student.updateOne(
      { _id: req.params.sid },
      { $set: req.body }
    );
    res.send(studentdata);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = studentRouting;
