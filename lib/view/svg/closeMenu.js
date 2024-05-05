"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CloseMenuSVG;
    }
});
var _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
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
var CloseMenuSVG = /*#__PURE__*/ function(SVG) {
    _inherits(CloseMenuSVG, SVG);
    var _super = _create_super(CloseMenuSVG);
    function CloseMenuSVG() {
        _class_call_check(this, CloseMenuSVG);
        return _super.apply(this, arguments);
    }
    _create_class(CloseMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    d: "M 18.156886,3.3074544 12.500012,8.9643288 6.8431375,3.3074544 3.307454,6.8431379 8.9643284,12.500012 3.3074544,18.156886 6.8431379,21.69257 12.500012,16.035696 18.156886,21.69257 21.69257,18.156886 16.035695,12.500012 21.69257,6.8431379 Z"
                }));
            }
        }
    ]);
    return CloseMenuSVG;
}(_svg.default);
_define_property(CloseMenuSVG, "defaultProperties", {
    className: "close-menu"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L3N2Zy9jbG9zZU1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTVkcgZnJvbSBcIi4uL3N2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZU1lbnVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTSAxOC4xNTY4ODYsMy4zMDc0NTQ0IDEyLjUwMDAxMiw4Ljk2NDMyODggNi44NDMxMzc1LDMuMzA3NDU0NCAzLjMwNzQ1NCw2Ljg0MzEzNzkgOC45NjQzMjg0LDEyLjUwMDAxMiAzLjMwNzQ1NDQsMTguMTU2ODg2IDYuODQzMTM3OSwyMS42OTI1NyAxMi41MDAwMTIsMTYuMDM1Njk2IDE4LjE1Njg4NiwyMS42OTI1NyAyMS42OTI1NywxOC4xNTY4ODYgMTYuMDM1Njk1LDEyLjUwMDAxMiAyMS42OTI1Nyw2Ljg0MzEzNzkgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjbG9zZS1tZW51XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDbG9zZU1lbnVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwiU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxHQUFFOztZQUlkOzs7V0FUbUJKO0VBQXFCSyxZQUFHO0FBVzNDLGlCQVhtQkwsY0FXWk0scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==