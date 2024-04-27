"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Velocity;
    }
});
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
var Velocity = /*#__PURE__*/ function() {
    function Velocity(time, magnitude, direction) {
        _class_call_check(this, Velocity);
        this.time = time;
        this.magnitude = magnitude;
        this.direction = direction;
    }
    _create_class(Velocity, [
        {
            key: "getTime",
            value: function getTime() {
                return this.time;
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
        },
        {
            key: "getSpeed",
            value: function getSpeed() {
                var speed = this.time === 0 ? 0 : this.magnitude / this.time;
                return speed;
            }
        }
    ], [
        {
            key: "fromPositionAndStartPosition",
            value: function fromPositionAndStartPosition(position, startPosition) {
                var relativePosition = position.minus(startPosition), time = relativePosition.getTime(), magnitude = relativePosition.getMagnitude(), direction = relativePosition.getDirection(), velocity = new Velocity(time, magnitude, direction);
                return velocity;
            }
        }
    ]);
    return Velocity;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWxvY2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICBjb25zdHJ1Y3Rvcih0aW1lLCBtYWduaXR1ZGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICBnZXRNYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNwZWVkKCkge1xuICAgIGNvbnN0IHNwZWVkID0gKHRoaXMudGltZSA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAwIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWduaXR1ZGUgLyB0aGlzLnRpbWU7XG5cbiAgICByZXR1cm4gc3BlZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbihwb3NpdGlvbiwgc3RhcnRQb3NpdGlvbikge1xuICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPSBwb3NpdGlvbi5taW51cyhzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICB0aW1lID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIHZlbG9jaXR5ID0gbmV3IFZlbG9jaXR5KHRpbWUsIG1hZ25pdHVkZSwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlbG9jaXR5IiwidGltZSIsIm1hZ25pdHVkZSIsImRpcmVjdGlvbiIsImdldFRpbWUiLCJnZXRNYWduaXR1ZGUiLCJnZXREaXJlY3Rpb24iLCJnZXRTcGVlZCIsInNwZWVkIiwiZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbiIsInBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJtaW51cyIsInZlbG9jaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRG5CSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQUg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxBQUFDLElBQUksQ0FBQ1AsSUFBSSxLQUFLLElBQ2IsSUFDRSxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNELElBQUk7Z0JBRTVDLE9BQU9PO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyxRQUFRLEVBQUVDLGFBQWE7Z0JBQ3pELElBQU1DLG1CQUFtQkYsU0FBU0csS0FBSyxDQUFDRixnQkFDbENWLE9BQU9XLGlCQUFpQlIsT0FBTyxJQUMvQkYsWUFBWVUsaUJBQWlCUCxZQUFZLElBQ3pDRixZQUFZUyxpQkFBaUJOLFlBQVksSUFDekNRLFdBQVcsSUFoQ0FkLFNBZ0NhQyxNQUFNQyxXQUFXQztnQkFFL0MsT0FBT1c7WUFDVDs7O1dBbkNtQmQifQ==