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
    var startMagnitude = null, startPositions = [], movingPositions = [];
    this.updateState({
        startMagnitude: startMagnitude,
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
function onCustomDrag(dragCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, customHandler = dragCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDrag(dragCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, customHandler = dragCustomHandler; ///
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
function getStartMagnitude() {
    var startMagnitude = this.getState().startMagnitude;
    return startMagnitude;
}
function setStartMagnitude(startMagnitude) {
    this.updateState({
        startMagnitude: startMagnitude
    });
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
        var touchEvent = event, changed = false, positions = positionsFromTouchEvent(touchEvent, changed);
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
        var firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude, customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE;
        this.setStartMagnitude(startMagnitude);
        this.callCustomHandlers(customEventType, event, element);
    }
}
function moveHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
    filterPositions(movingPositions, positions);
    push(movingPositions, positions);
    sortPositions(movingPositions, startPositions);
    var movingPositionsLength = movingPositions.length;
    if (movingPositionsLength === 1) {
        var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, left = relativePosition.getLeft(), top = relativePosition.getTop();
        this.callCustomHandlers(customEventType, event, element, top, left);
    }
    if (movingPositionsLength === 2) {
        var firstMovingPosition1 = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition1, secondMovingPosition), customEventType1 = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
        this.callCustomHandlers(customEventType1, event, element, ratio);
    }
}
function endHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
    var startPositionsLength = startPositions.length, movingPositionsLength = movingPositions.length;
    var customEventType = null, projectedVelocity;
    if (movingPositionsLength === 0) {
        customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
        projectedVelocity = 0;
    } else if (startPositionsLength === 1) {
        var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), speed = relativePosition.getSpeed(), time = relativePosition.getTime();
        if (speed === 0) {
            if (time < _constants.MAXIMUM_TAP_TIME) {
                customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
                projectedVelocity = speed; ///
            }
        } else if (speed > _constants.MINIMUM_SWIPE_SPEED) {
            if (Math.abs(direction) < _constants.MAXIMUM_SWIPE_RANGE) {
                customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE;
                projectedVelocity = speed * Math.cos(direction);
            }
            if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SWIPE_RANGE) {
                customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE;
                projectedVelocity = speed * Math.sin(direction);
            }
            if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SWIPE_RANGE) {
                customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE;
                projectedVelocity = speed * Math.sin(direction);
            }
            if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SWIPE_RANGE) {
                customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE;
                projectedVelocity = speed * Math.cos(direction);
            }
        }
    }
    if (customEventType !== null) {
        this.callCustomHandlers(customEventType, event, element, projectedVelocity);
    }
    filterPositions(startPositions, positions);
    filterPositions(movingPositions, positions);
}
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
    onCustomTap: onCustomTap,
    offCustomTap: offCustomTap,
    onCustomDrag: onCustomDrag,
    offCustomDrag: offCustomDrag,
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
    getStartMagnitude: getStartMagnitude,
    setStartMagnitude: setStartMagnitude,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi9wb3NpdGlvblwiO1xuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TV0lQRV9SQU5HRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IHB1c2gsIGNsZWFyLCBmaWx0ZXIsIGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5sZXQgY291bnQgPSAwO1xuXG5mdW5jdGlvbiBlbmFibGVUb3VjaCgpIHtcbiAgY29uc3Qgc3RhcnRNYWduaXR1ZGUgPSBudWxsLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSBbXTtcblxuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZSxcbiAgICBzdGFydFBvc2l0aW9ucyxcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVG91Y2goKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vZmZUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWcoZHJhZ0N1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZyhkcmFnQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0N1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRNYWduaXR1ZGUoKSB7XG4gIGNvbnN0IHsgc3RhcnRNYWduaXR1ZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNYWduaXR1ZGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TWFnbml0dWRlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3QgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlU3RhcnRQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZSwgLy8vXG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICAgbGVmdCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9XG5cbiAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICAgIHNlY29uZE1vdmluZ1Bvc2l0aW9uID0gc2Vjb25kKG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICBzdGFydE1hZ25pdHVkZSA9IHRoaXMuZ2V0U3RhcnRNYWduaXR1ZGUoKSxcbiAgICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCByYXRpbyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsLFxuICAgICAgcHJvamVjdGVkVmVsb2NpdHk7XG5cbiAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHByb2plY3RlZFZlbG9jaXR5ID0gMDtcbiAgfSBlbHNlIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCksXG4gICAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpO1xuXG4gICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICBpZiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNwZWVkID4gTUlOSU1VTV9TV0lQRV9TUEVFRCkge1xuICAgICAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICAgICAgcHJvamVjdGVkVmVsb2NpdHkgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NXSVBFX1JBTkdFKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TV0lQRV9SQU5HRSkge1xuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBwcm9qZWN0ZWRWZWxvY2l0eSk7XG4gIH1cblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcbn1cblxuY29uc3QgdG91Y2hNaXhpbnMgPSB7XG4gIGVuYWJsZVRvdWNoLFxuICBkaXNhYmxlVG91Y2gsXG4gIG9uQ3VzdG9tVGFwLFxuICBvZmZDdXN0b21UYXAsXG4gIG9uQ3VzdG9tRHJhZyxcbiAgb2ZmQ3VzdG9tRHJhZyxcbiAgb25DdXN0b21Td2lwZVVwLFxuICBvZmZDdXN0b21Td2lwZVVwLFxuICBvbkN1c3RvbVN3aXBlRG93bixcbiAgb2ZmQ3VzdG9tU3dpcGVEb3duLFxuICBvbkN1c3RvbVN3aXBlTGVmdCxcbiAgb2ZmQ3VzdG9tU3dpcGVMZWZ0LFxuICBvbkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9mZkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9uQ3VzdG9tUGluY2hTdGFydCxcbiAgb2ZmQ3VzdG9tUGluY2hTdGFydCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgZ2V0U3RhcnRNYWduaXR1ZGUsXG4gIHNldFN0YXJ0TWFnbml0dWRlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0U3RhcnRQb3NpdGlvbnMsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG91Y2hNaXhpbnM7XG5cbmZ1bmN0aW9uIHNvcnRQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBjb25zdCBwb3NpdGlvbkFNYXAgPSBwb3NpdGlvbnNBLnJlZHVjZSgocG9zaXRpb25BTWFwLCBwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcG9zaXRpb25BLmdldElkZW50aWZpZXIoKTtcblxuICAgIHBvc2l0aW9uQU1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uQTtcblxuICAgIHJldHVybiBwb3NpdGlvbkFNYXA7XG4gIH0sIHt9KTtcblxuICBjbGVhcihwb3NpdGlvbnNBKTtcblxuICBwb3NpdGlvbnNCLmZvckVhY2goKHBvc2l0aW9uQikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbkIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHBvc2l0aW9uQSA9IHBvc2l0aW9uQU1hcFtpZGVudGlmaWVyXTtcblxuICAgIHBvc2l0aW9uc0EucHVzaChwb3NpdGlvbkEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUG9zaXRpb25zKHBvc2l0aW9uc0EsIHBvc2l0aW9uc0IpIHtcbiAgZmlsdGVyKHBvc2l0aW9uc0EsIChwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gcG9zaXRpb25zQi5zb21lKChwb3NpdGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBwb3NpdGlvbkEubWF0Y2gocG9zaXRpb25CKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbk1hcCA9IHBvc2l0aW9ucy5yZWR1Y2UoKHBvc2l0aW9uTWFwLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwb3NpdGlvbk1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWFwO1xuICB9LCB7fSk7XG5cbiAgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhwb3NpdGlvbk1hcCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpLFxuICAgICAgICBwb3NpdGlvbnMgPSBbXG4gICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgXTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkID0gdHJ1ZSkge1xuICBsZXQgdG91Y2hlc05vZGVMaXN0O1xuXG4gIGlmIChjaGFuZ2VkKSB7XG4gICAgKHsgY2hhbmdlZFRvdWNoZXM6IHRvdWNoZXNOb2RlTGlzdCB9ID0gdG91Y2hFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdG91Y2hlczogdG91Y2hlc05vZGVMaXN0IH0gPSB0b3VjaEV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0IHRvdWNoZXMgPSBbXG4gICAgICAgICAgLi4udG91Y2hlc05vZGVMaXN0XG4gICAgICAgIF0sXG4gICAgICAgIHBvc2l0aW9ucyA9IHRvdWNoZXMubWFwKCh0b3VjaCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVRvdWNoKHRvdWNoKTtcblxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgY29tcHJlc3NQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNsZWFyIiwiZmlsdGVyIiwiZmlyc3QiLCJzZWNvbmQiLCJjb3VudCIsImVuYWJsZVRvdWNoIiwic3RhcnRNYWduaXR1ZGUiLCJzdGFydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9ucyIsInVwZGF0ZVN0YXRlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwid2luZG93Iiwib25Nb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsIm9uVG91Y2hNb3ZlIiwidG91Y2hNb3ZlSGFuZGxlciIsIm9uVG91Y2hFbmQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJkaXNhYmxlVG91Y2giLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmVG91Y2hTdGFydCIsIm9mZlRvdWNoTW92ZSIsIm9mZlRvdWNoRW5kIiwib25DdXN0b21UYXAiLCJ0YXBDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlRBUF9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50Iiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRXZlbnQiLCJvbkN1c3RvbURyYWciLCJkcmFnQ3VzdG9tSGFuZGxlciIsIkRSQUdfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnIiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJnZXRTdGF0ZSIsInNldFN0YXJ0TWFnbml0dWRlIiwiZ2V0U3RhcnRQb3NpdGlvbnMiLCJzZXRTdGFydFBvc2l0aW9ucyIsImdldE1vdmluZ1Bvc2l0aW9ucyIsInNldE1vdmluZ1Bvc2l0aW9ucyIsImV2ZW50Iiwic3RhcnRIYW5kbGVyIiwidG91Y2hFdmVudCIsImNoYW5nZWQiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCIsIm1vdXNlRXZlbnQiLCJwb3NpdGlvbnNGcm9tTW91c2VFdmVudCIsIm1vdmVIYW5kbGVyIiwiZW5kSGFuZGxlciIsInBvc2l0aW9uc0Zyb21FdmVudCIsImZpbHRlclBvc2l0aW9ucyIsInN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdGFydFBvc2l0aW9uIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsIlJlbGF0aXZlUG9zaXRpb24iLCJmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImZpcnN0TW92aW5nUG9zaXRpb24iLCJmaXJzdFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwibGVmdCIsImdldExlZnQiLCJ0b3AiLCJnZXRUb3AiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJyYXRpbyIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicHJvamVjdGVkVmVsb2NpdHkiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJzcGVlZCIsImdldFNwZWVkIiwidGltZSIsImdldFRpbWUiLCJNQVhJTVVNX1RBUF9USU1FIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NXSVBFX1JBTkdFIiwiY29zIiwiUElfT1ZFUl9UV08iLCJzaW4iLCJQSSIsInRvdWNoTWl4aW5zIiwicG9zaXRpb25zQSIsInBvc2l0aW9uc0IiLCJwb3NpdGlvbkFNYXAiLCJyZWR1Y2UiLCJwb3NpdGlvbkEiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZvckVhY2giLCJwb3NpdGlvbkIiLCJtYXRjaGVzIiwic29tZSIsIm1hdGNoIiwiY29tcHJlc3NQb3NpdGlvbnMiLCJwb3NpdGlvbk1hcCIsInBvc2l0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwiUG9zaXRpb24iLCJmcm9tTW91c2VFdmVudCIsInRvdWNoZXNOb2RlTGlzdCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyIsIm1hcCIsInRvdWNoIiwiZnJvbVRvdWNoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeWFBOzs7ZUFBQTs7O29CQXZhdUI7eUJBQ1E7K0RBRVY7K0RBQ1E7eUJBRStEO2dDQVEvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFRQSxPQUF1Q0MseUJBQWMsQ0FBckRELE1BQU1FLFFBQWlDRCx5QkFBYyxDQUEvQ0MsT0FBT0MsU0FBMEJGLHlCQUFjLENBQXhDRSxRQUFRQyxRQUFrQkgseUJBQWMsQ0FBaENHLE9BQU9DLFNBQVdKLHlCQUFjLENBQXpCSTtBQUVwQyxJQUFJQyxRQUFRO0FBRVosU0FBU0M7SUFDUCxJQUFNQyxpQkFBaUIsTUFDakJDLGlC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