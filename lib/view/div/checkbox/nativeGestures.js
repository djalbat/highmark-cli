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
var _state = require("../../../state");
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
            key: "update",
            value: function update() {
                var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
                nativeGesturesRestored ? this.checkCheckbox() : this.uncheckCheckbox();
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateNativeGesturesCheckboxDiv = this.update.bind(this); ///
                return {
                    updateNativeGesturesCheckboxDiv: updateNativeGesturesCheckboxDiv
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9uYXRpdmVHZXN0dXJlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENoZWNrYm94RGl2IGZyb20gXCIuLi8uLi9kaXYvY2hlY2tib3hcIjtcblxuaW1wb3J0IHsgYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9IGZyb20gXCIuLi8uLi8uLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgY2hlY2tib3hDaGVja2VkID9cbiAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3goKSA6XG4gICAgICAgIHRoaXMudW5jaGVja0NoZWNrYm94KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBgTmF0aXZlIGdlc3R1cmVzXG4odGFwIHRvIHRvZ2dsZSlgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmF0aXZlLWdlc3R1cmVzXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tib3hDaGVja2VkIiwiY29udHJvbGxlciIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJ1cGRhdGUiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImNoZWNrQ2hlY2tib3giLCJ1bmNoZWNrQ2hlY2tib3giLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiIsImJpbmQiLCJDaGVja2JveERpdiIsIm1lc3NhZ2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKRztxQkFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSxpQkFBZ0IsU0FBQ0MsT0FBT0M7WUFDdEIsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtZQUU5Q0Qsa0JBQ0VFLFdBQVdDLHFCQUFxQixLQUM5QkQsV0FBV0Usc0JBQXNCO1FBQ3ZDOzs7a0JBUG1CUjs7WUFTbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx5QkFBeUJDLElBQUFBLGdDQUF5QjtnQkFFeERELHlCQUNFLElBQUksQ0FBQ0UsYUFBYSxLQUNoQixJQUFJLENBQUNDLGVBQWU7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0NBQWtDLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRW5FLE9BQVE7b0JBQ05ELGlDQUFBQTtnQkFDRjtZQUNGOzs7V0F2Qm1CZjtFQUFrQ2lCLGlCQUFXO0FBeUJoRSxpQkF6Qm1CakIsMkJBeUJaa0IsV0FBVztBQUdsQixpQkE1Qm1CbEIsMkJBNEJabUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==