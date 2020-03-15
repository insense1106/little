const express = require("express");
const app = express();
//-------------------------------------------------------------
app.use("/", (req, res, next) => {
  console.log("middlewear");
  let { token } = req.query;
  //   if (token) {
  //     res.send("this is middlewear model you are here");
  next();
  //   } else {
  //     res.send("token --not-- exist");
  //   }
});

//-------------------------------------------------------------
app.get(
  "/yago",
  (req, res, next) => {
    // res.send("this is locate middlewear stop the request to yago ");
    next();
  },
  (req, res) => {
    res.send(" yago  - -! ");
  }
);
//-------------------------------------------------------------
app.get("/semon", (req, res) => {
  res.send("token --- exist");
});
app.listen(3000, () => {
  console.log("server--start");
});
