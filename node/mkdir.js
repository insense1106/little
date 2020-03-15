const fs = require("fs");

function mkdir() {
  fs.mkdir("./test", err => {
    console.log(err);
  });
}

function rename() {
  fs.rename("./test", "./demo", err => {
    console.log(err);
  });
}

function rename2() {
  fs.rename("./demo", "./test", err => {
    console.log(err);
  });
}
function remove() {
  fs.rmdir("./test", err => {
    console.log(err);
  });
}
rename2();
// rename();
