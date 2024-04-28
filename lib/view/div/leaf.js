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
            key: "zoomIn",
            value: function zoomIn() {
                var zoom_ratio = 1 * _constants.ZOOM_RATIO;
                this.zoom(zoom_ratio);
            }
        },
        {
            key: "zoomOut",
            value: function zoomOut() {
                var zoom_ratio = 1 / _constants.ZOOM_RATIO;
                this.zoom(zoom_ratio);
            }
        },
        {
            key: "zoom",
            value: function zoom(zoom_ratio) {
                var zoom = this.getZoom();
                zoom *= zoom_ratio;
                this.setZoom(zoom);
                var width = "".concat(100 / zoom, "%"), transform = "scale(".concat(zoom, ")");
                var css = {
                    width: width,
                    transform: transform
                };
                this.css(css);
            }
        },
        {
            key: "getZoom",
            value: function getZoom() {
                var zoom = this.getState().zoom;
                return zoom;
            }
        },
        {
            key: "setZoom",
            value: function setZoom(zoom) {
                this.updateState({
                    zoom: zoom
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sZWFmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgWk9PTV9SQVRJTywgIFdJR0dMRV9ERUxBWSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHdpZ2dsZUNvdW50LCB3aWdnbGVEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgTGVhZkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICB3aWdnbGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcIndpZ2dsZVwiKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcIndpZ2dsZVwiKTtcbiAgICB9LCBXSUdHTEVfREVMQVkpO1xuICB9XG5cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHpvb21fcmF0aW8gPSAxICogWk9PTV9SQVRJTztcblxuICAgIHRoaXMuem9vbSh6b29tX3JhdGlvKTtcbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgem9vbV9yYXRpbyA9IDEgLyBaT09NX1JBVElPO1xuXG4gICAgdGhpcy56b29tKHpvb21fcmF0aW8pO1xuICB9XG5cbiAgem9vbSh6b29tX3JhdGlvKSB7XG4gICAgbGV0IHpvb20gPSB0aGlzLmdldFpvb20oKTtcblxuICAgIHpvb20gKj0gem9vbV9yYXRpbztcblxuICAgIHRoaXMuc2V0Wm9vbSh6b29tKTtcblxuXG4gICAgY29uc3Qgd2lkdGggPSBgJHsxMDAvem9vbX0lYCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgc2NhbGUoJHt6b29tfSlgO1xuXG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgd2lkdGgsXG4gICAgICB0cmFuc2Zvcm1cbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgY29uc3QgeyB6b29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfVxuXG4gIHNldFpvb20oem9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgem9vbVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHpvb20gPSAxO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB6b29tXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWFmXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExlYWZEaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgXG4gIEBrZXlmcmFtZXMgd2lnZ2xlIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrM3B4KTsgfVxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgfVxuICBcbiAgLndpZ2dsZSB7XG4gICAgYW5pbWF0aW9uOiB3aWdnbGUgJHt3aWdnbGVEdXJhdGlvbn0gZWFzZS1pbi1vdXQgJHt3aWdnbGVDb3VudH07XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJMZWFmRGl2Iiwid2lnZ2xlIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJXSUdHTEVfREVMQVkiLCJ6b29tSW4iLCJ6b29tX3JhdGlvIiwiWk9PTV9SQVRJTyIsInpvb20iLCJ6b29tT3V0IiwiZ2V0Wm9vbSIsInNldFpvb20iLCJ3aWR0aCIsInRyYW5zZm9ybSIsImNzcyIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwid2lnZ2xlRHVyYXRpb24iLCJ3aWdnbGVDb3VudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdGQTs7O2VBQUE7OztvQkE5RXdCO29FQUVGO3lCQUVvQjtzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQUEsQUFBTUEsd0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUVkQyxXQUFXO29CQUNULE1BQUtDLFdBQVcsQ0FBQztnQkFDbkIsR0FBR0MsdUJBQVk7WUFDakI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJQyxxQkFBVTtnQkFFakMsSUFBSSxDQUFDQyxJQUFJLENBQUNGO1lBQ1o7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsYUFBYSxJQUFJQyxxQkFBVTtnQkFFakMsSUFBSSxDQUFDQyxJQUFJLENBQUNGO1lBQ1o7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0YsVUFBVTtnQkFDYixJQUFJRSxPQUFPLElBQUksQ0FBQ0UsT0FBTztnQkFFdkJGLFFBQVFGO2dCQUVSLElBQUksQ0FBQ0ssT0FBTyxDQUFDSDtnQkFHYixJQUFNSSxRQUFRLEFBQUMsR0FBVyxPQUFULE1BQUlKLE1BQUssTUFDcEJLLFlBQVksQUFBQyxTQUFhLE9BQUxMLE1BQUs7Z0JBRWhDLElBQU1NLE1BQU07b0JBQ1ZGLE9BQUFBO29CQUNBQyxXQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0E7WUFDWDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVGLE9BQVMsSUFBSSxDQUFDTyxRQUFRLEdBQXRCUDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFILElBQUk7Z0JBQ1YsSUFBSSxDQUFDUSxXQUFXLENBQUM7b0JBQ2ZSLE1BQUFBO2dCQUNGO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTztnQkFFYixJQUFJLENBQUNVLFFBQVEsQ0FBQztvQkFDWlYsTUFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNGLGVBQWU7WUFDdEI7OztXQTlESWxCO3FCQUFnQnFCLGFBQU87QUFnRTNCLGlCQWhFSXJCLFNBZ0VHc0IsV0FBVTtBQUVqQixpQkFsRUl0QixTQWtFR3VCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3pCLDRCQWNEMEIsc0JBQWMsRUFBZ0JDLG1CQUFXIn0=