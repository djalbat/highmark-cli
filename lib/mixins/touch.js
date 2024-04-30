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
        var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE;
        this.callCustomHandlers(customEventType, event, element);
    }
    if (startingPositionsLength === 2) {
        var firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude, customEventType1 = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE;
        this.setStartMagnitude(startMagnitude);
        this.callCustomHandlers(customEventType1, event, element);
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
            var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection();
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
                var top = relativePosition.getTop(), left = relativePosition.getLeft();
                this.callCustomHandlers(customEventType, event, element, top, left);
            }
        }
        if (movingPositionsLength === 2) {
            var firstMovingPosition1 = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition1, secondMovingPosition), customEventType1 = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
            this.callCustomHandlers(customEventType1, event, element, ratio);
        }
    }
}
function endHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), startPositionsLength = startPositions.length, movingPositionsLength = movingPositions.length;
    var positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        var speed, customEventType = null;
        if (movingPositionsLength === 0) {
            customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
        } else if (startPositionsLength === 1) {
            var firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), time = relativePosition.getTime();
            speed = relativePosition.getSpeed();
            if (speed === 0) {
                if (time < _constants.MAXIMUM_TAP_TIME) {
                    customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
                }
            } else if (speed > _constants.MINIMUM_SWIPE_SPEED) {
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
            }
        }
        if (customEventType !== null) {
            this.callCustomHandlers(customEventType, event, element, speed);
        }
    }
    (0, _positions.filterPositions)(startPositions, positions);
    (0, _positions.filterPositions)(movingPositions, positions);
}
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TUFJFQUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzb3J0UG9zaXRpb25zLCBtYXRjaFBvc2l0aW9ucywgZmlsdGVyUG9zaXRpb25zLCBwb3NpdGlvbnNGcm9tTW91c2VFdmVudCwgcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gZW5hYmxlVG91Y2goKSB7XG4gIGNvbnN0IHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tVGFwKHRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVRhcCh0YXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hTdGFydChwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hTdGFydChwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgc3RhcnRQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0UG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0UG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpbmdQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgbW92aW5nUG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIG1vdmluZ1Bvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0TW92aW5nUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzZWNvbmRTdGFydFBvc2l0aW9uID0gc2Vjb25kKHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSBtYWduaXR1ZGUsIC8vL1xuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5zZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpO1xuXG4gICAgICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICAgICAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcbiAgICAgIH1cblxuICAgICAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW92aW5nUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RNb3ZpbmdQb3NpdGlvbiwgc2Vjb25kTW92aW5nUG9zaXRpb24pLFxuICAgICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHJhdGlvKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICBjb25zdCBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIGxldCBzcGVlZCxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKTtcblxuICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgICBpZiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpIHtcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBUQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgICAgIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICAgICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICAgICAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgc3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xufVxuXG5jb25zdCB0b3VjaE1peGlucyA9IHtcbiAgZW5hYmxlVG91Y2gsXG4gIGRpc2FibGVUb3VjaCxcbiAgb25DdXN0b21UYXAsXG4gIG9mZkN1c3RvbVRhcCxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImVuYWJsZVRvdWNoIiwic3RhcnRNYWduaXR1ZGUiLCJzdGFydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9ucyIsInVwZGF0ZVN0YXRlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwid2luZG93Iiwib25Nb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsIm9uVG91Y2hNb3ZlIiwidG91Y2hNb3ZlSGFuZGxlciIsIm9uVG91Y2hFbmQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJkaXNhYmxlVG91Y2giLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmVG91Y2hTdGFydCIsIm9mZlRvdWNoTW92ZSIsIm9mZlRvdWNoRW5kIiwib25DdXN0b21UYXAiLCJ0YXBDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlRBUF9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50Iiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRXZlbnQiLCJvbkN1c3RvbURyYWdVcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsIkRSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnTGVmdCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnUmlnaHQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJnZXRTdGFydE1hZ25pdHVkZSIsImdldFN0YXRlIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJnZXRTdGFydFBvc2l0aW9ucyIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImZpcnN0TW92aW5nUG9zaXRpb24iLCJmaXJzdFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0Iiwic2Vjb25kTW92aW5nUG9zaXRpb24iLCJyZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uIiwicmF0aW8iLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInNwZWVkIiwidGltZSIsImdldFRpbWUiLCJnZXRTcGVlZCIsIk1BWElNVU1fVEFQX1RJTUUiLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwiY29zIiwic2luIiwidG91Y2hNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBnQkE7OztlQUFBOzs7b0JBeGdCdUI7eUJBQ1E7K0RBRUY7eUJBRTBEO3lCQUMwQjtnQ0FZbkU7Ozs7OztBQUU5QyxJQUFRQSxPQUF3QkMseUJBQWMsQ0FBdENELE1BQU1FLFFBQWtCRCx5QkFBYyxDQUFoQ0MsT0FBT0MsU0FBV0YseUJBQWMsQ0FBekJFO0FBRXJCLFNBQVNDO0lBQ1AsSUFBTUMsaUJBQWlCLE1BQ2pCQyxpQkFBaUIsRUFBRSxFQUNuQkMsa0JBQWtCLEVBQUU7SUFFMUIsSUFBSSxDQUFDQyxXQUFXLENBQUM7UUFDZkgsZ0JBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxpQkFBQUE7SUFDRjtJQUVBLElBQUksQ0FBQ0UsV0FBVyxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCO0lBQ3RDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCO0lBRXRDQyxZQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNDLGNBQWMsRUFBRSxJQUFJO0lBRTFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ0MsaUJBQWlCO0lBQ3hDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FB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