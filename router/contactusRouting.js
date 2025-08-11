const express = require("express");
const contactusRouting = express.Router();
let nodemailer = require("nodemailer");
contactusRouting.post("/contactus", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    let trasport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "elearninfotech1@gmail.com",
        pass: "prim qnki wsdv tvgh",
      },
    });

    let mailOptions = {
      from: `${email}`,
      to: "enuttech@gmail.com",
      subject: `Contact Us Form Submission: ${subject}`,
      text: ` name is ${name}, 
      email is ${email}, 
      phone is ${phone}, 
      subject is ${subject}, 
      message is ${message}`,
    };

    trasport.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      res.send("Mail sent successfully");
    });
  } catch (err) {
    res
      .status(500)
      .send({ error: "Failed to Send Mail", details: err.message });
  }
});

module.exports = contactusRouting;
