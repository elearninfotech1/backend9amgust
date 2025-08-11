const express = require("express");
const cors = require("cors");
const studentRouting = require("./router1/studentRouting");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", studentRouting);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
