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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IFBJIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldE1hZ25pdHVkZSgpIHtcbiAgICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodGhpcy50b3AgKiB0aGlzLnRvcCArIHRoaXMubGVmdCAqIHRoaXMubGVmdCk7XG5cbiAgICByZXR1cm4gbWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb24gPSAwO1xuXG4gICAgaWYgKHRoaXMubGVmdCA9PT0gMCkge1xuICAgICAgZGlyZWN0aW9uID0gKHRoaXMudG9wIDwgMCkgP1xuICAgICAgICAgICAgICAgICAgICtQSSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgLVBJIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gTWF0aC5hdGFuMigtdGhpcy50b3AsIHRoaXMubGVmdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIG1pbnVzKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25Ub3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBwb3NpdGlvbkxlZnQgPSBwb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgICAgcG9zaXRpb25UaW1lID0gcG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICAgIHRvcCA9IHRoaXMudG9wIC0gcG9zaXRpb25Ub3AsXG4gICAgICAgICAgbGVmdCA9IHRoaXMubGVmdCAtIHBvc2l0aW9uTGVmdCxcbiAgICAgICAgICB0aW1lID0gdGhpcy50aW1lIC0gcG9zaXRpb25UaW1lLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBudWxsOyAgLy8vXG5cbiAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpOyAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IG1vdXNlRXZlbnQsXG4gICAgICAgICAgdG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBsZWZ0ID0gcGFnZVgsIC8vL1xuICAgICAgICAgIHRpbWUgPSBnZXRUaW1lKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IG51bGwsXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50KSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgY2hhbmdlZFRvdWNoZXMgfSA9IHRvdWNoRXZlbnQsXG4gICAgICAgICAgY2hhbmdlZFRvdWNoZXNMZW5ndGggPSBjaGFuZ2VkVG91Y2hlcy5sZW5ndGhcblxuICAgIGlmIChjaGFuZ2VkVG91Y2hlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGFuZ2VkVG91Y2ggPSBmaXJzdChjaGFuZ2VkVG91Y2hlcyksXG4gICAgICAgICAgICBjaGFuZ2VkVG91Y2ggPSBmaXJzdENoYW5nZWRUb3VjaCwgLy8vXG4gICAgICAgICAgICB7IHBhZ2VYLCBwYWdlWSwgaWRlbnRpZmllciB9ID0gY2hhbmdlZFRvdWNoLFxuICAgICAgICAgICAgdG9wID0gcGFnZVksXG4gICAgICAgICAgICBsZWZ0ID0gcGFnZVgsXG4gICAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpO1xuXG4gICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTsgIC8vL1xuXG4gIHJldHVybiB0aW1lO1xufVxuIl0sIm5hbWVzIjpbIlBvc2l0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRvcCIsImxlZnQiLCJ0aW1lIiwiaWRlbnRpZmllciIsImdldFRvcCIsImdldExlZnQiLCJnZXRUaW1lIiwiZ2V0SWRlbnRpZmllciIsImdldE1hZ25pdHVkZSIsIm1hZ25pdHVkZSIsIk1hdGgiLCJzcXJ0IiwiZ2V0RGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiUEkiLCJhdGFuMiIsIm1pbnVzIiwicG9zaXRpb24iLCJwb3NpdGlvblRvcCIsInBvc2l0aW9uTGVmdCIsInBvc2l0aW9uVGltZSIsIm1hdGNoIiwibWF0Y2hlcyIsImZyb21Nb3VzZUV2ZW50IiwibW91c2VFdmVudCIsInBhZ2VYIiwicGFnZVkiLCJmcm9tVG91Y2hFdmVudCIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGFuZ2VkVG91Y2giLCJjaGFuZ2VkVG91Y2giLCJEYXRlIiwibm93Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTt5QkFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHlCQUFELEFBQUw7YUFBTUEsU0FDUEcsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEcEJOO1FBRWpCLElBQUksQ0FBQ0csR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTEROOztZQVFuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixHQUFHO1lBQ2pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7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