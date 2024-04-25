"use strict";

import { MINIMUM_SWIPE_SPEED, ONE_HUNDRED_AND_EIGHTY, MAXIMUM_SWIPE_ABSOLUTE_DIRECTION } from "./constants";

export default class Velocity {
  constructor(speed, direction) {
    this.speed = speed;
    this.direction = direction;
  }

  getSpeed() {
    return this.speed;
  }

  getDirection() {
    return this.direction;
  }

  isSwipeVelocity() {
    let representsSwipe = false;


    return representsSwipe;
  }

  getSwipeDirection() {
    let swipeDirection = 0;

    if (this.speed > MINIMUM_SWIPE_SPEED) {
      const absoluteDirection = Math.abs(this.direction);

      if (absoluteDirection < MAXIMUM_SWIPE_ABSOLUTE_DIRECTION) {
        swipeDirection = +1;
      }

      if ((ONE_HUNDRED_AND_EIGHTY - absoluteDirection) < MAXIMUM_SWIPE_ABSOLUTE_DIRECTION) {
        swipeDirection = -1;
      }
    }

    return swipeDirection;
  }

  static fromPositionAndStartPosition(position, startPosition) {
    const relativePosition = position.minus(startPosition),
          magnitude = relativePosition.getMagnitude(),
          direction = relativePosition.getDirection(),
          time = relativePosition.getTime(),
          speed = (time === 0) ?
                    0 : ///
                      magnitude / time,
          velocity = new Velocity(speed, direction);

    return velocity;
  }
}
