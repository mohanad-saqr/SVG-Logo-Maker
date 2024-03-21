const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Circle should generate correct SVG', () => {
    const circle = new Circle(100, 'green');
    expect(circle.getSVG('A', 'white')).toContain('<circle');
  });

  test('Triangle should generate correct SVG', () => {
    const triangle = new Triangle(100, 'blue');
    expect(triangle.getSVG('B', 'black')).toContain('<polygon');
  });

  test('Square should generate correct SVG', () => {
    const square = new Square(100, 'red');
    expect(square.getSVG('C', 'yellow')).toContain('<rect');
  });
});
