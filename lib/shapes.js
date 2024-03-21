export class Shape {
    constructor(size, color) {
      this.size = size;
      this.color = color;
    }
  
    getSVG(text, textColor) {
      // Generic SVG structure
      return `
        <svg width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
          ${this.getShapeSVG()}
          <text x="50%" y="50%" dy=".3em" fill="${textColor}" text-anchor="middle">${text}</text>
        </svg>
      `;
    }
  }
  
  export class Circle extends Shape {
    getShapeSVG() {
      return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
  }
  
  export class Triangle extends Shape {
    getShapeSVG() {
      return `<polygon points="50,0 100,100 0,100" fill="${this.color}" />`;
    }
  }
  
  export class Square extends Shape {
    getShapeSVG() {
      return `<rect x="0" y="0" width="100" height="100" fill="${this.color}" />`;
    }
  }
  