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
var _state = require("../../state");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
        "\n\n  display: grid;\n  padding: ",
        ";\n  overflow: hidden;\n  border-top: 1px solid ",
        ";\n  background-color: ",
        ";\n  transform-origin: bottom left;\n  grid-template-rows: auto;\n  grid-template-columns: auto min-content;\n    \n"
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
            key: "zoomMenuOut",
            value: function zoomMenuOut() {
                var zoom = (0, _state.getMenuDivZoom)();
                zoom /= _constants.ZOOM_RATIO;
                (0, _state.setMenuDivZoom)(zoom);
                this.zoom(zoom);
            }
        },
        {
            key: "zoomMenuIn",
            value: function zoomMenuIn() {
                var zoom = (0, _state.getMenuDivZoom)();
                zoom *= _constants.ZOOM_RATIO;
                (0, _state.setMenuDivZoom)(zoom);
                this.zoom(zoom);
            }
        },
        {
            key: "zoom",
            value: function zoom(zoom) {
                var width = "".concat(100 / zoom, "%"), transform = "scale(".concat(zoom, ")"), css = {
                    width: width,
                    transform: transform
                };
                this.css(css);
            }
        },
        {
            key: "show",
            value: function show() {
                var display = _constants.GRID;
                this.display(display);
            }
        },
        {
            key: "openMenu",
            value: function openMenu() {
                this.show();
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
                var context = this.getContext(), openMenu = this.openMenu.bind(this), closeMenu = this.closeMenu.bind(this), zoomMenuIn = this.zoomMenuIn.bind(this), zoomMenuOut = this.zoomMenuOut.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    openMenu: openMenu,
                    closeMenu: closeMenu,
                    zoomMenuIn: zoomMenuIn,
                    zoomMenuOut: zoomMenuOut
                });
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
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _styles.menuDivPadding, _styles.borderColour, _styles.menuDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgR1JJRCwgWk9PTV9SQVRJTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVEaXZab29tIGFzIGdldFpvb20sIHNldE1lbnVEaXZab29tIGFzIHNldFpvb20gfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgbWVudURpdlBhZGRpbmcsIG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHpvb21NZW51T3V0KCkge1xuICAgIGxldCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgem9vbSAvPSBaT09NX1JBVElPO1xuXG4gICAgc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHpvb21NZW51SW4oKSB7XG4gICAgbGV0IHpvb20gPSBnZXRab29tKCk7XG5cbiAgICB6b29tICo9IFpPT01fUkFUSU87XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgem9vbSh6b29tKSB7XG4gICAgY29uc3Qgd2lkdGggPSBgJHsxMDAvem9vbX0lYCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgc2NhbGUoJHt6b29tfSlgLFxuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgdHJhbnNmb3JtXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBHUklEO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgb3Blbk1lbnUoKSB7XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3hlc0Rpdi8+LFxuICAgICAgPEJ1dHRvbnNEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBvcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHpvb21NZW51SW4gPSB0aGlzLnpvb21NZW51SW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB6b29tTWVudU91dCA9IHRoaXMuem9vbU1lbnVPdXQuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBvcGVuTWVudSxcbiAgICAgIGNsb3NlTWVudSxcbiAgICAgIHpvb21NZW51SW4sXG4gICAgICB6b29tTWVudU91dFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudURpdilgXG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke2JvcmRlckNvbG91cn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7bWVudURpdkJhY2tncm91bmRDb2xvdXJ9O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIk1lbnVEaXYiLCJ6b29tTWVudU91dCIsInpvb20iLCJnZXRab29tIiwiWk9PTV9SQVRJTyIsInNldFpvb20iLCJ6b29tTWVudUluIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJjc3MiLCJzaG93IiwiZGlzcGxheSIsIkdSSUQiLCJvcGVuTWVudSIsImNsb3NlTWVudSIsImhpZGUiLCJjaGlsZEVsZW1lbnRzIiwiQ2hlY2tib3hlc0RpdiIsIkJ1dHRvbnNEaXYiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtZW51RGl2UGFkZGluZyIsImJvcmRlckNvbG91ciIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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