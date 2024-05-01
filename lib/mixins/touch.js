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
var _relative = /*#__PURE__*/ _interop_require_default(require("../position/relative"));
var _eventTypes = require("../eventTypes");
var _constants = require("../constants");
var _positions = require("../utilities/positions");
var _customEventTypes = require("../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
function enableTouch() {
    var tapInterval = null, startMagnitude = null, startPositions = [], movingPositions = [];
    this.updateState({
        tapInterval: tapInterval,
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
function onTouchStart(touchStartHandler) {
    var eventType = _eventTypes.TOUCHSTART_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchStart(touchStartHandler) {
    var eventType = _eventTypes.TOUCHSTART_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onTouchMove(touchStartHandler) {
    var eventType = _eventTypes.TOUCHMOVE_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchMove(touchStartHandler) {
    var eventType = _eventTypes.TOUCHMOVE_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onTouchEnd(touchStartHandler) {
    var eventType = _eventTypes.TOUCHEND_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchEnd(touchStartHandler) {
    var eventType = _eventTypes.TOUCHEND_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onCustomTap(tapCustomHandler, element) {
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE, customHandler = tapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomTap(tapCustomHandler, element) {
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE, customHandler = tapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragUp(dragUpCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE, customHandler = dragUpCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragUp(dragUpCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE, customHandler = dragUpCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragDown(dragDownCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE, customHandler = dragDownCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragDown(dragDownCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE, customHandler = dragDownCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragLeft(dragLeftCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE, customHandler = dragLeftCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragLeft(dragLeftCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE, customHandler = dragLeftCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragRight(dragRightCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE, customHandler = dragRightCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragRight(dragRightCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE, customHandler = dragRightCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragStart(dragStartCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragStart(dragStartCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
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
function onCustomDoubleTap(doubleTapCustomHandler, element) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE, customHandler = doubleTapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDoubleTap(doubleTapCustomHandler, element) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE, customHandler = doubleTapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function getTapInterval() {
    var tapInterval = this.getState().tapInterval;
    return tapInterval;
}
function setTapInterval(tapInterval) {
    this.updateState({
        tapInterval: tapInterval
    });
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
        var touchEvent = event, changed = false, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseDownHandler(event, element) {
    this.startHandler(event, element, function(event) {
        var mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function touchMoveHandler(event, element) {
    this.moveHandler(event, element, function(event) {
        var touchEvent = event, changed = false, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseMoveHandler(event, element) {
    this.moveHandler(event, element, function(event) {
        var mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function touchEndHandler(event, element) {
    this.endHandler(event, element, function(event) {
        var touchEvent = event, changed = true, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseUpHandler(event, element) {
    this.endHandler(event, element, function(event) {
        var mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function startHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions();
    (0, _positions.filterPositions)(startPositions, positions);
    push(startPositions, positions);
    var startingPositionsLength = startPositions.length;
    if (startingPositionsLength === 1) {
        this.dragStart(event, element);
    }
    if (startingPositionsLength === 2) {
        this.pinchStart(event, element);
    }
}
function moveHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
    (0, _positions.filterPositions)(movingPositions, positions);
    push(movingPositions, positions);
    var positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        (0, _positions.sortPositions)(movingPositions, startPositions);
        var movingPositionsLength = movingPositions.length;
        if (movingPositionsLength === 1) {
            this.drag(event, element);
        }
        if (movingPositionsLength === 2) {
            this.pinch(event, element);
        }
    }
}
function endHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        var startPositionsLength = startPositions.length, movingPositionsLength = movingPositions.length;
        if (movingPositionsLength === 0) {
            this.tapOrDoubleTap(event, element);
        } else if (startPositionsLength === 1) {
            this.possibleTap(event, element);
            this.possibleSwipe(event, element);
        }
    }
    (0, _positions.filterPositions)(startPositions, positions);
    (0, _positions.filterPositions)(movingPositions, positions);
}
function tap(event, element) {
    var elementTarget = isElementTarget(event, element);
    if (!elementTarget) {
        return;
    }
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
function drag(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), top = relativePosition.getTop(), left = relativePosition.getLeft(), direction = relativePosition.getDirection();
    var customEventType = null;
    if (Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE;
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE;
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE;
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE;
    }
    if (customEventType !== null) {
        this.callCustomHandlers(customEventType, event, element, top, left);
    }
}
function pinch(event, element) {
    var movingPositions = this.getMovingPositions(), firstMovingPosition = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition), customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
    this.callCustomHandlers(customEventType, event, element, ratio);
}
function swipe(event, element, speed, direction) {
    var customEventType = null;
    if (Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.cos(direction);
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE;
        speed = speed * Math.sin(direction);
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE;
        speed = speed * Math.sin(direction);
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.cos(direction);
    }
    if (customEventType !== null) {
        var startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
        this.callCustomHandlers(customEventType, event, element, top, left, speed);
    }
}
function doubleTap(event, element) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
function dragStart(event, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
function pinchStart(event, element) {
    var startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude, customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE;
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlers(customEventType, event, element);
}
function possibleTap(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), time = relativePosition.getTime(), speed = relativePosition.getSpeed();
    if (speed === 0 && time < _constants.MAXIMUM_TAP_TIME) {
        this.tapOrDoubleTap(event, element);
    }
}
function possibleSwipe(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), speed = relativePosition.getSpeed();
    if (speed > _constants.MINIMUM_SWIPE_SPEED) {
        this.swipe(event, element, speed, direction);
    }
}
function tapOrDoubleTap(event, element) {
    var _this = this;
    var tapInterval = this.getTapInterval();
    if (tapInterval !== null) {
        clearTimeout(tapInterval);
        tapInterval = null;
        this.setTapInterval(tapInterval);
        this.doubleTap(event, element);
        return;
    }
    tapInterval = setTimeout(function() {
        tapInterval = null;
        _this.setTapInterval(tapInterval);
        _this.tap(event, element);
    }, _constants.TAP_DELAY);
    this.setTapInterval(tapInterval);
}
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
    onTouchStart: onTouchStart,
    offTouchStart: offTouchStart,
    onTouchMove: onTouchMove,
    offTouchMove: offTouchMove,
    onTouchEnd: onTouchEnd,
    offTouchEnd: offTouchEnd,
    onCustomTap: onCustomTap,
    offCustomTap: offCustomTap,
    onCustomDragUp: onCustomDragUp,
    offCustomDragUp: offCustomDragUp,
    onCustomDragDown: onCustomDragDown,
    offCustomDragDown: offCustomDragDown,
    onCustomDragLeft: onCustomDragLeft,
    offCustomDragLeft: offCustomDragLeft,
    onCustomDragRight: onCustomDragRight,
    offCustomDragRight: offCustomDragRight,
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
    onCustomDoubleTap: onCustomDoubleTap,
    offCustomDoubleTap: offCustomDoubleTap,
    getTapInterval: getTapInterval,
    setTapInterval: setTapInterval,
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
    endHandler: endHandler,
    tap: tap,
    drag: drag,
    pinch: pinch,
    swipe: swipe,
    doubleTap: doubleTap,
    dragStart: dragStart,
    pinchStart: pinchStart,
    possibleTap: possibleTap,
    possibleSwipe: possibleSwipe,
    tapOrDoubleTap: tapOrDoubleTap
};
var _default = touchMixins;
function isElementTarget(event, element) {
    if (element === _easy.window) {
        debugger;
    }
    var target = event.target, domElement = element.getDOMElement(), domElementTarget = domElement === target, elementTarget = domElementTarget; ///
    return elementTarget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgUEksIFRBUF9ERUxBWSwgUElfT1ZFUl9UV08sIE1BWElNVU1fVEFQX1RJTUUsIE1JTklNVU1fU1dJUEVfU1BFRUQsIE1BWElNVU1fU1BSRUFEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc29ydFBvc2l0aW9ucywgbWF0Y2hQb3NpdGlvbnMsIGZpbHRlclBvc2l0aW9ucywgcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQsIHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wb3NpdGlvbnNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBlbmFibGVUb3VjaCgpIHtcbiAgY29uc3QgdGFwSW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG51bGwsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gW10sXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IFtdO1xuXG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsLFxuICAgIHN0YXJ0TWFnbml0dWRlLFxuICAgIHN0YXJ0UG9zaXRpb25zLFxuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVUb3VjaCgpIHtcbiAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9mZlRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVRhcCh0YXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFwSW50ZXJ2YWwoKSB7XG4gIGNvbnN0IHsgdGFwSW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gdGFwSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIHNldFRhcEludGVydmFsKHRhcEludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydE1hZ25pdHVkZSgpIHtcbiAgY29uc3QgeyBzdGFydE1hZ25pdHVkZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydE1hZ25pdHVkZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNYWduaXR1ZGVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb25zKCkge1xuICBjb25zdCB7IHN0YXJ0UG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0UG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TW92aW5nUG9zaXRpb25zKCkge1xuICBjb25zdCB7IG1vdmluZ1Bvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBtb3ZpbmdQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldE1vdmluZ1Bvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaEVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICB0aGlzLmRyYWdTdGFydChldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICB0aGlzLnBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIHNvcnRQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBzdGFydFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5kcmFnKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBpbmNoKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLnBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5wb3NzaWJsZVN3aXBlKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcbn1cblxuZnVuY3Rpb24gdGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRUYXJnZXQgPSBpc0VsZW1lbnRUYXJnZXQoZXZlbnQsIGVsZW1lbnQpO1xuXG4gIGlmICghZWxlbWVudFRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZHJhZyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0b3AgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCk7XG5cbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwaW5jaChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICByYXRpbyA9IG1hZ25pdHVkZSAvIHN0YXJ0TWFnbml0dWRlO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBwaW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZSwgLy8vXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0aW1lID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmICgoc3BlZWQgPT09IDApICYmICh0aW1lIDwgTUFYSU1VTV9UQVBfVElNRSkpe1xuICAgIHRoaXMudGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlU3dpcGUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKHNwZWVkID4gTUlOSU1VTV9TV0lQRV9TUEVFRCkge1xuICAgIHRoaXMuc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGxldCB0YXBJbnRlcnZhbCA9IHRoaXMuZ2V0VGFwSW50ZXJ2YWwoKTtcblxuICBpZiAodGFwSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLmRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy50YXAoZXZlbnQsIGVsZW1lbnQpO1xuICB9LCBUQVBfREVMQVkpO1xuXG4gIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xufVxuXG5jb25zdCB0b3VjaE1peGlucyA9IHtcbiAgZW5hYmxlVG91Y2gsXG4gIGRpc2FibGVUb3VjaCxcbiAgb25Ub3VjaFN0YXJ0LFxuICBvZmZUb3VjaFN0YXJ0LFxuICBvblRvdWNoTW92ZSxcbiAgb2ZmVG91Y2hNb3ZlLFxuICBvblRvdWNoRW5kLFxuICBvZmZUb3VjaEVuZCxcbiAgb25DdXN0b21UYXAsXG4gIG9mZkN1c3RvbVRhcCxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBvbkN1c3RvbURvdWJsZVRhcCxcbiAgb2ZmQ3VzdG9tRG91YmxlVGFwLFxuICBnZXRUYXBJbnRlcnZhbCxcbiAgc2V0VGFwSW50ZXJ2YWwsXG4gIGdldFN0YXJ0TWFnbml0dWRlLFxuICBzZXRTdGFydE1hZ25pdHVkZSxcbiAgZ2V0U3RhcnRQb3NpdGlvbnMsXG4gIHNldFN0YXJ0UG9zaXRpb25zLFxuICBnZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHNldE1vdmluZ1Bvc2l0aW9ucyxcbiAgdG91Y2hTdGFydEhhbmRsZXIsXG4gIG1vdXNlRG93bkhhbmRsZXIsXG4gIHRvdWNoTW92ZUhhbmRsZXIsXG4gIG1vdXNlTW92ZUhhbmRsZXIsXG4gIHRvdWNoRW5kSGFuZGxlcixcbiAgbW91c2VVcEhhbmRsZXIsXG4gIHN0YXJ0SGFuZGxlcixcbiAgbW92ZUhhbmRsZXIsXG4gIGVuZEhhbmRsZXIsXG4gIHRhcCxcbiAgZHJhZyxcbiAgcGluY2gsXG4gIHN3aXBlLFxuICBkb3VibGVUYXAsXG4gIGRyYWdTdGFydCxcbiAgcGluY2hTdGFydCxcbiAgcG9zc2libGVUYXAsXG4gIHBvc3NpYmxlU3dpcGUsXG4gIHRhcE9yRG91YmxlVGFwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcblxuZnVuY3Rpb24gaXNFbGVtZW50VGFyZ2V0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09PSB3aW5kb3cpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGRvbUVsZW1lbnRUYXJnZXQgPSAoZG9tRWxlbWVudCA9PT0gdGFyZ2V0KSxcbiAgICAgICAgZWxlbWVudFRhcmdldCA9IGRvbUVsZW1lbnRUYXJnZXQ7ICAvLy9cblxuICByZXR1cm4gZWxlbWVudFRhcmdldDtcbn1cbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJldmVudFR5cGUiLCJUT1VDSFNUQVJUX0VWRU5UX1RZUEUiLCJoYW5kbGVyIiwib25FdmVudCIsIm9mZkV2ZW50IiwiVE9VQ0hNT1ZFX0VWRU5UX1RZUEUiLCJUT1VDSEVORF9FVkVOVF9UWVBFIiwib25DdXN0b21UYXAiLCJ0YXBDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlRBUF9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50Iiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRXZlbnQiLCJvbkN1c3RvbURyYWdVcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsIkRSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnTGVmdCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnUmlnaHQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsInNldFRhcEludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydE1hZ25pdHVkZSIsImdldFN0YXJ0UG9zaXRpb25zIiwic2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRNb3ZpbmdQb3NpdGlvbnMiLCJldmVudCIsInN0YXJ0SGFuZGxlciIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkIiwicG9zaXRpb25zIiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJtb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbU1vdXNlRXZlbnQiLCJtb3ZlSGFuZGxlciIsImVuZEhhbmRsZXIiLCJwb3NpdGlvbnNGcm9tRXZlbnQiLCJmaWx0ZXJQb3NpdGlvbnMiLCJzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRyYWdTdGFydCIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwidGFwT3JEb3VibGVUYXAiLCJwb3NzaWJsZVRhcCIsInBvc3NpYmxlU3dpcGUiLCJ0YXAiLCJlbGVtZW50VGFyZ2V0IiwiaXNFbGVtZW50VGFyZ2V0IiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsInNlY29uZE1vdmluZ1Bvc2l0aW9uIiwicmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInJhdGlvIiwic3dpcGUiLCJzcGVlZCIsImNvcyIsInNpbiIsInN0YXJ0UG9zaXRpb24iLCJkb3VibGVUYXAiLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwidGltZSIsImdldFRpbWUiLCJnZXRTcGVlZCIsIk1BWElNVU1fVEFQX1RJTUUiLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIlRBUF9ERUxBWSIsInRvdWNoTWl4aW5zIiwidGFyZ2V0IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJkb21FbGVtZW50VGFyZ2V0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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