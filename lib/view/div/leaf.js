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
var _easy = require("easy");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
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
        "\n\n  width: 100%;\n  min-height: 100%;\n  transform-origin: top left;\n  \n  @keyframes wiggle {\n    0% { transform: translateX(0); }\n    25% { transform: translateX(+3px); }\n    75% { transform: translateX(-3px); }\n    100% { transform: translateX(0); }\n  }\n  \n  .wiggle {\n    animation: wiggle ",
        " ease-in-out ",
        ";\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LeafDiv = /*#__PURE__*/ function(Element) {
    _inherits(LeafDiv, Element);
    var _super = _create_super(LeafDiv);
    function LeafDiv() {
        _class_call_check(this, LeafDiv);
        return _super.apply(this, arguments);
    }
    _create_class(LeafDiv, [
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
            key: "wiggle",
            value: function wiggle() {
                var _this = this;
                this.addClass("wiggle");
                setTimeout(function() {
                    _this.removeClass("wiggle");
                }, _constants.WIGGLE_DELAY);
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var zoom = 1;
                this.setState({
                    zoom: zoom
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return LeafDiv;
}(_wrap_native_super(_easy.Element));
_define_property(LeafDiv, "tagName", "div");
_define_property(LeafDiv, "defaultProperties", {
    className: "leaf"
});
var _default = (0, _easywithstyle.default)(LeafDiv)(_templateObject(), _styles.wiggleDuration, _styles.wiggleCount);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sZWFmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgV0lHR0xFX0RFTEFZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgd2lnZ2xlQ291bnQsIHdpZ2dsZUR1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBMZWFmRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHpvb20oem9vbSkge1xuICAgIGNvbnN0IHdpZHRoID0gYCR7MTAwL3pvb219JWAsXG4gICAgICAgICAgdHJhbnNmb3JtID0gYHNjYWxlKCR7em9vbX0pYDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgdHJhbnNmb3JtXG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICB3aWdnbGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcIndpZ2dsZVwiKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcIndpZ2dsZVwiKTtcbiAgICB9LCBXSUdHTEVfREVMQVkpO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHpvb20gPSAxO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB6b29tXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWFmXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExlYWZEaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrM3B4KTsgfVxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgfVxuICBcbiAgLndpZ2dsZSB7XG4gICAgYW5pbWF0aW9uOiB3aWdnbGUgJHt3aWdnbGVEdXJhdGlvbn0gZWFzZS1pbi1vdXQgJHt3aWdnbGVDb3VudH07XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJMZWFmRGl2Iiwiem9vbSIsIndpZHRoIiwidHJhbnNmb3JtIiwiY3NzIiwid2lnZ2xlIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJXSUdHTEVfREVMQVkiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwid2lnZ2xlRHVyYXRpb24iLCJ3aWdnbGVDb3VudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpREE7OztlQUFBOzs7b0JBL0N3QjtvRUFFRjt5QkFFTztzQkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQUEsQUFBTUEsd0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0EsSUFBSTtnQkFDUCxJQUFNQyxRQUFRLEFBQUMsR0FBVyxPQUFULE1BQUlELE1BQUssTUFDcEJFLFlBQVksQUFBQyxTQUFhLE9BQUxGLE1BQUs7Z0JBRWhDLElBQU1HLE1BQU07b0JBQ1ZGLE9BQUFBO29CQUNBQyxXQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0E7WUFDWDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBRWRDLFdBQVc7b0JBQ1QsTUFBS0MsV0FBVyxDQUFDO2dCQUNuQixHQUFHQyx1QkFBWTtZQUNqQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxPQUFPO2dCQUViLElBQUksQ0FBQ1UsUUFBUSxDQUFDO29CQUNaVixNQUFBQTtnQkFDRjtZQUNGOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0YsZUFBZTtZQUN0Qjs7O1dBL0JJVjtxQkFBZ0JhLGFBQU87QUFpQzNCLGlCQWpDSWIsU0FpQ0djLFdBQVU7QUFFakIsaUJBbkNJZCxTQW1DR2UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDakIsNEJBY0RrQixzQkFBYyxFQUFnQkMsbUJBQVcifQ==