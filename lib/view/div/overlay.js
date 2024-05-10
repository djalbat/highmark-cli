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
var _necessary = require("necessary");
var _div = /*#__PURE__*/ _interop_require_default(require("../div"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _touch = /*#__PURE__*/ _interop_require_default(require("../../mixins/touch"));
var _fullsrean = /*#__PURE__*/ _interop_require_default(require("../../mixins/fullsrean"));
var _fullScreen = require("../../utilities/fullScreen");
var _fragment = require("../../utilities/fragment");
var _element1 = require("../../utilities/element");
var _state = require("../../state");
var _constants = require("../../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "\n  \n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  touch-action: none;\n    \n  .native-gestures {\n    overflow: scroll;\n    touch-action: auto;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
var OverlayDiv = /*#__PURE__*/ function(Element) {
    _inherits(OverlayDiv, Element);
    var _super = _create_super(OverlayDiv);
    function OverlayDiv() {
        _class_call_check(this, OverlayDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "fullScreenChangeCustomHandler", function(event, element) {
            controller.updateFullScreen();
            _this.updateOverlayZoom();
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = (0, _fullScreen.isFullScreen)();
            if (fullScreen) {
                controller.exitFullScreen();
                return;
            }
            var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
            nativeGesturesRestored ? controller.suppressNativeGestures() : controller.restoreNativeGestures();
        });
        _define_property(_assert_this_initialized(_this), "pinchStartCustomHandler", function(event, element) {
            var zoom = (0, _state.getOverlayZoom)(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), overlayZoom = startZoom * Math.sqrt(ratio); ///
            controller.zoomOverlay(overlayZoom);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element) {
            _this.showLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            _this.showRightDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.DOWN_DIRECTION;
            _this.startScrolling(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.UP_DIRECTION;
            _this.startScrolling(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "dragStartCustomHandler", function(event, element, top, left) {
            var scrollTop = _this.getScrollTop(), startScrollTop = scrollTop; ///
            _this.setStartScrollTop(startScrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragDownCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element, top, left) {
            var height = _this.getHeight(), bottom = height - top;
            if (bottom < _constants.OPEN_MENU_TAP_AREA_HEIGHT) {
                controller.openMenu();
            }
        });
        _define_property(_assert_this_initialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDiv();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDiv();
                        break;
                    }
                case ESCAPE_KEY_CODE:
                    {
                        var fullScreen = (0, _fullScreen.isFullScreen)();
                        if (fullScreen) {
                            controller.exitFullScreen();
                        }
                        controller.closeMenu();
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstDiv();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDiv();
                        break;
                    }
            }
        });
        return _this;
    }
    _create_class(OverlayDiv, [
        {
            key: "scrollToAnchor",
            value: function scrollToAnchor(anchorId) {
                var div;
                div = (0, _element1.findDivByAnchorId)(anchorId);
                var nextDiv = div; ///
                div = this.findDiv();
                var previousDiv = div; ///
                var divs = this.getDivs(), nextIndex = divs.indexOf(nextDiv), previousIndex = divs.indexOf(previousDiv); ///
                this.showNextDiv(nextIndex, previousIndex, function() {
                    (0, _element1.scrollToAnchor)(anchorId);
                });
            }
        },
        {
            key: "scrollToTop",
            value: function scrollToTop() {
                var scrollTop = 0;
                this.setScrollTop(scrollTop);
            }
        },
        {
            key: "stopScrolling",
            value: function stopScrolling() {
                var interval = this.getInterval();
                if (interval !== null) {
                    clearInterval(interval);
                    interval = null;
                    this.setInterval(interval);
                }
            }
        },
        {
            key: "startScrolling",
            value: function startScrolling(speed, direction) {
                var _this = this;
                var scrollTop = this.getScrollTop();
                scrollTop += speed * _constants.SCROLL_DELAY;
                this.setScrollTop(scrollTop);
                var interval = this.getInterval();
                if (interval !== null) {
                    clearInterval(interval);
                }
                interval = setInterval(function() {
                    speed = speed - direction * _constants.DECELERATION;
                    if (speed * direction < 0) {
                        clearInterval(interval);
                        interval = null;
                        _this.setInterval(interval);
                    }
                    var scrollTop = _this.getScrollTop();
                    scrollTop += speed * _constants.SCROLL_DELAY;
                    _this.setScrollTop(scrollTop);
                }, _constants.SCROLL_DELAY);
                this.setInterval(interval);
            }
        },
        {
            key: "enterFullScreen",
            value: function enterFullScreen() {
                this.requestFullScreen();
            }
        },
        {
            key: "updateOverlayZoom",
            value: function updateOverlayZoom() {
                var div = this.findDiv(), zoom = (0, _state.getOverlayZoom)();
                div.zoom(zoom);
            }
        },
        {
            key: "updateOverlayColours",
            value: function updateOverlayColours() {
                var coloursInverted = (0, _state.areColoursInverted)();
                coloursInverted ? this.addClass("inverted-colours") : this.removeClass("inverted-colours");
            }
        },
        {
            key: "updateNativeGestures",
            value: function updateNativeGestures() {
                var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
                nativeGesturesRestored ? this.addClass("native-gestures") : this.removeClass("native-gestures");
                nativeGesturesRestored ? this.disableCustomGestures() : this.enableCustomGestures();
            }
        },
        {
            key: "areNativeGesturesRestored",
            value: function areNativeGesturesRestored() {
                var nativeGesturesRestored = this.hasClass("native-gestures");
                return nativeGesturesRestored;
            }
        },
        {
            key: "showRightDiv",
            value: function showRightDiv() {
                var div = this.findDiv(), divs = this.getDivs(), divsLength = divs.length, index = divs.indexOf(div), nextIndex = index + 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLeftDiv",
            value: function showLeftDiv() {
                var div = this.findDiv(), divs = this.getDivs(), index = divs.indexOf(div), nextIndex = index - 1, previousIndex = index; ///
                if (nextIndex === -1) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastDiv",
            value: function showLastDiv() {
                var div = this.findDiv(), divs = this.getDivs(), divsLength = divs.length, index = div === null ? -1 : divs.indexOf(div), nextIndex = divsLength - 1, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showFirstDiv",
            value: function showFirstDiv() {
                var div = this.findDiv(), divs = this.getDivs(), index = div === null ? -1 : divs.indexOf(div), nextIndex = 0, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextDiv",
            value: function showNextDiv(nextIndex, previousIndex) {
                var _this = this;
                var done = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {};
                (0, _fragment.resetFragment)();
                var divs = this.getDivs();
                if (previousIndex !== -1) {
                    var previousDiv = divs[previousIndex];
                    previousDiv.hide();
                }
                var zoom = (0, _state.getOverlayZoom)(), nextDiv = divs[nextIndex];
                this.stopScrolling();
                this.scrollToTop();
                nextDiv.zoom(zoom);
                nextDiv.show();
                defer(function() {
                    var backgroundColour = nextDiv.getBackgroundColour();
                    _this.setBackgroundColour(backgroundColour);
                    done();
                });
            }
        },
        {
            key: "setBackgroundColour",
            value: function setBackgroundColour(backgroundColour) {
                var backgroundColor = backgroundColour, css = {
                    backgroundColor: backgroundColor
                };
                this.css(css);
            }
        },
        {
            key: "findDiv",
            value: function findDiv() {
                var divs = this.getDivs(), div = divs.find(function(div) {
                    var showing = div.isShowing();
                    if (showing) {
                        return true;
                    }
                }) || null;
                return div;
            }
        },
        {
            key: "getDivs",
            value: function getDivs() {
                var childElements = this.getChildElements(), divs = childElements; ///
                return divs;
            }
        },
        {
            key: "getInterval",
            value: function getInterval() {
                var interval = this.getState().interval;
                return interval;
            }
        },
        {
            key: "setInterval",
            value: function setInterval1(interval) {
                this.updateState({
                    interval: interval
                });
            }
        },
        {
            key: "getStartZoom",
            value: function getStartZoom() {
                var startZoom = this.getState().startZoom;
                return startZoom;
            }
        },
        {
            key: "setStartZoom",
            value: function setStartZoom(startZoom) {
                this.updateState({
                    startZoom: startZoom
                });
            }
        },
        {
            key: "getStartScrollTop",
            value: function getStartScrollTop() {
                var startScrollTop = this.getState().startScrollTop;
                return startScrollTop;
            }
        },
        {
            key: "setStartScrollTop",
            value: function setStartScrollTop(startScrollTop) {
                this.updateState({
                    startScrollTop: startScrollTop
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var interval = null, startZoom = null, startScrollTop = null;
                this.setState({
                    interval: interval,
                    startZoom: startZoom,
                    startScrollTop: startScrollTop
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                _easy.window.onKeyDown(this.keyDownHandler);
                this.onCustomTap(this.tapCustomHandler);
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
                this.onCustomDragStart(this.dragStartCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onCustomPinchMove(this.pinchMoveCustomHandler);
                this.onCustomPinchStart(this.pinchStartCustomHandler);
                this.onCustomDoubleTap(this.doubleTapCustomHandler);
                this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.enableFullScreen();
                this.enableTouch();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
                this.disableFullScreen();
                this.offCustomTap(this.tapCustomHandler);
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
                this.offCustomDragStart(this.dragStartCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
                this.offCustomPinchMove(this.pinchMoveCustomHandler);
                this.offCustomPinchStart(this.pinchStartCustomHandler);
                this.offCustomDoubleTap(this.doubleTapCustomHandler);
                this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                _easy.window.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var divDOMElements = this.properties.divDOMElements, divs = (0, _element1.elementsFromDOMElements)(divDOMElements, _div.default), childElements = _to_consumable_array(divs);
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showFirstDiv = this.showFirstDiv.bind(this), scrollToAnchor = this.scrollToAnchor.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), updateOverlayZoom = this.updateOverlayZoom.bind(this), updateOverlayColours = this.updateOverlayColours.bind(this), updateNativeGestures = this.updateNativeGestures.bind(this);
                return {
                    showFirstDiv: showFirstDiv,
                    scrollToAnchor: scrollToAnchor,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen,
                    updateOverlayZoom: updateOverlayZoom,
                    updateOverlayColours: updateOverlayColours,
                    updateNativeGestures: updateNativeGestures
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return OverlayDiv;
}(_wrap_native_super(_element.default));
_define_property(OverlayDiv, "tagName", "div");
_define_property(OverlayDiv, "ignoredProperties", [
    "divDOMElements"
]);
_define_property(OverlayDiv, "defaultProperties", {
    className: "overlay"
});
Object.assign(OverlayDiv.prototype, _touch.default);
Object.assign(OverlayDiv.prototype, _fullsrean.default);
var _default = (0, _easywithstyle.default)(OverlayDiv)(_templateObject());
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXYgZnJvbSBcIi4uL2RpdlwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IHJlc2V0RnJhZ21lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZyYWdtZW50XCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9BbmNob3IsIGZpbmREaXZCeUFuY2hvcklkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRPdmVybGF5Wm9vbSBhcyBnZXRab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQsIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBERUNFTEVSQVRJT04sIERPV05fRElSRUNUSU9OLCBPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgT3ZlcmxheURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy51cGRhdGVPdmVybGF5Wm9vbSgpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCk7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIGNvbnRyb2xsZXIuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIDpcbiAgICAgICAgY29udHJvbGxlci5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKTtcblxuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICBvdmVybGF5Wm9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7ICAvLy9cblxuICAgIGNvbnRyb2xsZXIuem9vbU92ZXJsYXkob3ZlcmxheVpvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgdGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCkge1xuICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBsZXQgZGl2O1xuXG4gICAgZGl2ID0gZmluZERpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpO1xuXG4gICAgY29uc3QgbmV4dERpdiA9IGRpdjsgIC8vL1xuXG4gICAgZGl2ID0gdGhpcy5maW5kRGl2KCk7XG5cbiAgICBjb25zdCBwcmV2aW91c0RpdiA9IGRpdjsgIC8vL1xuXG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnMuaW5kZXhPZihuZXh0RGl2KSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBkaXZzLmluZGV4T2YocHJldmlvdXNEaXYpOyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCwgKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cblxuICB1cGRhdGVPdmVybGF5Wm9vbSgpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgZGl2Lnpvb20oem9vbSk7XG4gIH1cblxuICB1cGRhdGVPdmVybGF5Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuICB9XG5cbiAgdXBkYXRlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSB0aGlzLmhhc0NsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG4gIH1cblxuICBzaG93UmlnaHREaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoZGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93Rmlyc3REaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gKGRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsIGRvbmUgPSAoKSA9PiB7fSkge1xuICAgIHJlc2V0RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXYgPSBkaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0Rpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBuZXh0RGl2ID0gZGl2c1tuZXh0SW5kZXhdO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0RGl2Lnpvb20oem9vbSk7XG5cbiAgICBuZXh0RGl2LnNob3coKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBuZXh0RGl2LmdldEJhY2tncm91bmRDb2xvdXIoKTtcblxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGZpbmREaXYoKSB7XG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdiA9IGRpdnMuZmluZCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGdldERpdnMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGRpdnMgPSBjaGlsZEVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBkaXZzO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZGl2RE9NRWxlbWVudHMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2RE9NRWxlbWVudHMsIERpdiksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRpdnNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dGaXJzdERpdiA9IHRoaXMuc2hvd0ZpcnN0RGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsVG9BbmNob3IgPSB0aGlzLnNjcm9sbFRvQW5jaG9yLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5Wm9vbSA9IHRoaXMudXBkYXRlT3ZlcmxheVpvb20uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5Q29sb3VycyA9IHRoaXMudXBkYXRlT3ZlcmxheUNvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlcyA9IHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0ZpcnN0RGl2LFxuICAgICAgc2Nyb2xsVG9BbmNob3IsXG4gICAgICBleGl0RnVsbFNjcmVlbixcbiAgICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHVwZGF0ZU92ZXJsYXlab29tLFxuICAgICAgdXBkYXRlT3ZlcmxheUNvbG91cnMsXG4gICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZGl2RE9NRWxlbWVudHNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwib3ZlcmxheVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oT3ZlcmxheURpdi5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oT3ZlcmxheURpdi5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoT3ZlcmxheURpdilgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcblxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xufVxuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJPdmVybGF5RGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZU92ZXJsYXlab29tIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInpvb20iLCJnZXRab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwib3ZlcmxheVpvb20iLCJNYXRoIiwic3FydCIsInpvb21PdmVybGF5Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzaG93TGVmdERpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInRhcEN1c3RvbUhhbmRsZXIiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJjbG9zZU1lbnUiLCJzaG93Rmlyc3REaXYiLCJzaG93TGFzdERpdiIsInNjcm9sbFRvQW5jaG9yIiwiYW5jaG9ySWQiLCJkaXYiLCJmaW5kRGl2QnlBbmNob3JJZCIsIm5leHREaXYiLCJmaW5kRGl2IiwicHJldmlvdXNEaXYiLCJkaXZzIiwiZ2V0RGl2cyIsIm5leHRJbmRleCIsImluZGV4T2YiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXYiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiU0NST0xMX0RFTEFZIiwiREVDRUxFUkFUSU9OIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJ1cGRhdGVPdmVybGF5Q29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsImFyZUNvbG91cnNJbnZlcnRlZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlcyIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwiaGFzQ2xhc3MiLCJkaXZzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJkb25lIiwicmVzZXRGcmFnbWVudCIsImhpZGUiLCJzaG93IiwiZGVmZXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwiZ2V0QmFja2dyb3VuZENvbG91ciIsInNldEJhY2tncm91bmRDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJmaW5kIiwic2hvd2luZyIsImlzU2hvd2luZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aW5kb3ciLCJvbktleURvd24iLCJvbkN1c3RvbVRhcCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJlbmFibGVGdWxsU2NyZWVuIiwiZW5hYmxlVG91Y2giLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsImRpc2FibGVGdWxsU2NyZWVuIiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmS2V5RG93biIsImRpdkRPTUVsZW1lbnRzIiwicHJvcGVydGllcyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2IiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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