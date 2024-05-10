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
var _fullScreen = require("../../../utilities/fullScreen");
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
            key: "update",
            value: function update() {
                var fullScreen = (0, _fullScreen.isFullScreen)();
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
_define_property(FullScreenCheckboxDiv, "message", "Full screen\n(double tap to toggle)");
_define_property(FullScreenCheckboxDiv, "defaultProperties", {
    className: "full-screen"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9mdWxsU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveFwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbkNoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgY2hlY2tib3hDaGVja2VkID9cbiAgICAgIGNvbnRyb2xsZXIuZW50ZXJGdWxsU2NyZWVuKCkgOlxuICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgZnVsbFNjcmVlbiA/XG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3goKSA6XG4gICAgICAgIHRoaXMudW5jaGVja0NoZWNrYm94KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtZXNzYWdlID0gYEZ1bGwgc2NyZWVuXG4oZG91YmxlIHRhcCB0byB0b2dnbGUpYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2JveENoZWNrZWQiLCJjb250cm9sbGVyIiwiZW50ZXJGdWxsU2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJ1cGRhdGUiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiY2hlY2tDaGVja2JveCIsInVuY2hlY2tDaGVja2JveCIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJiaW5kIiwiQ2hlY2tib3hEaXYiLCJtZXNzYWdlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkc7MEJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLGlCQUFnQixTQUFDQyxPQUFPQztZQUN0QixJQUFNQyxrQkFBa0IsTUFBS0MsaUJBQWlCO1lBRTlDRCxrQkFDRUUsV0FBV0MsZUFBZSxLQUN4QkQsV0FBV0UsY0FBYztRQUMvQjs7O2tCQVBtQlI7O1lBU25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMsSUFBQUEsd0JBQVk7Z0JBRS9CRCxhQUNFLElBQUksQ0FBQ0UsYUFBYSxLQUNoQixJQUFJLENBQUNDLGVBQWU7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsOEJBQThCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRS9ELE9BQVE7b0JBQ05ELDZCQUFBQTtnQkFDRjtZQUNGOzs7V0F2Qm1CZjtFQUE4QmlCLGlCQUFXO0FBeUI1RCxpQkF6Qm1CakIsdUJBeUJaa0IsV0FBVztBQUdsQixpQkE1Qm1CbEIsdUJBNEJabUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==