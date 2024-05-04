"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomMenuOutSVG;
    }
});
var _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ZoomMenuOutSVG = /*#__PURE__*/ function(SVG) {
    _inherits(ZoomMenuOutSVG, SVG);
    var _super = _create_super(ZoomMenuOutSVG);
    function ZoomMenuOutSVG() {
        _class_call_check(this, ZoomMenuOutSVG);
        return _super.apply(this, arguments);
    }
    _create_class(ZoomMenuOutSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(1, 1) scale(0.9, 0.9)"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.4130386,23.478239 H 2.0000028 l 0.1521737,-0.826086 q 0.3913038,-0.217391 0.8260858,-0.369564 0.434782,-0.173913 0.869564,-0.26087 L 12.45651,8.0000002 h 1.586954 l 2.456518,14.0217188 q 0.413043,0.08696 0.804347,0.26087 0.413043,0.173912 0.695651,0.369564 l -0.173913,0.826086 h -6.695642 l 0.152173,-0.826086 q 0.456521,-0.217391 0.956521,-0.369564 0.521738,-0.173913 0.978259,-0.26087 L 12.69564,18.565203 H 7.8912988 l -2.0652145,3.456516 q 0.4565211,0.06522 0.9130422,0.23913 0.4565211,0.152174 0.8260858,0.391304 z m 1.2173896,-6.326078 h 3.8912988 l -0.608695,-4.152168 v -1.869562 h -0.04348 l -0.826086,1.91304 z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "8",
                    height: "2",
                    x: "15",
                    y: "5"
                }));
            }
        }
    ]);
    return ZoomMenuOutSVG;
}(_svg.default);
_define_property(ZoomMenuOutSVG, "defaultProperties", {
    className: "zoom-menu-out"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L3N2Zy96b29tTWVudU91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21NZW51T3V0U1ZHIGV4dGVuZHMgU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSwgMSkgc2NhbGUoMC45LCAwLjkpXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDcuNDEzMDM4NiwyMy40NzgyMzkgSCAyLjAwMDAwMjggbCAwLjE1MjE3MzcsLTAuODI2MDg2IHEgMC4zOTEzMDM4LC0wLjIxNzM5MSAwLjgyNjA4NTgsLTAuMzY5NTY0IDAuNDM0NzgyLC0wLjE3MzkxMyAwLjg2OTU2NCwtMC4yNjA4NyBMIDEyLjQ1NjUxLDguMDAwMDAwMiBoIDEuNTg2OTU0IGwgMi40NTY1MTgsMTQuMDIxNzE4OCBxIDAuNDEzMDQzLDAuMDg2OTYgMC44MDQzNDcsMC4yNjA4NyAwLjQxMzA0MywwLjE3MzkxMiAwLjY5NTY1MSwwLjM2OTU2NCBsIC0wLjE3MzkxMywwLjgyNjA4NiBoIC02LjY5NTY0MiBsIDAuMTUyMTczLC0wLjgyNjA4NiBxIDAuNDU2NTIxLC0wLjIxNzM5MSAwLjk1NjUyMSwtMC4zNjk1NjQgMC41MjE3MzgsLTAuMTczOTEzIDAuOTc4MjU5LC0wLjI2MDg3IEwgMTIuNjk1NjQsMTguNTY1MjAzIEggNy44OTEyOTg4IGwgLTIuMDY1MjE0NSwzLjQ1NjUxNiBxIDAuNDU2NTIxMSwwLjA2NTIyIDAuOTEzMDQyMiwwLjIzOTEzIDAuNDU2NTIxMSwwLjE1MjE3NCAwLjgyNjA4NTgsMC4zOTEzMDQgeiBtIDEuMjE3Mzg5NiwtNi4zMjYwNzggaCAzLjg5MTI5ODggbCAtMC42MDg2OTUsLTQuMTUyMTY4IHYgLTEuODY5NTYyIGggLTAuMDQzNDggbCAtMC44MjYwODYsMS45MTMwNCB6XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMlwiIHg9XCIxNVwiIHk9XCI1XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInpvb20tbWVudS1vdXRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlpvb21NZW51T3V0U1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJ0cmFuc2Zvcm0iLCJwYXRoIiwiZCIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDO29CQUFFQyxXQUFVO2lDQUNYLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7O1lBSTFDOzs7V0FWbUJWO0VBQXVCVyxZQUFHO0FBWTdDLGlCQVptQlgsZ0JBWVpZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=