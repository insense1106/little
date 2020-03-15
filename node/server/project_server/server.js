const express = require("express");
const app = express();

const list = [
  {
    path: "home",
    title: "home",
    toggle: true
  },
  {
    path: "people",
    title: "people",
    toggle: true
  },
  {
    path: "msg",
    title: "msg",
    toggle: true
  },
  {
    path: "set",
    title: "set",
    toggle: true
  }
];
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/dog", (req, res) => {
  res.send(list);
});

app.listen(3000, () => {
  console.log("server start ");
});
