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
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../checkbox"));
var _style = require("../../style");
var _colours = require("../../colours");
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
        "\n\n  left: 0;\n  color: white;\n  width: 100%;\n  height: ",
        ";\n  bottom: 0;\n  display: flex;\n  position: fixed;\n  font-size: 60px;\n  align-items: center; \n  flex-direction: row;\n  justify-content: center;\n  background-color: ",
        ";\n  \n"
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
                return /*#__PURE__*/ React.createElement(_checkbox.default, null);
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
                this.hide();
            }
        }
    ]);
    return MenuDiv;
}(_wrap_native_super(_easy.Element));
_define_property(MenuDiv, "tagName", "div");
_define_property(MenuDiv, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _style.menuDivHeight, _colours.menuDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIjtcblxuaW1wb3J0IHsgbWVudURpdkhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZVwiO1xuaW1wb3J0IHsgbWVudURpdkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSB0aGlzLmdldFN0YXJ0SGVpZ2h0KCksXG4gICAgICAgICAgZHJhZ2dpbmcgPSAoc3RhcnRIZWlnaHQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZHJhZyh0b3ApIHtcbiAgICBjb25zdCBzdGFydEhlaWdodCA9IHRoaXMuZ2V0U3RhcnRIZWlnaHQoKSxcbiAgICAgICAgICBoZWlnaHQgPSBzdGFydEhlaWdodCAtIHRvcDtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBkcmFnRW5kKCkge1xuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRIZWlnaHQoc3RhcnRIZWlnaHQpO1xuICB9XG5cbiAgZHJhZ1N0YXJ0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgc3RhcnRIZWlnaHQgPSBoZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydEhlaWdodChzdGFydEhlaWdodCk7XG4gIH1cblxuICBnZXRTdGFydEhlaWdodCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0SGVpZ2h0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRIZWlnaHQ7XG4gIH1cblxuICBzZXRTdGFydEhlaWdodChzdGFydEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBzdGFydEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDaGVja2JveC8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93TWVudURpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZU1lbnVEaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIG1lbnVEaXZEcmFnID0gdGhpcy5kcmFnLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG1lbnVEaXZEcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG1lbnVEaXZEcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRNZW51RGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNNZW51RGl2RHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNNZW51RGl2RGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dNZW51RGl2LFxuICAgICAgaGlkZU1lbnVEaXYsXG4gICAgICBtZW51RGl2RHJhZyxcbiAgICAgIG1lbnVEaXZEcmFnRW5kLFxuICAgICAgbWVudURpdkRyYWdTdGFydCxcbiAgICAgIGdldE1lbnVEaXZIZWlnaHQsXG4gICAgICBpc01lbnVEaXZEcmFnZ2luZyxcbiAgICAgIGlzTWVudURpdkRpc3BsYXllZFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZW51XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1lbnVEaXYpYFxuXG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHttZW51RGl2SGVpZ2h0fTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke21lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1lbnVEaXYiLCJpc0RyYWdnaW5nIiwic3RhcnRIZWlnaHQiLCJnZXRTdGFydEhlaWdodCIsImRyYWdnaW5nIiwiZHJhZyIsInRvcCIsImhlaWdodCIsInNldEhlaWdodCIsImRyYWdFbmQiLCJzZXRTdGFydEhlaWdodCIsImRyYWdTdGFydCIsImdldEhlaWdodCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDaGVja2JveCIsInBhcmVudENvbnRleHQiLCJzaG93TWVudURpdiIsInNob3ciLCJiaW5kIiwiaGlkZU1lbnVEaXYiLCJoaWRlIiwibWVudURpdkRyYWciLCJtZW51RGl2RHJhZ0VuZCIsIm1lbnVEaXZEcmFnU3RhcnQiLCJnZXRNZW51RGl2SGVpZ2h0IiwiaXNNZW51RGl2RHJhZ2dpbmciLCJpc01lbnVEaXZEaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibWVudURpdkhlaWdodCIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzR0E7OztlQUFBOzs7b0VBcEdzQjtvQkFFRTsrREFFSDtxQkFFUzt1QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsd0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JB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