"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InvertColoursCheckboxDiv;
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
var InvertColoursCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(InvertColoursCheckboxDiv, CheckboxDiv);
    var _super = _create_super(InvertColoursCheckboxDiv);
    function InvertColoursCheckboxDiv() {
        _class_call_check(this, InvertColoursCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var checkboxChecked = _this.isCheckboxChecked();
            checkboxChecked ? controller.invertColours() : controller.revertColours();
        });
        return _this;
    }
    _create_class(InvertColoursCheckboxDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var coloursInverted = (0, _state.areColoursInverted)(), checked = coloursInverted; ///
                this.checkCheckbox(checked);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return InvertColoursCheckboxDiv;
}(_checkbox.default);
_define_property(InvertColoursCheckboxDiv, "message", "Invert colours");
_define_property(InvertColoursCheckboxDiv, "defaultProperties", {
    className: "invert-colours"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9pbnZlcnRDb2xvdXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveFwiO1xuXG5pbXBvcnQgeyBhcmVDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgY2hlY2tib3hDaGVja2VkID9cbiAgICAgIGNvbnRyb2xsZXIuaW52ZXJ0Q29sb3VycygpIDpcbiAgICAgICAgY29udHJvbGxlci5yZXZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKSxcbiAgICAgICAgICBjaGVja2VkID0gY29sb3Vyc0ludmVydGVkOyAvLy9cblxuICAgIHRoaXMuY2hlY2tDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBcIkludmVydCBjb2xvdXJzXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJpbnZlcnQtY29sb3Vyc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tib3hDaGVja2VkIiwiY29udHJvbGxlciIsImludmVydENvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZGlkTW91bnQiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJjaGVja2VkIiwiY2hlY2tDaGVja2JveCIsIndpbGxVbm1vdW50IiwiQ2hlY2tib3hEaXYiLCJtZXNzYWdlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkc7cUJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSxpQkFBZ0IsU0FBQ0MsT0FBT0M7WUFDdEIsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtZQUU5Q0Qsa0JBQ0VFLFdBQVdDLGFBQWEsS0FDdEJELFdBQVdFLGFBQWE7UUFDOUI7OztrQkFQbUJSOztZQVNuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQkMsSUFBQUEseUJBQWtCLEtBQ3BDQyxVQUFVRixpQkFBaUIsR0FBRztnQkFFcEMsSUFBSSxDQUFDRyxhQUFhLENBQUNEO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7V0FsQm1CZDtFQUFpQ2UsaUJBQVc7QUFvQi9ELGlCQXBCbUJmLDBCQW9CWmdCLFdBQVU7QUFFakIsaUJBdEJtQmhCLDBCQXNCWmlCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=