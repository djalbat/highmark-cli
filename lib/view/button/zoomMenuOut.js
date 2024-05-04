"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomMenuOutButton;
    }
});
var _button = /*#__PURE__*/ _interop_require_default(require("../button"));
var _zoomMenuOut = /*#__PURE__*/ _interop_require_default(require("../svg/zoomMenuOut"));
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
var ZoomMenuOutButton = /*#__PURE__*/ function(Button) {
    _inherits(ZoomMenuOutButton, Button);
    var _super = _create_super(ZoomMenuOutButton);
    function ZoomMenuOutButton() {
        _class_call_check(this, ZoomMenuOutButton);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            controller.zoomMenuOut();
        });
        return _this;
    }
    return ZoomMenuOutButton;
}(_button.default);
_define_property(ZoomMenuOutButton, "SVG", _zoomMenuOut.default);
_define_property(ZoomMenuOutButton, "defaultProperties", {
    className: "zoom-menu-out"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi96b29tTWVudU91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCI7XG5pbXBvcnQgWm9vbU1lbnVPdXRTVkcgZnJvbSBcIi4uL3N2Zy96b29tTWVudU91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tTWVudU91dEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIuem9vbU1lbnVPdXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBTVkcgPSBab29tTWVudU91dFNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInpvb20tbWVudS1vdXRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlpvb21NZW51T3V0QnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInpvb21NZW51T3V0IiwiQnV0dG9uIiwiU1ZHIiwiWm9vbU1lbnVPdXRTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozs2REFIRjtrRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBQSxBQUFNQSxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCQyxXQUFXQyxXQUFXO1FBQ3hCOzs7V0FIbUJMO0VBQTBCTSxlQUFNO0FBS25ELGlCQUxtQk4sbUJBS1pPLE9BQU1DLG9CQUFjO0FBRTNCLGlCQVBtQlIsbUJBT1pTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=