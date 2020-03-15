const http = require("http");
let url = "http://www.baidu.com";
http.get(url, res => {
  const { state } = res;
  const contentType = res.headers["content-type"];
  console.log(contentType);

  res.on("data", chunck => {
    console.log("receive the data");
    console.log(res);
  });
  res.on("end", err => {
    console.log("err exist");
  });
});
