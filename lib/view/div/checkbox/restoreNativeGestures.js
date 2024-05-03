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
        return _super.apply(this, arguments);
    }
    _create_class(RestoreNativeGesturesCheckboxDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_checkbox.default, null),
                    /*#__PURE__*/ React.createElement(_span.default, null, "Restore native gestures\n(alternatively double tap \nand then tap to resume)")
                ];
            }
        }
    ]);
    return RestoreNativeGesturesCheckboxDiv;
}(_checkbox1.default);
_define_property(RestoreNativeGesturesCheckboxDiv, "defaultProperties", {
    className: "restore-native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9yZXN0b3JlTmF0aXZlR2VzdHVyZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTcGFuIGZyb20gXCIuLi8uLi9zcGFuXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uLy4uL2NoZWNrYm94XCI7XG5pbXBvcnQgQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiBleHRlbmRzIENoZWNrYm94RGl2IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENoZWNrYm94Lz4sXG4gICAgICA8U3Bhbj5cbiAgICAgICAge2BSZXN0b3JlIG5hdGl2ZSBnZXN0dXJlc1xuKGFsdGVybmF0aXZlbHkgZG91YmxlIHRhcCBcbmFuZCB0aGVuIHRhcCB0byByZXN1bWUpYH1cbiAgICAgIDwvU3Bhbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZXN0b3JlLW5hdGl2ZS1nZXN0dXJlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJjaGlsZEVsZW1lbnRzIiwiQ2hlY2tib3giLCJTcGFuIiwiQ2hlY2tib3hEaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpKOytEQUNJO2dFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULElBQUEsQUFBTUEsaURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLGlCQUFRO2tDQUNULG9CQUFDQyxhQUFJLFFBQ0Q7aUJBS0w7WUFDSDs7O1dBWm1CSDtFQUF5Q0ksa0JBQVc7QUFjdkUsaUJBZG1CSixrQ0FjWksscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==