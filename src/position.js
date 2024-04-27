"use strict";

import { arrayUtilities } from "necessary";

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

  minus(position) {
    const positionTop = position.getTop(),
          positionLeft = position.getLeft(),
          positionTime = position.getTime(),
          top = this.top - positionTop,
          left = this.left - positionLeft,
          time = this.time - positionTime,
          identifier = this.identifier;

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
            top = pageY,  ///
            left = pageX, ///
            time = getTime();

      position = new Position(top, left, time, identifier);
    }

    return position;
  }

  static fromPointerEvent(pointerEvent) {
    let position = null;

    const { changedTouches } = pointerEvent,
          changedTouchesLength = changedTouches.length

    if (changedTouchesLength === 1) {
      const firstChangedTouch = first(changedTouches),
            changedTouch = firstChangedTouch, ///
            { pageX, pageY, pointerId } = changedTouch,
            top = pageY,  ///
            left = pageX, ///
            time = getTime(),
            identifier = pointerId; ///

      position = new Position(top, left, time, identifier);
    }

    return position;
  }
}

function getTime() {
  const time = Date.now();  ///

  return time;
}
