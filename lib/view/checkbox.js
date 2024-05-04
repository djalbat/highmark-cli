"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _styles = require("../styles");
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  cursor: pointer;  \n  display: block;\n  outline: none;\n  position: relative;\n  appearance: none;\n  \n  ::before {\n    width: ",
        ";\n    height: ",
        ";\n    border: ",
        " solid ",
        ';\n    content: " ";\n    position: absolute;\n    border-radius: ',
        ";\n    background-color: ",
        ";\n  }\n  \n  ::after {\n    top: 0;\n    left: 0;\n    width: ",
        ";\n    height: ",
        ';\n    content: " ";\n    position: absolute;\n    background-size: 0;\n    background-image: url("checkmark.svg");\n  }\n\n  :checked::after {\n    background-size: 100%;\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _default = (0, _easywithstyle.default)(/*#__PURE__*/ function(Checkbox) {
    _inherits(_class, Checkbox);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    _create_class(_class, [
        {
            key: "parentContext",
            value: function parentContext() {
                var checkCheckbox = this.check.bind(this), isCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    checkCheckbox: checkCheckbox,
                    isCheckboxChecked: isCheckboxChecked
                };
            }
        }
    ]);
    return _class;
}(_easy.Checkbox))(_templateObject(), _styles.checkboxSize, _styles.checkboxSize, _styles.checkboxSize, _styles.checkboxSize, _styles.borderWidth, _styles.borderColour, _styles.borderRadius, _styles.checkboxBackgroundColour, _styles.checkboxSize, _styles.checkboxSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGJvcmRlcldpZHRoLCBib3JkZXJSYWRpdXMsIGJvcmRlckNvbG91ciwgY2hlY2tib3hTaXplLCBjaGVja2JveEJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShjbGFzcyBleHRlbmRzIENoZWNrYm94IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjaGVja0NoZWNrYm94ID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNoZWNrQ2hlY2tib3gsXG4gICAgICBpc0NoZWNrYm94Q2hlY2tlZFxuICAgIH0pO1xuICB9XG59KWBcblxuICB3aWR0aDogJHtjaGVja2JveFNpemV9O1xuICBoZWlnaHQ6ICR7Y2hlY2tib3hTaXplfTtcbiAgY3Vyc29yOiBwb2ludGVyOyAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIFxuICA6OmJlZm9yZSB7XG4gICAgd2lkdGg6ICR7Y2hlY2tib3hTaXplfTtcbiAgICBoZWlnaHQ6ICR7Y2hlY2tib3hTaXplfTtcbiAgICBib3JkZXI6ICR7Ym9yZGVyV2lkdGh9IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogJHtib3JkZXJSYWRpdXN9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y2hlY2tib3hCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuICBcbiAgOjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6ICR7Y2hlY2tib3hTaXplfTtcbiAgICBoZWlnaHQ6ICR7Y2hlY2tib3hTaXplfTtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImNoZWNrbWFyay5zdmdcIik7XG4gIH1cblxuICA6Y2hlY2tlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsid2l0aFN0eWxlIiwicGFyZW50Q29udGV4dCIsImNoZWNrQ2hlY2tib3giLCJjaGVjayIsImJpbmQiLCJpc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsIkNoZWNrYm94IiwiY2hlY2tib3hTaXplIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvdXIiLCJib3JkZXJSYWRpdXMiLCJjaGVja2JveEJhY2tncm91bmRDb2xvdXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O29FQU5zQjtvQkFFRztzQkFFdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRyxXQUFlQSxJQUFBQSxzQkFBUyxnQkFBQzs7Ozs7Ozs7O1lBQ3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNwQ0Msb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXpELE9BQVE7b0JBQ05GLGVBQUFBO29CQUNBRyxtQkFBQUE7Z0JBQ0Y7WUFDRjs7OztFQVRxQ0UsY0FBUSxzQkFZcENDLG9CQUFZLEVBQ1hBLG9CQUFZLEVBUVhBLG9CQUFZLEVBQ1hBLG9CQUFZLEVBQ1pDLG1CQUFXLEVBQVVDLG9CQUFZLEVBRzFCQyxvQkFBWSxFQUNUQyxnQ0FBd0IsRUFNbkNKLG9CQUFZLEVBQ1hBLG9CQUFZIn0=