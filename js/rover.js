class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Compass {
    constructor(cardinalPoint) {
        this.cardinalPoint = cardinalPoint;
        this.angle = this.getAnglefromCardinalPoint();
        this.vectors = {
            'N': new Vector(0, 1),
            'E': new Vector(1, 0),
            'S': new Vector(0, -1),
            'W': new Vector(-1, 0)
        };
    }

    getVectorToAdd() {
        return this.vectors[this.cardinalPoint];
    }

    getAnglefromCardinalPoint() {
        switch (this.cardinalPoint) {
            case 'N':
                return 0;
            case 'E':
                return 90;
            case 'S':
                return 180;
            case 'W':
                return 270;
        }
    }

    getCardinalPointfromAngle() {
        switch (this.angle) {
            case 0:
                return 'N';
            case 90:
                return 'E';
            case 180:
                return 'S';
            case 270:
                return 'W';
        }
    }
}

class Rover {
    constructor(x, y, cardinalPoint) {
        this.position = new Position(x, y);
        this.compass = new Compass(cardinalPoint);
    }

    moveForward() {
        let vector = this.compass.getVectorToAdd();
        this.position.x += vector.x;
        this.position.y += vector.y;
    }

    moveBackward() {
        let vector = this.compass.getVectorToAdd();
        this.position.x -= vector.x;
        this.position.y -= vector.y;
    }

    turnLeft() {
        this.compass.angle = mod(this.compass.angle - 90, 360);
        this.compass.cardinalPoint = this.compass.getCardinalPointfromAngle();
    }

    turnRight() {
        this.compass.angle = mod(this.compass.angle - 90, 360);
        this.compass.cardinalPoint = this.compass.getCardinalPointfromAngle();
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    substract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }


}


function mod(n, m) {
    return ((n % m) + m) % m;
}

module.exports = { Rover };
