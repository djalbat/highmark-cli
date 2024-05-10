"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NativeGesturesCheckboxDiv;
    }
});
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
var NativeGesturesCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(NativeGesturesCheckboxDiv, CheckboxDiv);
    var _super = _create_super(NativeGesturesCheckboxDiv);
    function NativeGesturesCheckboxDiv() {
        _class_call_check(this, NativeGesturesCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var checkboxChecked = _this.isCheckboxChecked();
            checkboxChecked ? controller.restoreNativeGestures() : controller.suppressNativeGestures();
        });
        return _this;
    }
    _create_class(NativeGesturesCheckboxDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var checkNativeGesturesCheckbox = this.checkCheckbox.bind(this), uncheckNativeGesturesCheckbox = this.uncheckCheckbox.bind(this); ///
                return {
                    checkNativeGesturesCheckbox: checkNativeGesturesCheckbox,
                    uncheckNativeGesturesCheckbox: uncheckNativeGesturesCheckbox
                };
            }
        }
    ]);
    return NativeGesturesCheckboxDiv;
}(_checkbox.default);
_define_property(NativeGesturesCheckboxDiv, "message", "Native gestures\n(tap to toggle)");
_define_property(NativeGesturesCheckboxDiv, "defaultProperties", {
    className: "native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9uYXRpdmVHZXN0dXJlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENoZWNrYm94RGl2IGZyb20gXCIuLi8uLi9kaXYvY2hlY2tib3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiBleHRlbmRzIENoZWNrYm94RGl2IHtcbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgIGNoZWNrYm94Q2hlY2tlZCA/XG4gICAgICBjb250cm9sbGVyLnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIDpcbiAgICAgICAgY29udHJvbGxlci5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNoZWNrTmF0aXZlR2VzdHVyZXNDaGVja2JveCA9IHRoaXMuY2hlY2tDaGVja2JveC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1bmNoZWNrTmF0aXZlR2VzdHVyZXNDaGVja2JveCA9IHRoaXMudW5jaGVja0NoZWNrYm94LmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja05hdGl2ZUdlc3R1cmVzQ2hlY2tib3gsXG4gICAgICB1bmNoZWNrTmF0aXZlR2VzdHVyZXNDaGVja2JveFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBgTmF0aXZlIGdlc3R1cmVzXG4odGFwIHRvIHRvZ2dsZSlgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmF0aXZlLWdlc3R1cmVzXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tib3hDaGVja2VkIiwiY29udHJvbGxlciIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJwYXJlbnRDb250ZXh0IiwiY2hlY2tOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwiY2hlY2tDaGVja2JveCIsImJpbmQiLCJ1bmNoZWNrTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsInVuY2hlY2tDaGVja2JveCIsIkNoZWNrYm94RGl2IiwibWVzc2FnZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLGlCQUFnQixTQUFDQyxPQUFPQztZQUN0QixJQUFNQyxrQkFBa0IsTUFBS0MsaUJBQWlCO1lBRTlDRCxrQkFDRUUsV0FBV0MscUJBQXFCLEtBQzlCRCxXQUFXRSxzQkFBc0I7UUFDdkM7OztrQkFQbUJSOztZQVNuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDhCQUE4QixJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDMURDLGdDQUFnQyxJQUFJLENBQUNDLGVBQWUsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUxRSxPQUFRO29CQUNORiw2QkFBQUE7b0JBQ0FHLCtCQUFBQTtnQkFDRjtZQUNGOzs7V0FqQm1CYjtFQUFrQ2UsaUJBQVc7QUFtQmhFLGlCQW5CbUJmLDJCQW1CWmdCLFdBQVc7QUFHbEIsaUJBdEJtQmhCLDJCQXNCWmlCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=