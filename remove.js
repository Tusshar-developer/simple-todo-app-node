const fs = require("fs");

module.exports = {
  remove(answer, args) {
    console.log(answer);

    var invaildMsg =
      'Please provide a valid todo list number.\nA valid todo list number is an integer that exists as a todo number.\nType "list" to check for them.\n';

    if (!args[0]) return console.log(invaildMsg);

    if (args[0] === "all") {
      var emptyData = {};
      fs.writeFileSync('./data.json', JSON.stringify(emptyData, null, 2));
      return;
    }

    var removeNum = args[0];
    removeNum = parseInt(removeNum);
    if (isNaN(removeNum)) return console.log(invaildMsg);

    var fileContent = fs.readFileSync("./data.json", {
      encoding: "utf8",
      flag: "r",
    });
    fileContent = JSON.parse(fileContent);

    var todoListNum = Object.keys(fileContent).length;

    if (removeNum > 0 && removeNum > todoListNum)
      return console.log(invaildMsg);

    fileContent[`${removeNum}`] = undefined;

    for (let i = removeNum + 1; i <= todoListNum; i++) {
      fileContent[`${i - 1}`] = fileContent[`${i}`];
      fileContent[`${i}`] = undefined;
    }

    fileContent = JSON.stringify(fileContent, null, 2);
    fs.writeFileSync("./data.json", fileContent);
  },
};
