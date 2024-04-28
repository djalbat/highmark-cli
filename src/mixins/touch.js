"use strict";

import { window } from "easy";

import Position from "../position";
import RelativePosition from "../position/relative";

import { PI, PI_OVER_TWO, MAXIMUM_TAP_TIME, MINIMUM_SWIPE_SPEED, MAXIMUM_SWIPE_RANGE } from "../constants";
import { TAP_CUSTOM_EVENT_TYPE,
         DRAG_CUSTOM_EVENT_TYPE,
         PINCH_CUSTOM_EVENT_TYPE,
         SWIPE_UP_CUSTOM_EVENT_TYPE,
         SWIPE_DOWN_CUSTOM_EVENT_TYPE,
         SWIPE_LEFT_CUSTOM_EVENT_TYPE,
         SWIPE_RIGHT_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function enableTouch() {
  const startPosition = null;

  this.updateState({
    startPosition
  });

  this.onMouseDown(this.mouseDownHandler);
  this.onMouseMove(this.mouseMoveHandler);

  window.onMouseUp(this.mouseUpHandler, this);

  this.onTouchStart(this.touchStartHandler);
  this.onTouchMove(this.touchMoveHandler);
  this.onTouchEnd(this.touchEndHandler);
}

function disableTouch() {
  this.offMouseDown(this.mouseDownHandler);
  this.offMouseMove(this.mouseMoveHandler);

  window.offMouseUp(this.mouseUpHandler, this);

  this.offTouchStart(this.touchStartHandler);
  this.offTouchMove(this.touchMoveHandler);
  this.offTouchEnd(this.touchEndHandler);
}

function onCustomTap(tapCustomHandler, element) {
  const customEventType = TAP_CUSTOM_EVENT_TYPE,
        customHandler = tapCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomTap(tapCustomHandler, element) {
  const customEventType = TAP_CUSTOM_EVENT_TYPE,
        customHandler = tapCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDrag(dragCustomHandler, element) {
  const customEventType = DRAG_CUSTOM_EVENT_TYPE,
        customHandler = dragCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDrag(dragCustomHandler, element) {
  const customEventType = DRAG_CUSTOM_EVENT_TYPE,
        customHandler = dragCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomPinch(pinchCustomHandler, element) {
  const customEventType = PINCH_CUSTOM_EVENT_TYPE,
        customHandler = pinchCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomPinch(pinchCustomHandler, element) {
  const customEventType = PINCH_CUSTOM_EVENT_TYPE,
        customHandler = pinchCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeUp(swipeUpCustomHandler, element) {
  const customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE,
        customHandler = swipeUpCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeUp(swipeUpCustomHandler, element) {
  const customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE,
        customHandler = swipeUpCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeDown(swipeDownCustomHandler, element) {
  const customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = swipeDownCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeDown(swipeDownCustomHandler, element) {
  const customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = swipeDownCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeLeft(swipeLeftCustomHandler, element) {
  const customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = swipeLeftCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeLeft(swipeLeftCustomHandler, element) {
  const customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = swipeLeftCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeRight(swipeRightCustomHandler, element) {
  const customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = swipeRightCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeRight(swipeRightCustomHandler, element) {
  const customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = swipeRightCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function getStartPosition() {
  const { startPosition } = this.getState();

  return startPosition;
}

function setStartPosition(startPosition) {
  this.updateState({
    startPosition
  });
}

function touchStartHandler(event, element) {
  this.startHandler(event, element, (event) => {
    const touchEvent = event, ///
          position = Position.fromTouchEvent(touchEvent);

    return position;
  });
}

function mouseDownHandler(event, element) {
  this.startHandler(event, element, (event) => {
    const mouseEvent = event, ///
          position = Position.fromMouseEvent(mouseEvent);

    return position;
  });
}

function touchMoveHandler(event, element) {
  this.moveHandler(event, element, (event) => {
    const touchEvent = event, ///
          position = Position.fromTouchEvent(touchEvent);

    return position;
  });
}

function mouseMoveHandler(event, element) {
  this.moveHandler(event, element, (event) => {
    const mouseEvent = event, ///
          position = Position.fromMouseEvent(mouseEvent);

    return position;
  });
}

function touchEndHandler(event, element) {
  this.endHandler(event, element, (event) => {
    const touchEvent = event, ///
          position = Position.fromTouchEvent(touchEvent);

    return position;
  });
}

function mouseUpHandler(event, element) {
  this.endHandler(event, element, (event) => {  ///
    const mouseEvent = event, ///
          position = Position.fromMouseEvent(mouseEvent);

    return position;
  });
}

function startHandler(event, element, positionFromEvent) {
  const position = positionFromEvent(event),
        startPosition = position; ///

  this.setStartPosition(startPosition);
}

function moveHandler(event, element, positionFromEvent) {
  let startPosition = this.getStartPosition();

  if (startPosition !== null) {
    const position = positionFromEvent(event);

    if (position !== null) {
      const positionMatchesStartPosition = position.match(startPosition);

      if (positionMatchesStartPosition) {
        const relativePosition = RelativePosition.fromPositionAndStartPosition(position, startPosition),
              top = relativePosition.getTop(),
              left = relativePosition.getLeft(),
              customEventType = DRAG_CUSTOM_EVENT_TYPE;

        this.callCustomHandlers(customEventType, event, element, top, left);
      }
    }
  }
}

function endHandler(event, element, positionFromEvent) {
  let startPosition;

  startPosition = this.getStartPosition();

  if (startPosition !== null) {

    const position = positionFromEvent(event);

    if (position !== null) {
      const positionMatchesStartPosition = position.match(startPosition);

      if (positionMatchesStartPosition) {
        const relativePosition = RelativePosition.fromPositionAndStartPosition(position, startPosition),
              direction = relativePosition.getDirection(),
              speed = relativePosition.getSpeed(),
              time = relativePosition.getTime();

        let customEventType = null,
            projectedVelocity;

        if (speed === 0) {
          if (time < MAXIMUM_TAP_TIME) {
            customEventType = TAP_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed;  ///
          }
        } else if (speed > MINIMUM_SWIPE_SPEED) {
          if ((Math.abs(direction)) < MAXIMUM_SWIPE_RANGE) {
            customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.cos(direction);
          }

          if (Math.abs(PI_OVER_TWO - direction) < MAXIMUM_SWIPE_RANGE) {
            customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.sin(direction);
          }

          if (Math.abs(-PI_OVER_TWO - direction) < MAXIMUM_SWIPE_RANGE) {
            customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.sin(direction);
          }

          if ((PI - Math.abs(direction)) < MAXIMUM_SWIPE_RANGE) {
            customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.cos(direction);
          }
        }

        if (customEventType !== null) {
          this.callCustomHandlers(customEventType, event, element, projectedVelocity);
        }
      }
    }
  }

  startPosition = null;

  this.setStartPosition(startPosition);
}

const touchMixins = {
  enableTouch,
  disableTouch,
  onCustomTap,
  offCustomTap,
  onCustomDrag,
  offCustomDrag,
  onCustomPinch,
  offCustomPinch,
  onCustomSwipeUp,
  offCustomSwipeUp,
  onCustomSwipeDown,
  offCustomSwipeDown,
  onCustomSwipeLeft,
  offCustomSwipeLeft,
  onCustomSwipeRight,
  offCustomSwipeRight,
  getStartPosition,
  setStartPosition,
  touchStartHandler,
  mouseDownHandler,
  touchMoveHandler,
  mouseMoveHandler,
  touchEndHandler,
  mouseUpHandler,
  startHandler,
  moveHandler,
  endHandler
};

export default touchMixins;
