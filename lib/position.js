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
            key: "minus",
            value: function minus(position) {
                var positionTop = position.getTop(), positionLeft = position.getLeft(), positionTime = position.getTime(), top = this.top - positionTop, left = this.left - positionLeft, time = this.time - positionTime, identifier = this.identifier;
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
        },
        {
            key: "fromPointerEvent",
            value: function fromPointerEvent(pointerEvent) {
                var position = null;
                var changedTouches = pointerEvent.changedTouches, changedTouchesLength = changedTouches.length;
                if (changedTouchesLength === 1) {
                    var firstChangedTouch = first(changedTouches), changedTouch = firstChangedTouch, pageX = changedTouch.pageX, pageY = changedTouch.pageY, pointerId = changedTouch.pointerId, top = pageY, left = pageX, time = getTime(), identifier = pointerId; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIG1pbnVzKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25Ub3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBwb3NpdGlvbkxlZnQgPSBwb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgICAgcG9zaXRpb25UaW1lID0gcG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICAgIHRvcCA9IHRoaXMudG9wIC0gcG9zaXRpb25Ub3AsXG4gICAgICAgICAgbGVmdCA9IHRoaXMubGVmdCAtIHBvc2l0aW9uTGVmdCxcbiAgICAgICAgICB0aW1lID0gdGhpcy50aW1lIC0gcG9zaXRpb25UaW1lLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXI7XG5cbiAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpOyAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IG1vdXNlRXZlbnQsXG4gICAgICAgICAgdG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBsZWZ0ID0gcGFnZVgsIC8vL1xuICAgICAgICAgIHRpbWUgPSBnZXRUaW1lKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IG51bGwsXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50KSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgY2hhbmdlZFRvdWNoZXMgfSA9IHRvdWNoRXZlbnQsXG4gICAgICAgICAgY2hhbmdlZFRvdWNoZXNMZW5ndGggPSBjaGFuZ2VkVG91Y2hlcy5sZW5ndGhcblxuICAgIGlmIChjaGFuZ2VkVG91Y2hlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGFuZ2VkVG91Y2ggPSBmaXJzdChjaGFuZ2VkVG91Y2hlcyksXG4gICAgICAgICAgICBjaGFuZ2VkVG91Y2ggPSBmaXJzdENoYW5nZWRUb3VjaCwgLy8vXG4gICAgICAgICAgICB7IHBhZ2VYLCBwYWdlWSwgaWRlbnRpZmllciB9ID0gY2hhbmdlZFRvdWNoLFxuICAgICAgICAgICAgdG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICAgIGxlZnQgPSBwYWdlWCwgLy8vXG4gICAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpO1xuXG4gICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9pbnRlckV2ZW50KHBvaW50ZXJFdmVudCkge1xuICAgIGxldCBwb3NpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IGNoYW5nZWRUb3VjaGVzIH0gPSBwb2ludGVyRXZlbnQsXG4gICAgICAgICAgY2hhbmdlZFRvdWNoZXNMZW5ndGggPSBjaGFuZ2VkVG91Y2hlcy5sZW5ndGhcblxuICAgIGlmIChjaGFuZ2VkVG91Y2hlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGFuZ2VkVG91Y2ggPSBmaXJzdChjaGFuZ2VkVG91Y2hlcyksXG4gICAgICAgICAgICBjaGFuZ2VkVG91Y2ggPSBmaXJzdENoYW5nZWRUb3VjaCwgLy8vXG4gICAgICAgICAgICB7IHBhZ2VYLCBwYWdlWSwgcG9pbnRlcklkIH0gPSBjaGFuZ2VkVG91Y2gsXG4gICAgICAgICAgICB0b3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICAgIHRpbWUgPSBnZXRUaW1lKCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gcG9pbnRlcklkOyAvLy9cblxuICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgdGltZSA9IERhdGUubm93KCk7ICAvLy9cblxuICByZXR1cm4gdGltZTtcbn1cbiJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3AiLCJsZWZ0IiwidGltZSIsImlkZW50aWZpZXIiLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0VGltZSIsImdldElkZW50aWZpZXIiLCJtaW51cyIsInBvc2l0aW9uIiwicG9zaXRpb25Ub3AiLCJwb3NpdGlvbkxlZnQiLCJwb3NpdGlvblRpbWUiLCJtYXRjaCIsIm1hdGNoZXMiLCJmcm9tTW91c2VFdmVudCIsIm1vdXNlRXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwiZnJvbVRvdWNoRXZlbnQiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJjaGFuZ2VkVG91Y2hlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hhbmdlZFRvdWNoIiwiY2hhbmdlZFRvdWNoIiwiZnJvbVBvaW50ZXJFdmVudCIsInBvaW50ZXJFdmVudCIsInBvaW50ZXJJZCIsIkRhdGUiLCJub3ciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHlCQUFELEFBQUw7YUFBTUEsU0FDUEcsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEcEJOO1FBRWpCLElBQUksQ0FBQ0csR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTEROOztZQVFuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixHQUFHO1lBQ2pCOzs7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