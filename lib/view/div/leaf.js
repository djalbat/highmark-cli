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
var _position = /*#__PURE__*/ _interop_require_default(require("../../position"));
var _velocity = /*#__PURE__*/ _interop_require_default(require("../../velocity"));
var _event = /*#__PURE__*/ _interop_require_default(require("../../mixins/event"));
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
        _define_property(_assert_this_initialized(_this), "touchStartHandler", function(event, element) {
            var touchEvent = event, position = _position.default.fromTouchEvent(touchEvent), startPosition = position; ///
            _this.setStartPosition(startPosition);
        });
        _define_property(_assert_this_initialized(_this), "mouseDownHandler", function(event, element) {
            var mouseEvent = event, position = _position.default.fromMouseEvent(mouseEvent), startPosition = position; ///
            _this.setStartPosition(startPosition);
        });
        _define_property(_assert_this_initialized(_this), "touchMoveHandler", function(event, element) {
            var startPosition = _this.getStartPosition();
            if (startPosition !== null) {
                var touchEvent = event, position = _position.default.fromTouchEvent(touchEvent);
                if (position !== null) {
                    var positionMatchesStartPosition = position.match(startPosition);
                    if (positionMatchesStartPosition) {
                        var velocity = _velocity.default.fromPositionAndStartPosition(position, startPosition), swipeDirection = velocity.getSwipeDirection();
                        if (swipeDirection !== 0) {
                            alert(swipeDirection);
                        }
                    }
                }
            }
        });
        _define_property(_assert_this_initialized(_this), "mouseMoveHandler", function(event, element) {
            var startPosition = _this.getStartPosition();
            if (startPosition !== null) {
                var mouseEvent = event, position = _position.default.fromMouseEvent(mouseEvent), velocity = _velocity.default.fromPositionAndStartPosition(position, startPosition), swipeDirection = velocity.getSwipeDirection();
                if (swipeDirection !== 0) {
                    alert(swipeDirection);
                }
            }
        });
        _define_property(_assert_this_initialized(_this), "touchEndHandler", function(event, element) {
            var startPosition = null;
            _this.setStartPosition(startPosition);
        });
        _define_property(_assert_this_initialized(_this), "mouseUpHandler", function(event, element) {
            var startPosition = null;
            _this.setStartPosition(startPosition);
        });
        return _this;
    }
    _create_class(LeafDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.onMouseDown(this.mouseDownHandler);
                this.onMouseMove(this.mouseMoveHandler);
                _easy.window.onMouseUp(this.mouseUpHandler, this);
                this.onTouchStart(this.touchStartHandler);
                this.onTouchMove(this.touchMoveHandler);
                this.onTouchEnd(this.touchEndHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offMouseDown(this.mouseDownHandler);
                this.offMouseMove(this.mouseMoveHandler);
                _easy.window.offMouseUp(this.mouseUpHandler, this);
                this.offTouchStart(this.touchStartHandler);
                this.offTouchMove(this.touchMoveHandler);
                this.offTouchEnd(this.touchEndHandler);
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
        },
        {
            key: "initialise",
            value: function initialise() {
                var startPosition = null;
                this.setState({
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
var _default = (0, _easywithstyle.default)(LeafDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9sZWFmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4uLy4uL3Bvc2l0aW9uXCI7XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSBcIi4uLy4uL3ZlbG9jaXR5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ldmVudFwiO1xuXG5jbGFzcyBMZWFmRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHRvdWNoU3RhcnRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbjsgIC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gcG9zaXRpb247ICAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcbiAgfVxuXG4gIHRvdWNoTW92ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbigpO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQpO1xuXG4gICAgICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25NYXRjaGVzU3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uLm1hdGNoKHN0YXJ0UG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbk1hdGNoZXNTdGFydFBvc2l0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBWZWxvY2l0eS5mcm9tUG9zaXRpb25BbmRTdGFydFBvc2l0aW9uKHBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICBzd2lwZURpcmVjdGlvbiA9IHZlbG9jaXR5LmdldFN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICBpZiAoc3dpcGVEaXJlY3Rpb24gIT09IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KHN3aXBlRGlyZWN0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbigpO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpLFxuICAgICAgICAgICAgdmVsb2NpdHkgPSBWZWxvY2l0eS5mcm9tUG9zaXRpb25BbmRTdGFydFBvc2l0aW9uKHBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICAgIHN3aXBlRGlyZWN0aW9uID0gdmVsb2NpdHkuZ2V0U3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgaWYgKHN3aXBlRGlyZWN0aW9uICE9PSAwKSB7XG4gICAgICAgIGFsZXJ0KHN3aXBlRGlyZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvdWNoRW5kSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gICAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICAgIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICAgIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBjb25zdCB7IHN0YXJ0UG9zaXRpb24gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFBvc2l0aW9uXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydFBvc2l0aW9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWFmXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihMZWFmRGl2LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVhZkRpdilgXG5cbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuYDtcbiJdLCJuYW1lcyI6WyJMZWFmRGl2IiwidG91Y2hTdGFydEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3VjaEV2ZW50IiwicG9zaXRpb24iLCJQb3NpdGlvbiIsImZyb21Ub3VjaEV2ZW50Iiwic3RhcnRQb3NpdGlvbiIsInNldFN0YXJ0UG9zaXRpb24iLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VFdmVudCIsImZyb21Nb3VzZUV2ZW50IiwidG91Y2hNb3ZlSGFuZGxlciIsImdldFN0YXJ0UG9zaXRpb24iLCJwb3NpdGlvbk1hdGNoZXNTdGFydFBvc2l0aW9uIiwibWF0Y2giLCJ2ZWxvY2l0eSIsIlZlbG9jaXR5IiwiZnJvbVBvc2l0aW9uQW5kU3RhcnRQb3NpdGlvbiIsInN3aXBlRGlyZWN0aW9uIiwiZ2V0U3dpcGVEaXJlY3Rpb24iLCJhbGVydCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ0b3VjaEVuZEhhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsImRpZE1vdW50Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZlRvdWNoU3RhcnQiLCJvZmZUb3VjaE1vdmUiLCJvZmZUb3VjaEVuZCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJpbml0aWFsaXNlIiwic2V0U3RhdGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZXZlbnRNaXhpbnMiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytC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