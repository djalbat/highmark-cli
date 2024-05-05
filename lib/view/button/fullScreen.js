"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FullScreenButton;
    }
});
var _button = /*#__PURE__*/ _interop_require_default(require("../button"));
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("../svg/fullScreen"));
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
var FullScreenButton = /*#__PURE__*/ function(Button) {
    _inherits(FullScreenButton, Button);
    var _super = _create_super(FullScreenButton);
    function FullScreenButton() {
        _class_call_check(this, FullScreenButton);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element) {
            controller.requestFullScreen();
        });
        return _this;
    }
    return FullScreenButton;
}(_button.default);
_define_property(FullScreenButton, "SVG", _fullScreen.default);
_define_property(FullScreenButton, "defaultProperties", {
    className: "full-screen"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9mdWxsU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcbmltcG9ydCBGdWxsU2NyZWVuU1ZHIGZyb20gXCIuLi9zdmcvZnVsbFNjcmVlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgdGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHN0YXRpYyBTVkcgPSBGdWxsU2NyZWVuU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVsbC1zY3JlZW5cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZ1bGxTY3JlZW5CdXR0b24iLCJ0YXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInJlcXVlc3RGdWxsU2NyZWVuIiwiQnV0dG9uIiwiU1ZHIiwiRnVsbFNjcmVlblNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzZEQUhGO2lFQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsb0JBQW1CLFNBQUNDLE9BQU9DO1lBQ3pCQyxXQUFXQyxpQkFBaUI7UUFDOUI7OztXQUhtQkw7RUFBeUJNLGVBQU07QUFLbEQsaUJBTG1CTixrQkFLWk8sT0FBTUMsbUJBQWE7QUFFMUIsaUJBUG1CUixrQkFPWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==