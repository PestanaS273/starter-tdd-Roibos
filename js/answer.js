class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Compass {
    constructor(orientation) {
        this.orientation = orientation;
    }
}

class Rover {
    position;
    orientation;

    constructor(x, y, orientation) {
        this.position = new Position(x, y);
        this.compass = new Compass(orientation);
    }

    moveForward() {
        switch (this.compass.orientation) {
            case 'N':
                console.log(this.position.y);
                this.position.y++;
                console.log(this.position.y);
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

module.exports = { Rover };
