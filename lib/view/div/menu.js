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
var _buttons = /*#__PURE__*/ _interop_require_default(require("../div/buttons"));
var _checkboxes = /*#__PURE__*/ _interop_require_default(require("../div/checkboxes"));
var _constants = require("../../constants");
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
        "\n\n  left: 0;\n  width: 100%;\n  height: fit-content;\n  filter: brightness(0.8);\n  bottom: 0;\n  display: grid;\n  padding: ",
        ";\n  position: fixed;\n  background-color: ",
        ";\n  grid-template-rows: auto;\n  grid-template-columns: auto ",
        ";\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MenuDiv = /*#__PURE__*/ function(Element) {
    _inherits(MenuDiv, Element);
    var _super = _create_super(MenuDiv);
    function MenuDiv() {
        _class_call_check(this, MenuDiv);
        return _super.apply(this, arguments);
    }
    _create_class(MenuDiv, [
        {
            key: "increaseFontSize",
            value: function increaseFontSize() {
                debugger;
            }
        },
        {
            key: "decreaseFontSize",
            value: function decreaseFontSize() {
                debugger;
            }
        },
        {
            key: "openMenu",
            value: function openMenu() {
                var display = _constants.GRID;
                this.display(display);
            }
        },
        {
            key: "closeMenu",
            value: function closeMenu() {
                this.hide();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_checkboxes.default, null),
                    /*#__PURE__*/ React.createElement(_buttons.default, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var openMenu = this.openMenu.bind(this), closeMenu = this.closeMenu.bind(this), increaseFontSize = this.increaseFontSize.bind(this), decreaseFontSize = this.decreaseFontSize.bind(this), getMenuDivHeight = this.getHeight.bind(this), isMenuDivDisplayed = this.isDisplayed.bind(this); ///
                return {
                    openMenu: openMenu,
                    closeMenu: closeMenu,
                    increaseFontSize: increaseFontSize,
                    decreaseFontSize: decreaseFontSize,
                    getMenuDivHeight: getMenuDivHeight,
                    isMenuDivDisplayed: isMenuDivDisplayed
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.hide();
            }
        }
    ]);
    return MenuDiv;
}(_wrap_native_super(_element.default));
_define_property(MenuDiv, "tagName", "div");
_define_property(MenuDiv, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _styles.menuDivPadding, _styles.menuDivBackgroundColour, _styles.buttonsDivWidth);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgR1JJRCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1lbnVEaXZQYWRkaW5nLCBidXR0b25zRGl2V2lkdGgsIG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluY3JlYXNlRm9udFNpemUoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGRlY3JlYXNlRm9udFNpemUoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIG9wZW5NZW51KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBHUklEO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENoZWNrYm94ZXNEaXYvPixcbiAgICAgIDxCdXR0b25zRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBvcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGluY3JlYXNlRm9udFNpemUgPSB0aGlzLmluY3JlYXNlRm9udFNpemUuYmluZCh0aGlzKSxcbiAgICAgICAgICBkZWNyZWFzZUZvbnRTaXplID0gdGhpcy5kZWNyZWFzZUZvbnRTaXplLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0TWVudURpdkhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzTWVudURpdkRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvcGVuTWVudSxcbiAgICAgIGNsb3NlTWVudSxcbiAgICAgIGluY3JlYXNlRm9udFNpemUsXG4gICAgICBkZWNyZWFzZUZvbnRTaXplLFxuICAgICAgZ2V0TWVudURpdkhlaWdodCxcbiAgICAgIGlzTWVudURpdkRpc3BsYXllZFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudURpdilgXG5cbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6ICR7bWVudURpdlBhZGRpbmd9O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7bWVudURpdkJhY2tncm91bmRDb2xvdXJ9O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAke2J1dHRvbnNEaXZXaWR0aH07XG5cbmA7XG4iXSwibmFtZXMiOlsiTWVudURpdiIsImluY3JlYXNlRm9udFNpemUiLCJkZWNyZWFzZUZvbnRTaXplIiwib3Blbk1lbnUiLCJkaXNwbGF5IiwiR1JJRCIsImNsb3NlTWVudSIsImhpZGUiLCJjaGlsZEVsZW1lbnRzIiwiQ2hlY2tib3hlc0RpdiIsIkJ1dHRvbnNEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImdldE1lbnVEaXZIZWlnaHQiLCJnZXRIZWlnaHQiLCJpc01lbnVEaXZEaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibWVudURpdlBhZGRpbmciLCJtZW51RGl2QmFja2dyb3VuZENvbG91ciIsImJ1dHRvbnNEaXZXaWR0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvRUE7OztlQUFBOzs7b0VBbEVzQjs4REFFRjs4REFDRztpRUFDRzt5QkFFTDtzQkFDb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLGVBQUk7Z0JBRXBCLElBQUksQ0FBQ0QsT0FBTyxDQUFDQTtZQUNmOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsSUFBSTtZQUNYOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLG1CQUFhO2tDQUNkLG9CQUFDQyxnQkFBVTtpQkFFWjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNTLElBQUksQ0FBQyxJQUFJLEdBQ2xDTixZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDTSxJQUFJLENBQUMsSUFBSSxHQUNwQ1gsbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNXLElBQUksQ0FBQyxJQUFJLEdBQ2xEVixtQkFBbUIsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ1UsSUFBSSxDQUFDLElBQUksR0FDbERDLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDM0NHLHFCQUFxQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU1RCxPQUFRO29CQUNOVCxVQUFBQTtvQkFDQUcsV0FBQUE7b0JBQ0FMLGtCQUFBQTtvQkFDQUMsa0JBQUFBO29CQUNBVyxrQkFBQUE7b0JBQ0FFLG9CQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ1YsSUFBSTtZQUNYOzs7V0FoRElQO3FCQUFnQmtCLGdCQUFPO0FBa0QzQixpQkFsRElsQixTQWtER21CLFdBQVU7QUFFakIsaUJBcERJbkIsU0FvREdvQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN0Qiw0QkFRWnVCLHNCQUFjLEVBRUxDLCtCQUF1QixFQUViQyx1QkFBZSJ9