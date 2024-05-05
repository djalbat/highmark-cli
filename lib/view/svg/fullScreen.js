"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FullScreenSVG;
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
var FullScreenSVG = /*#__PURE__*/ function(SVG) {
    _inherits(FullScreenSVG, SVG);
    var _super = _create_super(FullScreenSVG);
    function FullScreenSVG() {
        _class_call_check(this, FullScreenSVG);
        return _super.apply(this, arguments);
    }
    _create_class(FullScreenSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 2.9998169 2.9998169 L 2.9998169 6.0001506 L 2.9998169 18.999874 L 2.9998169 22.000208 L 6.0001506 22.000208 L 18.999874 22.000208 L 22.000208 22.000208 L 22.000208 18.999874 L 22.000208 2.9998169 L 2.9998169 2.9998169 z M 6.0001506 6.0001506 L 18.999874 6.0001506 L 18.999874 18.999874 L 6.0001506 18.999874 L 6.0001506 6.0001506 z "
                }));
            }
        }
    ]);
    return FullScreenSVG;
}(_svg.default);
_define_property(FullScreenSVG, "defaultProperties", {
    className: "full-screen"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L3N2Zy9mdWxsU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi9zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlblNWRyBleHRlbmRzIFNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDIuOTk5ODE2OSAyLjk5OTgxNjkgTCAyLjk5OTgxNjkgNi4wMDAxNTA2IEwgMi45OTk4MTY5IDE4Ljk5OTg3NCBMIDIuOTk5ODE2OSAyMi4wMDAyMDggTCA2LjAwMDE1MDYgMjIuMDAwMjA4IEwgMTguOTk5ODc0IDIyLjAwMDIwOCBMIDIyLjAwMDIwOCAyMi4wMDAyMDggTCAyMi4wMDAyMDggMTguOTk5ODc0IEwgMjIuMDAwMjA4IDIuOTk5ODE2OSBMIDIuOTk5ODE2OSAyLjk5OTgxNjkgeiBNIDYuMDAwMTUwNiA2LjAwMDE1MDYgTCAxOC45OTk4NzQgNi4wMDAxNTA2IEwgMTguOTk5ODc0IDE4Ljk5OTg3NCBMIDYuMDAwMTUwNiAxOC45OTk4NzQgTCA2LjAwMDE1MDYgNi4wMDAxNTA2IHogXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsIlNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MERBRkw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTs7WUFJZDs7O1dBVG1CSjtFQUFzQkssWUFBRztBQVc1QyxpQkFYbUJMLGVBV1pNLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=