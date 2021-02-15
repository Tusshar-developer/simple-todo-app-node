const fs = require("fs");
module.exports = {
  add(answer, args) {
    if (!args) return console.log("Please specify a todo");

    var data = args.join(" ");
    var todoNum;
    var fileContent = fs.readFileSync("./data.json", {
      encoding: "utf8",
      flag: "r",
    });

    fileContent = JSON.parse(fileContent);
    todoNum = Object.keys(fileContent).length + 1;
    fileContent[`${todoNum}`] = data;
    var final = JSON.stringify(fileContent, null, 2);
    fs.writeFileSync("./data.json", final);
    console.log("Todo Added");
  },
};
