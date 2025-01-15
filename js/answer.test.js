const { Rover, Position } = require('./answer')

describe('Rover moving forward', () => {
  test('it should have position y incremented', () => {
    const rover = new Rover(0, 0);
    rover.moveForward();
    expect(rover.position.y).toBe(1);
    expect(rover.position.x).toBe(0);
  })
})
