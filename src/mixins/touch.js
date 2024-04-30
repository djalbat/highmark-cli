"use strict";

import { window } from "easy";
import { arrayUtilities } from "necessary";

import RelativePosition from "../position/relative";

import { PI, PI_OVER_TWO, MAXIMUM_TAP_TIME, MINIMUM_SWIPE_SPEED, MAXIMUM_SPREAD } from "../constants";
import { sortPositions, matchPositions, filterPositions, positionsFromMouseEvent, positionsFromTouchEvent } from "../utilities/positions";
import { TAP_CUSTOM_EVENT_TYPE,
         DRAG_UP_CUSTOM_EVENT_TYPE,
         DRAG_DOWN_CUSTOM_EVENT_TYPE,
         DRAG_LEFT_CUSTOM_EVENT_TYPE,
         DRAG_RIGHT_CUSTOM_EVENT_TYPE,
         DRAG_START_CUSTOM_EVENT_TYPE,
         SWIPE_UP_CUSTOM_EVENT_TYPE,
         SWIPE_DOWN_CUSTOM_EVENT_TYPE,
         SWIPE_LEFT_CUSTOM_EVENT_TYPE,
         SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
         PINCH_MOVE_CUSTOM_EVENT_TYPE,
         PINCH_START_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { push, first, second } = arrayUtilities;

function enableTouch() {
  const startMagnitude = null,
        startPositions = [],
        movingPositions = [];

  this.updateState({
    startMagnitude,
    startPositions,
    movingPositions
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

function onCustomDragUp(dragUpCustomHandler, element) {
  const customEventType = DRAG_UP_CUSTOM_EVENT_TYPE,
        customHandler = dragUpCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragUp(dragUpCustomHandler, element) {
  const customEventType = DRAG_UP_CUSTOM_EVENT_TYPE,
        customHandler = dragUpCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragDown(dragDownCustomHandler, element) {
  const customEventType = DRAG_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = dragDownCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragDown(dragDownCustomHandler, element) {
  const customEventType = DRAG_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = dragDownCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragLeft(dragLeftCustomHandler, element) {
  const customEventType = DRAG_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = dragLeftCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragLeft(dragLeftCustomHandler, element) {
  const customEventType = DRAG_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = dragLeftCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragRight(dragRightCustomHandler, element) {
  const customEventType = DRAG_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = dragRightCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragRight(dragRightCustomHandler, element) {
  const customEventType = DRAG_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = dragRightCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragStart(dragStartCustomHandler, element) {
  const customEventType = DRAG_START_CUSTOM_EVENT_TYPE,
        customHandler = dragStartCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragStart(dragStartCustomHandler, element) {
  const customEventType = DRAG_START_CUSTOM_EVENT_TYPE,
        customHandler = dragStartCustomHandler; ///

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

function onCustomPinchMove(pinchMoveCustomHandler, element) {
  const customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
        customHandler = pinchMoveCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomPinchMove(pinchMoveCustomHandler, element) {
  const customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
        customHandler = pinchMoveCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomPinchStart(pinchStartCustomHandler, element) {
  const customEventType = PINCH_START_CUSTOM_EVENT_TYPE,
        customHandler = pinchStartCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomPinchStart(pinchStartCustomHandler, element) {
  const customEventType = PINCH_START_CUSTOM_EVENT_TYPE,
        customHandler = pinchStartCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function getStartMagnitude() {
  const { startMagnitude } = this.getState();

  return startMagnitude;
}

function setStartMagnitude(startMagnitude) {
  this.updateState({
    startMagnitude
  });
}

function getStartPositions() {
  const { startPositions } = this.getState();

  return startPositions;
}

function setStartPositions(startPositions) {
  this.updateState({
    startPositions
  });
}

function getMovingPositions() {
  const { movingPositions } = this.getState();

  return movingPositions;
}

function setMovingPositions(movingPositions) {
  this.updateState({
    movingPositions
  });
}

function touchStartHandler(event, element) {
  this.startHandler(event, element, (event) => {
    const touchEvent = event, ///
          changed = false,
          positions = positionsFromTouchEvent(touchEvent, changed);

    return positions;
  });
}

function mouseDownHandler(event, element) {
  this.startHandler(event, element, (event) => {
    const mouseEvent = event, ///
          positions = positionsFromMouseEvent(mouseEvent);

    return positions;
  });
}

function touchMoveHandler(event, element) {
  this.moveHandler(event, element, (event) => {
    const touchEvent = event, ///
          changed = false,
          positions = positionsFromTouchEvent(touchEvent, changed);

    return positions;
  });
}

function mouseMoveHandler(event, element) {
  this.moveHandler(event, element, (event) => {
    const mouseEvent = event, ///
          positions = positionsFromMouseEvent(mouseEvent);

    return positions;
  });
}

function touchEndHandler(event, element) {
  this.endHandler(event, element, (event) => {
    const touchEvent = event, ///
          changed = true,
          positions = positionsFromTouchEvent(touchEvent, changed);

    return positions;
  });
}

function mouseUpHandler(event, element) {
  this.endHandler(event, element, (event) => {
    const mouseEvent = event, ///
          positions = positionsFromMouseEvent(mouseEvent);

    return positions;
  });
}

function startHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions();

  filterPositions(startPositions, positions);

  push(startPositions, positions);

  const startingPositionsLength = startPositions.length;

  if (startingPositionsLength === 1) {
    const customEventType = DRAG_START_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  if (startingPositionsLength === 2) {
    const firstStartPosition = first(startPositions),
          secondStartPosition = second(startPositions),
          relativeStartPosition = RelativePosition.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition),
          magnitude = relativeStartPosition.getMagnitude(),
          startMagnitude = magnitude, ///
          customEventType = PINCH_START_CUSTOM_EVENT_TYPE;

    this.setStartMagnitude(startMagnitude);

    this.callCustomHandlers(customEventType, event, element);
  }
}

function moveHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions();

  filterPositions(movingPositions, positions);

  push(movingPositions, positions);

  const positionsMatch = matchPositions(startPositions, movingPositions);

  if (positionsMatch) {
    sortPositions(movingPositions, startPositions);

    const movingPositionsLength = movingPositions.length;

    if (movingPositionsLength === 1) {
      const firstStartPosition = first(startPositions),
            firstMovingPosition = first(movingPositions),
            firstPosition = firstStartPosition, ///
            secondPosition = firstMovingPosition, ///
            relativePosition = RelativePosition.fromFirstPositionAndSecondPosition(firstPosition, secondPosition),
            direction = relativePosition.getDirection();

      let customEventType = null;

      if ((Math.abs(direction)) < MAXIMUM_SPREAD) {
        customEventType = DRAG_RIGHT_CUSTOM_EVENT_TYPE;
      }

      if (Math.abs(PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
        customEventType = DRAG_UP_CUSTOM_EVENT_TYPE;
      }

      if (Math.abs(-PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
        customEventType = DRAG_DOWN_CUSTOM_EVENT_TYPE;
      }

      if ((PI - Math.abs(direction)) < MAXIMUM_SPREAD) {
        customEventType = DRAG_LEFT_CUSTOM_EVENT_TYPE;
      }

      if (customEventType !== null) {
        const top = relativePosition.getTop(),
              left = relativePosition.getLeft();

        this.callCustomHandlers(customEventType, event, element, top, left);
      }
    }

    if (movingPositionsLength === 2) {
      const firstMovingPosition = first(movingPositions),
            secondMovingPosition = second(movingPositions),
            relativeMovingPosition = RelativePosition.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition),
            customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
            startMagnitude = this.getStartMagnitude(),
            magnitude = relativeMovingPosition.getMagnitude(),
            ratio = magnitude / startMagnitude;

      this.callCustomHandlers(customEventType, event, element, ratio);
    }
  }
}

function endHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions(),
        startPositionsLength = startPositions.length,
        movingPositionsLength = movingPositions.length;

  const positionsMatch = matchPositions(startPositions, movingPositions);

  if (positionsMatch) {
    let speed,
        customEventType = null;

    if (movingPositionsLength === 0) {
      customEventType = TAP_CUSTOM_EVENT_TYPE;
    } else if (startPositionsLength === 1) {
      const firstStartPosition = first(startPositions),
            firstMovingPosition = first(movingPositions),
            firstPosition = firstStartPosition, ///
            secondPosition = firstMovingPosition, ///
            relativePosition = RelativePosition.fromFirstPositionAndSecondPosition(firstPosition, secondPosition),
            direction = relativePosition.getDirection(),
            time = relativePosition.getTime();

      speed = relativePosition.getSpeed();

      if (speed === 0) {
        if (time < MAXIMUM_TAP_TIME) {
          customEventType = TAP_CUSTOM_EVENT_TYPE;
        }
      } else if (speed > MINIMUM_SWIPE_SPEED) {
        if ((Math.abs(direction)) < MAXIMUM_SPREAD) {
          customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE;

          speed = speed * Math.cos(direction);
        }

        if (Math.abs(PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
          customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE;

          speed = speed * Math.sin(direction);
        }

        if (Math.abs(-PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
          customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE;

          speed = speed * Math.sin(direction);
        }

        if ((PI - Math.abs(direction)) < MAXIMUM_SPREAD) {
          customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE;

          speed = speed * Math.cos(direction);
        }
      }
    }

    if (customEventType !== null) {
      this.callCustomHandlers(customEventType, event, element, speed);
    }
  }

  filterPositions(startPositions, positions);

  filterPositions(movingPositions, positions);
}

const touchMixins = {
  enableTouch,
  disableTouch,
  onCustomTap,
  offCustomTap,
  onCustomDragUp,
  offCustomDragUp,
  onCustomDragDown,
  offCustomDragDown,
  onCustomDragLeft,
  offCustomDragLeft,
  onCustomDragRight,
  offCustomDragRight,
  onCustomDragStart,
  offCustomDragStart,
  onCustomSwipeUp,
  offCustomSwipeUp,
  onCustomSwipeDown,
  offCustomSwipeDown,
  onCustomSwipeLeft,
  offCustomSwipeLeft,
  onCustomSwipeRight,
  offCustomSwipeRight,
  onCustomPinchMove,
  offCustomPinchMove,
  onCustomPinchStart,
  offCustomPinchStart,
  getStartMagnitude,
  setStartMagnitude,
  getStartPositions,
  setStartPositions,
  getMovingPositions,
  setMovingPositions,
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
