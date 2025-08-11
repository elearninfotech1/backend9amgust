const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  sname: {
    type: String,
    required: true,
  },
  sdesc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("services", serviceSchema);
