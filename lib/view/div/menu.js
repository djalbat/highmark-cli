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
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "closeButtonClickHandler", function(event, element) {
            _this.hide();
        });
        return _this;
    }
    _create_class(MenuDiv, [
        {
            key: "show",
            value: function show() {
                var display = _constants.GRID;
                this.display(display);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onCloseButtonClick(this.closeButtonClickHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCloseButtonClick(this.closeButtonClickHandler);
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
                var context = this.getContext(), showMenuDiv = this.show.bind(this), hideMenuDiv = this.hide.bind(this), getMenuDivHeight = this.getHeight.bind(this), isMenuDivDisplayed = this.isDisplayed.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    showMenuDiv: showMenuDiv,
                    hideMenuDiv: hideMenuDiv,
                    getMenuDivHeight: getMenuDivHeight,
                    isMenuDivDisplayed: isMenuDivDisplayed
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "onCloseButtonClick",
                    "offCloseButtonClick"
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
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _styles.menuDivPadding, _styles.menuDivBackgroundColour, _styles.buttonsDivWidth);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgR1JJRCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1lbnVEaXZQYWRkaW5nLCBidXR0b25zRGl2V2lkdGgsIG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBHUklEO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsb3NlQnV0dG9uQ2xpY2sodGhpcy5jbG9zZUJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsb3NlQnV0dG9uQ2xpY2sodGhpcy5jbG9zZUJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3hlc0Rpdi8+LFxuICAgICAgPEJ1dHRvbnNEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaG93TWVudURpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZU1lbnVEaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldE1lbnVEaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc01lbnVEaXZEaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dNZW51RGl2LFxuICAgICAgaGlkZU1lbnVEaXYsXG4gICAgICBnZXRNZW51RGl2SGVpZ2h0LFxuICAgICAgaXNNZW51RGl2RGlzcGxheWVkXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcIm9uQ2xvc2VCdXR0b25DbGlja1wiLFxuICAgICAgXCJvZmZDbG9zZUJ1dHRvbkNsaWNrXCJcbiAgICBdKTtcblxuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVudVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNZW51RGl2KWBcblxuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHttZW51RGl2QmFja2dyb3VuZENvbG91cn07XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvICR7YnV0dG9uc0RpdldpZHRofTtcblxuYDtcbiJdLCJuYW1lcyI6WyJNZW51RGl2IiwiY2xvc2VCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJoaWRlIiwic2hvdyIsImRpc3BsYXkiLCJHUklEIiwiZGlkTW91bnQiLCJvbkNsb3NlQnV0dG9uQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkNsb3NlQnV0dG9uQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwiQ2hlY2tib3hlc0RpdiIsIkJ1dHRvbnNEaXYiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJzaG93TWVudURpdiIsImJpbmQiLCJoaWRlTWVudURpdiIsImdldE1lbnVEaXZIZWlnaHQiLCJnZXRIZWlnaHQiLCJpc01lbnVEaXZEaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1lbnVEaXZQYWRkaW5nIiwibWVudURpdkJhY2tncm91bmRDb2xvdXIiLCJidXR0b25zRGl2V2lkdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVFQTs7O2VBQUE7OztvRUFyRXNCOzhEQUVGOzhEQUNHO2lFQUNHO3lCQUVMO3NCQUNvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxJQUFBLEFBQU1BLHdCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSwyQkFBMEIsU0FBQ0MsT0FBT0M7WUFDaEMsTUFBS0MsSUFBSTtRQUNYOzs7a0JBSElKOztZQUtKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsZUFBSTtnQkFFcEIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNSLHVCQUF1QjtZQUN0RDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLG1CQUFtQixDQUFDLElBQUksQ0FBQ1YsdUJBQXVCO1lBQ3ZEOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLG1CQUFhO2tDQUNkLG9CQUFDQyxnQkFBVTtpQkFFWjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxjQUFjLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUNqQ0MsY0FBYyxJQUFJLENBQUNoQixJQUFJLENBQUNlLElBQUksQ0FBQyxJQUFJLEdBQ2pDRSxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLENBQUNILElBQUksQ0FBQyxJQUFJLEdBQzNDSSxxQkFBcUIsSUFBSSxDQUFDQyxXQUFXLENBQUNMLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFNUQsT0FBUSx3Q0FDSEg7b0JBQ0hFLGFBQUFBO29CQUNBRSxhQUFBQTtvQkFDQUMsa0JBQUFBO29CQUNBRSxvQkFBQUE7O1lBRUo7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhLENBQUM7b0JBQ2pCO29CQUNBO2lCQUNEO2dCQUVELElBQUksQ0FBQ3RCLElBQUk7WUFDWDs7O1dBbkRJSjtxQkFBZ0IyQixnQkFBTztBQXFEM0IsaUJBckRJM0IsU0FxREc0QixXQUFVO0FBRWpCLGlCQXZESTVCLFNBdURHNkIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDL0IsNEJBUVpnQyxzQkFBYyxFQUVMQywrQkFBdUIsRUFFYkMsdUJBQWUifQ==