const { Rover } = require('./Rover');

describe('Rover moving forward facing all directions', () => {
  test('it should have position y incremented when facing North', () => {
    const rover = new Rover(0, 0, 'N');
    rover.moveForward();
    expect(rover.position.y).toBe(1);
    expect(rover.position.x).toBe(0);
    expect(rover.compass.cardinalPoint).toBe('N');
  })

  test('it should have position y decremented when facing South', () => {
    const rover = new Rover(0, 0, 'S');
    rover.moveForward();
    expect(rover.position.y).toBe(-1);
    expect(rover.position.x).toBe(0);
    expect(rover.compass.cardinalPoint).toBe('S');

  })

  test('it should have position x incremented when facing East', () => {
    const rover = new Rover(0, 0, 'E');
    rover.moveForward();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(1);
    expect(rover.compass.cardinalPoint).toBe('E');

  })

  test('it should have position x decremented when facing West', () => {
    const rover = new Rover(0, 0, 'W');
    rover.moveForward();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(-1);
    expect(rover.compass.cardinalPoint).toBe('W');

  })
})

describe('Rover turning left facing all directions', () => {
  test('it should face West when facing North and turning Left', () => {
    const rover = new Rover(0, 0, 'N');
    rover.turnLeft();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(0);
    expect(rover.compass.cardinalPoint).toBe('W');
  })

  test('it should face South when facing West and turning Left', () => {
    const rover = new Rover(0, 0, 'W');
    rover.turnLeft();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(0);
    expect(rover.compass.cardinalPoint).toBe('S');
  })

  test('it should face East when facing South and turning Left', () => {
    const rover = new Rover(0, 0, 'S');
    rover.turnLeft();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(0);
    expect(rover.compass.cardinalPoint).toBe('E');
  })

  test('it should face North when facing East and turning Left', () => {
    const rover = new Rover(0, 0, 'E');
    rover.turnLeft();
    expect(rover.position.y).toBe(0);
    expect(rover.position.x).toBe(0);
    expect(rover.compass.cardinalPoint).toBe('N');
  })
})
