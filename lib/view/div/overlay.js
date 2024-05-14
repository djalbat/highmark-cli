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
var _fragmented = require("fragmented");
var _easymobile = require("easy-mobile");
var _div = /*#__PURE__*/ _interop_require_default(require("../div"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
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
        _define_property(_assert_this_initialized(_this), "singleTapCustomHandler", function(event, element, top, left) {
            var height = _this.getHeight(), bottom = height - top;
            if (bottom < _constants.OPEN_MENU_TAP_AREA_HEIGHT) {
                controller.openMenu();
            }
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = isFullScreen();
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
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element, top, left, spped) {
            _this.showLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element, top, left, spped) {
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
                        var fullScreen = isFullScreen();
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
            key: "enableCustomGestures",
            value: function enableCustomGestures() {
                var nativeGesturedEnabled = this.areNativeGesturesEnabled();
                if (nativeGesturedEnabled) {
                    return;
                }
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
                nativeGesturedEnabled = true;
                this.setNativeGesturesEnabled(nativeGesturedEnabled);
            }
        },
        {
            key: "disableCustomGestures",
            value: function disableCustomGestures() {
                var nativeGesturedEnabled = this.areNativeGesturesEnabled();
                if (!nativeGesturedEnabled) {
                    return;
                }
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
                nativeGesturedEnabled = false;
                this.setNativeGesturesEnabled(nativeGesturedEnabled);
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
                (0, _fragmented.resetFragment)();
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
            key: "areNativeGesturesEnabled",
            value: function areNativeGesturesEnabled() {
                var nativeGesturesEnabled = this.getState().nativeGesturesEnabled;
                return nativeGesturesEnabled;
            }
        },
        {
            key: "setNativeGesturesEnabled",
            value: function setNativeGesturesEnabled(nativeGesturesEnabled) {
                this.updateState({
                    nativeGesturesEnabled: nativeGesturesEnabled
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var interval = null, startZoom = null, startScrollTop = null, nativeGesturesEnabled = false;
                this.setState({
                    interval: interval,
                    startZoom: startZoom,
                    startScrollTop: startScrollTop,
                    nativeGesturesEnabled: nativeGesturesEnabled
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                _easy.window.onKeyDown(this.keyDownHandler);
                this.onCustomSingleTap(this.singleTapCustomHandler);
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
                this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.offCustomSingleTap(this.singleTapCustomHandler);
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
Object.assign(OverlayDiv.prototype, _easymobile.touchMixins);
Object.assign(OverlayDiv.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(OverlayDiv)(_templateObject());
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyByZXNldEZyYWdtZW50IH0gZnJvbSBcImZyYWdtZW50ZWRcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zLCBmdWxsU2NyZWVuVXRpbGl0aWVzIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBEaXYgZnJvbSBcIi4uL2RpdlwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2QnlBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0T3ZlcmxheVpvb20gYXMgZ2V0Wm9vbSwgYXJlQ29sb3Vyc0ludmVydGVkLCBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgT3ZlcmxheURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy51cGRhdGVPdmVybGF5Wm9vbSgpO1xuICB9XG5cbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCkge1xuICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSA6XG4gICAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIG92ZXJsYXlab29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tT3ZlcmxheShvdmVybGF5Wm9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKSB7XG4gICAgbGV0IGRpdjtcblxuICAgIGRpdiA9IGZpbmREaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGNvbnN0IG5leHREaXYgPSBkaXY7ICAvLy9cblxuICAgIGRpdiA9IHRoaXMuZmluZERpdigpO1xuXG4gICAgY29uc3QgcHJldmlvdXNEaXYgPSBkaXY7ICAvLy9cblxuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzLmluZGV4T2YobmV4dERpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2cy5pbmRleE9mKHByZXZpb3VzRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsICgpID0+IHtcbiAgICAgIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlT3ZlcmxheVpvb20oKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgem9vbSA9IGdldFpvb20oKTtcblxuICAgIGRpdi56b29tKHpvb20pO1xuICB9XG5cbiAgdXBkYXRlT3ZlcmxheUNvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gYXJlQ29sb3Vyc0ludmVydGVkKCk7XG5cbiAgICBjb2xvdXJzSW52ZXJ0ZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImludmVydGVkLWNvbG91cnNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKTtcbiAgfVxuXG4gIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCk7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpIDpcbiAgICAgICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgbGV0IG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAobmF0aXZlR2VzdHVyZWRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpO1xuICB9XG5cbiAgZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICAgIGxldCBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKCFuYXRpdmVHZXN0dXJlZEVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZWRFbmFibGVkKTtcbiAgfVxuXG4gIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IHRoaXMuaGFzQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICByZXR1cm4gbmF0aXZlR2VzdHVyZXNSZXN0b3JlZDtcbiAgfVxuXG4gIHNob3dSaWdodERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3REaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IChkaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dGaXJzdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSAoZGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCwgZG9uZSA9ICgpID0+IHt9KSB7XG4gICAgcmVzZXRGcmFnbWVudCgpO1xuXG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdiA9IGRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICAgIHByZXZpb3VzRGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIG5leHREaXYgPSBkaXZzW25leHRJbmRleF07XG5cbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgIG5leHREaXYuem9vbSh6b29tKTtcblxuICAgIG5leHREaXYuc2hvdygpO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IG5leHREaXYuZ2V0QmFja2dyb3VuZENvbG91cigpO1xuXG4gICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cik7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cikge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvdXIsIC8vL1xuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZmluZERpdigpIHtcbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2ID0gZGl2cy5maW5kKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgZ2V0RGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2cyA9IGNoaWxkRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpdnM7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgeyBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc0VuYWJsZWQ7XG4gIH1cblxuICBzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBkaXZET01FbGVtZW50cyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkaXZET01FbGVtZW50cywgRGl2KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uZGl2c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0ZpcnN0RGl2ID0gdGhpcy5zaG93Rmlyc3REaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxUb0FuY2hvciA9IHRoaXMuc2Nyb2xsVG9BbmNob3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU92ZXJsYXlab29tID0gdGhpcy51cGRhdGVPdmVybGF5Wm9vbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU92ZXJsYXlDb2xvdXJzID0gdGhpcy51cGRhdGVPdmVybGF5Q29sb3Vycy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzID0gdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93Rmlyc3REaXYsXG4gICAgICBzY3JvbGxUb0FuY2hvcixcbiAgICAgIGV4aXRGdWxsU2NyZWVuLFxuICAgICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgICAgdXBkYXRlT3ZlcmxheVpvb20sXG4gICAgICB1cGRhdGVPdmVybGF5Q29sb3VycyxcbiAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXZET01FbGVtZW50c1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvdmVybGF5XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPdmVybGF5RGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XG59XG4iXSwibmFtZXMiOlsiaXNGdWxsU2NyZWVuIiwiZnVsbFNjcmVlblV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJPdmVybGF5RGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZU92ZXJsYXlab29tIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIm92ZXJsYXlab29tIiwiTWF0aCIsInNxcnQiLCJ6b29tT3ZlcmxheSIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BwZWQiLCJzaG93TGVmdERpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImNsb3NlTWVudSIsInNob3dGaXJzdERpdiIsInNob3dMYXN0RGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJhbmNob3JJZCIsImRpdiIsImZpbmREaXZCeUFuY2hvcklkIiwibmV4dERpdiIsImZpbmREaXYiLCJwcmV2aW91c0RpdiIsImRpdnMiLCJnZXREaXZzIiwibmV4dEluZGV4IiwiaW5kZXhPZiIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdiIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsInVwZGF0ZU92ZXJsYXlDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJuYXRpdmVHZXN0dXJlZEVuYWJsZWQiLCJhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwic2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJoYXNDbGFzcyIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsImRvbmUiLCJyZXNldEZyYWdtZW50IiwiaGlkZSIsInNob3ciLCJkZWZlciIsImJhY2tncm91bmRDb2xvdXIiLCJnZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2V0QmFja2dyb3VuZENvbG91ciIsImJhY2tncm91bmRDb2xvciIsImNzcyIsImZpbmQiLCJzaG93aW5nIiwiaXNTaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmF0aXZlR2VzdHVyZXNFbmFibGVkIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZLZXlEb3duIiwiZGl2RE9NRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwiZnVuYyIsInNldFRpbWVvdXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb2tCQTs7O2VBQUE7OztvRUFsa0JzQjtvQkFFQzt5QkFDRTswQkFDSzswQkFDcUM7MERBRW5EOzhEQUNJO3dCQUVvQjtxQkFFaUQ7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBHLElB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