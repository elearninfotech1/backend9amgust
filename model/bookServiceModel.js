const mongoose = require("mongoose");

const bookserviceSchema = new mongoose.Schema({
  sname: {
    type: String,
    required: true,
  },
  subsname: {
    type: String,
    required: true,
  },
  spname: {
    type: String,
    required: true,
  },
  cname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("bookservices", bookserviceSchema);
