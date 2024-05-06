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
var _state = require("../../state");
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
        "\n\n  left: 0;\n  bottom: 0;\n  display: grid;\n  padding: ",
        ";\n  position: fixed;\n  border-top: 1px solid ",
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
                this.updateZoom();
            }
        },
        {
            key: "zoomMenuIn",
            value: function zoomMenuIn() {
                var zoom = (0, _state.getMenuDivZoom)();
                zoom *= _constants.ZOOM_RATIO;
                (0, _state.setMenuDivZoom)(zoom);
                this.updateZoom();
            }
        },
        {
            key: "updateZoom",
            value: function updateZoom() {
                var zoom = (0, _state.getMenuDivZoom)(), width = "".concat(100 / zoom, "%"), transform = "scale(".concat(zoom, ")"), css = {
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
            key: "didMount",
            value: function didMount() {
                this.updateZoom();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
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
                var context = this.getContext(), openMenu = this.openMenu.bind(this), closeMenu = this.closeMenu.bind(this), zoomMenuIn = this.zoomMenuIn.bind(this), zoomMenuOut = this.zoomMenuOut.bind(this), updateMenuDivZoom = this.updateZoom.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    openMenu: openMenu,
                    closeMenu: closeMenu,
                    zoomMenuIn: zoomMenuIn,
                    zoomMenuOut: zoomMenuOut,
                    updateMenuDivZoom: updateMenuDivZoom
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
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _styles.menuDivPadding, _styles.borderColour, _styles.backgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgR1JJRCwgWk9PTV9SQVRJTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgbWVudURpdlBhZGRpbmcsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBnZXRNZW51RGl2Wm9vbSBhcyBnZXRab29tLCBzZXRNZW51RGl2Wm9vbSBhcyBzZXRab29tIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNsYXNzIE1lbnVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgem9vbU1lbnVPdXQoKSB7XG4gICAgbGV0IHpvb20gPSBnZXRab29tKCk7XG5cbiAgICB6b29tIC89IFpPT01fUkFUSU87XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB6b29tTWVudUluKCkge1xuICAgIGxldCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgem9vbSAqPSBaT09NX1JBVElPO1xuXG4gICAgc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHdpZHRoID0gYCR7MTAwL3pvb219JWAsXG4gICAgICAgICAgdHJhbnNmb3JtID0gYHNjYWxlKCR7em9vbX0pYCxcbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHRyYW5zZm9ybVxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gR1JJRDtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIG9wZW5NZW51KCkge1xuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDaGVja2JveGVzRGl2Lz4sXG4gICAgICA8QnV0dG9uc0Rpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyksXG4gICAgICAgICAgem9vbU1lbnVJbiA9IHRoaXMuem9vbU1lbnVJbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHpvb21NZW51T3V0ID0gdGhpcy56b29tTWVudU91dC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU1lbnVEaXZab29tID0gdGhpcy51cGRhdGVab29tLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgb3Blbk1lbnUsXG4gICAgICBjbG9zZU1lbnUsXG4gICAgICB6b29tTWVudUluLFxuICAgICAgem9vbU1lbnVPdXQsXG4gICAgICB1cGRhdGVNZW51RGl2Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudURpdilgXG5cbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAke21lbnVEaXZQYWRkaW5nfTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIk1lbnVEaXYiLCJ6b29tTWVudU91dCIsInpvb20iLCJnZXRab29tIiwiWk9PTV9SQVRJTyIsInNldFpvb20iLCJ1cGRhdGVab29tIiwiem9vbU1lbnVJbiIsIndpZHRoIiwidHJhbnNmb3JtIiwiY3NzIiwic2hvdyIsImRpc3BsYXkiLCJHUklEIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJoaWRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDaGVja2JveGVzRGl2IiwiQnV0dG9uc0RpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVNZW51RGl2Wm9vbSIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibWVudURpdlBhZGRpbmciLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5R0E7OztlQUFBOzs7b0VBdkdzQjs4REFFRjs4REFDRztpRUFDRzt5QkFFTztzQkFDOEI7cUJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPQyxJQUFBQSxxQkFBTztnQkFFbEJELFFBQVFFLHFCQUFVO2dCQUVsQkMsSUFBQUEscUJBQU8sRUFBQ0g7Z0JBRVIsSUFBSSxDQUFDSSxVQUFVO1lBQ2pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlMLE9BQU9DLElBQUFBLHFCQUFPO2dCQUVsQkQsUUFBUUUscUJBQVU7Z0JBRWxCQyxJQUFBQSxxQkFBTyxFQUFDSDtnQkFFUixJQUFJLENBQUNJLFVBQVU7WUFDakI7OztZQUVBQSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosT0FBT0MsSUFBQUEscUJBQU8sS0FDZEssUUFBUSxBQUFDLEdBQVcsT0FBVCxNQUFJTixNQUFLLE1BQ3BCTyxZQUFZLEFBQUMsU0FBYSxPQUFMUCxNQUFLLE1BQzFCUSxNQUFNO29CQUNKRixPQUFBQTtvQkFDQUMsV0FBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsZUFBSTtnQkFFcEIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDSCxJQUFJO1lBQ1g7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxJQUFJO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDWCxVQUFVO1lBQ2pCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLG1CQUFhO2tDQUNkLG9CQUFDQyxnQkFBVTtpQkFFWjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCVixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDVyxJQUFJLENBQUMsSUFBSSxHQUNsQ1YsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDLElBQUksR0FDcENsQixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDa0IsSUFBSSxDQUFDLElBQUksR0FDdEN4QixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDd0IsSUFBSSxDQUFDLElBQUksR0FDeENDLG9CQUFvQixJQUFJLENBQUNwQixVQUFVLENBQUNtQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXpELE9BQVEsd0NBQ0hGO29CQUNIVCxVQUFBQTtvQkFDQUMsV0FBQUE7b0JBQ0FSLFlBQUFBO29CQUNBTixhQUFBQTtvQkFDQXlCLG1CQUFBQTs7WUFFSjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNYLElBQUk7WUFDWDs7O1dBcEZJaEI7cUJBQWdCNEIsZ0JBQU87QUFzRjNCLGlCQXRGSTVCLFNBc0ZHNkIsV0FBVTtBQUVqQixpQkF4Rkk3QixTQXdGRzhCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2hDLDRCQUtaaUMsc0JBQWMsRUFFREMsb0JBQVksRUFDaEJDLHdCQUFnQiJ9