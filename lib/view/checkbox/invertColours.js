"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InvertColoursCheckbox;
    }
});
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../checkbox"));
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
var InvertColoursCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(InvertColoursCheckbox, Checkbox);
    var _super = _create_super(InvertColoursCheckbox);
    function InvertColoursCheckbox() {
        _class_call_check(this, InvertColoursCheckbox);
        return _super.apply(this, arguments);
    }
    _create_class(InvertColoursCheckbox, [
        {
            key: "parentContext",
            value: function parentContext() {
                var onInvertColoursCheckboxChange = this.onChange.bind(this), isInvertColoursCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    onInvertColoursCheckboxChange: onInvertColoursCheckboxChange,
                    isInvertColoursCheckboxChecked: isInvertColoursCheckboxChecked
                };
            }
        }
    ]);
    return InvertColoursCheckbox;
}(_checkbox.default);
_define_property(InvertColoursCheckbox, "defaultProperties", {
    className: "invert-colours"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2NoZWNrYm94L2ludmVydENvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZXJ0Q29sb3Vyc0NoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3gge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IG9uSW52ZXJ0Q29sb3Vyc0NoZWNrYm94Q2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0ludmVydENvbG91cnNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgb25JbnZlcnRDb2xvdXJzQ2hlY2tib3hDaGFuZ2UsXG4gICAgICBpc0ludmVydENvbG91cnNDaGVja2JveENoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW52ZXJ0LWNvbG91cnNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkludmVydENvbG91cnNDaGVja2JveCIsInBhcmVudENvbnRleHQiLCJvbkludmVydENvbG91cnNDaGVja2JveENoYW5nZSIsIm9uQ2hhbmdlIiwiYmluZCIsImlzSW52ZXJ0Q29sb3Vyc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsIkNoZWNrYm94IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdDQUFnQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdkRDLGlDQUFpQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUVyRSxPQUFRO29CQUNORiwrQkFBQUE7b0JBQ0FHLGdDQUFBQTtnQkFDRjtZQUNGOzs7V0FUbUJMO0VBQThCTyxpQkFBUTtBQVd6RCxpQkFYbUJQLHVCQVdaUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9