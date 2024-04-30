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
function onCustomDragMove(dragMoveCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_MOVE_CUSTOM_EVENT_TYPE, customHandler = dragMoveCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragMove(dragMoveCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_MOVE_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragStart(dragStartCustomHandler1, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler1; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragStart(dragStartCustomHandler1, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler1; ///
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
function onCustomPinchMove(pinchMoveCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchMove(pinchMoveCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
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
    var positionsMatch = matchPositions(startPositions, movingPositions);
    if (positionsMatch) {
        sortPositions(movingPositions, startPositions);
        var movingPositionsLength = movingPositions.length;
        if (movingPositionsLength === 1) {
            var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), customEventType = _customEventTypes.DRAG_MOVE_CUSTOM_EVENT_TYPE, left = relativePosition.getLeft(), top = relativePosition.getTop();
            this.callCustomHandlers(customEventType, event, element, top, left);
        }
        if (movingPositionsLength === 2) {
            var firstMovingPosition1 = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition1, secondMovingPosition), customEventType1 = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
            this.callCustomHandlers(customEventType1, event, element, ratio);
        }
    }
}
function endHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), startPositionsLength = startPositions.length, movingPositionsLength = movingPositions.length;
    var positionsMatch = matchPositions(startPositions, movingPositions);
    if (positionsMatch) {
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
    }
    filterPositions(startPositions, positions);
    filterPositions(movingPositions, positions);
}
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
    onCustomTap: onCustomTap,
    offCustomTap: offCustomTap,
    onCustomDragMove: onCustomDragMove,
    offCustomDragMove: offCustomDragMove,
    onCustomDragStart: onCustomDragStart,
    offCustomDragStart: offCustomDragStart,
    onCustomSwipeUp: onCustomSwipeUp,
    offCustomSwipeUp: offCustomSwipeUp,
    onCustomSwipeDown: onCustomSwipeDown,
    offCustomSwipeDown: offCustomSwipeDown,
    onCustomSwipeLeft: onCustomSwipeLeft,
    offCustomSwipeLeft: offCustomSwipeLeft,
    onCustomSwipeRight: onCustomSwipeRight,
    offCustomSwipeRight: offCustomSwipeRight,
    onCustomPinchMove: onCustomPinchMove,
    offCustomPinchMove: offCustomPinchMove,
    onCustomPinchStart: onCustomPinchStart,
    offCustomPinchStart: offCustomPinchStart,
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
function matchPositions(positionsA, positionsB) {
    var positionsMatch = false;
    var positionsALength = positionsA.length, positionsBLength = positionsB.length;
    if (positionsALength === positionsBLength) {
        var identifiersA = identifiersFromPositions(positionsA), identifiersB = identifiersFromPositions(positionsB);
        identifiersA.sort();
        identifiersB.sort();
        var identifiersMatch = identifiersA.every(function(identifierA, index) {
            var identifierB = identifiersB[index];
            if (identifierA === identifierB) {
                return true;
            }
        });
        positionsMatch = identifiersMatch; ///
    }
    return positionsMatch;
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
function identifiersFromPositions(positions) {
    var identifiers = positions.map(function(position) {
        var identifier = position.getIdentifier();
        return identifier;
    });
    return identifiers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi9wb3NpdGlvblwiO1xuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TV0lQRV9SQU5HRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IHB1c2gsIGNsZWFyLCBmaWx0ZXIsIGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBlbmFibGVUb3VjaCgpIHtcbiAgY29uc3Qgc3RhcnRNYWduaXR1ZGUgPSBudWxsLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSBbXTtcblxuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZSxcbiAgICBzdGFydFBvc2l0aW9ucyxcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVG91Y2goKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vZmZUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdNb3ZlKGRyYWdNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnTW92ZShkcmFnTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRNYWduaXR1ZGUoKSB7XG4gIGNvbnN0IHsgc3RhcnRNYWduaXR1ZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNYWduaXR1ZGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TWFnbml0dWRlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3QgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlU3RhcnRQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZSwgLy8vXG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIHNvcnRQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBzdGFydFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCk7XG5cbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgICBzZWNvbmRNb3ZpbmdQb3NpdGlvbiA9IHNlY29uZChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSB0aGlzLmdldFN0YXJ0TWFnbml0dWRlKCksXG4gICAgICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICAgICAgcmF0aW8gPSBtYWduaXR1ZGUgLyBzdGFydE1hZ25pdHVkZTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGNvbnN0IHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGwsXG4gICAgICAgIHByb2plY3RlZFZlbG9jaXR5O1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IDA7XG4gICAgfSBlbHNlIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKSxcbiAgICAgICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKTtcblxuICAgICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICAgIGlmICh0aW1lIDwgTUFYSU1VTV9UQVBfVElNRSkge1xuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQ7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzcGVlZCA+IE1JTklNVU1fU1dJUEVfU1BFRUQpIHtcbiAgICAgICAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1dJUEVfUkFOR0UpIHtcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NXSVBFX1JBTkdFKSB7XG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICAgIHByb2plY3RlZFZlbG9jaXR5ID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TV0lQRV9SQU5HRSkge1xuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICAgICAgICBwcm9qZWN0ZWRWZWxvY2l0eSA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHByb2plY3RlZFZlbG9jaXR5KTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcbn1cblxuY29uc3QgdG91Y2hNaXhpbnMgPSB7XG4gIGVuYWJsZVRvdWNoLFxuICBkaXNhYmxlVG91Y2gsXG4gIG9uQ3VzdG9tVGFwLFxuICBvZmZDdXN0b21UYXAsXG4gIG9uQ3VzdG9tRHJhZ01vdmUsXG4gIG9mZkN1c3RvbURyYWdNb3ZlLFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcblxuZnVuY3Rpb24gc29ydFBvc2l0aW9ucyhwb3NpdGlvbnNBLCBwb3NpdGlvbnNCKSB7XG4gIGNvbnN0IHBvc2l0aW9uQU1hcCA9IHBvc2l0aW9uc0EucmVkdWNlKChwb3NpdGlvbkFNYXAsIHBvc2l0aW9uQSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbkEuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcG9zaXRpb25BTWFwW2lkZW50aWZpZXJdID0gcG9zaXRpb25BO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uQU1hcDtcbiAgfSwge30pO1xuXG4gIGNsZWFyKHBvc2l0aW9uc0EpO1xuXG4gIHBvc2l0aW9uc0IuZm9yRWFjaCgocG9zaXRpb25CKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uQi5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgcG9zaXRpb25BID0gcG9zaXRpb25BTWFwW2lkZW50aWZpZXJdO1xuXG4gICAgcG9zaXRpb25zQS5wdXNoKHBvc2l0aW9uQSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXRjaFBvc2l0aW9ucyhwb3NpdGlvbnNBLCBwb3NpdGlvbnNCKSB7XG4gIGxldCBwb3NpdGlvbnNNYXRjaCA9IGZhbHNlO1xuXG4gIGNvbnN0IHBvc2l0aW9uc0FMZW5ndGggPSBwb3NpdGlvbnNBLmxlbmd0aCxcbiAgICAgICAgcG9zaXRpb25zQkxlbmd0aCA9IHBvc2l0aW9uc0IubGVuZ3RoO1xuXG4gIGlmIChwb3NpdGlvbnNBTGVuZ3RoID09PSBwb3NpdGlvbnNCTGVuZ3RoKSB7XG4gICAgY29uc3QgaWRlbnRpZmllcnNBID0gaWRlbnRpZmllcnNGcm9tUG9zaXRpb25zKHBvc2l0aW9uc0EpLFxuICAgICAgICAgIGlkZW50aWZpZXJzQiA9IGlkZW50aWZpZXJzRnJvbVBvc2l0aW9ucyhwb3NpdGlvbnNCKTtcblxuICAgIGlkZW50aWZpZXJzQS5zb3J0KCk7XG5cbiAgICBpZGVudGlmaWVyc0Iuc29ydCgpO1xuXG4gICAgY29uc3QgaWRlbnRpZmllcnNNYXRjaCA9IGlkZW50aWZpZXJzQS5ldmVyeSgoaWRlbnRpZmllckEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyQiA9IGlkZW50aWZpZXJzQltpbmRleF07XG5cbiAgICAgIGlmIChpZGVudGlmaWVyQSA9PT0gaWRlbnRpZmllckIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwb3NpdGlvbnNNYXRjaCA9IGlkZW50aWZpZXJzTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUG9zaXRpb25zKHBvc2l0aW9uc0EsIHBvc2l0aW9uc0IpIHtcbiAgZmlsdGVyKHBvc2l0aW9uc0EsIChwb3NpdGlvbkEpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gcG9zaXRpb25zQi5zb21lKChwb3NpdGlvbkIpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBwb3NpdGlvbkEubWF0Y2gocG9zaXRpb25CKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbk1hcCA9IHBvc2l0aW9ucy5yZWR1Y2UoKHBvc2l0aW9uTWFwLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwb3NpdGlvbk1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWFwO1xuICB9LCB7fSk7XG5cbiAgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhwb3NpdGlvbk1hcCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICBjb25zdCBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpLFxuICAgICAgICBwb3NpdGlvbnMgPSBbXG4gICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgXTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkID0gdHJ1ZSkge1xuICBsZXQgdG91Y2hlc05vZGVMaXN0O1xuXG4gIGlmIChjaGFuZ2VkKSB7XG4gICAgKHsgY2hhbmdlZFRvdWNoZXM6IHRvdWNoZXNOb2RlTGlzdCB9ID0gdG91Y2hFdmVudCk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdG91Y2hlczogdG91Y2hlc05vZGVMaXN0IH0gPSB0b3VjaEV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0IHRvdWNoZXMgPSBbXG4gICAgICAgICAgLi4udG91Y2hlc05vZGVMaXN0XG4gICAgICAgIF0sXG4gICAgICAgIHBvc2l0aW9ucyA9IHRvdWNoZXMubWFwKCh0b3VjaCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVRvdWNoKHRvdWNoKTtcblxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgY29tcHJlc3NQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyc0Zyb21Qb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gIGNvbnN0IGlkZW50aWZpZXJzID0gcG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcG9zaXRpb24uZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH0pO1xuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjbGVhciIsImZpbHRlciIsImZpcnN0Iiwic2Vjb25kIiwiZW5hYmxlVG91Y2giLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJvbkN1c3RvbVRhcCIsInRhcEN1c3RvbUhhbmRsZXIiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21FdmVudCIsIm9uQ3VzdG9tRHJhZ01vdmUiLCJkcmFnTW92ZUN1c3RvbUhhbmRsZXIiLCJEUkFHX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTW92ZSIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbURyYWdTdGFydCIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJnZXRTdGFydE1hZ25pdHVkZSIsImdldFN0YXRlIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJnZXRTdGFydFBvc2l0aW9ucyIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImZpcnN0TW92aW5nUG9zaXRpb24iLCJmaXJzdFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwibGVmdCIsImdldExlZnQiLCJ0b3AiLCJnZXRUb3AiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJyYXRpbyIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicHJvamVjdGVkVmVsb2NpdHkiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJzcGVlZCIsImdldFNwZWVkIiwidGltZSIsImdldFRpbWUiLCJNQVhJTVVNX1RBUF9USU1FIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NXSVBFX1JBTkdFIiwiY29zIiwiUElfT1ZFUl9UV08iLCJzaW4iLCJQSSIsInRvdWNoTWl4aW5zIiwicG9zaXRpb25zQSIsInBvc2l0aW9uc0IiLCJwb3NpdGlvbkFNYXAiLCJyZWR1Y2UiLCJwb3NpdGlvbkEiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImZvckVhY2giLCJwb3NpdGlvbkIiLCJwb3NpdGlvbnNBTGVuZ3RoIiwicG9zaXRpb25zQkxlbmd0aCIsImlkZW50aWZpZXJzQSIsImlkZW50aWZpZXJzRnJvbVBvc2l0aW9ucyIsImlkZW50aWZpZXJzQiIsInNvcnQiLCJpZGVudGlmaWVyc01hdGNoIiwiZXZlcnkiLCJpZGVudGlmaWVyQSIsImluZGV4IiwiaWRlbnRpZmllckIiLCJtYXRjaGVzIiwic29tZSIsIm1hdGNoIiwiY29tcHJlc3NQb3NpdGlvbnMiLCJwb3NpdGlvbk1hcCIsInBvc2l0aW9uIiwiT2JqZWN0IiwidmFsdWVzIiwiUG9zaXRpb24iLCJmcm9tTW91c2VFdmVudCIsInRvdWNoZXNOb2RlTGlzdCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyIsIm1hcCIsInRvdWNoIiwiZnJvbVRvdWNoIiwiaWRlbnRpZmllcnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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