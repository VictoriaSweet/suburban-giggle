// GIVEN a command-line application that accepts user input

// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
// const { readFile, writeFile } = require('fs/promises');
const CLI = require('./lib/cli.js');
const Shape = require('./lib/shapes.js');
const fs = require('fs');
const cli = new CLI();

cli.run().then(output => {
    console.log(output);
    const shape = new Shape(output.threeLetters, output.textColor, output.shape, output.shapeColor);
const logo = shape.makeLogo();
fs.writeFile('./logo.svg', logo, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

console.log(logo);
});



