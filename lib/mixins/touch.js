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
    var tapInterval = null, startMagnitude = null, gesturesEnabled = true, startPositions = [], movingPositions = [];
    this.updateState({
        tapInterval: tapInterval,
        startMagnitude: startMagnitude,
        gesturesEnabled: gesturesEnabled,
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
function enableGestures() {
    var gesturedEnabled = true;
    this.setGesturesEnabled(gesturedEnabled);
}
function disableGestures() {
    var gesturedEnabled = false;
    this.setGesturesEnabled(gesturedEnabled);
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
function areGesturesEnabled() {
    var gesturesEnabled = this.getState().gesturesEnabled;
    return gesturesEnabled;
}
function setGesturesEnabled(gesturesEnabled) {
    this.updateState({
        gesturesEnabled: gesturesEnabled
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
            this.dragEnd(event, element);
            this.possibleTap(event, element);
            this.possibleSwipe(event, element);
        }
    }
    (0, _positions.filterPositions)(startPositions, positions);
    (0, _positions.filterPositions)(movingPositions, positions);
}
function tap(event, element) {
    var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element); ///
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
function doubleTap(event, element) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlersConditionally(customEventType, event, element);
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
function callCustomHandlersConditionally(customEventType, event, element) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        remainingArguments[_key - 3] = arguments[_key];
    }
    var gesturesEnabled = this.areGesturesEnabled();
    if (gesturesEnabled) {
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
    enableGestures: enableGestures,
    disableGestures: disableGestures,
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
    areGesturesEnabled: areGesturesEnabled,
    setGesturesEnabled: setGesturesEnabled,
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
    callCustomHandlersConditionally: callCustomHandlersConditionally
};
var _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgUEksIFRBUF9ERUxBWSwgUElfT1ZFUl9UV08sIE1BWElNVU1fVEFQX1RJTUUsIE1JTklNVU1fU1dJUEVfU1BFRUQsIE1BWElNVU1fU1BSRUFEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc29ydFBvc2l0aW9ucywgbWF0Y2hQb3NpdGlvbnMsIGZpbHRlclBvc2l0aW9ucywgcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQsIHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wb3NpdGlvbnNcIjtcbmltcG9ydCB7IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfRU5EX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgZ2VzdHVyZXNFbmFibGVkID0gdHJ1ZSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgZ2VzdHVyZXNFbmFibGVkLFxuICAgIHN0YXJ0UG9zaXRpb25zLFxuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVUb3VjaCgpIHtcbiAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9mZlRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVHZXN0dXJlcygpIHtcbiAgY29uc3QgZ2VzdHVyZWRFbmFibGVkID0gdHJ1ZTtcblxuICB0aGlzLnNldEdlc3R1cmVzRW5hYmxlZChnZXN0dXJlZEVuYWJsZWQpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlR2VzdHVyZXMoKSB7XG4gIGNvbnN0IGdlc3R1cmVkRW5hYmxlZCA9IGZhbHNlO1xuXG4gIHRoaXMuc2V0R2VzdHVyZXNFbmFibGVkKGdlc3R1cmVkRW5hYmxlZCk7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVRhcCh0YXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0VuZChkcmFnRW5kQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdFbmRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0VuZChkcmFnRW5kQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdFbmRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hTdGFydChwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hTdGFydChwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXBJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyB0YXBJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB0YXBJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXJlR2VzdHVyZXNFbmFibGVkKCkge1xuICBjb25zdCB7IGdlc3R1cmVzRW5hYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBnZXN0dXJlc0VuYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIHNldEdlc3R1cmVzRW5hYmxlZChnZXN0dXJlc0VuYWJsZWQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgZ2VzdHVyZXNFbmFibGVkXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgdGhpcy5waW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuZHJhZyhldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5waW5jaChldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50YXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5kcmFnRW5kKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7IC8vL1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwaW5jaChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICByYXRpbyA9IG1hZ25pdHVkZSAvIHN0YXJ0TWFnbml0dWRlO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCByYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsO1xuXG4gIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdFbmQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19FTkRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kU3RhcnRQb3NpdGlvbiA9IHNlY29uZChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbWFnbml0dWRlLCAvLy9cbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5zZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0aW1lID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmICgoc3BlZWQgPT09IDApICYmICh0aW1lIDwgTUFYSU1VTV9UQVBfVElNRSkpe1xuICAgIHRoaXMudGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlU3dpcGUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKHNwZWVkID4gTUlOSU1VTV9TV0lQRV9TUEVFRCkge1xuICAgIHRoaXMuc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGxldCB0YXBJbnRlcnZhbCA9IHRoaXMuZ2V0VGFwSW50ZXJ2YWwoKTtcblxuICBpZiAodGFwSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLmRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy50YXAoZXZlbnQsIGVsZW1lbnQpO1xuICB9LCBUQVBfREVMQVkpO1xuXG4gIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBnZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmFyZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gIGlmIChnZXN0dXJlc0VuYWJsZWQpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBlbmFibGVHZXN0dXJlcyxcbiAgZGlzYWJsZUdlc3R1cmVzLFxuICBvblRvdWNoU3RhcnQsXG4gIG9mZlRvdWNoU3RhcnQsXG4gIG9uVG91Y2hNb3ZlLFxuICBvZmZUb3VjaE1vdmUsXG4gIG9uVG91Y2hFbmQsXG4gIG9mZlRvdWNoRW5kLFxuICBvbkN1c3RvbVRhcCxcbiAgb2ZmQ3VzdG9tVGFwLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tRHJhZ0VuZCxcbiAgb2ZmQ3VzdG9tRHJhZ0VuZCxcbiAgb25DdXN0b21Td2lwZVVwLFxuICBvZmZDdXN0b21Td2lwZVVwLFxuICBvbkN1c3RvbVN3aXBlRG93bixcbiAgb2ZmQ3VzdG9tU3dpcGVEb3duLFxuICBvbkN1c3RvbVN3aXBlTGVmdCxcbiAgb2ZmQ3VzdG9tU3dpcGVMZWZ0LFxuICBvbkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9mZkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9uQ3VzdG9tUGluY2hNb3ZlLFxuICBvZmZDdXN0b21QaW5jaE1vdmUsXG4gIG9uQ3VzdG9tUGluY2hTdGFydCxcbiAgb2ZmQ3VzdG9tUGluY2hTdGFydCxcbiAgb25DdXN0b21Eb3VibGVUYXAsXG4gIG9mZkN1c3RvbURvdWJsZVRhcCxcbiAgZ2V0VGFwSW50ZXJ2YWwsXG4gIHNldFRhcEludGVydmFsLFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgYXJlR2VzdHVyZXNFbmFibGVkLFxuICBzZXRHZXN0dXJlc0VuYWJsZWQsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgdGFwLFxuICBkcmFnLFxuICBwaW5jaCxcbiAgc3dpcGUsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZ0VuZCxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0LFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgdGFwT3JEb3VibGVUYXAsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdWNoTWl4aW5zO1xuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiZW5hYmxlVG91Y2giLCJ0YXBJbnRlcnZhbCIsInN0YXJ0TWFnbml0dWRlIiwiZ2VzdHVyZXNFbmFibGVkIiwic3RhcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnMiLCJ1cGRhdGVTdGF0ZSIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm1vdXNlVXBIYW5kbGVyIiwib25Ub3VjaFN0YXJ0IiwidG91Y2hTdGFydEhhbmRsZXIiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZUhhbmRsZXIiLCJvblRvdWNoRW5kIiwidG91Y2hFbmRIYW5kbGVyIiwiZGlzYWJsZVRvdWNoIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZlRvdWNoU3RhcnQiLCJvZmZUb3VjaE1vdmUiLCJvZmZUb3VjaEVuZCIsImVuYWJsZUdlc3R1cmVzIiwiZ2VzdHVyZWRFbmFibGVkIiwic2V0R2VzdHVyZXNFbmFibGVkIiwiZGlzYWJsZUdlc3R1cmVzIiwiZXZlbnRUeXBlIiwiVE9VQ0hTVEFSVF9FVkVOVF9UWVBFIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJvZmZFdmVudCIsIlRPVUNITU9WRV9FVkVOVF9UWVBFIiwiVE9VQ0hFTkRfRVZFTlRfVFlQRSIsIm9uQ3VzdG9tVGFwIiwidGFwQ3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJUQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsIkRSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21EcmFnRW5kIiwiZHJhZ0VuZEN1c3RvbUhhbmRsZXIiLCJEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdFbmQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsInNldFRhcEludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydE1hZ25pdHVkZSIsImFyZUdlc3R1cmVzRW5hYmxlZCIsImdldFN0YXJ0UG9zaXRpb25zIiwic2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRNb3ZpbmdQb3NpdGlvbnMiLCJldmVudCIsInN0YXJ0SGFuZGxlciIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkIiwicG9zaXRpb25zIiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJtb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbU1vdXNlRXZlbnQiLCJtb3ZlSGFuZGxlciIsImVuZEhhbmRsZXIiLCJwb3NpdGlvbnNGcm9tRXZlbnQiLCJmaWx0ZXJQb3NpdGlvbnMiLCJzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRyYWdTdGFydCIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwidGFwT3JEb3VibGVUYXAiLCJkcmFnRW5kIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwidGFwIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsImNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJyYXRpbyIsInN3aXBlIiwic3BlZWQiLCJjb3MiLCJzaW4iLCJzdGFydFBvc2l0aW9uIiwiZG91YmxlVGFwIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwiZ2V0U3BlZWQiLCJNQVhJTVVNX1RBUF9USU1FIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJUQVBfREVMQVkiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0b3VjaE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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