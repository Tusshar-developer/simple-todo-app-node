const fs = require("fs");

module.exports = {
  list(answer, args) {
    var data = fs.readFileSync("./data.json", { encoding: "utf8", flag: "r" });
    data = data.toString().split("\t").join("").slice(1, -1);
    console.log(data);
  },
};
