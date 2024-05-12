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
var _necessary = require("necessary");
var _easy = require("easy");
var _relative = /*#__PURE__*/ _interop_require_default(require("../position/relative"));
var _constants = require("../constants");
var _positions = require("../utilities/positions");
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
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, TOUCHSTART_EVENT_TYPE = _easy.eventTypes.TOUCHSTART_EVENT_TYPE, TOUCHMOVE_EVENT_TYPE = _easy.eventTypes.TOUCHMOVE_EVENT_TYPE, TOUCHEND_EVENT_TYPE = _easy.eventTypes.TOUCHEND_EVENT_TYPE;
function enableTouch() {
    var tapInterval = null, startMagnitude = null, startPositions = [], movingPositions = [], customGesturesEnabled = true;
    this.updateState({
        tapInterval: tapInterval,
        startMagnitude: startMagnitude,
        startPositions: startPositions,
        movingPositions: movingPositions,
        customGesturesEnabled: customGesturesEnabled
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
    var eventType = TOUCHSTART_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchStart(touchStartHandler) {
    var eventType = TOUCHSTART_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onTouchMove(touchStartHandler) {
    var eventType = TOUCHMOVE_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchMove(touchStartHandler) {
    var eventType = TOUCHMOVE_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onTouchEnd(touchStartHandler) {
    var eventType = TOUCHEND_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchEnd(touchStartHandler) {
    var eventType = TOUCHEND_EVENT_TYPE, handler = touchStartHandler; ///
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
function onCustomDragEnd(dragEndCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_END_CUSTOM_EVENT_TYPE, customHandler = dragEndCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragEnd(dragEndCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_END_CUSTOM_EVENT_TYPE, customHandler = dragEndCustomHandler; ///
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
function areCustomGesturesEnabled() {
    var customGesturesEnabled = this.getState().customGesturesEnabled;
    return customGesturesEnabled;
}
function setCustonGesturesEnabled(customGesturesEnabled) {
    this.updateState({
        customGesturesEnabled: customGesturesEnabled
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
        if (startPositionsLength === 1) {
            if (movingPositionsLength === 0) {
                this.tapOrDoubleTap(event, element);
            } else {
                this.dragEnd(event, element);
                this.possibleTap(event, element);
                this.possibleSwipe(event, element);
            }
        }
    }
    (0, _positions.filterPositions)(startPositions, positions);
    (0, _positions.filterPositions)(movingPositions, positions);
}
function tap(event, element, top, left) {
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left); ///
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
        this.callCustomHandlersConditionally(customEventType, event, element, top, left);
    }
}
function pinch(event, element) {
    var movingPositions = this.getMovingPositions(), firstMovingPosition = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition), customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
    this.callCustomHandlersConditionally(customEventType, event, element, ratio);
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
        this.callCustomHandlersConditionally(customEventType, event, element, top, left, speed);
    }
}
function doubleTap(event, element, top, left) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlersConditionally(customEventType, event, element, top, left);
}
function dragEnd(event, element) {
    var customEventType = _customEventTypes.DRAG_END_CUSTOM_EVENT_TYPE;
    this.callCustomHandlersConditionally(customEventType, event, element);
}
function dragStart(event, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    this.callCustomHandlersConditionally(customEventType, event, element, top, left);
}
function pinchStart(event, element) {
    var startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude, customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE;
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlersConditionally(customEventType, event, element);
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
    var startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    var tapInterval = this.getTapInterval();
    if (tapInterval !== null) {
        clearTimeout(tapInterval);
        tapInterval = null;
        this.setTapInterval(tapInterval);
        this.doubleTap(event, element, top, left);
        return;
    }
    tapInterval = setTimeout(function() {
        tapInterval = null;
        _this.setTapInterval(tapInterval);
        _this.tap(event, element, top, left);
    }, _constants.TAP_DELAY);
    this.setTapInterval(tapInterval);
}
function enableCustomGestures() {
    var customGesturedEnabled = true;
    this.setCustonGesturesEnabled(customGesturedEnabled);
}
function disableCustomGestures() {
    var customGesturedEnabled = false;
    this.setCustonGesturesEnabled(customGesturedEnabled);
}
function callCustomHandlersConditionally(customEventType, event, element) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        remainingArguments[_key - 3] = arguments[_key];
    }
    var customGesturesEnabled = this.areCustomGesturesEnabled();
    if (customGesturesEnabled) {
        this.callCustomHandlers.apply(this, [
            customEventType,
            event,
            element
        ].concat(_to_consumable_array(remainingArguments)));
    }
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
    onCustomDragEnd: onCustomDragEnd,
    offCustomDragEnd: offCustomDragEnd,
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
    areCustomGesturesEnabled: areCustomGesturesEnabled,
    setCustonGesturesEnabled: setCustonGesturesEnabled,
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
    dragEnd: dragEnd,
    dragStart: dragStart,
    pinchStart: pinchStart,
    possibleTap: possibleTap,
    possibleSwipe: possibleSwipe,
    tapOrDoubleTap: tapOrDoubleTap,
    enableCustomGestures: enableCustomGestures,
    disableCustomGestures: disableCustomGestures,
    callCustomHandlersConditionally: callCustomHandlersConditionally
};
var _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBJX09WRVJfVFdPLCBNQVhJTVVNX1RBUF9USU1FLCBNSU5JTVVNX1NXSVBFX1NQRUVELCBNQVhJTVVNX1NQUkVBRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNvcnRQb3NpdGlvbnMsIG1hdGNoUG9zaXRpb25zLCBmaWx0ZXJQb3NpdGlvbnMsIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50LCBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcG9zaXRpb25zXCI7XG5pbXBvcnQgeyBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsIFRPVUNITU9WRV9FVkVOVF9UWVBFLCBUT1VDSEVORF9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5mdW5jdGlvbiBlbmFibGVUb3VjaCgpIHtcbiAgY29uc3QgdGFwSW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG51bGwsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gW10sXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IFtdLFxuICAgICAgICBjdXN0b21HZXN0dXJlc0VuYWJsZWQgPSB0cnVlO1xuXG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsLFxuICAgIHN0YXJ0TWFnbml0dWRlLFxuICAgIHN0YXJ0UG9zaXRpb25zLFxuICAgIG1vdmluZ1Bvc2l0aW9ucyxcbiAgICBjdXN0b21HZXN0dXJlc0VuYWJsZWRcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVG91Y2goKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vZmZUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNITU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hNb3ZlKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNITU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnRW5kKGRyYWdFbmRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRU5EX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0VuZEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRW5kKGRyYWdFbmRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRU5EX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0VuZEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcEludGVydmFsKCkge1xuICBjb25zdCB7IHRhcEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRhcEludGVydmFsO1xufVxuXG5mdW5jdGlvbiBzZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0YXBJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRNYWduaXR1ZGUoKSB7XG4gIGNvbnN0IHsgc3RhcnRNYWduaXR1ZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNYWduaXR1ZGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TWFnbml0dWRlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQoKSB7XG4gIGNvbnN0IHsgY3VzdG9tR2VzdHVyZXNFbmFibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIGN1c3RvbUdlc3R1cmVzRW5hYmxlZDtcbn1cblxuZnVuY3Rpb24gc2V0Q3VzdG9uR2VzdHVyZXNFbmFibGVkKGN1c3RvbUdlc3R1cmVzRW5hYmxlZCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBjdXN0b21HZXN0dXJlc0VuYWJsZWRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb25zKCkge1xuICBjb25zdCB7IHN0YXJ0UG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0UG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TW92aW5nUG9zaXRpb25zKCkge1xuICBjb25zdCB7IG1vdmluZ1Bvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBtb3ZpbmdQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldE1vdmluZ1Bvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaEVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICB0aGlzLmRyYWdTdGFydChldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICB0aGlzLnBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIHNvcnRQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBzdGFydFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5kcmFnKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBpbmNoKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy50YXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWdFbmQoZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMucG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpOyAvLy9cbn1cblxuZnVuY3Rpb24gZHJhZyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0b3AgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCk7XG5cbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGluY2goZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZE1vdmluZ1Bvc2l0aW9uID0gc2Vjb25kKG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlTW92aW5nUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RNb3ZpbmdQb3NpdGlvbiwgc2Vjb25kTW92aW5nUG9zaXRpb24pLFxuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IHRoaXMuZ2V0U3RhcnRNYWduaXR1ZGUoKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgcmF0aW8gPSBtYWduaXR1ZGUgLyBzdGFydE1hZ25pdHVkZTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xufVxuXG5mdW5jdGlvbiBzd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbikge1xuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VuZChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRTdGFydFBvc2l0aW9uID0gc2Vjb25kKHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVTdGFydFBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0U3RhcnRQb3NpdGlvbiwgc2Vjb25kU3RhcnRQb3NpdGlvbiksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlU3RhcnRQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSBtYWduaXR1ZGUsIC8vL1xuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKChzcGVlZCA9PT0gMCkgJiYgKHRpbWUgPCBNQVhJTVVNX1RBUF9USU1FKSl7XG4gICAgdGhpcy50YXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICBsZXQgdGFwSW50ZXJ2YWwgPSB0aGlzLmdldFRhcEludGVydmFsKCk7XG5cbiAgaWYgKHRhcEludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRhcEludGVydmFsKTtcblxuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5kb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy50YXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH0sIFRBUF9ERUxBWSk7XG5cbiAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICBjb25zdCBjdXN0b21HZXN0dXJlZEVuYWJsZWQgPSB0cnVlO1xuXG4gIHRoaXMuc2V0Q3VzdG9uR2VzdHVyZXNFbmFibGVkKGN1c3RvbUdlc3R1cmVkRW5hYmxlZCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgdGhpcy5zZXRDdXN0b25HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZWRFbmFibGVkKTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZXNFbmFibGVkID0gdGhpcy5hcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQoKTtcblxuICBpZiAoY3VzdG9tR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5jb25zdCB0b3VjaE1peGlucyA9IHtcbiAgZW5hYmxlVG91Y2gsXG4gIGRpc2FibGVUb3VjaCxcbiAgb25Ub3VjaFN0YXJ0LFxuICBvZmZUb3VjaFN0YXJ0LFxuICBvblRvdWNoTW92ZSxcbiAgb2ZmVG91Y2hNb3ZlLFxuICBvblRvdWNoRW5kLFxuICBvZmZUb3VjaEVuZCxcbiAgb25DdXN0b21UYXAsXG4gIG9mZkN1c3RvbVRhcCxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbURyYWdFbmQsXG4gIG9mZkN1c3RvbURyYWdFbmQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tRG91YmxlVGFwLFxuICBvZmZDdXN0b21Eb3VibGVUYXAsXG4gIGdldFRhcEludGVydmFsLFxuICBzZXRUYXBJbnRlcnZhbCxcbiAgZ2V0U3RhcnRNYWduaXR1ZGUsXG4gIHNldFN0YXJ0TWFnbml0dWRlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0U3RhcnRQb3NpdGlvbnMsXG4gIGFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCxcbiAgc2V0Q3VzdG9uR2VzdHVyZXNFbmFibGVkLFxuICBnZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHNldE1vdmluZ1Bvc2l0aW9ucyxcbiAgdG91Y2hTdGFydEhhbmRsZXIsXG4gIG1vdXNlRG93bkhhbmRsZXIsXG4gIHRvdWNoTW92ZUhhbmRsZXIsXG4gIG1vdXNlTW92ZUhhbmRsZXIsXG4gIHRvdWNoRW5kSGFuZGxlcixcbiAgbW91c2VVcEhhbmRsZXIsXG4gIHN0YXJ0SGFuZGxlcixcbiAgbW92ZUhhbmRsZXIsXG4gIGVuZEhhbmRsZXIsXG4gIHRhcCxcbiAgZHJhZyxcbiAgcGluY2gsXG4gIHN3aXBlLFxuICBkb3VibGVUYXAsXG4gIGRyYWdFbmQsXG4gIGRyYWdTdGFydCxcbiAgcGluY2hTdGFydCxcbiAgcG9zc2libGVUYXAsXG4gIHBvc3NpYmxlU3dpcGUsXG4gIHRhcE9yRG91YmxlVGFwLFxuICBlbmFibGVDdXN0b21HZXN0dXJlcyxcbiAgZGlzYWJsZUN1c3RvbUdlc3R1cmVzLFxuICBjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsIlRPVUNIU1RBUlRfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJUT1VDSE1PVkVfRVZFTlRfVFlQRSIsIlRPVUNIRU5EX0VWRU5UX1RZUEUiLCJlbmFibGVUb3VjaCIsInRhcEludGVydmFsIiwic3RhcnRNYWduaXR1ZGUiLCJzdGFydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9ucyIsImN1c3RvbUdlc3R1cmVzRW5hYmxlZCIsInVwZGF0ZVN0YXRlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwid2luZG93Iiwib25Nb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsIm9uVG91Y2hNb3ZlIiwidG91Y2hNb3ZlSGFuZGxlciIsIm9uVG91Y2hFbmQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJkaXNhYmxlVG91Y2giLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmVG91Y2hTdGFydCIsIm9mZlRvdWNoTW92ZSIsIm9mZlRvdWNoRW5kIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJvZmZFdmVudCIsIm9uQ3VzdG9tVGFwIiwidGFwQ3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJUQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsIkRSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21EcmFnRW5kIiwiZHJhZ0VuZEN1c3RvbUhhbmRsZXIiLCJEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdFbmQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsInNldFRhcEludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydE1hZ25pdHVkZSIsImFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCIsInNldEN1c3Rvbkdlc3R1cmVzRW5hYmxlZCIsImdldFN0YXJ0UG9zaXRpb25zIiwic2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRNb3ZpbmdQb3NpdGlvbnMiLCJldmVudCIsInN0YXJ0SGFuZGxlciIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkIiwicG9zaXRpb25zIiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJtb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbU1vdXNlRXZlbnQiLCJtb3ZlSGFuZGxlciIsImVuZEhhbmRsZXIiLCJwb3NpdGlvbnNGcm9tRXZlbnQiLCJmaWx0ZXJQb3NpdGlvbnMiLCJzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRyYWdTdGFydCIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwidGFwT3JEb3VibGVUYXAiLCJkcmFnRW5kIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwidGFwIiwidG9wIiwibGVmdCIsImNhbGxDdXN0b21IYW5kbGVycyIsImZpcnN0U3RhcnRQb3NpdGlvbiIsImZpcnN0TW92aW5nUG9zaXRpb24iLCJmaXJzdFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsImNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJyYXRpbyIsInN3aXBlIiwic3BlZWQiLCJjb3MiLCJzaW4iLCJzdGFydFBvc2l0aW9uIiwiZG91YmxlVGFwIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwiZ2V0U3BlZWQiLCJNQVhJTVVNX1RBUF9USU1FIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJUQVBfREVMQVkiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsImN1c3RvbUdlc3R1cmVkRW5hYmxlZCIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRvdWNoTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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