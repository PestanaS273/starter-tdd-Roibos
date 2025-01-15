class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rover {
    position;

    constructor(x, y) {
        this.position = new Position(x, y);
    }

    moveForward() {
        this.position.y++;
    }
}

module.exports = { Rover, Position };
