const { Rover, Position } = require('./answer')

describe('Rover moving forward facing all directions', () => {
  test('it should have position y incremented when facing North', () => {
    const rover = new Rover(0, 0, 'N');
    rover.moveForward();
    expect(rover.position.y).toBe(1);
    expect(rover.position.x).toBe(0);
  })

  test('it should have position y decremented when facing South', () => {
    const rover = new Rover(0, 0, 'S');
    rover.moveForward();
    expect(rover.position.y).toBe(-1);
    expect(rover.position.x).toBe(0);
  })

  test('it should have position x incremented when facing East', () => {
    const rover = new Rover(0, 0, 'E');
    rover.moveForward();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(1);
  })

  test('it should have position x decremented when facing West', () => {
    const rover = new Rover(0, 0, 'W');
    rover.moveForward();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(-1);
  })
})
