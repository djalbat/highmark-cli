"use strict";

import { window } from "easy";
import { arrayUtilities } from "necessary";

import Position from "../position";
import RelativePosition from "../position/relative";

import { PI, PI_OVER_TWO, MAXIMUM_TAP_TIME, MINIMUM_SWIPE_SPEED, MAXIMUM_SWIPE_RANGE } from "../constants";
import { TAP_CUSTOM_EVENT_TYPE,
         PAN_CUSTOM_EVENT_TYPE,
         SWIPE_UP_CUSTOM_EVENT_TYPE,
         SWIPE_DOWN_CUSTOM_EVENT_TYPE,
         SWIPE_LEFT_CUSTOM_EVENT_TYPE,
         SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
         PINCH_START_CUSTOM_EVENT_TYPE,
         PINCH_MOVE_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { push, clear, filter, first, second } = arrayUtilities;

let count = 0;

function enableTouch() {
  const startPositions = [],
        movingPositions = [];

  this.updateState({
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

function onCustomPan(panCustomHandler, element) {
  const customEventType = PAN_CUSTOM_EVENT_TYPE,
        customHandler = panCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomPan(panCustomHandler, element) {
  const customEventType = PAN_CUSTOM_EVENT_TYPE,
        customHandler = panCustomHandler; ///

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
          changed = true,
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

  if (startingPositionsLength === 2) {
    const firstStartPosition = first(startPositions),
          secondStartPosition = second(startPositions),
          relativeStartPosition = RelativePosition.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition),
          customEventType = PINCH_START_CUSTOM_EVENT_TYPE,
          magnitude = relativeStartPosition.getMagnitude();

    this.callCustomHandlers(customEventType, event, element, magnitude);
  }
}

function moveHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions();

  filterPositions(movingPositions, positions);

  push(movingPositions, positions);

  sortPositions(movingPositions, startPositions);

  const movingPositionsLength = movingPositions.length;

  if (movingPositionsLength === 1) {
    const firstStartPosition = first(startPositions),
          firstMovingPosition = first(movingPositions),
          firstPosition = firstStartPosition, ///
          secondPosition = firstMovingPosition, ///
          relativePosition = RelativePosition.fromFirstPositionAndSecondPosition(firstPosition, secondPosition),
          customEventType = PAN_CUSTOM_EVENT_TYPE,
          left = relativePosition.getLeft(),
          top = relativePosition.getTop();

    this.callCustomHandlers(customEventType, event, element, top, left);
  }

  if (movingPositionsLength === 2) {
    const firstMovingPosition = first(movingPositions),
          secondMovingPosition = second(movingPositions),
          relativeMovingPosition = RelativePosition.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition),
          customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
          magnitude = relativeMovingPosition.getMagnitude();

    this.callCustomHandlers(customEventType, event, element, magnitude);
  }
}

function endHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions();

  filterPositions(startPositions, positions);

  filterPositions(movingPositions, positions);

  // let startPosition;
  //
  // startPosition = this.getStartPosition();
  //
  // if (startPosition !== null) {
  //
  //   const position = positionsFromEvent(event);
  //
  //   if (position !== null) {
  //     const positionMatchesStartPosition = position.match(startPosition);
  //
  //     if (positionMatchesStartPosition) {
  //       const relativePosition = RelativePosition.fromPositionAndStartPosition(position, startPosition),
  //             direction = relativePosition.getDirection(),
  //             speed = relativePosition.getSpeed(),
  //             time = relativePosition.getTime();
  //
  //       let customEventType = null,
  //           projectedVelocity;
  //
  //       if (speed === 0) {
  //         if (time < MAXIMUM_TAP_TIME) {
  //           customEventType = TAP_CUSTOM_EVENT_TYPE;
  //
  //           projectedVelocity = speed;  ///
  //         }
  //       } else if (speed > MINIMUM_SWIPE_SPEED) {
  //         if ((Math.abs(direction)) < MAXIMUM_SWIPE_RANGE) {
  //           customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE;
  //
  //           projectedVelocity = speed * Math.cos(direction);
  //         }
  //
  //         if (Math.abs(PI_OVER_TWO - direction) < MAXIMUM_SWIPE_RANGE) {
  //           customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE;
  //
  //           projectedVelocity = speed * Math.sin(direction);
  //         }
  //
  //         if (Math.abs(-PI_OVER_TWO - direction) < MAXIMUM_SWIPE_RANGE) {
  //           customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE;
  //
  //           projectedVelocity = speed * Math.sin(direction);
  //         }
  //
  //         if ((PI - Math.abs(direction)) < MAXIMUM_SWIPE_RANGE) {
  //           customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE;
  //
  //           projectedVelocity = speed * Math.cos(direction);
  //         }
  //       }
  //
  //       if (customEventType !== null) {
  //         this.callCustomHandlers(customEventType, event, element, projectedVelocity);
  //       }
  //     }
  //   }
  // }
  //
  // startPosition = null;
  //
  // this.setStartPosition(startPosition);
}

const touchMixins = {
  enableTouch,
  disableTouch,
  onCustomTap,
  offCustomTap,
  onCustomPan,
  offCustomPan,
  onCustomSwipeUp,
  offCustomSwipeUp,
  onCustomSwipeDown,
  offCustomSwipeDown,
  onCustomSwipeLeft,
  offCustomSwipeLeft,
  onCustomSwipeRight,
  offCustomSwipeRight,
  onCustomPinchStart,
  offCustomPinchStart,
  onCustomPinchMove,
  offCustomPinchMove,
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

function sortPositions(positionsA, positionsB) {
  const positionAMap = positionsA.reduce((positionAMap, positionA) => {
    const identifier = positionA.getIdentifier();

    positionAMap[identifier] = positionA;

    return positionAMap;
  }, {});

  clear(positionsA);

  positionsB.forEach((positionB) => {
    const identifier = positionB.getIdentifier(),
          positionA = positionAMap[identifier];

    positionsA.push(positionA);
  });
}

function filterPositions(positionsA, positionsB) {
  filter(positionsA, (positionA) => {
    const matches = positionsB.some((positionB) => {
      const matches = positionA.match(positionB);

      if (matches) {
        return true;
      }
    });

    if (!matches) {
      return true;
    }
  });
}

function compressPositions(positions) {
  const positionMap = positions.reduce((positionMap, position) => {
    const identifier = position.getIdentifier();

    positionMap[identifier] = position;

    return positionMap;
  }, {});

  positions = Object.values(positionMap);

  return positions;
}

function positionsFromMouseEvent(mouseEvent) {
  const position = Position.fromMouseEvent(mouseEvent),
        positions = [
          position
        ];

  return positions;
}

function positionsFromTouchEvent(touchEvent, changed = true) {
  let touchesNodeList;

  if (changed) {
    ({ changedTouches: touchesNodeList } = touchEvent);
  } else {
    ({ touches: touchesNodeList } = touchEvent);
  }

  const touches = [
          ...touchesNodeList
        ],
        positions = touches.map((touch) => {
          const position = Position.fromTouch(touch);

          return position;
        });

  compressPositions(positions);

  return positions;
}
