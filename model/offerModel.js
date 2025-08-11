const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  oname: {
    type: String,
    required: true,
  },
  odesc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("offers", offerSchema);
