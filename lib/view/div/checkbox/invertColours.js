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
var _span = /*#__PURE__*/ _interop_require_default(require("../../span"));
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox"));
var _invertColours = /*#__PURE__*/ _interop_require_default(require("../../checkbox/invertColours"));
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
        return _super.apply(this, arguments);
    }
    _create_class(InvertColoursCheckboxDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_invertColours.default, null),
                    /*#__PURE__*/ React.createElement(_span.default, null, "Invert colours")
                ];
            }
        }
    ]);
    return InvertColoursCheckboxDiv;
}(_checkbox.default);
_define_property(InvertColoursCheckboxDiv, "defaultProperties", {
    className: "invert-colours"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9pbnZlcnRDb2xvdXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3BhbiBmcm9tIFwiLi4vLi4vc3BhblwiO1xuaW1wb3J0IENoZWNrYm94RGl2IGZyb20gXCIuLi8uLi9kaXYvY2hlY2tib3hcIjtcbmltcG9ydCBJbnZlcnRDb2xvdXJzQ2hlY2tib3ggZnJvbSBcIi4uLy4uL2NoZWNrYm94L2ludmVydENvbG91cnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW52ZXJ0Q29sb3Vyc0NoZWNrYm94Lz4sXG4gICAgICA8U3Bhbj5cbiAgICAgICAgSW52ZXJ0IGNvbG91cnNcbiAgICAgIDwvU3Bhbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJpbnZlcnQtY29sb3Vyc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IiwiY2hpbGRFbGVtZW50cyIsIkludmVydENvbG91cnNDaGVja2JveCIsIlNwYW4iLCJDaGVja2JveERpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSko7K0RBQ087b0VBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLHNCQUFxQjtrQ0FDdEIsb0JBQUNDLGFBQUksUUFBQztpQkFJUDtZQUNIOzs7V0FWbUJIO0VBQWlDSSxpQkFBVztBQVkvRCxpQkFabUJKLDBCQVlaSyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9