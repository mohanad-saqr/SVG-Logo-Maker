import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js'; // The extension .js is important in ESM

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 && input.length > 0 ? true : 'You must enter up to three characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the color for the text:',
    default: 'white'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the color for the shape:',
    default: 'green'
  }
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let svgShape;

  switch (shape) {
    case 'circle':
      svgShape = new Circle(100, shapeColor);
      break;
    case 'triangle':
      svgShape = new Triangle(100, shapeColor);
      break;
    case 'square':
      svgShape = new Square(100, shapeColor);
      break;
    default:
      console.error('Invalid shape');
      process.exit(1);
  }

  const svgContent = svgShape.getSVG(text, textColor);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg. You can find your logo at the current directory.');
}).catch(error => {
  console.error('An error occurred:', error);
});
