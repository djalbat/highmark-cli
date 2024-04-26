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
        "\n\n  width: 100vw;\n  min-height: 100vh;\n\n"
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
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "customSwipeHandler", function(event, element, swipeDirection) {
            alert(swipeDirection);
        });
        _define_property(_assert_this_initialized(_this), "customTapHandler", function(event, element) {
            alert("tap");
        });
        return _this;
    }
    _create_class(LeafDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.enableTouch();
                this.onCustomTap(this.customTapHandler);
                this.onCustomSwipe(this.customSwipeHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomSwipe(this.customSwipeHandler);
                this.offCustomTap(this.customTapHandler);
                this.offCustomSwipe(this.customSwipeHandler);
            }
        },
        {
            key: "getStartPosition",
            value: function getStartPosition() {
                var startPosition = this.getState().startPosition;
                return startPosition;
            }
        },
        {
            key: "setStartPosition",
            value: function setStartPosition(startPosition) {
                this.updateState({
                    startPosition: startPosition
                });
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
var _default = (0, _easywithstyle.default)(LeafDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sZWFmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ldmVudFwiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvdG91Y2hcIjtcblxuY2xhc3MgTGVhZkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjdXN0b21Td2lwZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHN3aXBlRGlyZWN0aW9uKSA9PiB7XG4gICAgYWxlcnQoc3dpcGVEaXJlY3Rpb24pXG4gIH1cblxuICBjdXN0b21UYXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgYWxlcnQoXCJ0YXBcIilcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy5jdXN0b21UYXBIYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGUodGhpcy5jdXN0b21Td2lwZUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZSh0aGlzLmN1c3RvbVN3aXBlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLmN1c3RvbVRhcEhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGUodGhpcy5jdXN0b21Td2lwZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBjb25zdCB7IHN0YXJ0UG9zaXRpb24gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFBvc2l0aW9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWFmXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihMZWFmRGl2LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihMZWFmRGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVhZkRpdilgXG5cbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuYDtcbiJdLCJuYW1lcyI6WyJMZWFmRGl2IiwiY3VzdG9tU3dpcGVIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwic3dpcGVEaXJlY3Rpb24iLCJhbGVydCIsImN1c3RvbVRhcEhhbmRsZXIiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25DdXN0b21UYXAiLCJvbkN1c3RvbVN3aXBlIiwid2lsbFVubW91bnQiLCJvZmZDdXN0b21Td2lwZSIsIm9mZkN1c3RvbVRhcCIsImdldFN0YXJ0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwiZ2V0U3RhdGUiLCJzZXRTdGFydFBvc2l0aW9uIiwidXBkYXRlU3RhdGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZXZlbnRNaXhpbnMiLCJ0b3VjaE1peGlucyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzREE7OztlQUFBOzs7b0JBcERnQztvRUFFVjs0REFFRTs0REFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLHdCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxzQkFBcUIsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDcENDLE1BQU1EO1FBQ1I7UUFFQUUsa0RBQUFBLG9CQUFtQixTQUFDSixPQUFPQztZQUN6QkUsTUFBTTtRQUNSOzs7a0JBUElMOztZQVNKTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxXQUFXO2dCQUVoQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNILGdCQUFnQjtnQkFDdEMsSUFBSSxDQUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDVCxrQkFBa0I7WUFDNUM7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDWCxrQkFBa0I7Z0JBRTNDLElBQUksQ0FBQ1ksWUFBWSxDQUFDLElBQUksQ0FBQ1AsZ0JBQWdCO2dCQUN2QyxJQUFJLENBQUNNLGNBQWMsQ0FBQyxJQUFJLENBQUNYLGtCQUFrQjtZQUM3Qzs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLGdCQUFrQixJQUFJLENBQUNDLFFBQVEsR0FBL0JEO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRixhQUFhO2dCQUM1QixJQUFJLENBQUNHLFdBQVcsQ0FBQztvQkFDZkgsZUFBQUE7Z0JBQ0Y7WUFDRjs7O1dBakNJZjtxQkFBZ0JtQixhQUFPO0FBbUMzQixpQkFuQ0luQixTQW1DR29CLFdBQVU7QUFFakIsaUJBckNJcEIsU0FxQ0dxQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGQyxPQUFPQyxNQUFNLENBQUN4QixRQUFReUIsU0FBUyxFQUFFQyxjQUFXO0FBQzVDSCxPQUFPQyxNQUFNLENBQUN4QixRQUFReUIsU0FBUyxFQUFFRSxjQUFXO0lBRTVDLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM1QiJ9