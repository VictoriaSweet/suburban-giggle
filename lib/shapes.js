class Shape {
    constructor(threeLetters, textColor, shape, shapeColor) {
      this.threeLetters = threeLetters;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  makeLogo() {
    console.log(this);
    let logoString = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    <${this.shape} width="100%" height="100%" fill="${this.shapeColor}" />

    <${this.shape} cr="150" cy="100" r="80" fill="green" />

     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.threeLetters}</text>

    </svg>`;
    return logoString;
  }
}

module.exports = Shape; 