"use strict";

import { window } from "easy";

import Position from "../position";
import Velocity from "../velocity";

import { PI, MAXIMUM_TAP_TIME, MINIMUM_SWIPE_SPEED, SWIPE_RANGE_OD_DEGREES } from "../constants";
import { ZERO_DEGREES, PLUS_NINETY_DEGREES, MINUS_NINETY_DEGREES, ONE_HUNDRED_AND_EIGHTY_DEGREES } from "../degrees";
import { TAP_CUSTOM_EVENT_TYPE,
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
  this.startHandler(event, element, (event) => {  ///
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
        startPosition = position;  ///

  this.setStartPosition(startPosition);
}

function moveHandler(event, element, positionFromEvent) {
  let startPosition = this.getStartPosition();

  if (startPosition !== null) {
    const position = positionFromEvent(event);

    if (position !== null) {
      const positionMatchesStartPosition = position.match(startPosition);

      if (positionMatchesStartPosition) {
        const velocity = Velocity.fromPositionAndStartPosition(position, startPosition),
              speed = velocity.getSpeed();


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
        const velocity = Velocity.fromPositionAndStartPosition(position, startPosition),
              direction = velocity.getDirection(),
              speed = velocity.getSpeed(),
              time = velocity.getTime();

        let customEventType = null,
            projectedVelocity;

        if (speed === 0) {
          if (time < MAXIMUM_TAP_TIME) {
            customEventType = TAP_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed;  ///
          }
        } else if (speed > MINIMUM_SWIPE_SPEED) {
          const angle = PI * direction / ONE_HUNDRED_AND_EIGHTY_DEGREES;

          if ((Math.abs(ZERO_DEGREES - direction)) < SWIPE_RANGE_OD_DEGREES) {
            customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.cos(angle);
          }

          if (Math.abs(PLUS_NINETY_DEGREES - direction) < SWIPE_RANGE_OD_DEGREES) {
            customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.sin(angle);
          }

          if (Math.abs(MINUS_NINETY_DEGREES - direction) < SWIPE_RANGE_OD_DEGREES) {
            customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.sin(angle);
          }

          if ((ONE_HUNDRED_AND_EIGHTY_DEGREES - Math.abs(direction)) < SWIPE_RANGE_OD_DEGREES) {
            customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE;

            projectedVelocity = speed * Math.cos(angle);
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

const customEventMixins = {
  enableTouch,
  disableTouch,
  onCustomTap,
  offCustomTap,
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

export default customEventMixins;
