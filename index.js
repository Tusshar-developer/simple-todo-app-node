const fs = require("fs");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listJs = require("./list.js");
const addJS = require("./add.js");
const removeJs = require("./remove.js");

const list = (answer, args) => listJs.list(answer, args);
const add = (answer, args) => addJS.add(answer, args);
const remove = (answer, args) => removeJs.remove(answer, args);

var recursiveAsyncReadLine = () => {
  rl.question("$ ", (answer) => {
    var args = answer.split(" ");
    answer = args.shift().toLowerCase();

    if (answer == "exit") return rl.close();

    switch (answer) {
      default:
        console.log(`Error 404: "${answer}" command not found.`);
        break;

      case "clear":
        console.clear();
        break;

      case "list":
        list(answer, args);
        break;

      case "add":
        add(answer, args);
        break;
      case "remove":
        remove(answer, args);
        break;
    }
    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();
