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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _closeMenu = /*#__PURE__*/ _interop_require_default(require("../button/closeMenu"));
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("../button/fullScreen"));
var _zoomMenuIn = /*#__PURE__*/ _interop_require_default(require("../button/zoomMenuIn"));
var _zoomMenuOut = /*#__PURE__*/ _interop_require_default(require("../button/zoomMenuOut"));
var _styles = require("../../styles");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  gap: ",
        ";\n  display: grid;\n  grid-template-rows: min-content min-content;\n  grid-template-columns: min-content min-content;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ButtonsDiv = /*#__PURE__*/ function(Element) {
    _inherits(ButtonsDiv, Element);
    var _super = _create_super(ButtonsDiv);
    function ButtonsDiv() {
        _class_call_check(this, ButtonsDiv);
        return _super.apply(this, arguments);
    }
    _create_class(ButtonsDiv, [
        {
            key: "getButtons",
            value: function getButtons() {
                var buttonChildElements = this.getChildElements("button"), buttons = buttonChildElements; ///
                return buttons;
            }
        },
        {
            key: "tap",
            value: function tap(top, left) {
                var buttons = this.getButtons();
                buttons.forEach(function(button) {
                    button.tap(top, left);
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_zoomMenuIn.default, null),
                    /*#__PURE__*/ React.createElement(_closeMenu.default, null),
                    /*#__PURE__*/ React.createElement(_zoomMenuOut.default, null),
                    /*#__PURE__*/ React.createElement(_fullScreen.default, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var tapButtonsDiv = this.tap.bind(this); ///
                return {
                    tapButtonsDiv: tapButtonsDiv
                };
            }
        }
    ]);
    return ButtonsDiv;
}(_wrap_native_super(_element.default));
_define_property(ButtonsDiv, "tagName", "div");
_define_property(ButtonsDiv, "defaultProperties", {
    className: "buttons"
});
var _default = (0, _easywithstyle.default)(ButtonsDiv)(_templateObject(), _styles.buttonsDivGap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9idXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IENsb3NlTWVudUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Nsb3NlTWVudVwiO1xuaW1wb3J0IEZ1bGxTY3JlZW5CdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgWm9vbU1lbnVJbkJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL3pvb21NZW51SW5cIjtcbmltcG9ydCBab29tTWVudU91dEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL3pvb21NZW51T3V0XCI7XG5cbmltcG9ydCB7IGJ1dHRvbnNEaXZHYXAgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEJ1dHRvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25DaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiYnV0dG9uXCIpLFxuICAgICAgICAgIGJ1dHRvbnMgPSBidXR0b25DaGlsZEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIHRhcCh0b3AsIGxlZnQpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLnRhcCh0b3AsIGxlZnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFpvb21NZW51SW5CdXR0b24vPixcbiAgICAgIDxDbG9zZU1lbnVCdXR0b24vPixcbiAgICAgIDxab29tTWVudU91dEJ1dHRvbi8+LFxuICAgICAgPEZ1bGxTY3JlZW5CdXR0b24vPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHRhcEJ1dHRvbnNEaXYgPSB0aGlzLnRhcC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHRhcEJ1dHRvbnNEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJ1dHRvbnNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQnV0dG9uc0RpdilgXG5cbiAgZ2FwOiAke2J1dHRvbnNEaXZHYXB9O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQnV0dG9uc0RpdiIsImdldEJ1dHRvbnMiLCJidXR0b25DaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImJ1dHRvbnMiLCJ0YXAiLCJ0b3AiLCJsZWZ0IiwiZm9yRWFjaCIsImJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJab29tTWVudUluQnV0dG9uIiwiQ2xvc2VNZW51QnV0dG9uIiwiWm9vbU1lbnVPdXRCdXR0b24iLCJGdWxsU2NyZWVuQnV0dG9uIiwicGFyZW50Q29udGV4dCIsInRhcEJ1dHRvbnNEaXYiLCJiaW5kIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImJ1dHRvbnNEaXZHYXAiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzREE7OztlQUFBOzs7b0VBcERzQjs4REFFRjtnRUFDUTtpRUFDQztpRUFDQTtrRUFDQztzQkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSwyQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUM1Q0MsVUFBVUYscUJBQXNCLEdBQUc7Z0JBRXpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsR0FBRyxFQUFFQyxJQUFJO2dCQUNYLElBQU1ILFVBQVUsSUFBSSxDQUFDSCxVQUFVO2dCQUUvQkcsUUFBUUksT0FBTyxDQUFDLFNBQUNDO29CQUNmQSxPQUFPSixHQUFHLENBQUNDLEtBQUtDO2dCQUNsQjtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLG1CQUFnQjtrQ0FDakIsb0JBQUNDLGtCQUFlO2tDQUNoQixvQkFBQ0Msb0JBQWlCO2tDQUNsQixvQkFBQ0MsbUJBQWdCO2lCQUVsQjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNYLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUUvQyxPQUFRO29CQUNORCxlQUFBQTtnQkFDRjtZQUNGOzs7V0FqQ0loQjtxQkFBbUJrQixnQkFBTztBQW1DOUIsaUJBbkNJbEIsWUFtQ0dtQixXQUFVO0FBRWpCLGlCQXJDSW5CLFlBcUNHb0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdEIsK0JBRWhCdUIscUJBQWEifQ==