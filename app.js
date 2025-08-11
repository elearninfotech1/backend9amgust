const express = require("express");
const studentRouting = require("./router/studentRouting");
const cors = require("cors");
const empRouting = require("./router/empRouting");
const registerRouting = require("./router/registerRouting");
const serviceRouting = require("./router/serviceRouting");
const subServiceRouting = require("./router/subServiceRouting");
const offerRouting = require("./router/offerRouting");
const bookServiceRouting = require("./router/bookServiceRouting");
const contactusRouting = require("./router/contactusRouting");
require("./dbconfig/dbconfig");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", studentRouting);
app.use("/", empRouting);
app.use("/", registerRouting);
app.use("/", serviceRouting);
app.use("/", subServiceRouting);
app.use("/", offerRouting);
app.use("/", bookServiceRouting);
app.use("/", contactusRouting);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
