"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Position;
    }
});
var _necessary = require("necessary");
var _constants = require("./constants");
var _degrees = require("./degrees");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var first = _necessary.arrayUtilities.first;
var Position = /*#__PURE__*/ function() {
    function Position(top, left, time, identifier) {
        _class_call_check(this, Position);
        this.top = top;
        this.left = left;
        this.time = time;
        this.identifier = identifier;
    }
    _create_class(Position, [
        {
            key: "getTop",
            value: function getTop() {
                return this.top;
            }
        },
        {
            key: "getLeft",
            value: function getLeft() {
                return this.left;
            }
        },
        {
            key: "getTime",
            value: function getTime() {
                return this.time;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "getMagnitude",
            value: function getMagnitude() {
                var magnitude = Math.sqrt(this.top * this.top + this.left * this.left);
                return magnitude;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                var direction = 0;
                if (this.left === 0) {
                    direction = this.top < 0 ? +_constants.PI / 2 : -_constants.PI / 2;
                } else {
                    direction = Math.atan2(-this.top, this.left);
                }
                direction = direction * _degrees.ONE_HUNDRED_AND_EIGHTY_DEGREES / _constants.PI;
                return direction;
            }
        },
        {
            key: "minus",
            value: function minus(position) {
                var positionTop = position.getTop(), positionLeft = position.getLeft(), positionTime = position.getTime(), top = this.top - positionTop, left = this.left - positionLeft, time = this.time - positionTime, identifier = null; ///
                position = new Position(top, left, time, identifier); ///
                return position;
            }
        },
        {
            key: "match",
            value: function match(position) {
                var identifier = position.getIdentifier(), matches = this.identifier === identifier;
                return matches;
            }
        }
    ], [
        {
            key: "fromMouseEvent",
            value: function fromMouseEvent(mouseEvent) {
                var pageX = mouseEvent.pageX, pageY = mouseEvent.pageY, top = pageY, left = pageX, time = getTime(), identifier = null, position = new Position(top, left, time, identifier);
                return position;
            }
        },
        {
            key: "fromTouchEvent",
            value: function fromTouchEvent(touchEvent) {
                var position = null;
                var changedTouches = touchEvent.changedTouches, changedTouchesLength = changedTouches.length;
                if (changedTouchesLength === 1) {
                    var firstChangedTouch = first(changedTouches), changedTouch = firstChangedTouch, pageX = changedTouch.pageX, pageY = changedTouch.pageY, identifier = changedTouch.identifier, top = pageY, left = pageX, time = getTime();
                    position = new Position(top, left, time, identifier);
                }
                return position;
            }
        }
    ]);
    return Position;
}();
function getTime() {
    var time = Date.now(); ///
    return time;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFBJIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPTkVfSFVORFJFRF9BTkRfRUlHSFRZX0RFR1JFRVMgfSBmcm9tIFwiLi9kZWdyZWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldE1hZ25pdHVkZSgpIHtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodGhpcy50b3AgKiB0aGlzLnRvcCArIHRoaXMubGVmdCAqIHRoaXMubGVmdCk7XG5cbiAgICByZXR1cm4gbWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb24gPSAwO1xuXG4gICAgaWYgKHRoaXMubGVmdCA9PT0gMCkge1xuICAgICAgZGlyZWN0aW9uID0gKHRoaXMudG9wIDwgMCkgP1xuICAgICAgICAgICAgICAgICAgICtQSSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgLVBJIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gTWF0aC5hdGFuMigtdGhpcy50b3AsIHRoaXMubGVmdCk7XG4gICAgfVxuXG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uICogT05FX0hVTkRSRURfQU5EX0VJR0hUWV9ERUdSRUVTIC8gUEk7XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgbWludXMocG9zaXRpb24pIHtcbiAgICBjb25zdCBwb3NpdGlvblRvcCA9IHBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIHBvc2l0aW9uTGVmdCA9IHBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgICBwb3NpdGlvblRpbWUgPSBwb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgICAgdG9wID0gdGhpcy50b3AgLSBwb3NpdGlvblRvcCxcbiAgICAgICAgICBsZWZ0ID0gdGhpcy5sZWZ0IC0gcG9zaXRpb25MZWZ0LFxuICAgICAgICAgIHRpbWUgPSB0aGlzLnRpbWUgLSBwb3NpdGlvblRpbWUsXG4gICAgICAgICAgaWRlbnRpZmllciA9IG51bGw7ICAvLy9cblxuICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7IC8vL1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgbWF0Y2gocG9zaXRpb24pIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcG9zaXRpb24uZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIG1hdGNoZXMgPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gbW91c2VFdmVudCxcbiAgICAgICAgICB0b3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgIGxlZnQgPSBwYWdlWCwgLy8vXG4gICAgICAgICAgdGltZSA9IGdldFRpbWUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbnVsbCxcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBjaGFuZ2VkVG91Y2hlcyB9ID0gdG91Y2hFdmVudCxcbiAgICAgICAgICBjaGFuZ2VkVG91Y2hlc0xlbmd0aCA9IGNoYW5nZWRUb3VjaGVzLmxlbmd0aFxuXG4gICAgaWYgKGNoYW5nZWRUb3VjaGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoYW5nZWRUb3VjaCA9IGZpcnN0KGNoYW5nZWRUb3VjaGVzKSxcbiAgICAgICAgICAgIGNoYW5nZWRUb3VjaCA9IGZpcnN0Q2hhbmdlZFRvdWNoLCAvLy9cbiAgICAgICAgICAgIHsgcGFnZVgsIHBhZ2VZLCBpZGVudGlmaWVyIH0gPSBjaGFuZ2VkVG91Y2gsXG4gICAgICAgICAgICB0b3AgPSBwYWdlWSxcbiAgICAgICAgICAgIGxlZnQgPSBwYWdlWCxcbiAgICAgICAgICAgIHRpbWUgPSBnZXRUaW1lKCk7XG5cbiAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpOyAgLy8vXG5cbiAgcmV0dXJuIHRpbWU7XG59XG4iXSwibmFtZXMiOlsiUG9zaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidG9wIiwibGVmdCIsInRpbWUiLCJpZGVudGlmaWVyIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImdldFRpbWUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0TWFnbml0dWRlIiwibWFnbml0dWRlIiwiTWF0aCIsInNxcnQiLCJnZXREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJQSSIsImF0YW4yIiwiT05FX0hVTkRSRURfQU5EX0VJR0hUWV9ERUdSRUVTIiwibWludXMiLCJwb3NpdGlvbiIsInBvc2l0aW9uVG9wIiwicG9zaXRpb25MZWZ0IiwicG9zaXRpb25UaW1lIiwibWF0Y2giLCJtYXRjaGVzIiwiZnJvbU1vdXNlRXZlbnQiLCJtb3VzZUV2ZW50IiwicGFnZVgiLCJwYWdlWSIsImZyb21Ub3VjaEV2ZW50IiwidG91Y2hFdmVudCIsImNoYW5nZWRUb3VjaGVzIiwiY2hhbmdlZFRvdWNoZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoYW5nZWRUb3VjaCIsImNoYW5nZWRUb3VjaCIsIkRhdGUiLCJub3ciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7eUJBRVo7dUJBQzRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQseUJBQUQsQUFBTDthQUFNQSxTQUNQRyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURwQk47UUFFakIsSUFBSSxDQUFDRyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFMRE47O1lBUW5CTyxLQUFBQTttQkFBQUEs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