"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomMenuInButton;
    }
});
var _button = /*#__PURE__*/ _interop_require_default(require("../button"));
var _zoomMenuIn = /*#__PURE__*/ _interop_require_default(require("../svg/zoomMenuIn"));
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
var ZoomMenuInButton = /*#__PURE__*/ function(Button) {
    _inherits(ZoomMenuInButton, Button);
    var _super = _create_super(ZoomMenuInButton);
    function ZoomMenuInButton() {
        _class_call_check(this, ZoomMenuInButton);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            controller.zoomMenuIn();
        });
        return _this;
    }
    return ZoomMenuInButton;
}(_button.default);
_define_property(ZoomMenuInButton, "SVG", _zoomMenuIn.default);
_define_property(ZoomMenuInButton, "defaultProperties", {
    className: "zoom-menu-in"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi96b29tTWVudUluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcbmltcG9ydCBab29tTWVudUluU1ZHIGZyb20gXCIuLi9zdmcvem9vbU1lbnVJblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tTWVudUluQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci56b29tTWVudUluKCk7XG4gIH1cblxuICBzdGF0aWMgU1ZHID0gWm9vbU1lbnVJblNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInpvb20tbWVudS1pblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiWm9vbU1lbnVJbkJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ6b29tTWVudUluIiwiQnV0dG9uIiwiU1ZHIiwiWm9vbU1lbnVJblNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzZEQUhGO2lFQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckJDLFdBQVdDLFVBQVU7UUFDdkI7OztXQUhtQkw7RUFBeUJNLGVBQU07QUFLbEQsaUJBTG1CTixrQkFLWk8sT0FBTUMsbUJBQWE7QUFFMUIsaUJBUG1CUixrQkFPWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==