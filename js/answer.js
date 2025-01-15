class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Orientation {
    constructor(orientation) {
        this.orientation = orientation;
    }
}

class Rover {
    position;
    orientation;

    constructor(x, y, orientation) {
        this.position = new Position(x, y);
        this.orientation = new Orientation(orientation);
    }

    moveForward() {
        switch (orientation) {
            case 'N':
                this.position.y++;
                break;
            case 'E':
                this.position.x++;
                break;
            case 'S':
                this.position.y--;
                break;
            case 'W':
                this.position.x--;
                break;
        }
    }
}

module.exports = { Rover, Position };
