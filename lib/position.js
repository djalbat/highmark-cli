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
                direction = direction * _constants.ONE_HUNDRED_AND_EIGHTY / _constants.PI;
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
                var touches = touchEvent.touches, touchesLength = touches.length;
                if (touchesLength === 1) {
                    var firstTouch = first(touches), touch = firstTouch, pageX = touch.pageX, pageY = touch.pageY, identifier = touch.identifier, top = pageY, left = pageX, time = getTime();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFBJLCBPTkVfSFVORFJFRF9BTkRfRUlHSFRZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldE1hZ25pdHVkZSgpIHtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodGhpcy50b3AgKiB0aGlzLnRvcCArIHRoaXMubGVmdCAqIHRoaXMubGVmdCk7XG5cbiAgICByZXR1cm4gbWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb24gPSAwO1xuXG4gICAgaWYgKHRoaXMubGVmdCA9PT0gMCkge1xuICAgICAgZGlyZWN0aW9uID0gKHRoaXMudG9wIDwgMCkgP1xuICAgICAgICAgICAgICAgICAgICtQSSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgLVBJIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gTWF0aC5hdGFuMigtdGhpcy50b3AsIHRoaXMubGVmdCk7XG4gICAgfVxuXG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uICogT05FX0hVTkRSRURfQU5EX0VJR0hUWSAvIFBJO1xuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIG1pbnVzKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25Ub3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBwb3NpdGlvbkxlZnQgPSBwb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgICAgcG9zaXRpb25UaW1lID0gcG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICAgIHRvcCA9IHRoaXMudG9wIC0gcG9zaXRpb25Ub3AsXG4gICAgICAgICAgbGVmdCA9IHRoaXMubGVmdCAtIHBvc2l0aW9uTGVmdCxcbiAgICAgICAgICB0aW1lID0gdGhpcy50aW1lIC0gcG9zaXRpb25UaW1lLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBudWxsOyAgLy8vXG5cbiAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpOyAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IG1vdXNlRXZlbnQsXG4gICAgICAgICAgdG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBsZWZ0ID0gcGFnZVgsIC8vL1xuICAgICAgICAgIHRpbWUgPSBnZXRUaW1lKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IG51bGwsXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50KSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdG91Y2hlcyB9ID0gdG91Y2hFdmVudCxcbiAgICAgICAgICB0b3VjaGVzTGVuZ3RoID0gdG91Y2hlcy5sZW5ndGg7XG5cbiAgICBpZiAodG91Y2hlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGZpcnN0KHRvdWNoZXMpLFxuICAgICAgICAgICAgdG91Y2ggPSBmaXJzdFRvdWNoLCAvLy9cbiAgICAgICAgICAgIHsgcGFnZVgsIHBhZ2VZLCBpZGVudGlmaWVyIH0gPSB0b3VjaCxcbiAgICAgICAgICAgIHRvcCA9IHBhZ2VZLFxuICAgICAgICAgICAgbGVmdCA9IHBhZ2VYLFxuICAgICAgICAgICAgdGltZSA9IGdldFRpbWUoKTtcblxuICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgdGltZSA9IERhdGUubm93KCk7ICAvLy9cblxuICByZXR1cm4gdGltZTtcbn1cbiJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3AiLCJsZWZ0IiwidGltZSIsImlkZW50aWZpZXIiLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0VGltZSIsImdldElkZW50aWZpZXIiLCJnZXRNYWduaXR1ZGUiLCJtYWduaXR1ZGUiLCJNYXRoIiwic3FydCIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIlBJIiwiYXRhbjIiLCJPTkVfSFVORFJFRF9BTkRfRUlHSFRZIiwibWludXMiLCJwb3NpdGlvbiIsInBvc2l0aW9uVG9wIiwicG9zaXRpb25MZWZ0IiwicG9zaXRpb25UaW1lIiwibWF0Y2giLCJtYXRjaGVzIiwiZnJvbU1vdXNlRXZlbnQiLCJtb3VzZUV2ZW50IiwicGFnZVgiLCJwYWdlWSIsImZyb21Ub3VjaEV2ZW50IiwidG91Y2hFdmVudCIsInRvdWNoZXMiLCJ0b3VjaGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUb3VjaCIsInRvdWNoIiwiRGF0ZSIsIm5vdyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3lCQUVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQseUJBQUQsQUFBTDthQUFNQSxTQUNQRyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURwQk47UUFFakIsSUFBSSxDQUFDRyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFMRE47O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEdBQUc7WUFDakI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7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