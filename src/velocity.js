"use strict";

export default class Velocity {
  constructor(time, magnitude, direction) {
    this.time = time;
    this.magnitude = magnitude;
    this.direction = direction;
  }

  getTime() {
    return this.time;
  }

  getMagnitude() {
    return this.magnitude;
  }

  getDirection() {
    return this.direction;
  }

  getSpeed() {
    const speed = (this.time === 0) ?
                    0 : ///
                      this.magnitude / this.time;

    return speed;
  }

  static fromPositionAndStartPosition(position, startPosition) {
    const relativePosition = position.minus(startPosition),
          time = relativePosition.getTime(),
          magnitude = relativePosition.getMagnitude(),
          direction = relativePosition.getDirection(),
          velocity = new Velocity(time, magnitude, direction);

    return velocity;
  }
}
