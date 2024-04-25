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
var Velocity = /*#__PURE__*/ function() {
    function Velocity(speed, direction) {
        _class_call_check(this, Velocity);
        this.speed = speed;
        this.direction = direction;
    }
    _create_class(Velocity, [
        {
            key: "getSpeed",
            value: function getSpeed() {
                return this.speed;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                return this.direction;
            }
        },
        {
            key: "isSwipeVelocity",
            value: function isSwipeVelocity() {
                var representsSwipe = false;
                return representsSwipe;
            }
        },
        {
            key: "getSwipeDirection",
            value: function getSwipeDirection() {
                var swipeDirection = 0;
                if (this.speed > _constants.MINIMUM_SWIPE_SPEED) {
                    var absoluteDirection = Math.abs(this.direction);
                    if (absoluteDirection < _constants.MAXIMUM_SWIPE_ABSOLUTE_DIRECTION) {
                        swipeDirection = +1;
                    }
                    if (_constants.ONE_HUNDRED_AND_EIGHTY - absoluteDirection < _constants.MAXIMUM_SWIPE_ABSOLUTE_DIRECTION) {
                        swipeDirection = -1;
                    }
                }
                return swipeDirection;
            }
        }
    ], [
        {
            key: "fromPositionAndStartPosition",
            value: function fromPositionAndStartPosition(position, startPosition) {
                var relativePosition = position.minus(startPosition), magnitude = relativePosition.getMagnitude(), direction = relativePosition.getDirection(), time = relativePosition.getTime(), speed = time === 0 ? 0 : magnitude / time, velocity = new Velocity(speed, direction);
                return velocity;
            }
        }
    ]);
    return Velocity;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWxvY2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTUlOSU1VTV9TV0lQRV9TUEVFRCwgT05FX0hVTkRSRURfQU5EX0VJR0hUWSwgTUFYSU1VTV9TV0lQRV9BQlNPTFVURV9ESVJFQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkge1xuICBjb25zdHJ1Y3RvcihzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuICB9XG5cbiAgaXNTd2lwZVZlbG9jaXR5KCkge1xuICAgIGxldCByZXByZXNlbnRzU3dpcGUgPSBmYWxzZTtcblxuXG4gICAgcmV0dXJuIHJlcHJlc2VudHNTd2lwZTtcbiAgfVxuXG4gIGdldFN3aXBlRGlyZWN0aW9uKCkge1xuICAgIGxldCBzd2lwZURpcmVjdGlvbiA9IDA7XG5cbiAgICBpZiAodGhpcy5zcGVlZCA+IE1JTklNVU1fU1dJUEVfU1BFRUQpIHtcbiAgICAgIGNvbnN0IGFic29sdXRlRGlyZWN0aW9uID0gTWF0aC5hYnModGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoYWJzb2x1dGVEaXJlY3Rpb24gPCBNQVhJTVVNX1NXSVBFX0FCU09MVVRFX0RJUkVDVElPTikge1xuICAgICAgICBzd2lwZURpcmVjdGlvbiA9ICsxO1xuICAgICAgfVxuXG4gICAgICBpZiAoKE9ORV9IVU5EUkVEX0FORF9FSUdIVFkgLSBhYnNvbHV0ZURpcmVjdGlvbikgPCBNQVhJTVVNX1NXSVBFX0FCU09MVVRFX0RJUkVDVElPTikge1xuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzd2lwZURpcmVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb25BbmRTdGFydFBvc2l0aW9uKHBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbiA9IHBvc2l0aW9uLm1pbnVzKHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICB0aW1lID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgICAgc3BlZWQgPSAodGltZSA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAwIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgbWFnbml0dWRlIC8gdGltZSxcbiAgICAgICAgICB2ZWxvY2l0eSA9IG5ldyBWZWxvY2l0eShzcGVlZCwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlbG9jaXR5Iiwic3BlZWQiLCJkaXJlY3Rpb24iLCJnZXRTcGVlZCIsImdldERpcmVjdGlvbiIsImlzU3dpcGVWZWxvY2l0eSIsInJlcHJlc2VudHNTd2lwZSIsImdldFN3aXBlRGlyZWN0aW9uIiwic3dpcGVEaXJlY3Rpb24iLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwiYWJzb2x1dGVEaXJlY3Rpb24iLCJNYXRoIiwiYWJzIiwiTUFYSU1VTV9TV0lQRV9BQlNPTFVURV9ESVJFQ1RJT04iLCJPTkVfSFVORFJFRF9BTkRfRUlHSFRZIiwiZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbiIsInBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJtaW51cyIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInRpbWUiLCJnZXRUaW1lIiwidmVsb2NpdHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5QkFGeUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxLQUFLLEVBQUVDLFNBQVM7Z0NBRFRGO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGtCQUFrQjtnQkFHdEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxpQkFBaUI7Z0JBRXJCLElBQUksSUFBSSxDQUFDUCxLQUFLLEdBQUdRLDhCQUFtQixFQUFFO29CQUNwQyxJQUFNQyxvQkFBb0JDLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLENBQUNWLFNBQVM7b0JBRWpELElBQUlRLG9CQUFvQkcsMkNBQWdDLEVBQUU7d0JBQ3hETCxpQkFBaUIsQ0FBQztvQkFDcEI7b0JBRUEsSUFBSSxBQUFDTSxpQ0FBc0IsR0FBR0osb0JBQXFCRywyQ0FBZ0MsRUFBRTt3QkFDbkZMLGlCQUFpQixDQUFDO29CQUNwQjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsUUFBUSxFQUFFQyxhQUFhO2dCQUN6RCxJQUFNQyxtQkFBbUJGLFNBQVNHLEtBQUssQ0FBQ0YsZ0JBQ2xDRyxZQUFZRixpQkFBaUJHLFlBQVksSUFDekNuQixZQUFZZ0IsaUJBQWlCZCxZQUFZLElBQ3pDa0IsT0FBT0osaUJBQWlCSyxPQUFPLElBQy9CdEIsUUFBUSxBQUFDcUIsU0FBUyxJQUNSLElBQ0VGLFlBQVlFLE1BQ3hCRSxXQUFXLElBL0NBeEIsU0ErQ2FDLE9BQU9DO2dCQUVyQyxPQUFPc0I7WUFDVDs7O1dBbERtQnhCIn0=