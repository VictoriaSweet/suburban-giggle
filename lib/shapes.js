class Shape {
    constructor(threeLetters, textColor, shape, shapeColor) {
      this.threeLetters = threeLetters;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  makeLogo() {
    let myShape = "";
    if (this.shape == "rect"){
      myShape = `<${this.shape} width="100%" height="100%" fill="${this.shapeColor}" />`

    };
    if (this.shape == "circle") {
      myShape = `
      <${this.shape} cr="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    };
    if (this.shape == "triangle") {
      myShape =`<polygon points="250,60 100,400 400,400" fill="${this.shapeColor}"/>
      ">`
    };
    let logoString = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     ${myShape}

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.threeLetters}</text>

    </svg>`;
    
    return logoString;
  }
}

module.exports = Shape; 