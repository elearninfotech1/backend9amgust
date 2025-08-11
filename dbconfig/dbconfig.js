const mongoose = require("mongoose");
const con = mongoose.connect(
  `mongodb+srv://elearninfotech1:qZSfkDKyPWEGLCIH@cluster0.nuisbwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);
if (con) {
  //console.log("Database connected successfully");
} else {
  console.log("Database connection failed");
}
