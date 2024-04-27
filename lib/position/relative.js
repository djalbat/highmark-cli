"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RelativePosition;
    }
});
var _constants = require("../constants");
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
var RelativePosition = /*#__PURE__*/ function() {
    function RelativePosition(top, left, time, speed, magnitude, direction) {
        _class_call_check(this, RelativePosition);
        this.top = top;
        this.left = left;
        this.time = time;
        this.speed = speed;
        this.magnitude = magnitude;
        this.direction = direction;
    }
    _create_class(RelativePosition, [
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
            key: "getSpeed",
            value: function getSpeed() {
                return this.speed;
            }
        },
        {
            key: "getMagnitude",
            value: function getMagnitude() {
                return this.magnitude;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                return this.direction;
            }
        }
    ], [
        {
            key: "fromPositionAndStartPosition",
            value: function fromPositionAndStartPosition(position, startPosition) {
                position = position.minus(startPosition); ///
                var top = position.getTop(), left = position.getLeft(), time = position.getTime(), magnitude = Math.sqrt(top * top + left * left), speed = time === 0 ? 0 : magnitude / time;
                var direction;
                if (left === 0) {
                    direction = top < 0 ? +_constants.PI / 2 : -_constants.PI / 2;
                } else {
                    direction = Math.atan2(-top, left);
                }
                var relativePosition = new RelativePosition(top, left, time, speed, magnitude, direction);
                return relativePosition;
            }
        }
    ]);
    return RelativePosition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3NpdGlvbi9yZWxhdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUEkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHRpbWUsIHNwZWVkLCBtYWduaXR1ZGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgZ2V0U3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gIH1cblxuICBnZXRNYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb25BbmRTdGFydFBvc2l0aW9uKHBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbi5taW51cyhzdGFydFBvc2l0aW9uKTsgLy8vXG5cbiAgICBjb25zdCB0b3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gcG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHRpbWUgPSBwb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHRvcCAqIHRvcCArIGxlZnQgKiBsZWZ0KSxcbiAgICAgICAgICBzcGVlZCA9ICh0aW1lID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgIDAgOlxuICAgICAgICAgICAgICAgICAgICAgIG1hZ25pdHVkZSAvIHRpbWU7XG5cbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgIGRpcmVjdGlvbiA9ICh0b3AgPCAwKSA/XG4gICAgICAgICAgICAgICAgICAgK1BJIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgIC1QSSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9IE1hdGguYXRhbjIoLXRvcCwgbGVmdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbiA9IG5ldyBSZWxhdGl2ZVBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgc3BlZWQsIG1hZ25pdHVkZSwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiByZWxhdGl2ZVBvc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsYXRpdmVQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0aW1lIiwic3BlZWQiLCJtYWduaXR1ZGUiLCJkaXJlY3Rpb24iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0VGltZSIsImdldFNwZWVkIiwiZ2V0TWFnbml0dWRlIiwiZ2V0RGlyZWN0aW9uIiwiZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbiIsInBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm1pbnVzIiwiTWF0aCIsInNxcnQiLCJQSSIsImF0YW4yIiwicmVsYXRpdmVQb3NpdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5QkFGRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSixJQUFBLEFBQU1BLGlDQUFELEFBQUw7YUFBTUEsaUJBQ1BDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQURyQ047UUFFakIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBUEFOOztZQVVuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixHQUFHO1lBQ2pCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixLQUFLO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixTQUFTO1lBQ3ZCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixTQUFTO1lBQ3ZCOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsUUFBUSxFQUFFQyxhQUFhO2dCQUN6REQsV0FBV0EsU0FBU0UsS0FBSyxDQUFDRCxnQkFBZ0IsR0FBRztnQkFFN0MsSUFBTWQsTUFBTWEsU0FBU1AsTUFBTSxJQUNyQkwsT0FBT1ksU0FBU04sT0FBTyxJQUN2QkwsT0FBT1csU0FBU0wsT0FBTyxJQUN2QkosWUFBWVksS0FBS0MsSUFBSSxDQUFDakIsTUFBTUEsTUFBTUMsT0FBT0EsT0FDekNFLFFBQVEsQUFBQ0QsU0FBUyxJQUNSLElBQ0VFLFlBQVlGO2dCQUU5QixJQUFJRztnQkFFSixJQUFJSixTQUFTLEdBQUc7b0JBQ2RJLFlBQVksQUFBQ0wsTUFBTSxJQUNOLENBQUNrQixhQUFFLEdBQUcsSUFDTCxDQUFDQSxhQUFFLEdBQUc7Z0JBQ3RCLE9BQU87b0JBQ0xiLFlBQVlXLEtBQUtHLEtBQUssQ0FBQyxDQUFDbkIsS0FBS0M7Z0JBQy9CO2dCQUVBLElBQU1tQixtQkFBbUIsSUF2RFJyQixpQkF1RDZCQyxLQUFLQyxNQUFNQyxNQUFNQyxPQUFPQyxXQUFXQztnQkFFakYsT0FBT2U7WUFDVDs7O1dBMURtQnJCIn0=