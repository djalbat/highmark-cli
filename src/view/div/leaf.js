"use strict";

import { Element, window } from "easy";

import withStyle from "easy-with-style";  ///

import Position from "../../position";
import Velocity from "../../velocity";
import eventMixins from "../../mixins/event";

class LeafDiv extends Element {
  touchStartHandler = (event, element) => {
    const touchEvent = event, ///
          position = Position.fromTouchEvent(touchEvent),
          startPosition = position;  ///

    this.setStartPosition(startPosition);
  }

  mouseDownHandler = (event, element) => {
    const mouseEvent = event, ///
          position = Position.fromMouseEvent(mouseEvent),
          startPosition = position;  ///

    this.setStartPosition(startPosition);
  }

  touchMoveHandler = (event, element) => {
    let startPosition = this.getStartPosition();

    if (startPosition !== null) {
      const touchEvent = event, ///
            position = Position.fromTouchEvent(touchEvent);

      if (position !== null) {
        const positionMatchesStartPosition = position.match(startPosition);

        if (positionMatchesStartPosition) {
          const velocity = Velocity.fromPositionAndStartPosition(position, startPosition),
                swipeDirection = velocity.getSwipeDirection();

          if (swipeDirection !== 0) {
            alert(swipeDirection)
          }
        }
      }
    }
  }

  mouseMoveHandler = (event, element) => {
    let startPosition = this.getStartPosition();

    if (startPosition !== null) {
      const mouseEvent = event, ///
            position = Position.fromMouseEvent(mouseEvent),
            velocity = Velocity.fromPositionAndStartPosition(position, startPosition),
            swipeDirection = velocity.getSwipeDirection();

      if (swipeDirection !== 0) {
        alert(swipeDirection)
      }
    }
  }

  touchEndHandler = (event, element) => {
    const startPosition = null;

    this.setStartPosition(startPosition);
  }

  mouseUpHandler = (event, element) => {
    const startPosition = null;

    this.setStartPosition(startPosition);
  }

  didMount() {
    this.onMouseDown(this.mouseDownHandler);
    this.onMouseMove(this.mouseMoveHandler);

    window.onMouseUp(this.mouseUpHandler, this);

    this.onTouchStart(this.touchStartHandler);
    this.onTouchMove(this.touchMoveHandler);
    this.onTouchEnd(this.touchEndHandler);
  }

  willUnmount() {
    this.offMouseDown(this.mouseDownHandler);
    this.offMouseMove(this.mouseMoveHandler);

    window.offMouseUp(this.mouseUpHandler, this);

    this.offTouchStart(this.touchStartHandler);
    this.offTouchMove(this.touchMoveHandler);
    this.offTouchEnd(this.touchEndHandler);
  }

  getStartPosition() {
    const { startPosition } = this.getState();

    return startPosition;
  }

  setStartPosition(startPosition) {
    this.updateState({
      startPosition
    });
  }

  initialise() {
    const startPosition = null;

    this.setState({
      startPosition
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "leaf"
  };
}

Object.assign(LeafDiv.prototype, eventMixins);

export default withStyle(LeafDiv)`

  width: 100vw;
  min-height: 100vh;

`;
