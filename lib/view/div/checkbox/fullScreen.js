"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FullScreenCheckboxDiv;
    }
});
var _easymobile = require("easy-mobile");
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox"));
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen;
var FullScreenCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(FullScreenCheckboxDiv, CheckboxDiv);
    var _super = _create_super(FullScreenCheckboxDiv);
    function FullScreenCheckboxDiv() {
        _class_call_check(this, FullScreenCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var checkboxChecked = _this.isCheckboxChecked();
            checkboxChecked ? controller.enterFullScreen() : controller.exitFullScreen();
        });
        return _this;
    }
    _create_class(FullScreenCheckboxDiv, [
        {
            key: "update",
            value: function update() {
                var fullScreen = isFullScreen();
                fullScreen ? this.checkCheckbox() : this.uncheckCheckbox();
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateFullScreenCheckboxDiv = this.update.bind(this); ///
                return {
                    updateFullScreenCheckboxDiv: updateFullScreenCheckboxDiv
                };
            }
        }
    ]);
    return FullScreenCheckboxDiv;
}(_checkbox.default);
_define_property(FullScreenCheckboxDiv, "message", "Full screen\n(double tap to exit)");
_define_property(FullScreenCheckboxDiv, "defaultProperties", {
    className: "full-screen"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9mdWxsU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmdWxsU2NyZWVuVXRpbGl0aWVzIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBDaGVja2JveERpdiBmcm9tIFwiLi4vLi4vZGl2L2NoZWNrYm94XCI7XG5cbmNvbnN0IHsgaXNGdWxsU2NyZWVuIH0gPSBmdWxsU2NyZWVuVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuQ2hlY2tib3hEaXYgZXh0ZW5kcyBDaGVja2JveERpdiB7XG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICBjaGVja2JveENoZWNrZWQgP1xuICAgICAgY29udHJvbGxlci5lbnRlckZ1bGxTY3JlZW4oKSA6XG4gICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBmdWxsU2NyZWVuID9cbiAgICAgIHRoaXMuY2hlY2tDaGVja2JveCgpIDpcbiAgICAgICAgdGhpcy51bmNoZWNrQ2hlY2tib3goKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgdXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBgRnVsbCBzY3JlZW5cbihkb3VibGUgdGFwIHRvIGV4aXQpYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJpc0Z1bGxTY3JlZW4iLCJmdWxsU2NyZWVuVXRpbGl0aWVzIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tib3hDaGVja2VkIiwiY29udHJvbGxlciIsImVudGVyRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwidXBkYXRlIiwiZnVsbFNjcmVlbiIsImNoZWNrQ2hlY2tib3giLCJ1bmNoZWNrQ2hlY2tib3giLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2IiwiYmluZCIsIkNoZWNrYm94RGl2IiwibWVzc2FnZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzswQkFOZTsrREFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBTSxBQUFFQyxlQUFpQkMsK0JBQW1CLENBQXBDRDtBQUVPLElBQUEsQUFBTUQsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJHLGtEQUFBQSxpQkFBZ0IsU0FBQ0MsT0FBT0M7WUFDdEIsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtZQUU5Q0Qsa0JBQ0VFLFdBQVdDLGVBQWUsS0FDeEJELFdBQVdFLGNBQWM7UUFDL0I7OztrQkFQbUJWOztZQVNuQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWFYO2dCQUVuQlcsYUFDRSxJQUFJLENBQUNDLGFBQWEsS0FDaEIsSUFBSSxDQUFDQyxlQUFlO1lBQzFCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDhCQUE4QixJQUFJLENBQUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUvRCxPQUFRO29CQUNORCw2QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBdkJtQmhCO0VBQThCa0IsaUJBQVc7QUF5QjVELGlCQXpCbUJsQix1QkF5QlptQixXQUFXO0FBR2xCLGlCQTVCbUJuQix1QkE0QlpvQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9