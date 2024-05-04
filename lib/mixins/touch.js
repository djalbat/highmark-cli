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
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgUEksIFRBUF9ERUxBWSwgUElfT1ZFUl9UV08sIE1BWElNVU1fVEFQX1RJTUUsIE1JTklNVU1fU1dJUEVfU1BFRUQsIE1BWElNVU1fU1BSRUFEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc29ydFBvc2l0aW9ucywgbWF0Y2hQb3NpdGlvbnMsIGZpbHRlclBvc2l0aW9ucywgcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQsIHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wb3NpdGlvbnNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfRU5EX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW10sXG4gICAgICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zLFxuICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZFxuICB9KTtcblxuICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVUb3VjaCgpIHtcbiAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9mZlRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVRhcCh0YXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21UYXAodGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB0YXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdFbmQoZHJhZ0VuZEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19FTkRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRW5kQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdFbmQoZHJhZ0VuZEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19FTkRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRW5kQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFwSW50ZXJ2YWwoKSB7XG4gIGNvbnN0IHsgdGFwSW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gdGFwSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIHNldFRhcEludGVydmFsKHRhcEludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydE1hZ25pdHVkZSgpIHtcbiAgY29uc3QgeyBzdGFydE1hZ25pdHVkZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydE1hZ25pdHVkZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNYWduaXR1ZGVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCgpIHtcbiAgY29uc3QgeyBjdXN0b21HZXN0dXJlc0VuYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gY3VzdG9tR2VzdHVyZXNFbmFibGVkO1xufVxuXG5mdW5jdGlvbiBzZXRDdXN0b25HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZXNFbmFibGVkKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgc3RhcnRQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0UG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0UG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpbmdQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgbW92aW5nUG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIG1vdmluZ1Bvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0TW92aW5nUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIHRoaXMucGluY2hTdGFydChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2gobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgc29ydFBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHN0YXJ0UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmRyYWcoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMucGluY2goZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhZ0VuZChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wb3NzaWJsZVN3aXBlKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcbn1cblxuZnVuY3Rpb24gdGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7IC8vL1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwaW5jaChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICByYXRpbyA9IG1hZ25pdHVkZSAvIHN0YXJ0TWFnbml0dWRlO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCByYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsO1xuXG4gIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnRW5kKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRU5EX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sICAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBwaW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZSwgLy8vXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoKHNwZWVkID09PSAwKSAmJiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpKXtcbiAgICB0aGlzLnRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVN3aXBlKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmIChzcGVlZCA+IE1JTklNVU1fU1dJUEVfU1BFRUQpIHtcbiAgICB0aGlzLnN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIGxldCB0YXBJbnRlcnZhbCA9IHRoaXMuZ2V0VGFwSW50ZXJ2YWwoKTtcblxuICBpZiAodGFwSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLmRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRhcEludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLnRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfSwgVEFQX0RFTEFZKTtcblxuICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gIGNvbnN0IGN1c3RvbUdlc3R1cmVkRW5hYmxlZCA9IHRydWU7XG5cbiAgdGhpcy5zZXRDdXN0b25HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZWRFbmFibGVkKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICBjb25zdCBjdXN0b21HZXN0dXJlZEVuYWJsZWQgPSBmYWxzZTtcblxuICB0aGlzLnNldEN1c3Rvbkdlc3R1cmVzRW5hYmxlZChjdXN0b21HZXN0dXJlZEVuYWJsZWQpO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBjdXN0b21HZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gIGlmIChjdXN0b21HZXN0dXJlc0VuYWJsZWQpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvblRvdWNoU3RhcnQsXG4gIG9mZlRvdWNoU3RhcnQsXG4gIG9uVG91Y2hNb3ZlLFxuICBvZmZUb3VjaE1vdmUsXG4gIG9uVG91Y2hFbmQsXG4gIG9mZlRvdWNoRW5kLFxuICBvbkN1c3RvbVRhcCxcbiAgb2ZmQ3VzdG9tVGFwLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tRHJhZ0VuZCxcbiAgb2ZmQ3VzdG9tRHJhZ0VuZCxcbiAgb25DdXN0b21Td2lwZVVwLFxuICBvZmZDdXN0b21Td2lwZVVwLFxuICBvbkN1c3RvbVN3aXBlRG93bixcbiAgb2ZmQ3VzdG9tU3dpcGVEb3duLFxuICBvbkN1c3RvbVN3aXBlTGVmdCxcbiAgb2ZmQ3VzdG9tU3dpcGVMZWZ0LFxuICBvbkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9mZkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9uQ3VzdG9tUGluY2hNb3ZlLFxuICBvZmZDdXN0b21QaW5jaE1vdmUsXG4gIG9uQ3VzdG9tUGluY2hTdGFydCxcbiAgb2ZmQ3VzdG9tUGluY2hTdGFydCxcbiAgb25DdXN0b21Eb3VibGVUYXAsXG4gIG9mZkN1c3RvbURvdWJsZVRhcCxcbiAgZ2V0VGFwSW50ZXJ2YWwsXG4gIHNldFRhcEludGVydmFsLFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkLFxuICBzZXRDdXN0b25HZXN0dXJlc0VuYWJsZWQsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgdGFwLFxuICBkcmFnLFxuICBwaW5jaCxcbiAgc3dpcGUsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZ0VuZCxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0LFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgdGFwT3JEb3VibGVUYXAsXG4gIGVuYWJsZUN1c3RvbUdlc3R1cmVzLFxuICBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdWNoTWl4aW5zO1xuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiZW5hYmxlVG91Y2giLCJ0YXBJbnRlcnZhbCIsInN0YXJ0TWFnbml0dWRlIiwic3RhcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnMiLCJjdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJ1cGRhdGVTdGF0ZSIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm1vdXNlVXBIYW5kbGVyIiwib25Ub3VjaFN0YXJ0IiwidG91Y2hTdGFydEhhbmRsZXIiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZUhhbmRsZXIiLCJvblRvdWNoRW5kIiwidG91Y2hFbmRIYW5kbGVyIiwiZGlzYWJsZVRvdWNoIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZlRvdWNoU3RhcnQiLCJvZmZUb3VjaE1vdmUiLCJvZmZUb3VjaEVuZCIsImV2ZW50VHlwZSIsIlRPVUNIU1RBUlRfRVZFTlRfVFlQRSIsImhhbmRsZXIiLCJvbkV2ZW50Iiwib2ZmRXZlbnQiLCJUT1VDSE1PVkVfRVZFTlRfVFlQRSIsIlRPVUNIRU5EX0VWRU5UX1RZUEUiLCJvbkN1c3RvbVRhcCIsInRhcEN1c3RvbUhhbmRsZXIiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21FdmVudCIsIm9uQ3VzdG9tRHJhZ1VwIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsIkRSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdMZWZ0IiwiZHJhZ0xlZnRDdXN0b21IYW5kbGVyIiwiRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdSaWdodCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwiRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tRHJhZ0VuZCIsImRyYWdFbmRDdXN0b21IYW5kbGVyIiwiRFJBR19FTkRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRW5kIiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwiUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImdldFRhcEludGVydmFsIiwiZ2V0U3RhdGUiLCJzZXRUYXBJbnRlcnZhbCIsImdldFN0YXJ0TWFnbml0dWRlIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJhcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJzZXRDdXN0b25HZXN0dXJlc0VuYWJsZWQiLCJnZXRTdGFydFBvc2l0aW9ucyIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkcmFnU3RhcnQiLCJwaW5jaFN0YXJ0IiwicG9zaXRpb25zTWF0Y2giLCJtYXRjaFBvc2l0aW9ucyIsInNvcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnNMZW5ndGgiLCJkcmFnIiwicGluY2giLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInRhcE9yRG91YmxlVGFwIiwiZHJhZ0VuZCIsInBvc3NpYmxlVGFwIiwicG9zc2libGVTd2lwZSIsInRhcCIsInRvcCIsImxlZnQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJmaXJzdE1vdmluZ1Bvc2l0aW9uIiwiZmlyc3RQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwicmVsYXRpdmVQb3NpdGlvbiIsIlJlbGF0aXZlUG9zaXRpb24iLCJmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NQUkVBRCIsIlBJX09WRVJfVFdPIiwiUEkiLCJjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5Iiwic2Vjb25kTW92aW5nUG9zaXRpb24iLCJyZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwicmF0aW8iLCJzd2lwZSIsInNwZWVkIiwiY29zIiwic2luIiwic3RhcnRQb3NpdGlvbiIsImRvdWJsZVRhcCIsInNlY29uZFN0YXJ0UG9zaXRpb24iLCJyZWxhdGl2ZVN0YXJ0UG9zaXRpb24iLCJ0aW1lIiwiZ2V0VGltZSIsImdldFNwZWVkIiwiTUFYSU1VTV9UQVBfVElNRSIsIk1JTklNVU1fU1dJUEVfU1BFRUQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiVEFQX0RFTEFZIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJjdXN0b21HZXN0dXJlZEVuYWJsZWQiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0b3VjaE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3d0JBOzs7ZUFBQTs7O29CQXR3QnVCO3lCQUNROytEQUVGOzBCQUVvRDt5QkFDaUI7eUJBQ2U7Z0NBY3BFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFBLE9BQXdCQyx5QkFBYyxDQUF0Q0QsTUFBTUUsUUFBa0JELHlCQUFjLENBQWhDQyxPQUFPQyxTQUFXRix5QkFBYyxDQUF6QkU7QUFFckIsU0FBU0M7SUFDUCxJQUFNQyxjQUFjLE1BQ2RDLGlCQUFpQixNQUNqQkMsaUJBQWlCLEVBQUUsRUFDbkJDLGtCQUFrQixFQUFFLEVBQ3BCQyx3QkFBd0I7SUFFOUIsSUFBSSxDQUFDQyxXQUFXLENBQUM7UUFDZkwsYUFBQUE7UUFDQUMsZ0JBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsdUJBQUFBO0lBQ0Y7SUFFQSxJQUFJLENBQUNFLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUV0Q0MsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSTtJQUUxQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNDLGlCQUFpQjtJQUN4QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNDLGVBQWU7QUFDdEM7QUFFQSxTQUFTQztJQUNQLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2IsZ0JBQWdCO0lBQ3ZDLElBQUksQ0FBQ2MsWUFBWSxDQUFDLElBQUksQ0FBQ1osZ0JBQWdCO0lBRXZDQyxZQUFNLENBQUNZLFVBQVUsQ0FBQyxJQUFJLENBQUNWLGNBQWMsRUFBRSxJQUFJO0lBRTNDLElBQUksQ0FBQ1csYUFBYSxDQUFDLElBQUksQ0FBQ1QsaUJBQWlCO0lBQ3pDLElBQUksQ0FBQ1UsWUFBWSxDQUFDLElBQUksQ0FBQ1IsZ0JBQWdCO0lBQ3ZDLElBQUksQ0FBQ1MsV0FBVyxDQUFDLElBQUksQ0FBQ1AsZUFBZTtBQUN2QztBQUVBLFNBQVNMLGFBQWFDLGlCQUFpQjtJQUNyQyxJQUFNWSxZQUFZQyxpQ0FBcUIsRUFDakNDLFVBQVVkLG1CQUFvQixHQUFHO0lBRXZDLElBQUksQ0FBQ2UsT0FBTyxDQUFDSCxXQUFXRTtBQUMxQjtBQUVBLFNBQVNMLGNBQWNULGlCQUFpQjtJQUN0QyxJQUFNWSxZQUFZQyxpQ0FBcUIsRUFDakNDLFVBQVVkLG1CQUFvQixHQUFHO0lBRXZDLElBQUksQ0FBQ2dCLFFBQVEsQ0FBQ0osV0FBV0U7QUFDM0I7QUFFQSxTQUFTYixZQUFZRCxpQkFBaUI7SUFDcEMsSUFBTVksWUFBWUssZ0NBQW9CLEVBQ2hDSCxVQUFVZCxtQkFBb0IsR0FBRztJQUV2QyxJQUFJLENBQUNlLE9BQU8sQ0FBQ0gsV0FBV0U7QUFDMUI7QUFFQSxTQUFTSixhQUFhVixpQkFBaUI7SUFDckMsSUFBTVksWUFBWUssZ0NBQW9CLEVBQ2hDSCxVQUFVZCxtQkFBb0IsR0FBRztJQUV2QyxJQUFJLENBQUNnQixRQUFRLENBQUNKLFdBQVdFO0FBQzNCO0FBRUEsU0FBU1gsV0FBV0gsaUJBQWlCO0lBQ25DLElBQU1ZLFlBQVlNLCtCQUFtQixFQUMvQkosVUFBVWQsbUJBQW9CLEdBQUc7SUFFdkMsSUFBSSxDQUFDZSxPQUFPLENBQUNILFdBQVdFO0FBQzFCO0FBRUEsU0FBU0gsWUFBWVgsaUJBQWlCO0lBQ3BDLElBQU1ZLFlBQVlNLCtCQUFtQixFQUMvQkosVUFBVWQsbUJBQW9CLEdBQUc7SUFFdkMsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDSixXQUFXRTtBQUMzQjtBQUVBLFNBQVNLLFlBQVlDLGdCQUFnQixFQUFFQyxPQUFPO0lBQzVDLElBQU1DLGtCQUFrQkMsdUNBQXFCLEVBQ3ZDQyxnQkFBZ0JKLGtCQUFrQixHQUFHO0lBRTNDLElBQUksQ0FBQ0ssYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU0ssYUFBYU4sZ0JBQWdCLEVBQUVDLE9BQU87SUFDN0MsSUFBTUMsa0JBQWtCQyx1Q0FBcUIsRUFDdkNDLGdCQUFnQkosa0JBQWtCLEdBQUc7SUFFM0MsSUFBSSxDQUFDTyxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTTyxlQUFlQyxtQkFBbUIsRUFBRVIsT0FBTztJQUNsRCxJQUFNQyxrQkFBa0JRLDJDQUF5QixFQUMzQ04sZ0JBQWdCSyxxQkFBcUIsR0FBRztJQUU5QyxJQUFJLENBQUNKLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNVLGdCQUFnQkYsbUJBQW1CLEVBQUVSLE9BQU87SUFDbkQsSUFBTUMsa0JBQWtCUSwyQ0FBeUIsRUFDM0NOLGdCQUFnQksscUJBQXFCLEdBQUc7SUFFOUMsSUFBSSxDQUFDRixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTVyxpQkFBaUJDLHFCQUFxQixFQUFFWixPQUFPO0lBQ3RELElBQU1DLGtCQUFrQlksNkNBQTJCLEVBQzdDVixnQkFBZ0JTLHVCQUF1QixHQUFHO0lBRWhELElBQUksQ0FBQ1IsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU2Msa0JBQWtCRixxQkFBcUIsRUFBRVosT0FBTztJQUN2RCxJQUFNQyxrQkFBa0JZLDZDQUEyQixFQUM3Q1YsZ0JBQWdCUyx1QkFBdUIsR0FBRztJQUVoRCxJQUFJLENBQUNOLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVNlLGlCQUFpQkMscUJBQXFCLEVBQUVoQixPQUFPO0lBQ3RELElBQU1DLGtCQUFrQmdCLDZDQUEyQixFQUM3Q2QsZ0JBQWdCYSx1QkFBdUIsR0FBRztJQUVoRCxJQUFJLENBQUNaLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNrQixrQkFBa0JGLHFCQUFxQixFQUFFaEIsT0FBTztJQUN2RCxJQUFNQyxrQkFBa0JnQiw2Q0FBMkIsRUFDN0NkLGdCQUFnQmEsdUJBQXVCLEdBQUc7SUFFaEQsSUFBSSxDQUFDVixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTbUIsa0JBQWtCQyxzQkFBc0IsRUFBRXBCLE9BQU87SUFDeEQsSUFBTUMsa0JBQWtCb0IsOENBQTRCLEVBQzlDbEIsZ0JBQWdCaUIsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDaEIsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU3NCLG1CQUFtQkYsc0JBQXNCLEVBQUVwQixPQUFPO0lBQ3pELElBQU1DLGtCQUFrQm9CLDhDQUE0QixFQUM5Q2xCLGdCQUFnQmlCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2QsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU3VCLGtCQUFrQkMsc0JBQXNCLEVBQUV4QixPQUFPO0lBQ3hELElBQU1DLGtCQUFrQndCLDhDQUE0QixFQUM5Q3RCLGdCQUFnQnFCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ3BCLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVMwQixtQkFBbUJGLHNCQUFzQixFQUFFeEIsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0J3Qiw4Q0FBNEIsRUFDOUN0QixnQkFBZ0JxQix3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUNsQixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTMkIsZ0JBQWdCQyxvQkFBb0IsRUFBRTVCLE9BQU87SUFDcEQsSUFBTUMsa0JBQWtCNEIsNENBQTBCLEVBQzVDMUIsZ0JBQWdCeUIsc0JBQXNCLEdBQUc7SUFFL0MsSUFBSSxDQUFDeEIsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBUzhCLGlCQUFpQkYsb0JBQW9CLEVBQUU1QixPQUFPO0lBQ3JELElBQU1DLGtCQUFrQjRCLDRDQUEwQixFQUM1QzFCLGdCQUFnQnlCLHNCQUFzQixHQUFHO0lBRS9DLElBQUksQ0FBQ3RCLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVMrQixnQkFBZ0JDLG9CQUFvQixFQUFFaEMsT0FBTztJQUNwRCxJQUFNQyxrQkFBa0JnQyw0Q0FBMEIsRUFDNUM5QixnQkFBZ0I2QixzQkFBc0IsR0FBRztJQUUvQyxJQUFJLENBQUM1QixhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTa0MsaUJBQWlCRixvQkFBb0IsRUFBRWhDLE9BQU87SUFDckQsSUFBTUMsa0JBQWtCZ0MsNENBQTBCLEVBQzVDOUIsZ0JBQWdCNkIsc0JBQXNCLEdBQUc7SUFFL0MsSUFBSSxDQUFDMUIsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU21DLGtCQUFrQkMsc0JBQXNCLEVBQUVwQyxPQUFPO0lBQ3hELElBQU1DLGtCQUFrQm9DLDhDQUE0QixFQUM5Q2xDLGdCQUFnQmlDLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2hDLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNzQyxtQkFBbUJGLHNCQUFzQixFQUFFcEMsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0JvQyw4Q0FBNEIsRUFDOUNsQyxnQkFBZ0JpQyx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUM5QixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTdUMsa0JBQWtCQyxzQkFBc0IsRUFBRXhDLE9BQU87SUFDeEQsSUFBTUMsa0JBQWtCd0MsOENBQTRCLEVBQzlDdEMsZ0JBQWdCcUMsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDcEMsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBUzBDLG1CQUFtQkYsc0JBQXNCLEVBQUV4QyxPQUFPO0lBQ3pELElBQU1DLGtCQUFrQndDLDhDQUE0QixFQUM5Q3RDLGdCQUFnQnFDLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2xDLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVMyQyxtQkFBbUJDLHVCQUF1QixFQUFFNUMsT0FBTztJQUMxRCxJQUFNQyxrQkFBa0I0QywrQ0FBNkIsRUFDL0MxQyxnQkFBZ0J5Qyx5QkFBeUIsR0FBRztJQUVsRCxJQUFJLENBQUN4QyxhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTOEMsb0JBQW9CRix1QkFBdUIsRUFBRTVDLE9BQU87SUFDM0QsSUFBTUMsa0JBQWtCNEMsK0NBQTZCLEVBQy9DMUMsZ0JBQWdCeUMseUJBQXlCLEdBQUc7SUFFbEQsSUFBSSxDQUFDdEMsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBUytDLGtCQUFrQkMsc0JBQXNCLEVBQUVoRCxPQUFPO0lBQ3hELElBQU1DLGtCQUFrQmdELDhDQUE0QixFQUM5QzlDLGdCQUFnQjZDLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQzVDLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNrRCxtQkFBbUJGLHNCQUFzQixFQUFFaEQsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0JnRCw4Q0FBNEIsRUFDOUM5QyxnQkFBZ0I2Qyx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUMxQyxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTbUQsbUJBQW1CQyx1QkFBdUIsRUFBRXBELE9BQU87SUFDMUQsSUFBTUMsa0JBQWtCb0QsK0NBQTZCLEVBQy9DbEQsZ0JBQWdCaUQseUJBQXlCLEdBQUc7SUFFbEQsSUFBSSxDQUFDaEQsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU3NELG9CQUFvQkYsdUJBQXVCLEVBQUVwRCxPQUFPO0lBQzNELElBQU1DLGtCQUFrQm9ELCtDQUE2QixFQUMvQ2xELGdCQUFnQmlELHlCQUF5QixHQUFHO0lBRWxELElBQUksQ0FBQzlDLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVN1RCxrQkFBa0JDLHNCQUFzQixFQUFFeEQsT0FBTztJQUN4RCxJQUFNQyxrQkFBa0J3RCw4Q0FBNEIsRUFDOUN0RCxnQkFBZ0JxRCx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUNwRCxhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTMEQsbUJBQW1CRixzQkFBc0IsRUFBRXhELE9BQU87SUFDekQsSUFBTUMsa0JBQWtCd0QsOENBQTRCLEVBQzlDdEQsZ0JBQWdCcUQsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDbEQsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBUzJEO0lBQ1AsSUFBTSxBQUFFOUYsY0FBZ0IsSUFBSSxDQUFDK0YsUUFBUSxHQUE3Qi9GO0lBRVIsT0FBT0E7QUFDVDtBQUVBLFNBQVNnRyxlQUFlaEcsV0FBVztJQUNqQyxJQUFJLENBQUNLLFdBQVcsQ0FBQztRQUNmTCxhQUFBQTtJQUNGO0FBQ0Y7QUFFQSxTQUFTaUc7SUFDUCxJQUFNLEFBQUVoRyxpQkFBbUIsSUFBSSxDQUFDOEYsUUFBUSxHQUFoQzlGO0lBRVIsT0FBT0E7QUFDVDtBQUVBLFNBQVNpRyxrQkFBa0JqRyxjQUFjO0lBQ3ZDLElBQUksQ0FBQ0ksV0FBVyxDQUFDO1FBQ2ZKLGdCQUFBQTtJQUNGO0FBQ0Y7QUFFQSxTQUFTa0c7SUFDUCxJQUFNLEFBQUUvRix3QkFBMEIsSUFBSSxDQUFDMkYsUUFBUSxHQUF2QzNGO0lBRVIsT0FBT0E7QUFDVDtBQUVBLFNBQVNnRyx5QkFBeUJoRyxxQkFBcUI7SUFDckQsSUFBSSxDQUFDQyxXQUFXLENBQUM7UUFDZkQsdUJBQUFBO0lBQ0Y7QUFDRjtBQUVBLFNBQVNpRztJQUNQLElBQU0sQUFBRW5HLGlCQUFtQixJQUFJLENBQUM2RixRQUFRLEdBQWhDN0Y7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU29HLGtCQUFrQnBHLGNBQWM7SUFDdkMsSUFBSSxDQUFDRyxXQUFXLENBQUM7UUFDZkgsZ0JBQUFBO0lBQ0Y7QUFDRjtBQUVBLFNBQVNxRztJQUNQLElBQU0sQUFBRXBHLGtCQUFvQixJQUFJLENBQUM0RixRQUFRLEdBQWpDNUY7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU3FHLG1CQUFtQnJHLGVBQWU7SUFDekMsSUFBSSxDQUFDRSxXQUFXLENBQUM7UUFDZkYsaUJBQUFBO0lBQ0Y7QUFDRjtBQUVBLFNBQVNXLGtCQUFrQjJGLEtBQUssRUFBRXRFLE9BQU87SUFDdkMsSUFBSSxDQUFDdUUsWUFBWSxDQUFDRCxPQUFPdEUsU0FBUyxTQUFDc0U7UUFDakMsSUFBTUUsYUFBYUYsT0FDYkcsVUFBVSxPQUNWQyxZQUFZQyxJQUFBQSxrQ0FBdUIsRUFBQ0gsWUFBWUM7UUFFdEQsT0FBT0M7SUFDVDtBQUNGO0FBRUEsU0FBU3RHLGlCQUFpQmtHLEtBQUssRUFBRXRFLE9BQU87SUFDdEMsSUFBSSxDQUFDdUUsWUFBWSxDQUFDRCxPQUFPdEUsU0FBUyxTQUFDc0U7UUFDakMsSUFBTU0sYUFBYU4sT0FDYkksWUFBWUcsSUFBQUEsa0NBQXVCLEVBQUNEO1FBRTFDLE9BQU9GO0lBQ1Q7QUFDRjtBQUVBLFNBQVM3RixpQkFBaUJ5RixLQUFLLEVBQUV0RSxPQUFPO0lBQ3RDLElBQUksQ0FBQzhFLFdBQVcsQ0FBQ1IsT0FBT3RFLFNBQVMsU0FBQ3NFO1FBQ2hDLElBQU1FLGFBQWFGLE9BQ2JHLFVBQVUsT0FDVkMsWUFBWUMsSUFBQUEsa0NBQXVCLEVBQUNILFlBQVlDO1FBRXRELE9BQU9DO0lBQ1Q7QUFDRjtBQUVBLFNBQVNwRyxpQkFBaUJnRyxLQUFLLEVBQUV0RSxPQUFPO0lBQ3RDLElBQUksQ0FBQzhFLFdBQVcsQ0FBQ1IsT0FBT3RFLFNBQVMsU0FBQ3NFO1FBQ2hDLElBQU1NLGFBQWFOLE9BQ2JJLFlBQVlHLElBQUFBLGtDQUF1QixFQUFDRDtRQUUxQyxPQUFPRjtJQUNUO0FBQ0Y7QUFFQSxTQUFTM0YsZ0JBQWdCdUYsS0FBSyxFQUFFdEUsT0FBTztJQUNyQyxJQUFJLENBQUMrRSxVQUFVLENBQUNULE9BQU90RSxTQUFTLFNBQUNzRTtRQUMvQixJQUFNRSxhQUFhRixPQUNiRyxVQUFVLE1BQ1ZDLFlBQVlDLElBQUFBLGtDQUF1QixFQUFDSCxZQUFZQztRQUV0RCxPQUFPQztJQUNUO0FBQ0Y7QUFFQSxTQUFTakcsZUFBZTZGLEtBQUssRUFBRXRFLE9BQU87SUFDcEMsSUFBSSxDQUFDK0UsVUFBVSxDQUFDVCxPQUFPdEUsU0FBUyxTQUFDc0U7UUFDL0IsSUFBTU0sYUFBYU4sT0FDYkksWUFBWUcsSUFBQUEsa0NBQXVCLEVBQUNEO1FBRTFDLE9BQU9GO0lBQ1Q7QUFDRjtBQUVBLFNBQVNILGFBQWFELEtBQUssRUFBRXRFLE9BQU8sRUFBRWdGLGtCQUFrQjtJQUN0RCxJQUFNTixZQUFZTSxtQkFBbUJWLFFBQy9CdkcsaUJBQWlCLElBQUksQ0FBQ21HLGlCQUFpQjtJQUU3Q2UsSUFBQUEsMEJBQWUsRUFBQ2xILGdCQUFnQjJHO0lBRWhDbEgsS0FBS08sZ0JBQWdCMkc7SUFFckIsSUFBTVEsMEJBQTBCbkgsZUFBZW9ILE1BQU07SUFFckQsSUFBSUQsNEJBQTRCLEdBQUc7UUFDakMsSUFBSSxDQUFDRSxTQUFTLENBQUNkLE9BQU90RTtJQUN4QjtJQUVBLElBQUlrRiw0QkFBNEIsR0FBRztRQUNqQyxJQUFJLENBQUNHLFVBQVUsQ0FBQ2YsT0FBT3RFO0lBQ3pCO0FBQ0Y7QUFFQSxTQUFTOEUsWUFBWVIsS0FBSyxFQUFFdEUsT0FBTyxFQUFFZ0Ysa0JBQWtCO0lBQ3JELElBQU1OLFlBQVlNLG1CQUFtQlYsUUFDL0J2RyxpQkFBaUIsSUFBSSxDQUFDbUcsaUJBQWlCLElBQ3ZDbEcsa0JBQWtCLElBQUksQ0FBQ29HLGtCQUFrQjtJQUUvQ2EsSUFBQUEsMEJBQWUsRUFBQ2pILGlCQUFpQjBHO0lBRWpDbEgsS0FBS1EsaUJBQWlCMEc7SUFFdEIsSUFBTVksaUJBQWlCQyxJQUFBQSx5QkFBYyxFQUFDeEgsZ0JBQWdCQztJQUV0RCxJQUFJc0gsZ0JBQWdCO1FBQ2xCRSxJQUFBQSx3QkFBYSxFQUFDeEgsaUJBQWlCRDtRQUUvQixJQUFNMEgsd0JBQXdCekgsZ0JBQWdCbUgsTUFBTTtRQUVwRCxJQUFJTSwwQkFBMEIsR0FBRztZQUMvQixJQUFJLENBQUNDLElBQUksQ0FBQ3BCLE9BQU90RTtRQUNuQjtRQUVBLElBQUl5RiwwQkFBMEIsR0FBRztZQUMvQixJQUFJLENBQUNFLEtBQUssQ0FBQ3JCLE9BQU90RTtRQUNwQjtJQUNGO0FBQ0Y7QUFFQSxTQUFTK0UsV0FBV1QsS0FBSyxFQUFFdEUsT0FBTyxFQUFFZ0Ysa0JBQWtCO0lBQ3BELElBQU1OLFlBQVlNLG1CQUFtQlYsUUFDL0J2RyxpQkFBaUIsSUFBSSxDQUFDbUcsaUJBQWlCLElBQ3ZDbEcsa0JBQWtCLElBQUksQ0FBQ29HLGtCQUFrQixJQUN6Q2tCLGlCQUFpQkMsSUFBQUEseUJBQWMsRUFBQ3hILGdCQUFnQkM7SUFFdEQsSUFBSXNILGdCQUFnQjtRQUNsQixJQUFNTSx1QkFBdUI3SCxlQUFlb0gsTUFBTSxFQUM1Q00sd0JBQXdCekgsZ0JBQWdCbUgsTUFBTTtRQUVwRCxJQUFJUyx5QkFBeUIsR0FBRztZQUM5QixJQUFJSCwwQkFBMEIsR0FBRztnQkFDL0IsSUFBSSxDQUFDSSxjQUFjLENBQUN2QixPQUFPdEU7WUFDN0IsT0FBTztnQkFDTCxJQUFJLENBQUM4RixPQUFPLENBQUN4QixPQUFPdEU7Z0JBRXBCLElBQUksQ0FBQytGLFdBQVcsQ0FBQ3pCLE9BQU90RTtnQkFFeEIsSUFBSSxDQUFDZ0csYUFBYSxDQUFDMUIsT0FBT3RFO1lBQzVCO1FBQ0Y7SUFDRjtJQUVBaUYsSUFBQUEsMEJBQWUsRUFBQ2xILGdCQUFnQjJHO0lBRWhDTyxJQUFBQSwwQkFBZSxFQUFDakgsaUJBQWlCMEc7QUFDbkM7QUFFQSxTQUFTdUIsSUFBSTNCLEtBQUssRUFBRXRFLE9BQU8sRUFBRWtHLEdBQUcsRUFBRUMsSUFBSTtJQUNwQyxJQUFNbEcsa0JBQWtCQyx1Q0FBcUI7SUFFN0MsSUFBSSxDQUFDa0csa0JBQWtCLENBQUNuRyxpQkFBaUJxRSxPQUFPdEUsU0FBU2tHLEtBQUtDLE9BQU8sR0FBRztBQUMxRTtBQUVBLFNBQVNULEtBQUtwQixLQUFLLEVBQUV0RSxPQUFPO0lBQzFCLElBQU1qQyxpQkFBaUIsSUFBSSxDQUFDbUcsaUJBQWlCLElBQ3ZDbEcsa0JBQWtCLElBQUksQ0FBQ29HLGtCQUFrQixJQUN6Q2lDLHFCQUFxQjNJLE1BQU1LLGlCQUMzQnVJLHNCQUFzQjVJLE1BQU1NLGtCQUM1QnVJLGdCQUFnQkYsb0JBQ2hCRyxpQkFBaUJGLHFCQUNqQkcsbUJBQW1CQyxpQkFBZ0IsQ0FBQ0Msa0NBQWtDLENBQUNKLGVBQWVDLGlCQUN0Rk4sTUFBTU8saUJBQWlCRyxNQUFNLElBQzdCVCxPQUFPTSxpQkFBaUJJLE9BQU8sSUFDL0JDLFlBQVlMLGlCQUFpQk0sWUFBWTtJQUUvQyxJQUFJOUcsa0JBQWtCO0lBRXRCLElBQUksQUFBQytHLEtBQUtDLEdBQUcsQ0FBQ0gsYUFBY0kseUJBQWMsRUFBRTtRQUMxQ2pILGtCQUFrQm9CLDhDQUE0QjtJQUNoRDtJQUVBLElBQUkyRixLQUFLQyxHQUFHLENBQUNFLHNCQUFXLEdBQUdMLGFBQWFJLHlCQUFjLEVBQUU7UUFDdERqSCxrQkFBa0JRLDJDQUF5QjtJQUM3QztJQUVBLElBQUl1RyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0Usc0JBQVcsR0FBR0wsYUFBYUkseUJBQWMsRUFBRTtRQUN2RGpILGtCQUFrQlksNkNBQTJCO0lBQy9DO0lBRUEsSUFBSSxBQUFDdUcsYUFBRSxHQUFHSixLQUFLQyxHQUFHLENBQUNILGFBQWNJLHlCQUFjLEVBQUU7UUFDL0NqSCxrQkFBa0JnQiw2Q0FBMkI7SUFDL0M7SUFFQSxJQUFJaEIsb0JBQW9CLE1BQU07UUFDNUIsSUFBSSxDQUFDb0gsK0JBQStCLENBQUNwSCxpQkFBaUJxRSxPQUFPdEUsU0FBU2tHLEtBQUtDO0lBQzdFO0FBQ0Y7QUFFQSxTQUFTUixNQUFNckIsS0FBSyxFQUFFdEUsT0FBTztJQUMzQixJQUFNaEMsa0JBQWtCLElBQUksQ0FBQ29HLGtCQUFrQixJQUN6Q2tDLHNCQUFzQjVJLE1BQU1NLGtCQUM1QnNKLHVCQUF1QjNKLE9BQU9LLGtCQUM5QnVKLHlCQUF5QmIsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDTCxxQkFBcUJnQix1QkFDbEdySCxrQkFBa0JnRCw4Q0FBNEIsRUFDOUNuRixpQkFBaUIsSUFBSSxDQUFDZ0csaUJBQWlCLElBQ3ZDMEQsWUFBWUQsdUJBQXVCRSxZQUFZLElBQy9DQyxRQUFRRixZQUFZMUo7SUFFMUIsSUFBSSxDQUFDdUosK0JBQStCLENBQUNwSCxpQkFBaUJxRSxPQUFPdEUsU0FBUzBIO0FBQ3hFO0FBRUEsU0FBU0MsTUFBTXJELEtBQUssRUFBRXRFLE9BQU8sRUFBRTRILEtBQUssRUFBRWQsU0FBUztJQUM3QyxJQUFJN0csa0JBQWtCO0lBRXRCLElBQUksQUFBQytHLEtBQUtDLEdBQUcsQ0FBQ0gsYUFBY0kseUJBQWMsRUFBRTtRQUMxQ2pILGtCQUFrQjRDLCtDQUE2QjtRQUUvQytFLFFBQVFBLFFBQVFaLEtBQUthLEdBQUcsQ0FBQ2Y7SUFDM0I7SUFFQSxJQUFJRSxLQUFLQyxHQUFHLENBQUNFLHNCQUFXLEdBQUdMLGFBQWFJLHlCQUFjLEVBQUU7UUFDdERqSCxrQkFBa0JnQyw0Q0FBMEI7UUFFNUMyRixRQUFRQSxRQUFRWixLQUFLYyxHQUFHLENBQUNoQjtJQUMzQjtJQUVBLElBQUlFLEtBQUtDLEdBQUcsQ0FBQyxDQUFDRSxzQkFBVyxHQUFHTCxhQUFhSSx5QkFBYyxFQUFFO1FBQ3ZEakgsa0JBQWtCb0MsOENBQTRCO1FBRTlDdUYsUUFBUUEsUUFBUVosS0FBS2MsR0FBRyxDQUFDaEI7SUFDM0I7SUFFQSxJQUFJLEFBQUNNLGFBQUUsR0FBR0osS0FBS0MsR0FBRyxDQUFDSCxhQUFjSSx5QkFBYyxFQUFFO1FBQy9Dakgsa0JBQWtCd0MsOENBQTRCO1FBRTlDbUYsUUFBUUEsUUFBUVosS0FBS2EsR0FBRyxDQUFDZjtJQUMzQjtJQUVBLElBQUk3RyxvQkFBb0IsTUFBTTtRQUM1QixJQUFNbEMsaUJBQWlCLElBQUksQ0FBQ21HLGlCQUFpQixJQUN2Q21DLHFCQUFxQjNJLE1BQU1LLGlCQUMzQmdLLGdCQUFnQjFCLG9CQUNoQkgsTUFBTTZCLGNBQWNuQixNQUFNLElBQzFCVCxPQUFPNEIsY0FBY2xCLE9BQU87UUFFbEMsSUFBSSxDQUFDUSwrQkFBK0IsQ0FBQ3BILGlCQUFpQnFFLE9BQU90RSxTQUFTa0csS0FBS0MsTUFBTXlCO0lBQ25GO0FBQ0Y7QUFFQSxTQUFTSSxVQUFVMUQsS0FBSyxFQUFFdEUsT0FBTyxFQUFFa0csR0FBRyxFQUFFQyxJQUFJO0lBQzFDLElBQU1sRyxrQkFBa0J3RCw4Q0FBNEI7SUFFcEQsSUFBSSxDQUFDNEQsK0JBQStCLENBQUNwSCxpQkFBaUJxRSxPQUFPdEUsU0FBU2tHLEtBQUtDO0FBQzdFO0FBRUEsU0FBU0wsUUFBUXhCLEtBQUssRUFBRXRFLE9BQU87SUFDN0IsSUFBTUMsa0JBQWtCNEIsNENBQTBCO0lBRWxELElBQUksQ0FBQ3dGLCtCQUErQixDQUFDcEgsaUJBQWlCcUUsT0FBT3RFO0FBQy9EO0FBRUEsU0FBU29GLFVBQVVkLEtBQUssRUFBRXRFLE9BQU87SUFDL0IsSUFBTUMsa0JBQWtCd0IsOENBQTRCLEVBQzlDMUQsaUJBQWlCLElBQUksQ0FBQ21HLGlCQUFpQixJQUN2Q21DLHFCQUFxQjNJLE1BQU1LLGlCQUMzQmdLLGdCQUFnQjFCLG9CQUNoQkgsTUFBTTZCLGNBQWNuQixNQUFNLElBQzFCVCxPQUFPNEIsY0FBY2xCLE9BQU87SUFFbEMsSUFBSSxDQUFDUSwrQkFBK0IsQ0FBQ3BILGlCQUFpQnFFLE9BQU90RSxTQUFTa0csS0FBS0M7QUFDN0U7QUFFQSxTQUFTZCxXQUFXZixLQUFLLEVBQUV0RSxPQUFPO0lBQ2hDLElBQU1qQyxpQkFBaUIsSUFBSSxDQUFDbUcsaUJBQWlCLElBQ3ZDbUMscUJBQXFCM0ksTUFBTUssaUJBQzNCa0ssc0JBQXNCdEssT0FBT0ksaUJBQzdCbUssd0JBQXdCeEIsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDTixvQkFBb0I0QixzQkFDaEdULFlBQVlVLHNCQUFzQlQsWUFBWSxJQUM5QzNKLGlCQUFpQjBKLFdBQ2pCdkgsa0JBQWtCb0QsK0NBQTZCO0lBRXJELElBQUksQ0FBQ1UsaUJBQWlCLENBQUNqRztJQUV2QixJQUFJLENBQUN1SiwrQkFBK0IsQ0FBQ3BILGlCQUFpQnFFLE9BQU90RTtBQUMvRDtBQUVBLFNBQVMrRixZQUFZekIsS0FBSyxFQUFFdEUsT0FBTztJQUNqQyxJQUFNakMsaUJBQWlCLElBQUksQ0FBQ21HLGlCQUFpQixJQUN2Q2xHLGtCQUFrQixJQUFJLENBQUNvRyxrQkFBa0IsSUFDekNpQyxxQkFBcUIzSSxNQUFNSyxpQkFDM0J1SSxzQkFBc0I1SSxNQUFNTSxrQkFDNUJ1SSxnQkFBZ0JGLG9CQUNoQkcsaUJBQWlCRixxQkFDakJHLG1CQUFtQkMsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDSixlQUFlQyxpQkFDdEYyQixPQUFPMUIsaUJBQWlCMkIsT0FBTyxJQUMvQlIsUUFBUW5CLGlCQUFpQjRCLFFBQVE7SUFFdkMsSUFBSSxBQUFDVCxVQUFVLEtBQU9PLE9BQU9HLDJCQUFnQixFQUFFO1FBQzdDLElBQUksQ0FBQ3pDLGNBQWMsQ0FBQ3ZCLE9BQU90RTtJQUM3QjtBQUNGO0FBRUEsU0FBU2dHLGNBQWMxQixLQUFLLEVBQUV0RSxPQUFPO0lBQ25DLElBQU1qQyxpQkFBaUIsSUFBSSxDQUFDbUcsaUJBQWlCLElBQ3ZDbEcsa0JBQWtCLElBQUksQ0FBQ29HLGtCQUFrQixJQUN6Q2lDLHFCQUFxQjNJLE1BQU1LLGlCQUMzQnVJLHNCQUFzQjVJLE1BQU1NLGtCQUM1QnVJLGdCQUFnQkYsb0JBQ2hCRyxpQkFBaUJGLHFCQUNqQkcsbUJBQW1CQyxpQkFBZ0IsQ0FBQ0Msa0NBQWtDLENBQUNKLGVBQWVDLGlCQUN0Rk0sWUFBWUwsaUJBQWlCTSxZQUFZLElBQ3pDYSxRQUFRbkIsaUJBQWlCNEIsUUFBUTtJQUV2QyxJQUFJVCxRQUFRVyw4QkFBbUIsRUFBRTtRQUMvQixJQUFJLENBQUNaLEtBQUssQ0FBQ3JELE9BQU90RSxTQUFTNEgsT0FBT2Q7SUFDcEM7QUFDRjtBQUVBLFNBQVNqQixlQUFldkIsS0FBSyxFQUFFdEUsT0FBTzs7SUFDcEMsSUFBTWpDLGlCQUFpQixJQUFJLENBQUNtRyxpQkFBaUIsSUFDdkNtQyxxQkFBcUIzSSxNQUFNSyxpQkFDM0JnSyxnQkFBZ0IxQixvQkFDaEJILE1BQU02QixjQUFjbkIsTUFBTSxJQUMxQlQsT0FBTzRCLGNBQWNsQixPQUFPO0lBRWxDLElBQUloSixjQUFjLElBQUksQ0FBQzhGLGNBQWM7SUFFckMsSUFBSTlGLGdCQUFnQixNQUFNO1FBQ3hCMkssYUFBYTNLO1FBRWJBLGNBQWM7UUFFZCxJQUFJLENBQUNnRyxjQUFjLENBQUNoRztRQUVwQixJQUFJLENBQUNtSyxTQUFTLENBQUMxRCxPQUFPdEUsU0FBU2tHLEtBQUtDO1FBRXBDO0lBQ0Y7SUFFQXRJLGNBQWM0SyxXQUFXO1FBQ3ZCNUssY0FBYztRQUVkLE1BQUtnRyxjQUFjLENBQUNoRztRQUVwQixNQUFLb0ksR0FBRyxDQUFDM0IsT0FBT3RFLFNBQVNrRyxLQUFLQztJQUNoQyxHQUFHdUMsb0JBQVM7SUFFWixJQUFJLENBQUM3RSxjQUFjLENBQUNoRztBQUN0QjtBQUVBLFNBQVM4SztJQUNQLElBQU1DLHdCQUF3QjtJQUU5QixJQUFJLENBQUMzRSx3QkFBd0IsQ0FBQzJFO0FBQ2hDO0FBRUEsU0FBU0M7SUFDUCxJQUFNRCx3QkFBd0I7SUFFOUIsSUFBSSxDQUFDM0Usd0JBQXdCLENBQUMyRTtBQUNoQztBQUVBLFNBQVN2QixnQ0FBZ0NwSCxlQUFlLEVBQUVxRSxLQUFLLEVBQUV0RSxPQUFPO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUc4SSxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztJQUM3RixJQUFNN0ssd0JBQXdCLElBQUksQ0FBQytGLHdCQUF3QjtJQUUzRCxJQUFJL0YsdUJBQXVCO1FBQ3pCLElBQUksQ0FBQ21JLGtCQUFrQixDQUF2QixNQUFBLElBQUksRUFBSjtZQUF3Qm5HO1lBQWlCcUU7WUFBT3RFO1NBQStCLENBQS9FLE9BQXlELHFCQUFHOEk7SUFDOUQ7QUFDRjtBQUVBLElBQU1DLGNBQWM7SUFDbEJuTCxhQUFBQTtJQUNBb0IsY0FBQUE7SUFDQU4sY0FBQUE7SUFDQVUsZUFBQUE7SUFDQVIsYUFBQUE7SUFDQVMsY0FBQUE7SUFDQVAsWUFBQUE7SUFDQVEsYUFBQUE7SUFDQVEsYUFBQUE7SUFDQU8sY0FBQUE7SUFDQUUsZ0JBQUFBO0lBQ0FHLGlCQUFBQTtJQUNBQyxrQkFBQUE7SUFDQUcsbUJBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBRyxtQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsb0JBQUFBO0lBQ0FDLGlCQUFBQTtJQUNBRyxrQkFBQUE7SUFDQUMsaUJBQUFBO0lBQ0FHLGtCQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsb0JBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBRyxvQkFBQUE7SUFDQUMsb0JBQUFBO0lBQ0FHLHFCQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsb0JBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBRyxxQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUUsZ0JBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsbUJBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBSCwwQkFBQUE7SUFDQUMsMEJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQTFGLG1CQUFBQTtJQUNBUCxrQkFBQUE7SUFDQVMsa0JBQUFBO0lBQ0FQLGtCQUFBQTtJQUNBUyxpQkFBQUE7SUFDQU4sZ0JBQUFBO0lBQ0E4RixjQUFBQTtJQUNBTyxhQUFBQTtJQUNBQyxZQUFBQTtJQUNBa0IsS0FBQUE7SUFDQVAsTUFBQUE7SUFDQUMsT0FBQUE7SUFDQWdDLE9BQUFBO0lBQ0FLLFdBQUFBO0lBQ0FsQyxTQUFBQTtJQUNBVixXQUFBQTtJQUNBQyxZQUFBQTtJQUNBVSxhQUFBQTtJQUNBQyxlQUFBQTtJQUNBSCxnQkFBQUE7SUFDQThDLHNCQUFBQTtJQUNBRSx1QkFBQUE7SUFDQXhCLGlDQUFBQTtBQUNGO0lBRUEsV0FBZTBCIn0=