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
    function RelativePosition(time, speed, magnitude, direction) {
        _class_call_check(this, RelativePosition);
        this.time = time;
        this.speed = speed;
        this.magnitude = magnitude;
        this.direction = direction;
    }
    _create_class(RelativePosition, [
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
                var relativePosition = new RelativePosition(time, speed, magnitude, direction);
                return relativePosition;
            }
        }
    ]);
    return RelativePosition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3NpdGlvbi9yZWxhdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUEkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0aW1lLCBzcGVlZCwgbWFnbml0dWRlLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLm1hZ25pdHVkZSA9IG1hZ25pdHVkZTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIGdldFNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLnNwZWVkO1xuICB9XG5cbiAgZ2V0TWFnbml0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLm1hZ25pdHVkZTtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbihwb3NpdGlvbiwgc3RhcnRQb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24ubWludXMoc3RhcnRQb3NpdGlvbik7IC8vL1xuXG4gICAgY29uc3QgdG9wID0gcG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgICB0aW1lID0gcG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydCh0b3AgKiB0b3AgKyBsZWZ0ICogbGVmdCksXG4gICAgICAgICAgc3BlZWQgPSAodGltZSA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAwIDpcbiAgICAgICAgICAgICAgICAgICAgICBtYWduaXR1ZGUgLyB0aW1lO1xuXG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSAodG9wIDwgMCkgP1xuICAgICAgICAgICAgICAgICAgICtQSSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAtUEkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSBNYXRoLmF0YW4yKC10b3AsIGxlZnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPSBuZXcgUmVsYXRpdmVQb3NpdGlvbih0aW1lLCBzcGVlZCwgbWFnbml0dWRlLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIHJlbGF0aXZlUG9zaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWxhdGl2ZVBvc2l0aW9uIiwidGltZSIsInNwZWVkIiwibWFnbml0dWRlIiwiZGlyZWN0aW9uIiwiZ2V0VGltZSIsImdldFNwZWVkIiwiZ2V0TWFnbml0dWRlIiwiZ2V0RGlyZWN0aW9uIiwiZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbiIsInBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm1pbnVzIiwidG9wIiwiZ2V0VG9wIiwibGVmdCIsImdldExlZnQiLCJNYXRoIiwic3FydCIsIlBJIiwiYXRhbjIiLCJyZWxhdGl2ZVBvc2l0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5QkFGRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSixJQUFBLEFBQU1BLGlDQUFELEFBQUw7YUFBTUEsaUJBQ1BDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRDFCSjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFMQUo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyxRQUFRLEVBQUVDLGFBQWE7Z0JBQ3pERCxXQUFXQSxTQUFTRSxLQUFLLENBQUNELGdCQUFnQixHQUFHO2dCQUU3QyxJQUFNRSxNQUFNSCxTQUFTSSxNQUFNLElBQ3JCQyxPQUFPTCxTQUFTTSxPQUFPLElBQ3ZCZixPQUFPUyxTQUFTTCxPQUFPLElBQ3ZCRixZQUFZYyxLQUFLQyxJQUFJLENBQUNMLE1BQU1BLE1BQU1FLE9BQU9BLE9BQ3pDYixRQUFRLEFBQUNELFNBQVMsSUFDUixJQUNFRSxZQUFZRjtnQkFFOUIsSUFBSUc7Z0JBRUosSUFBSVcsU0FBUyxHQUFHO29CQUNkWCxZQUFZLEFBQUNTLE1BQU0sSUFDTixDQUFDTSxhQUFFLEdBQUcsSUFDTCxDQUFDQSxhQUFFLEdBQUc7Z0JBQ3RCLE9BQU87b0JBQ0xmLFlBQVlhLEtBQUtHLEtBQUssQ0FBQyxDQUFDUCxLQUFLRTtnQkFDL0I7Z0JBRUEsSUFBTU0sbUJBQW1CLElBN0NSckIsaUJBNkM2QkMsTUFBTUMsT0FBT0MsV0FBV0M7Z0JBRXRFLE9BQU9pQjtZQUNUOzs7V0FoRG1CckIifQ==