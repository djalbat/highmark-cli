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
            key: "parentContext",
            value: function parentContext() {
                var checkFullScreenCheckbox = this.checkCheckbox.bind(this), uncheckFullScreenCheckbox = this.uncheckCheckbox.bind(this); ///
                return {
                    checkFullScreenCheckbox: checkFullScreenCheckbox,
                    uncheckFullScreenCheckbox: uncheckFullScreenCheckbox
                };
            }
        }
    ]);
    return FullScreenCheckboxDiv;
}(_checkbox.default);
_define_property(FullScreenCheckboxDiv, "message", "Full screen\n(double tap to toggle)");
_define_property(FullScreenCheckboxDiv, "defaultProperties", {
    className: "full-screen"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9mdWxsU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuQ2hlY2tib3hEaXYgZXh0ZW5kcyBDaGVja2JveERpdiB7XG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICBjaGVja2JveENoZWNrZWQgP1xuICAgICAgY29udHJvbGxlci5lbnRlckZ1bGxTY3JlZW4oKSA6XG4gICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2hlY2tGdWxsU2NyZWVuQ2hlY2tib3ggPSB0aGlzLmNoZWNrQ2hlY2tib3guYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdW5jaGVja0Z1bGxTY3JlZW5DaGVja2JveCA9IHRoaXMudW5jaGVja0NoZWNrYm94LmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja0Z1bGxTY3JlZW5DaGVja2JveCxcbiAgICAgIHVuY2hlY2tGdWxsU2NyZWVuQ2hlY2tib3hcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtZXNzYWdlID0gYEZ1bGwgc2NyZWVuXG4oZG91YmxlIHRhcCB0byB0b2dnbGUpYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2JveENoZWNrZWQiLCJjb250cm9sbGVyIiwiZW50ZXJGdWxsU2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJwYXJlbnRDb250ZXh0IiwiY2hlY2tGdWxsU2NyZWVuQ2hlY2tib3giLCJjaGVja0NoZWNrYm94IiwiYmluZCIsInVuY2hlY2tGdWxsU2NyZWVuQ2hlY2tib3giLCJ1bmNoZWNrQ2hlY2tib3giLCJDaGVja2JveERpdiIsIm1lc3NhZ2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSxpQkFBZ0IsU0FBQ0MsT0FBT0M7WUFDdEIsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtZQUU5Q0Qsa0JBQ0VFLFdBQVdDLGVBQWUsS0FDeEJELFdBQVdFLGNBQWM7UUFDL0I7OztrQkFQbUJSOztZQVNuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDBCQUEwQixJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdERDLDRCQUE0QixJQUFJLENBQUNDLGVBQWUsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV0RSxPQUFRO29CQUNORix5QkFBQUE7b0JBQ0FHLDJCQUFBQTtnQkFDRjtZQUNGOzs7V0FqQm1CYjtFQUE4QmUsaUJBQVc7QUFtQjVELGlCQW5CbUJmLHVCQW1CWmdCLFdBQVc7QUFHbEIsaUJBdEJtQmhCLHVCQXNCWmlCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=