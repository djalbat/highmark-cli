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
        "\n\n  left: 0;\n  width: 100%;\n  height: fit-content;\n  filter: brightness(0.8);\n  bottom: 0;\n  display: grid;\n  padding: ",
        ";\n  position: fixed;\n  border-top: 1px solid ",
        ";\n  background-color: ",
        ";\n  transform-origin: bottom left;\n  grid-template-rows: auto;\n  grid-template-columns: auto min-content;\n\n"
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
            key: "update",
            value: function update() {
                var zoom = (0, _state.getMenuDivZoom)();
                this.zoom(zoom);
            }
        },
        {
            key: "zoom",
            value: function zoom(zoom) {
                var width = "".concat(100 / zoom, "%"), transform = "scale(".concat(zoom, ")");
                var css = {
                    width: width,
                    transform: transform
                };
                this.css(css);
            }
        },
        {
            key: "tap",
            value: function tap(top, left) {
                this.tapButtonsDiv(top, left);
            }
        },
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
                var context = this.getContext(), openMenu = this.openMenu.bind(this), closeMenu = this.closeMenu.bind(this), zoomMenuIn = this.zoomMenuIn.bind(this), zoomMenuOut = this.zoomMenuOut.bind(this), tapMenuDiv = this.tap.bind(this), updateMenuDiv = this.update.bind(this), getMenuDivHeight = this.getHeight.bind(this), isMenuDivDisplayed = this.isDisplayed.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    openMenu: openMenu,
                    closeMenu: closeMenu,
                    zoomMenuIn: zoomMenuIn,
                    zoomMenuOut: zoomMenuOut,
                    tapMenuDiv: tapMenuDiv,
                    updateMenuDiv: updateMenuDiv,
                    getMenuDivHeight: getMenuDivHeight,
                    isMenuDivDisplayed: isMenuDivDisplayed
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "tapButtonsDiv"
                ]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgR1JJRCwgWk9PTV9SQVRJTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVEaXZab29tIGFzIGdldFpvb20sIHNldE1lbnVEaXZab29tIGFzIHNldFpvb20gfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgbWVudURpdlBhZGRpbmcsIG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgem9vbSh6b29tKSB7XG4gICAgY29uc3Qgd2lkdGggPSBgJHsxMDAvem9vbX0lYCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgc2NhbGUoJHt6b29tfSlgO1xuXG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgd2lkdGgsXG4gICAgICB0cmFuc2Zvcm1cbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIHRhcCh0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRhcEJ1dHRvbnNEaXYodG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHpvb21NZW51T3V0KCkge1xuICAgIGxldCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgem9vbSAvPSBaT09NX1JBVElPO1xuXG4gICAgc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHpvb21NZW51SW4oKSB7XG4gICAgbGV0IHpvb20gPSBnZXRab29tKCk7XG5cbiAgICB6b29tICo9IFpPT01fUkFUSU87XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgb3Blbk1lbnUoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IEdSSUQ7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBjbG9zZU1lbnUoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3hlc0Rpdi8+LFxuICAgICAgPEJ1dHRvbnNEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBvcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHpvb21NZW51SW4gPSB0aGlzLnpvb21NZW51SW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB6b29tTWVudU91dCA9IHRoaXMuem9vbU1lbnVPdXQuYmluZCh0aGlzKSxcbiAgICAgICAgICB0YXBNZW51RGl2ID0gdGhpcy50YXAuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlTWVudURpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldE1lbnVEaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc01lbnVEaXZEaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIG9wZW5NZW51LFxuICAgICAgY2xvc2VNZW51LFxuICAgICAgem9vbU1lbnVJbixcbiAgICAgIHpvb21NZW51T3V0LFxuICAgICAgdGFwTWVudURpdixcbiAgICAgIHVwZGF0ZU1lbnVEaXYsXG4gICAgICBnZXRNZW51RGl2SGVpZ2h0LFxuICAgICAgaXNNZW51RGl2RGlzcGxheWVkXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcInRhcEJ1dHRvbnNEaXZcIlxuICAgIF0pO1xuXG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZW51XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1lbnVEaXYpYFxuXG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAke21lbnVEaXZQYWRkaW5nfTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke21lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xuXG5gO1xuIl0sIm5hbWVzIjpbIk1lbnVEaXYiLCJ1cGRhdGUiLCJ6b29tIiwiZ2V0Wm9vbSIsIndpZHRoIiwidHJhbnNmb3JtIiwiY3NzIiwidGFwIiwidG9wIiwibGVmdCIsInRhcEJ1dHRvbnNEaXYiLCJ6b29tTWVudU91dCIsIlpPT01fUkFUSU8iLCJzZXRab29tIiwiem9vbU1lbnVJbiIsIm9wZW5NZW51IiwiZGlzcGxheSIsIkdSSUQiLCJjbG9zZU1lbnUiLCJoaWRlIiwiY2hpbGRFbGVtZW50cyIsIkNoZWNrYm94ZXNEaXYiLCJCdXR0b25zRGl2IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsInRhcE1lbnVEaXYiLCJ1cGRhdGVNZW51RGl2IiwiZ2V0TWVudURpdkhlaWdodCIsImdldEhlaWdodCIsImlzTWVudURpdkRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibWVudURpdlBhZGRpbmciLCJib3JkZXJDb2xvdXIiLCJtZW51RGl2QmFja2dyb3VuZENvbG91ciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpSEE7OztlQUFBOzs7b0VBL0dzQjs4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