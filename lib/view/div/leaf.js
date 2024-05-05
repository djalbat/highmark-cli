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
        "\n\n  width: 100%;\n  touch-action: none;\n  pointer-events: none;\n  transform-origin: top left;\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
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
            key: "updateColours",
            value: function updateColours() {
                var coloursInverted = (0, _state.areColoursInverted)();
                coloursInverted ? this.invertColours() : this.revertColours();
            }
        },
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
            key: "zoom",
            value: function zoom(zoom) {
                var width = "".concat(100 / zoom, "%"), minHeight = "".concat(100 / zoom, "vh"), transform = "scale(".concat(zoom, ")");
                var css = {
                    width: width,
                    minHeight: minHeight,
                    transform: transform
                };
                this.css(css);
            }
        }
    ]);
    return LeafDiv;
}(_wrap_native_super(_easy.Element));
_define_property(LeafDiv, "tagName", "div");
_define_property(LeafDiv, "defaultProperties", {
    className: "leaf"
});
var _default = (0, _easywithstyle.default)(LeafDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sZWFmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgYXJlQ29sb3Vyc0ludmVydGVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNsYXNzIExlYWZEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmludmVydENvbG91cnMoKSA6XG4gICAgICAgIHRoaXMucmV2ZXJ0Q29sb3VycygpO1xuICB9XG5cbiAgaW52ZXJ0Q29sb3VycygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKTtcbiAgfVxuXG4gIHJldmVydENvbG91cnMoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImludmVydGVkLWNvbG91cnNcIik7XG4gIH1cblxuICB6b29tKHpvb20pIHtcbiAgICBjb25zdCB3aWR0aCA9IGAkezEwMC96b29tfSVgLFxuICAgICAgICAgIG1pbkhlaWdodCA9IGAkezEwMC96b29tfXZoYCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgc2NhbGUoJHt6b29tfSlgO1xuXG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgd2lkdGgsXG4gICAgICBtaW5IZWlnaHQsXG4gICAgICB0cmFuc2Zvcm1cbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxlYWZcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVhZkRpdilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkxlYWZEaXYiLCJ1cGRhdGVDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiaW52ZXJ0Q29sb3VycyIsInJldmVydENvbG91cnMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiem9vbSIsIndpZHRoIiwibWluSGVpZ2h0IiwidHJhbnNmb3JtIiwiY3NzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7O29FQTVDc0I7b0JBRUU7cUJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0JDLElBQUFBLHlCQUFrQjtnQkFFMUNELGtCQUNFLElBQUksQ0FBQ0UsYUFBYSxLQUNoQixJQUFJLENBQUNDLGFBQWE7WUFDeEI7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDRSxRQUFRLENBQUM7WUFDaEI7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDRSxXQUFXLENBQUM7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0EsSUFBSTtnQkFDUCxJQUFNQyxRQUFRLEFBQUMsR0FBVyxPQUFULE1BQUlELE1BQUssTUFDcEJFLFlBQVksQUFBQyxHQUFXLE9BQVQsTUFBSUYsTUFBSyxPQUN4QkcsWUFBWSxBQUFDLFNBQWEsT0FBTEgsTUFBSztnQkFFaEMsSUFBTUksTUFBTTtvQkFDVkgsT0FBQUE7b0JBQ0FDLFdBQUFBO29CQUNBQyxXQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0E7WUFDWDs7O1dBN0JJWjtxQkFBZ0JhLGFBQU87QUErQjNCLGlCQS9CSWIsU0ErQkdjLFdBQVU7QUFFakIsaUJBakNJZCxTQWlDR2UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDakIifQ==