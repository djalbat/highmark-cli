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
        },
        {
            key: "getAbsoluteDirection",
            value: function getAbsoluteDirection() {
                var absoluteDirection = Math.abs(this.direction);
                return absoluteDirection;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWxvY2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICBjb25zdHJ1Y3Rvcih0aW1lLCBtYWduaXR1ZGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICBnZXRNYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNwZWVkKCkge1xuICAgIGNvbnN0IHNwZWVkID0gKHRoaXMudGltZSA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAwIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWduaXR1ZGUgLyB0aGlzLnRpbWU7XG5cbiAgICByZXR1cm4gc3BlZWQ7XG4gIH1cblxuICBnZXRBYnNvbHV0ZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBhYnNvbHV0ZURpcmVjdGlvbiA9IE1hdGguYWJzKHRoaXMuZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiBhYnNvbHV0ZURpcmVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb25BbmRTdGFydFBvc2l0aW9uKHBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbiA9IHBvc2l0aW9uLm1pbnVzKHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgdmVsb2NpdHkgPSBuZXcgVmVsb2NpdHkodGltZSwgbWFnbml0dWRlLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVsb2NpdHkiLCJ0aW1lIiwibWFnbml0dWRlIiwiZGlyZWN0aW9uIiwiZ2V0VGltZSIsImdldE1hZ25pdHVkZSIsImdldERpcmVjdGlvbiIsImdldFNwZWVkIiwic3BlZWQiLCJnZXRBYnNvbHV0ZURpcmVjdGlvbiIsImFic29sdXRlRGlyZWN0aW9uIiwiTWF0aCIsImFicyIsImZyb21Qb3NpdGlvbkFuZFN0YXJ0UG9zaXRpb24iLCJwb3NpdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwibWludXMiLCJ2ZWxvY2l0eSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEbkJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpBSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLEFBQUMsSUFBSSxDQUFDUCxJQUFJLEtBQUssSUFDYixJQUNFLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0QsSUFBSTtnQkFFNUMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxvQkFBb0JDLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLENBQUNULFNBQVM7Z0JBRWpELE9BQU9PO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyxRQUFRLEVBQUVDLGFBQWE7Z0JBQ3pELElBQU1DLG1CQUFtQkYsU0FBU0csS0FBSyxDQUFDRixnQkFDbENkLE9BQU9lLGlCQUFpQlosT0FBTyxJQUMvQkYsWUFBWWMsaUJBQWlCWCxZQUFZLElBQ3pDRixZQUFZYSxpQkFBaUJWLFlBQVksSUFDekNZLFdBQVcsSUF0Q0FsQixTQXNDYUMsTUFBTUMsV0FBV0M7Z0JBRS9DLE9BQU9lO1lBQ1Q7OztXQXpDbUJsQiJ9