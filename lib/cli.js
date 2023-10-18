const inquirer = require("inquirer");

const threeLettersMaxLen = 3;
const threeLettersValidator = async (input) => {
  if (input.length == 0) {
    return "The provided company logo text should only contain up to 3 alphabetical characters";
  } else if (input.length > threeLettersMaxLen) {
    return `company name length must be less than or equal to ${threeLettersMaxLen}`;
  }
  return true;
};

class CLI {
  constructor() {
    this.threeLetters = "";
    this.textColor = "";
    this.shape = "";
    this.shapeColor = "";
  }

  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "What 3 letters would you like to have in your logo?",
          validate: threeLettersValidator,
        },
      ])
      .then(({ text }) => {
        this.threeLetters = text;
        return inquirer.prompt([
          {
            type: "input",
            name: "textColor",
            message: "What color would you like the text to be?",
            default: "blue",
          },
        ]);
      })
      .then(({ textColor }) => {
        this.textColor = textColor;
        return inquirer.prompt([
          {
            name: "shape",
            type: "list",
            message: "What is the shape of the desired image?",
            choices: [
              {
                name: "square",
                value: "square",
              },
              {
                name: "circle",
                value: "circle",
              },
              {
                name: "triangle",
                value: "triangle",
              },
            ],
          },
        ]);
      })
      .then(({ shape }) => {
        this.shape = shape;
        return inquirer.prompt([
          {
            type: "input",
            name: "shapeColor",
            message: "What is the shape's color?",
            default: "green",
          },
        ]);
      })
      .then(({ shapeColor }) => {
        this.shapeColor = shapeColor;
      })
      .then(() => {
        return this;
      })
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }
}

module.exports = CLI;



// inquirer docs

//lists and choices let you choose items 
//this means this instance of a class
//constructor is what gets called when you make a new instance
//constructor is for classes / creating a class
//use output to display the final product
//

