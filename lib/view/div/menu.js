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
            key: "isDragging",
            value: function isDragging() {
                var startHeight = this.getStartHeight(), dragging = startHeight !== null;
                return dragging;
            }
        },
        {
            key: "drag",
            value: function drag(top) {
                var startHeight = this.getStartHeight(), height = startHeight - top;
                this.setHeight(height);
            }
        },
        {
            key: "dragEnd",
            value: function dragEnd() {
                var startHeight = null;
                this.setStartHeight(startHeight);
            }
        },
        {
            key: "dragStart",
            value: function dragStart() {
                var height = this.getHeight(), startHeight = height; ///
                this.setStartHeight(startHeight);
            }
        },
        {
            key: "getStartHeight",
            value: function getStartHeight() {
                var startHeight = this.getState().startHeight;
                return startHeight;
            }
        },
        {
            key: "setStartHeight",
            value: function setStartHeight(startHeight) {
                this.updateState({
                    startHeight: startHeight
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var startHeight = null;
                this.setState({
                    startHeight: startHeight
                });
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
                var showMenuDiv = this.show.bind(this), hideMenuDiv = this.hide.bind(this), menuDivDrag = this.drag.bind(this), menuDivDragEnd = this.dragEnd.bind(this), menuDivDragStart = this.dragStart.bind(this), getMenuDivHeight = this.getHeight.bind(this), isMenuDivDragging = this.isDragging.bind(this), isMenuDivDisplayed = this.isDisplayed.bind(this); ///
                return {
                    showMenuDiv: showMenuDiv,
                    hideMenuDiv: hideMenuDiv,
                    menuDivDrag: menuDivDrag,
                    menuDivDragEnd: menuDivDragEnd,
                    menuDivDragStart: menuDivDragStart,
                    getMenuDivHeight: getMenuDivHeight,
                    isMenuDivDragging: isMenuDivDragging,
                    isMenuDivDisplayed: isMenuDivDisplayed
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            // this.hide();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgbWVudURpdlBhZGRpbmcsIGJ1dHRvbnNEaXZXaWR0aCwgbWVudURpdkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBzdGFydEhlaWdodCA9IHRoaXMuZ2V0U3RhcnRIZWlnaHQoKSxcbiAgICAgICAgICBkcmFnZ2luZyA9IChzdGFydEhlaWdodCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBkcmFnKHRvcCkge1xuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gdGhpcy5nZXRTdGFydEhlaWdodCgpLFxuICAgICAgICAgIGhlaWdodCA9IHN0YXJ0SGVpZ2h0IC0gdG9wO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGRyYWdFbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydEhlaWdodChzdGFydEhlaWdodCk7XG4gIH1cblxuICBkcmFnU3RhcnQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBzdGFydEhlaWdodCA9IGhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0SGVpZ2h0KHN0YXJ0SGVpZ2h0KTtcbiAgfVxuXG4gIGdldFN0YXJ0SGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgc3RhcnRIZWlnaHQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydEhlaWdodDtcbiAgfVxuXG4gIHNldFN0YXJ0SGVpZ2h0KHN0YXJ0SGVpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDaGVja2JveGVzRGl2Lz4sXG4gICAgICA8QnV0dG9uc0Rpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd01lbnVEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVNZW51RGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBtZW51RGl2RHJhZyA9IHRoaXMuZHJhZy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBtZW51RGl2RHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBtZW51RGl2RHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0TWVudURpdkhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzTWVudURpdkRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzTWVudURpdkRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TWVudURpdixcbiAgICAgIGhpZGVNZW51RGl2LFxuICAgICAgbWVudURpdkRyYWcsXG4gICAgICBtZW51RGl2RHJhZ0VuZCxcbiAgICAgIG1lbnVEaXZEcmFnU3RhcnQsXG4gICAgICBnZXRNZW51RGl2SGVpZ2h0LFxuICAgICAgaXNNZW51RGl2RHJhZ2dpbmcsXG4gICAgICBpc01lbnVEaXZEaXNwbGF5ZWRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIC8vIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVudVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNZW51RGl2KWBcblxuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHttZW51RGl2QmFja2dyb3VuZENvbG91cn07XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvICR7YnV0dG9uc0RpdldpZHRofTtcblxuYDtcbiJdLCJuYW1lcyI6WyJNZW51RGl2IiwiaXNEcmFnZ2luZyIsInN0YXJ0SGVpZ2h0IiwiZ2V0U3RhcnRIZWlnaHQiLCJkcmFnZ2luZyIsImRyYWciLCJ0b3AiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJkcmFnRW5kIiwic2V0U3RhcnRIZWlnaHQiLCJkcmFnU3RhcnQiLCJnZXRIZWlnaHQiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiQ2hlY2tib3hlc0RpdiIsIkJ1dHRvbnNEaXYiLCJwYXJlbnRDb250ZXh0Iiwic2hvd01lbnVEaXYiLCJzaG93IiwiYmluZCIsImhpZGVNZW51RGl2IiwiaGlkZSIsIm1lbnVEaXZEcmFnIiwibWVudURpdkRyYWdFbmQiLCJtZW51RGl2RHJhZ1N0YXJ0IiwiZ2V0TWVudURpdkhlaWdodCIsImlzTWVudURpdkRyYWdnaW5nIiwiaXNNZW51RGl2RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1lbnVEaXZQYWRkaW5nIiwibWVudURpdkJhY2tncm91bmRDb2xvdXIiLCJidXR0b25zRGl2V2lkdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzR0E7OztlQUFBOzs7b0VBcEdzQjs4REFFRjs4REFDRztpRUFDRztzQkFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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