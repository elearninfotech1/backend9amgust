const express = require("express");
const Connection = require("../dbconfig/dbconnect");
const studentRouting = express.Router();

studentRouting.get("/student", (req, res) => {
  Connection.query(`select * from student`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

studentRouting.post("/student", (req, res) => {
  const { id, name, phone, address } = req.body;
  Connection.query(
    `insert into student(id,name,phone,address) values ("${id}","${name}","${phone}","${address}")`,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

studentRouting.get("/student/:sid", (req, res) => {
  const sid = req.params.sid;
  Connection.query(`select * from student where id="${sid}"`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

studentRouting.delete("/student/:sid", (req, res) => {
  const sid = req.params.sid;
  Connection.query(`delete from student where id="${sid}"`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

studentRouting.put("/student/:sid", (req, res) => {
  const sid = req.params.sid;
  const { id, name, phone, address } = req.body;
  Connection.query(
    `update student set name="${name}",phone="${phone}",address="${address}" where id="${sid}"`,
    (err, data) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

module.exports = studentRouting;
