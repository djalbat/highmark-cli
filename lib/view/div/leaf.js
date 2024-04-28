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
var _event = /*#__PURE__*/ _interop_require_default(require("../../mixins/event"));
var _touch = /*#__PURE__*/ _interop_require_default(require("../../mixins/touch"));
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
            key: "didMount",
            value: function didMount() {
                this.enableTouch();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
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
Object.assign(LeafDiv.prototype, _event.default);
Object.assign(LeafDiv.prototype, _touch.default);
var _default = (0, _easywithstyle.default)(LeafDiv)(_templateObject(), _styles.wiggleDuration, _styles.wiggleCount);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sZWFmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5cbmltcG9ydCB7IFpPT01fUkFUSU8sICBXSUdHTEVfREVMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB3aWdnbGVDb3VudCwgd2lnZ2xlRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIExlYWZEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgd2lnZ2xlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJ3aWdnbGVcIik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJ3aWdnbGVcIik7XG4gICAgfSwgV0lHR0xFX0RFTEFZKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBjb25zdCB6b29tX3JhdGlvID0gMSAqIFpPT01fUkFUSU87XG5cbiAgICB0aGlzLnpvb20oem9vbV9yYXRpbyk7XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHpvb21fcmF0aW8gPSAxIC8gWk9PTV9SQVRJTztcblxuICAgIHRoaXMuem9vbSh6b29tX3JhdGlvKTtcbiAgfVxuXG4gIHpvb20oem9vbV9yYXRpbykge1xuICAgIGxldCB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICB6b29tICo9IHpvb21fcmF0aW87XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cblxuICAgIGNvbnN0IHdpZHRoID0gYCR7MTAwL3pvb219JWAsXG4gICAgICAgICAgdHJhbnNmb3JtID0gYHNjYWxlKCR7em9vbX0pYDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgdHJhbnNmb3JtXG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIGNvbnN0IHsgem9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH1cblxuICBzZXRab29tKHpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHpvb21cbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB6b29tID0gMTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgem9vbVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxlYWZcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKExlYWZEaXYucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKExlYWZEaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMZWFmRGl2KWBcblxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIFxuICBAa2V5ZnJhbWVzIHdpZ2dsZSB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzNweCk7IH1cbiAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIH1cbiAgXG4gIC53aWdnbGUge1xuICAgIGFuaW1hdGlvbjogd2lnZ2xlICR7d2lnZ2xlRHVyYXRpb259IGVhc2UtaW4tb3V0ICR7d2lnZ2xlQ291bnR9O1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiTGVhZkRpdiIsIndpZ2dsZSIsImFkZENsYXNzIiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwiV0lHR0xFX0RFTEFZIiwiem9vbUluIiwiem9vbV9yYXRpbyIsIlpPT01fUkFUSU8iLCJ6b29tIiwiem9vbU91dCIsImdldFpvb20iLCJzZXRab29tIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJjc3MiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImV2ZW50TWl4aW5zIiwidG91Y2hNaXhpbnMiLCJ3aXRoU3R5bGUiLCJ3aWdnbGVEdXJhdGlvbiIsIndpZ2dsZUNvdW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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