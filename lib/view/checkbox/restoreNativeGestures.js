"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RestoreNativeGesturesCheckbox;
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
var RestoreNativeGesturesCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(RestoreNativeGesturesCheckbox, Checkbox);
    var _super = _create_super(RestoreNativeGesturesCheckbox);
    function RestoreNativeGesturesCheckbox() {
        _class_call_check(this, RestoreNativeGesturesCheckbox);
        return _super.apply(this, arguments);
    }
    _create_class(RestoreNativeGesturesCheckbox, [
        {
            key: "parentContext",
            value: function parentContext() {
                var onRestoreNativeGesturesCheckboxChange = this.onChange.bind(this), isRestoreNativeGesturesCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    onRestoreNativeGesturesCheckboxChange: onRestoreNativeGesturesCheckboxChange,
                    isRestoreNativeGesturesCheckboxChecked: isRestoreNativeGesturesCheckboxChecked
                };
            }
        }
    ]);
    return RestoreNativeGesturesCheckbox;
}(_checkbox.default);
_define_property(RestoreNativeGesturesCheckbox, "defaultProperties", {
    className: "restore-native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2NoZWNrYm94L3Jlc3RvcmVOYXRpdmVHZXN0dXJlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCBleHRlbmRzIENoZWNrYm94IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBvblJlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94Q2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblJlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94Q2hhbmdlLFxuICAgICAgaXNSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveENoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzdG9yZS1uYXRpdmUtZ2VzdHVyZXNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwicGFyZW50Q29udGV4dCIsIm9uUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hDaGFuZ2UiLCJvbkNoYW5nZSIsImJpbmQiLCJpc1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsIkNoZWNrYm94IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsOENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHdDQUF3QyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0RDLHlDQUF5QyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUU3RSxPQUFRO29CQUNORix1Q0FBQUE7b0JBQ0FHLHdDQUFBQTtnQkFDRjtZQUNGOzs7V0FUbUJMO0VBQXNDTyxpQkFBUTtBQVdqRSxpQkFYbUJQLCtCQVdaUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9