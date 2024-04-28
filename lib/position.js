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
        }
    ]);
    return Position;
}();
function getTime() {
    var time = Date.now(); ///
    return time;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIG1pbnVzKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25Ub3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBwb3NpdGlvbkxlZnQgPSBwb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgICAgcG9zaXRpb25UaW1lID0gcG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICAgIHRvcCA9IHRoaXMudG9wIC0gcG9zaXRpb25Ub3AsXG4gICAgICAgICAgbGVmdCA9IHRoaXMubGVmdCAtIHBvc2l0aW9uTGVmdCxcbiAgICAgICAgICB0aW1lID0gdGhpcy50aW1lIC0gcG9zaXRpb25UaW1lLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXI7XG5cbiAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpOyAvLy9cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBtYXRjaGVzID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IG1vdXNlRXZlbnQsXG4gICAgICAgICAgdG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBsZWZ0ID0gcGFnZVgsIC8vL1xuICAgICAgICAgIHRpbWUgPSBnZXRUaW1lKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IG51bGwsXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50KSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgY2hhbmdlZFRvdWNoZXMgfSA9IHRvdWNoRXZlbnQsXG4gICAgICAgICAgY2hhbmdlZFRvdWNoZXNMZW5ndGggPSBjaGFuZ2VkVG91Y2hlcy5sZW5ndGhcblxuICAgIGlmIChjaGFuZ2VkVG91Y2hlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGFuZ2VkVG91Y2ggPSBmaXJzdChjaGFuZ2VkVG91Y2hlcyksXG4gICAgICAgICAgICBjaGFuZ2VkVG91Y2ggPSBmaXJzdENoYW5nZWRUb3VjaCwgLy8vXG4gICAgICAgICAgICB7IHBhZ2VYLCBwYWdlWSwgaWRlbnRpZmllciB9ID0gY2hhbmdlZFRvdWNoLFxuICAgICAgICAgICAgdG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICAgIGxlZnQgPSBwYWdlWCwgLy8vXG4gICAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpO1xuXG4gICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTsgIC8vL1xuXG4gIHJldHVybiB0aW1lO1xufVxuIl0sIm5hbWVzIjpbIlBvc2l0aW9uIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInRvcCIsImxlZnQiLCJ0aW1lIiwiaWRlbnRpZmllciIsImdldFRvcCIsImdldExlZnQiLCJnZXRUaW1lIiwiZ2V0SWRlbnRpZmllciIsIm1pbnVzIiwicG9zaXRpb24iLCJwb3NpdGlvblRvcCIsInBvc2l0aW9uTGVmdCIsInBvc2l0aW9uVGltZSIsIm1hdGNoIiwibWF0Y2hlcyIsImZyb21Nb3VzZUV2ZW50IiwibW91c2VFdmVudCIsInBhZ2VYIiwicGFnZVkiLCJmcm9tVG91Y2hFdmVudCIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGFuZ2VkVG91Y2giLCJjaGFuZ2VkVG91Y2giLCJEYXRlIiwibm93Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BHLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRHBCTjtRQUVqQixJQUFJLENBQUNHLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUxETjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osR0FBRztZQUNqQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxRQUFRO2dCQUNaLElBQU1DLGNBQWNELFNBQVNMLE1BQU0sSUFDN0JPLGVBQWVGLFNBQVNKLE9BQU8sSUFDL0JPLGVBQWVILFNBQVNILE9BQU8sSUFDL0JOLE1BQU0sSUFBSSxDQUFDQSxHQUFHLEdBQUdVLGFBQ2pCVCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxHQUFHVSxjQUNuQlQsT0FBTyxJQUFJLENBQUNBLElBQUksR0FBR1UsY0FDbkJULGFBQWEsSUFBSSxDQUFDQSxVQUFVO2dCQUVsQ00sV0FBVyxJQWpDTVosU0FpQ09HLEtBQUtDLE1BQU1DLE1BQU1DLGFBQWEsR0FBRztnQkFFekQsT0FBT007WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixRQUFRO2dCQUNaLElBQU1OLGFBQWFNLFNBQVNGLGFBQWEsSUFDbkNPLFVBQVcsSUFBSSxDQUFDWCxVQUFVLEtBQUtBO2dCQUVyQyxPQUFPVztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQzlCLElBQVFDLFFBQWlCRCxXQUFqQkMsT0FBT0MsUUFBVUYsV0FBVkUsT0FDVGxCLE1BQU1rQixPQUNOakIsT0FBT2dCLE9BQ1BmLE9BQU9JLFdBQ1BILGFBQWEsTUFDYk0sV0FBVyxJQW5EQVosU0FtRGFHLEtBQUtDLE1BQU1DLE1BQU1DO2dCQUUvQyxPQUFPTTtZQUNUOzs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBSVgsV0FBVztnQkFFZixJQUFNLEFBQUVZLGlCQUFtQkQsV0FBbkJDLGdCQUNGQyx1QkFBdUJELGVBQWVFLE1BQU07Z0JBRWxELElBQUlELHlCQUF5QixHQUFHO29CQUM5QixJQUFNRSxvQkFBb0IxQixNQUFNdUIsaUJBQzFCSSxlQUFlRCxtQkFDYlAsUUFBNkJRLGFBQTdCUixPQUFPQyxRQUFzQk8sYUFBdEJQLE9BQU9mLGFBQWVzQixhQUFmdEIsWUFDaEJILE1BQU1rQixPQUNOakIsT0FBT2dCLE9BQ1BmLE9BQU9JO29CQUViRyxXQUFXLElBdEVJWixTQXNFU0csS0FBS0MsTUFBTUMsTUFBTUM7Z0JBQzNDO2dCQUVBLE9BQU9NO1lBQ1Q7OztXQTFFbUJaOztBQTZFckIsU0FBU1M7SUFDUCxJQUFNSixPQUFPd0IsS0FBS0MsR0FBRyxJQUFLLEdBQUc7SUFFN0IsT0FBT3pCO0FBQ1QifQ==