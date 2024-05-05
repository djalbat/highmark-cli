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
        ";\n  transform-origin: bottom left;\n  grid-template-rows: auto;\n  grid-template-columns: auto min-content;\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
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
            key: "invertColours",
            value: function invertColours() {
                this.addClass("inverted-colours");
            }
        },
        {
            key: "revertColours",
            value: function revertColours() {
                this.removeClass("inverted-colours");
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
            key: "tap",
            value: function tap(top, left) {
                this.tapButtonsDiv(top, left);
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
                var context = this.getContext(), openMenu = this.openMenu.bind(this), closeMenu = this.closeMenu.bind(this), zoomMenuIn = this.zoomMenuIn.bind(this), zoomMenuOut = this.zoomMenuOut.bind(this), tapMenuDiv = this.tap.bind(this), zoomMenuDiv = this.zoom.bind(this), addMenuDivClass = this.addClass.bind(this), getMenuDivHeight = this.getHeight.bind(this), removeMenuDivClass = this.removeClass.bind(this), isMenuDivDisplayed = this.isDisplayed.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    openMenu: openMenu,
                    closeMenu: closeMenu,
                    zoomMenuIn: zoomMenuIn,
                    zoomMenuOut: zoomMenuOut,
                    tapMenuDiv: tapMenuDiv,
                    zoomMenuDiv: zoomMenuDiv,
                    addMenuDivClass: addMenuDivClass,
                    getMenuDivHeight: getMenuDivHeight,
                    removeMenuDivClass: removeMenuDivClass,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgR1JJRCwgWk9PTV9SQVRJTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVEaXZab29tIGFzIGdldFpvb20sIHNldE1lbnVEaXZab29tIGFzIHNldFpvb20gfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgbWVudURpdlBhZGRpbmcsIG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGludmVydENvbG91cnMoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImludmVydGVkLWNvbG91cnNcIik7XG4gIH1cblxuICByZXZlcnRDb2xvdXJzKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuICB9XG5cbiAgem9vbU1lbnVPdXQoKSB7XG4gICAgbGV0IHpvb20gPSBnZXRab29tKCk7XG5cbiAgICB6b29tIC89IFpPT01fUkFUSU87XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgem9vbU1lbnVJbigpIHtcbiAgICBsZXQgem9vbSA9IGdldFpvb20oKTtcblxuICAgIHpvb20gKj0gWk9PTV9SQVRJTztcblxuICAgIHNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICB6b29tKHpvb20pIHtcbiAgICBjb25zdCB3aWR0aCA9IGAkezEwMC96b29tfSVgLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGBzY2FsZSgke3pvb219KWAsXG4gICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB0cmFuc2Zvcm1cbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIHRhcCh0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRhcEJ1dHRvbnNEaXYodG9wLCBsZWZ0KTtcbiAgfVxuXG4gIG9wZW5NZW51KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBHUklEO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENoZWNrYm94ZXNEaXYvPixcbiAgICAgIDxCdXR0b25zRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgb3Blbk1lbnUgPSB0aGlzLm9wZW5NZW51LmJpbmQodGhpcyksXG4gICAgICAgICAgY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKSxcbiAgICAgICAgICB6b29tTWVudUluID0gdGhpcy56b29tTWVudUluLmJpbmQodGhpcyksXG4gICAgICAgICAgem9vbU1lbnVPdXQgPSB0aGlzLnpvb21NZW51T3V0LmJpbmQodGhpcyksXG4gICAgICAgICAgdGFwTWVudURpdiA9IHRoaXMudGFwLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHpvb21NZW51RGl2ID0gdGhpcy56b29tLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGFkZE1lbnVEaXZDbGFzcyA9IHRoaXMuYWRkQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0TWVudURpdkhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHJlbW92ZU1lbnVEaXZDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNNZW51RGl2RGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIG9wZW5NZW51LFxuICAgICAgY2xvc2VNZW51LFxuICAgICAgem9vbU1lbnVJbixcbiAgICAgIHpvb21NZW51T3V0LFxuICAgICAgdGFwTWVudURpdixcbiAgICAgIHpvb21NZW51RGl2LFxuICAgICAgYWRkTWVudURpdkNsYXNzLFxuICAgICAgZ2V0TWVudURpdkhlaWdodCxcbiAgICAgIHJlbW92ZU1lbnVEaXZDbGFzcyxcbiAgICAgIGlzTWVudURpdkRpc3BsYXllZFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJ0YXBCdXR0b25zRGl2XCJcbiAgICBdKTtcblxuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVudVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNZW51RGl2KWBcblxuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHttZW51RGl2QmFja2dyb3VuZENvbG91cn07XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW4tY29udGVudDtcbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJNZW51RGl2IiwiaW52ZXJ0Q29sb3VycyIsImFkZENsYXNzIiwicmV2ZXJ0Q29sb3VycyIsInJlbW92ZUNsYXNzIiwiem9vbU1lbnVPdXQiLCJ6b29tIiwiZ2V0Wm9vbSIsIlpPT01fUkFUSU8iLCJzZXRab29tIiwiem9vbU1lbnVJbiIsIndpZHRoIiwidHJhbnNmb3JtIiwiY3NzIiwidGFwIiwidG9wIiwibGVmdCIsInRhcEJ1dHRvbnNEaXYiLCJvcGVuTWVudSIsImRpc3BsYXkiLCJHUklEIiwiY2xvc2VNZW51IiwiaGlkZSIsImNoaWxkRWxlbWVudHMiLCJDaGVja2JveGVzRGl2IiwiQnV0dG9uc0RpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJ0YXBNZW51RGl2Iiwiem9vbU1lbnVEaXYiLCJhZGRNZW51RGl2Q2xhc3MiLCJnZXRNZW51RGl2SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicmVtb3ZlTWVudURpdkNsYXNzIiwiaXNNZW51RGl2RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtZW51RGl2UGFkZGluZyIsImJvcmRlckNvbG91ciIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNIQTs7O2VBQUE7OztvRUFwSHNCOzhEQUVGOzhEQUNHO2lFQUNHO3lCQUVPO3FCQUNvQztzQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RSxJQUFBLEFBQU1BLHdCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1lBQ2hCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE9BQU9DLElBQUFBLHFCQUFPO2dCQUVsQkQsUUFB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