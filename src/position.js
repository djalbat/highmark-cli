"use strict";

import { arrayUtilities } from "necessary";

import { PI } from "./constants";

const { first } = arrayUtilities;

export default class Position {
  constructor(top, left, time, identifier) {
    this.top = top;
    this.left = left;
    this.time = time;
    this.identifier = identifier;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  getTime() {
    return this.time;
  }

  getIdentifier() {
    return this.identifier;
  }

  getMagnitude() {
    const magnitude = Math.sqrt(this.top * this.top + this.left * this.left);

    return magnitude;
  }

  getDirection() {
    let direction = 0;

    if (this.left === 0) {
      direction = (this.top < 0) ?
                   +PI / 2 :
                     -PI / 2;
    } else {
      direction = Math.atan2(-this.top, this.left);
    }

    return direction;
  }

  minus(position) {
    const positionTop = position.getTop(),
          positionLeft = position.getLeft(),
          positionTime = position.getTime(),
          top = this.top - positionTop,
          left = this.left - positionLeft,
          time = this.time - positionTime,
          identifier = null;  ///

    position = new Position(top, left, time, identifier); ///

    return position;
  }

  match(position) {
    const identifier = position.getIdentifier(),
          matches = (this.identifier === identifier);

    return matches;
  }

  static fromMouseEvent(mouseEvent) {
    const { pageX, pageY } = mouseEvent,
          top = pageY,  ///
          left = pageX, ///
          time = getTime(),
          identifier = null,
          position = new Position(top, left, time, identifier);

    return position;
  }

  static fromTouchEvent(touchEvent) {
    let position = null;

    const { changedTouches } = touchEvent,
          changedTouchesLength = changedTouches.length

    if (changedTouchesLength === 1) {
      const firstChangedTouch = first(changedTouches),
            changedTouch = firstChangedTouch, ///
            { pageX, pageY, identifier } = changedTouch,
            top = pageY,
            left = pageX,
            time = getTime();

      position = new Position(top, left, time, identifier);
    }

    return position;
  }
}

function getTime() {
  const time = Date.now();  ///

  return time;
}
