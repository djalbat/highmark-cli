"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easy = require("easy");
var _necessary = require("necessary");
var _position = /*#__PURE__*/ _interop_require_default(require("../position"));
var _relative = /*#__PURE__*/ _interop_require_default(require("../position/relative"));
var _constants = require("../constants");
var _customEventTypes = require("../customEventTypes");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var count = 0;
function enableTouch() {
    var startPositions = [], movingPositions = [];
    this.updateState({
        startPositions: startPositions,
        movingPositions: movingPositions
    });
    this.onMouseDown(this.mouseDownHandler);
    this.onMouseMove(this.mouseMoveHandler);
    _easy.window.onMouseUp(this.mouseUpHandler, this);
    this.onTouchStart(this.touchStartHandler);
    this.onTouchMove(this.touchMoveHandler);
    this.onTouchEnd(this.touchEndHandler);
}
function disableTouch() {
    this.offMouseDown(this.mouseDownHandler);
    this.offMouseMove(this.mouseMoveHandler);
    _easy.window.offMouseUp(this.mouseUpHandler, this);
    this.offTouchStart(this.touchStartHandler);
    this.offTouchMove(this.touchMoveHandler);
    this.offTouchEnd(this.touchEndHandler);
}
function onCustomTap(tapCustomHandler, element) {
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE, customHandler = tapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomTap(tapCustomHandler, element) {
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE, customHandler = tapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPan(panCustomHandler, element) {
    var customEventType = _customEventTypes.PAN_CUSTOM_EVENT_TYPE, customHandler = panCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPan(panCustomHandler, element) {
    var customEventType = _customEventTypes.PAN_CUSTOM_EVENT_TYPE, customHandler = panCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeUp(swipeUpCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE, customHandler = swipeUpCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeUp(swipeUpCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE, customHandler = swipeUpCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeDown(swipeDownCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE, customHandler = swipeDownCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeDown(swipeDownCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE, customHandler = swipeDownCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeLeft(swipeLeftCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE, customHandler = swipeLeftCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeLeft(swipeLeftCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE, customHandler = swipeLeftCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeRight(swipeRightCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE, customHandler = swipeRightCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeRight(swipeRightCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE, customHandler = swipeRightCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchStart(pinchStartCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, customHandler = pinchStartCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchStart(pinchStartCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, customHandler = pinchStartCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchMove(pinchMoveCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchMove(pinchMoveCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function getStartPositions() {
    var startPositions = this.getState().startPositions;
    return startPositions;
}
function setStartPositions(startPositions) {
    this.updateState({
        startPositions: startPositions
    });
}
function getMovingPositions() {
    var movingPositions = this.getState().movingPositions;
    return movingPositions;
}
function setMovingPositions(movingPositions) {
    this.updateState({
        movingPositions: movingPositions
    });
}
function touchStartHandler(event, element) {
    this.startHandler(event, element, function(event) {
        var touchEvent = event, changed = false, positions = positionsFromTouchEvent(touchEvent, changed);
        return positions;
    });
}
function mouseDownHandler(event, element) {
    this.startHandler(event, element, function(event) {
        var mouseEvent = event, positions = positionsFromMouseEvent(mouseEvent);
        return positions;
    });
}
function touchMoveHandler(event, element) {
    this.moveHandler(event, element, function(event) {
        var touchEvent = event, changed = true, positions = positionsFromTouchEvent(touchEvent, changed);
        return positions;
    });
}
function mouseMoveHandler(event, element) {
    this.moveHandler(event, element, function(event) {
        var mouseEvent = event, positions = positionsFromMouseEvent(mouseEvent);
        return positions;
    });
}
function touchEndHandler(event, element) {
    this.endHandler(event, element, function(event) {
        var touchEvent = event, changed = true, positions = positionsFromTouchEvent(touchEvent, changed);
        return positions;
    });
}
function mouseUpHandler(event, element) {
    this.endHandler(event, element, function(event) {
        var mouseEvent = event, positions = positionsFromMouseEvent(mouseEvent);
        return positions;
    });
}
function startHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions();
    filterPositions(startPositions, positions);
    push(startPositions, positions);
    var startingPositionsLength = startPositions.length;
    if (startingPositionsLength === 2) {
        var firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, magnitude = relativeStartPosition.getMagnitude();
        this.callCustomHandlers(customEventType, event, element, magnitude);
    }
}
function moveHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
    filterPositions(movingPositions, positions);
    push(movingPositions, positions);
    sortPositions(movingPositions, startPositions);
    var movingPositionsLength = movingPositions.length;
    if (movingPositionsLength === 1) {
        var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), customEventType = _customEventTypes.PAN_CUSTOM_EVENT_TYPE, left = relativePosition.getLeft(), top = relativePosition.getTop();
        this.callCustomHandlers(customEventType, event, element, top, left);
    }
    if (movingPositionsLength === 2) {
        var firstMovingPosition1 = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition1, secondMovingPosition), customEventType1 = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, magnitude = relativeMovingPosition.getMagnitude();
        this.callCustomHandlers(customEventType1, event, element, magnitude);
    }
}
function endHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
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
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
    onCustomTap: onCustomTap,
    offCustomTap: offCustomTap,
    onCustomPan: onCustomPan,
    offCustomPan: offCustomPan,
    onCustomSwipeUp: onCustomSwipeUp,
    offCustomSwipeUp: offCustomSwipeUp,
    onCustomSwipeDown: onCustomSwipeDown,
    offCustomSwipeDown: offCustomSwipeDown,
    onCustomSwipeLeft: onCustomSwipeLeft,
    offCustomSwipeLeft: offCustomSwipeLeft,
    onCustomSwipeRight: onCustomSwipeRight,
    offCustomSwipeRight: offCustomSwipeRight,
    onCustomPinchStart: onCustomPinchStart,
    offCustomPinchStart: offCustomPinchStart,
    onCustomPinchMove: onCustomPinchMove,
    offCustomPinchMove: offCustomPinchMove,
    getStartPositions: getStartPositions,
    setStartPositions: setStartPositions,
    getMovingPositions: getMovingPositions,
    setMovingPositions: setMovingPositions,
    touchStartHandler: touchStartHandler,
    mouseDownHandler: mouseDownHandler,
    touchMoveHandler: touchMoveHandler,
    mouseMoveHandler: mouseMoveHandler,
    touchEndHandler: touchEndHandler,
    mouseUpHandler: mouseUpHandler,
    startHandler: startHandler,
    moveHandler: moveHandler,
    endHandler: endHandler
};
var _default = touchMixins;
function sortPositions(positionsA, positionsB) {
    var positionAMap = positionsA.reduce(function(positionAMap, positionA) {
        var identifier = positionA.getIdentifier();
        positionAMap[identifier] = positionA;
        return positionAMap;
    }, {});
    clear(positionsA);
    positionsB.forEach(function(positionB) {
        var identifier = positionB.getIdentifier(), positionA = positionAMap[identifier];
        positionsA.push(positionA);
    });
}
function filterPositions(positionsA, positionsB) {
    filter(positionsA, function(positionA) {
        var matches = positionsB.some(function(positionB) {
            var matches = positionA.match(positionB);
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
    var positionMap = positions.reduce(function(positionMap, position) {
        var identifier = position.getIdentifier();
        positionMap[identifier] = position;
        return positionMap;
    }, {});
    positions = Object.values(positionMap);
    return positions;
}
function positionsFromMouseEvent(mouseEvent) {
    var position = _position.default.fromMouseEvent(mouseEvent), positions = [
        position
    ];
    return positions;
}
function positionsFromTouchEvent(touchEvent) {
    var changed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var touchesNodeList;
    if (changed) {
        var ref;
        ref = touchEvent, touchesNodeList = ref.changedTouches, ref;
    } else {
        var ref1;
        ref1 = touchEvent, touchesNodeList = ref1.touches, ref1;
    }
    var touches = _to_consumable_array(touchesNodeList), positions = touches.map(function(touch) {
        var position = _position.default.fromTouch(touch);
        return position;
    });
    compressPositions(positions);
    return positions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi9wb3NpdGlvblwiO1xuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TV0lQRV9SQU5HRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBBTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgY2xlYXIsIGZpbHRlciwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmxldCBjb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSBbXTtcblxuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9ucyxcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVG91Y2goKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vZmZUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBhbihwYW5DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBBTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBhbkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QYW4ocGFuQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQQU5fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwYW5DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb25zKCkge1xuICBjb25zdCB7IHN0YXJ0UG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0UG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TW92aW5nUG9zaXRpb25zKCkge1xuICBjb25zdCB7IG1vdmluZ1Bvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBtb3ZpbmdQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldE1vdmluZ1Bvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzZWNvbmRTdGFydFBvc2l0aW9uID0gc2Vjb25kKHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBtYWduaXR1ZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBBTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgICAgdG9wID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUb3AoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH1cblxuICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3QgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBtYWduaXR1ZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICAvLyBsZXQgc3RhcnRQb3NpdGlvbjtcbiAgLy9cbiAgLy8gc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbigpO1xuICAvL1xuICAvLyBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gbnVsbCkge1xuICAvL1xuICAvLyAgIGNvbnN0IHBvc2l0aW9uID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KTtcbiAgLy9cbiAgLy8gICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IHBvc2l0aW9uTWF0Y2hlc1N0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbi5tYXRjaChzdGFydFBvc2l0aW9uKTtcbiAgLy9cbiAgLy8gICAgIGlmIChwb3NpdGlvbk1hdGNoZXNTdGFydFBvc2l0aW9uKSB7XG4gIC8vICAgICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21Qb3NpdGlvbkFuZFN0YXJ0UG9zaXRpb24ocG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAvLyAgICAgICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAvLyAgICAgICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKSxcbiAgLy8gICAgICAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpO1xuICAvL1xuICAvLyAgICAgICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbCxcbiAgLy8gICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5O1xuICAvL1xuICAvLyAgICAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgLy8gICAgICAgICBpZiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpIHtcbiAgLy8gICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgLy9cbiAgLy8gICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQ7ICAvLy9cbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0gZWxzZSBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gIC8vICAgICAgICAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgLy8gICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICAvL1xuICAvLyAgICAgICAgICAgcHJvamVjdGVkVmVsb2NpdHkgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIC8vICAgICAgICAgfVxuICAvL1xuICAvLyAgICAgICAgIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NXSVBFX1JBTkdFKSB7XG4gIC8vICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgLy9cbiAgLy8gICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICAvLyAgICAgICAgIH1cbiAgLy9cbiAgLy8gICAgICAgICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgLy8gICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIC8vXG4gIC8vICAgICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgLy8gICAgICAgICB9XG4gIC8vXG4gIC8vICAgICAgICAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TV0lQRV9SQU5HRSkge1xuICAvLyAgICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgLy9cbiAgLy8gICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvL1xuICAvLyAgICAgICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gIC8vICAgICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcHJvamVjdGVkVmVsb2NpdHkpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHN0YXJ0UG9zaXRpb24gPSBudWxsO1xuICAvL1xuICAvLyB0aGlzLnNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbik7XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvbkN1c3RvbVRhcCxcbiAgb2ZmQ3VzdG9tVGFwLFxuICBvbkN1c3RvbVBhbixcbiAgb2ZmQ3VzdG9tUGFuLFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0U3RhcnRQb3NpdGlvbnMsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG91Y2hNaXhpbnM7XG5cbmZ1bmN0aW9uIHNvcnRQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBjb25zdCBwb3NpdGlvbkFNYXAgPSBwb3NpdGlvbnNBLnJlZHVjZSgocG9zaXRpb25BTWFwLCBwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcG9zaXRpb25BLmdldElkZW50aWZpZXIoKTtcblxuICAgIHBvc2l0aW9uQU1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uQTtcblxuICAgIHJldHVybiBwb3NpdGlvbkFNYXA7XG4gIH0sIHt9KTtcblxuICBjbGVhcihwb3NpdGlvbnNBKTtcblxuICBwb3NpdGlvbnNCLmZvckVhY2goKHBvc2l0aW9uQikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbkIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHBvc2l0aW9uQSA9IHBvc2l0aW9uQU1hcFtpZGVudGlmaWVyXTtcblxuICAgIHBvc2l0aW9uc0EucHVzaChwb3NpdGlvbkEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUG9zaXRpb25zKHBvc2l0aW9uc0EsIHBvc2l0aW9uc0IpIHtcbiAgZmlsdGVyKHBvc2l0aW9uc0EsIChwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gcG9zaXRpb25zQi5zb21lKChwb3NpdGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBwb3NpdGlvbkEubWF0Y2gocG9zaXRpb25CKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbk1hcCA9IHBvc2l0aW9ucy5yZWR1Y2UoKHBvc2l0aW9uTWFwLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwb3NpdGlvbk1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWFwO1xuICB9LCB7fSk7XG5cbiAgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhwb3NpdGlvbk1hcCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpLFxuICAgICAgICBwb3NpdGlvbnMgPSBbXG4gICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgXTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkID0gdHJ1ZSkge1xuICBsZXQgdG91Y2hlc05vZGVMaXN0O1xuXG4gIGlmIChjaGFuZ2VkKSB7XG4gICAgKHsgY2hhbmdlZFRvdWNoZXM6IHRvdWNoZXNOb2RlTGlzdCB9ID0gdG91Y2hFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdG91Y2hlczogdG91Y2hlc05vZGVMaXN0IH0gPSB0b3VjaEV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0IHRvdWNoZXMgPSBbXG4gICAgICAgICAgLi4udG91Y2hlc05vZGVMaXN0XG4gICAgICAgIF0sXG4gICAgICAgIHBvc2l0aW9ucyA9IHRvdWNoZXMubWFwKCh0b3VjaCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVRvdWNoKHRvdWNoKTtcblxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgY29tcHJlc3NQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNsZWFyIiwiZmlsdGVyIiwiZmlyc3QiLCJzZWNvbmQiLCJjb3VudCIsImVuYWJsZVRvdWNoIiwic3RhcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm1vdXNlVXBIYW5kbGVyIiwib25Ub3VjaFN0YXJ0IiwidG91Y2hTdGFydEhhbmRsZXIiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZUhhbmRsZXIiLCJvblRvdWNoRW5kIiwidG91Y2hFbmRIYW5kbGVyIiwiZGlzYWJsZVRvdWNoIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZlRvdWNoU3RhcnQiLCJvZmZUb3VjaE1vdmUiLCJvZmZUb3VjaEVuZCIsIm9uQ3VzdG9tVGFwIiwidGFwQ3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJUQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21QYW4iLCJwYW5DdXN0b21IYW5kbGVyIiwiUEFOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGFuIiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwiZ2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRTdGF0ZSIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJzb3J0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zTGVuZ3RoIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJsZWZ0IiwiZ2V0TGVmdCIsInRvcCIsImdldFRvcCIsInNlY29uZE1vdmluZ1Bvc2l0aW9uIiwicmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiIsInRvdWNoTWl4aW5zIiwicG9zaXRpb25zQSIsInBvc2l0aW9uc0IiLCJwb3NpdGlvbkFNYXAiLCJyZWR1Y2UiLCJwb3NpdGlvbkEiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZvckVhY2giLCJwb3NpdGlvbkIiLCJtYXRjaGVzIiwic29tZSIsIm1hdGNoIiwiY29tcHJlc3NQb3NpdGlvbnMiLCJwb3NpdGlvbk1hcCIsInBvc2l0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwiUG9zaXRpb24iLCJmcm9tTW91c2VFdmVudCIsInRvdWNoZXNOb2RlTGlzdCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyIsIm1hcCIsInRvdWNoIiwiZnJvbVRvdWNoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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