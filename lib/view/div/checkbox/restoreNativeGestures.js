"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RestoreNativeGesturesCheckboxDiv;
    }
});
var _span = /*#__PURE__*/ _interop_require_default(require("../../span"));
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../../checkbox"));
var _checkbox1 = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox"));
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
var RestoreNativeGesturesCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(RestoreNativeGesturesCheckboxDiv, CheckboxDiv);
    var _super = _create_super(RestoreNativeGesturesCheckboxDiv);
    function RestoreNativeGesturesCheckboxDiv() {
        _class_call_check(this, RestoreNativeGesturesCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            setTimeout(function() {
                var checkboxChecked = _this.isCheckboxChecked();
                checkboxChecked ? controller.restoreNativeGestures() : controller.suppressNativeGestures();
            }, 100);
        });
        return _this;
    }
    _create_class(RestoreNativeGesturesCheckboxDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_checkbox.default, {
                        onClick: this.clickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_span.default, null, "Restore native gestures\n(alternatively double tap \nand then tap to suppress)")
                ];
            }
        }
    ]);
    return RestoreNativeGesturesCheckboxDiv;
}(_checkbox1.default);
_define_property(RestoreNativeGesturesCheckboxDiv, "defaultProperties", {
    className: "restore-native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9yZXN0b3JlTmF0aXZlR2VzdHVyZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTcGFuIGZyb20gXCIuLi8uLi9zcGFuXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uLy4uL2NoZWNrYm94XCI7XG5pbXBvcnQgQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiBleHRlbmRzIENoZWNrYm94RGl2IHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGNoZWNrYm94Q2hlY2tlZCA/XG4gICAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICAgIGNvbnRyb2xsZXIuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3ggb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPFNwYW4+XG4gICAgICAgIHtgUmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXNcbihhbHRlcm5hdGl2ZWx5IGRvdWJsZSB0YXAgXG5hbmQgdGhlbiB0YXAgdG8gc3VwcHJlc3MpYH1cbiAgICAgIDwvU3Bhbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZXN0b3JlLW5hdGl2ZS1nZXN0dXJlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiY2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2JveENoZWNrZWQiLCJjb250cm9sbGVyIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsImNoaWxkRWxlbWVudHMiLCJDaGVja2JveCIsIm9uQ2xpY2siLCJTcGFuIiwiQ2hlY2tib3hEaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSjsrREFDSTtnRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVCxJQUFBLEFBQU1BLGlEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckJDLFdBQVc7Z0JBQ1QsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtnQkFFOUNELGtCQUNFRSxXQUFXQyxxQkFBcUIsS0FDOUJELFdBQVdFLHNCQUFzQjtZQUN2QyxHQUFHO1FBQ0w7OztrQkFUbUJUOztZQVduQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLGlCQUFRO3dCQUFDQyxTQUFTLElBQUksQ0FBQ1gsWUFBWTs7a0NBQ3BDLG9CQUFDWSxhQUFJLFFBQ0Q7aUJBS0w7WUFDSDs7O1dBdEJtQmI7RUFBeUNjLGtCQUFXO0FBd0J2RSxpQkF4Qm1CZCxrQ0F3QlplLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=