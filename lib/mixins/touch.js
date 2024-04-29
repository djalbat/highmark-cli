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
    var startPositionsLength = startPositions.length;
    if (startPositionsLength === 1) {
        var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), speed = relativePosition.getSpeed(), time = relativePosition.getTime();
        var customEventType = null, projectedVelocity;
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
        if (customEventType !== null) {
            this.callCustomHandlers(customEventType, event, element, projectedVelocity);
        }
    }
    filterPositions(startPositions, positions);
    filterPositions(movingPositions, positions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi9wb3NpdGlvblwiO1xuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TV0lQRV9SQU5HRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBBTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgY2xlYXIsIGZpbHRlciwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmxldCBjb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSBbXTtcblxuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9ucyxcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVG91Y2goKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vZmZUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBhbihwYW5DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBBTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBhbkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QYW4ocGFuQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQQU5fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwYW5DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb25zKCkge1xuICBjb25zdCB7IHN0YXJ0UG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0UG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TW92aW5nUG9zaXRpb25zKCkge1xuICBjb25zdCB7IG1vdmluZ1Bvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBtb3ZpbmdQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldE1vdmluZ1Bvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzZWNvbmRTdGFydFBvc2l0aW9uID0gc2Vjb25kKHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBtYWduaXR1ZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBBTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgICAgdG9wID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUb3AoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH1cblxuICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3QgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBtYWduaXR1ZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKTtcblxuICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICBpZiAoc3RhcnRQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpLFxuICAgICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKTtcblxuICAgIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsLFxuICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgaWYgKHRpbWUgPCBNQVhJTVVNX1RBUF9USU1FKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IHNwZWVkOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzcGVlZCA+IE1JTklNVU1fU1dJUEVfU1BFRUQpIHtcbiAgICAgIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NXSVBFX1JBTkdFKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TV0lQRV9SQU5HRSkge1xuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NXSVBFX1JBTkdFKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICAgICAgcHJvamVjdGVkVmVsb2NpdHkgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBwcm9qZWN0ZWRWZWxvY2l0eSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvbkN1c3RvbVRhcCxcbiAgb2ZmQ3VzdG9tVGFwLFxuICBvbkN1c3RvbVBhbixcbiAgb2ZmQ3VzdG9tUGFuLFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0U3RhcnRQb3NpdGlvbnMsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG91Y2hNaXhpbnM7XG5cbmZ1bmN0aW9uIHNvcnRQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBjb25zdCBwb3NpdGlvbkFNYXAgPSBwb3NpdGlvbnNBLnJlZHVjZSgocG9zaXRpb25BTWFwLCBwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcG9zaXRpb25BLmdldElkZW50aWZpZXIoKTtcblxuICAgIHBvc2l0aW9uQU1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uQTtcblxuICAgIHJldHVybiBwb3NpdGlvbkFNYXA7XG4gIH0sIHt9KTtcblxuICBjbGVhcihwb3NpdGlvbnNBKTtcblxuICBwb3NpdGlvbnNCLmZvckVhY2goKHBvc2l0aW9uQikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbkIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHBvc2l0aW9uQSA9IHBvc2l0aW9uQU1hcFtpZGVudGlmaWVyXTtcblxuICAgIHBvc2l0aW9uc0EucHVzaChwb3NpdGlvbkEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUG9zaXRpb25zKHBvc2l0aW9uc0EsIHBvc2l0aW9uc0IpIHtcbiAgZmlsdGVyKHBvc2l0aW9uc0EsIChwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gcG9zaXRpb25zQi5zb21lKChwb3NpdGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBwb3NpdGlvbkEubWF0Y2gocG9zaXRpb25CKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbk1hcCA9IHBvc2l0aW9ucy5yZWR1Y2UoKHBvc2l0aW9uTWFwLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwb3NpdGlvbk1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWFwO1xuICB9LCB7fSk7XG5cbiAgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhwb3NpdGlvbk1hcCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpLFxuICAgICAgICBwb3NpdGlvbnMgPSBbXG4gICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgXTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkID0gdHJ1ZSkge1xuICBsZXQgdG91Y2hlc05vZGVMaXN0O1xuXG4gIGlmIChjaGFuZ2VkKSB7XG4gICAgKHsgY2hhbmdlZFRvdWNoZXM6IHRvdWNoZXNOb2RlTGlzdCB9ID0gdG91Y2hFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdG91Y2hlczogdG91Y2hlc05vZGVMaXN0IH0gPSB0b3VjaEV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0IHRvdWNoZXMgPSBbXG4gICAgICAgICAgLi4udG91Y2hlc05vZGVMaXN0XG4gICAgICAgIF0sXG4gICAgICAgIHBvc2l0aW9ucyA9IHRvdWNoZXMubWFwKCh0b3VjaCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVRvdWNoKHRvdWNoKTtcblxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgY29tcHJlc3NQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNsZWFyIiwiZmlsdGVyIiwiZmlyc3QiLCJzZWNvbmQiLCJjb3VudCIsImVuYWJsZVRvdWNoIiwic3RhcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm1vdXNlVXBIYW5kbGVyIiwib25Ub3VjaFN0YXJ0IiwidG91Y2hTdGFydEhhbmRsZXIiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZUhhbmRsZXIiLCJvblRvdWNoRW5kIiwidG91Y2hFbmRIYW5kbGVyIiwiZGlzYWJsZVRvdWNoIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZlRvdWNoU3RhcnQiLCJvZmZUb3VjaE1vdmUiLCJvZmZUb3VjaEVuZCIsIm9uQ3VzdG9tVGFwIiwidGFwQ3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJUQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21QYW4iLCJwYW5DdXN0b21IYW5kbGVyIiwiUEFOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGFuIiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwiZ2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRTdGF0ZSIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJzb3J0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zTGVuZ3RoIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJsZWZ0IiwiZ2V0TGVmdCIsInRvcCIsImdldFRvcCIsInNlY29uZE1vdmluZ1Bvc2l0aW9uIiwicmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwic3BlZWQiLCJnZXRTcGVlZCIsInRpbWUiLCJnZXRUaW1lIiwicHJvamVjdGVkVmVsb2NpdHkiLCJNQVhJTVVNX1RBUF9USU1FIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NXSVBFX1JBTkdFIiwiY29zIiwiUElfT1ZFUl9UV08iLCJzaW4iLCJQSSIsInRvdWNoTWl4aW5zIiwicG9zaXRpb25zQSIsInBvc2l0aW9uc0IiLCJwb3NpdGlvbkFNYXAiLCJyZWR1Y2UiLCJwb3NpdGlvbkEiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZvckVhY2giLCJwb3NpdGlvbkIiLCJtYXRjaGVzIiwic29tZSIsIm1hdGNoIiwiY29tcHJlc3NQb3NpdGlvbnMiLCJwb3NpdGlvbk1hcCIsInBvc2l0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwiUG9zaXRpb24iLCJmcm9tTW91c2VFdmVudCIsInRvdWNoZXNOb2RlTGlzdCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyIsIm1hcCIsInRvdWNoIiwiZnJvbVRvdWNoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErWUE7OztlQUFBOzs7b0JBN1l1Qjt5QkFDUTsrREFFVjsrREFDUTt5QkFFK0Q7Z0NBUS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFBLE9BQXVDQyx5QkFBYyxDQUFyREQsTUFBTUUsUUFB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