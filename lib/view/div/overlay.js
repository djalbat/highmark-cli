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
var _element1 = require("../../utilities/element");
var _constants = require("../../constants");
var _state = require("../../state");
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
            controller.closeMenu();
            _this.updateZoom();
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = (0, _fullScreen.isFullScreen)();
            if (fullScreen) {
                controller.exitFullScreen();
                return;
            }
            _this.restoreNativeGestures();
            controller.checkRestoreNativeGesturesCheckbox();
        });
        _define_property(_assert_this_initialized(_this), "pinchStartCustomHandler", function(event, element) {
            var zoom = (0, _state.getViewZoom)(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio);
            (0, _state.setViewZoom)(zoom);
            _this.updateZoom();
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
            var fullScreen = (0, _fullScreen.isFullScreen)();
            if (!fullScreen) {
                var height = _this.getHeight(), bottom = height - top;
                if (bottom < _constants.OPEN_MENU_TAP_AREA_HEIGHT) {
                    controller.openMenu();
                    return;
                }
            }
            _this.suppressNativeGestures();
            controller.uncheckRestoreNativeGesturesCheckbox();
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
            key: "updateColours",
            value: function updateColours() {
                var coloursInverted = (0, _state.areColoursInverted)();
                coloursInverted ? this.addClass("inverted-colours") : this.removeClass("inverted-colours");
                this.updateZoom();
            }
        },
        {
            key: "updateZoom",
            value: function updateZoom() {
                var zoom = (0, _state.getViewZoom)(), displayedDiv = this.findDisplayedDiv();
                displayedDiv.zoom(zoom);
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
            key: "invertColours",
            value: function invertColours() {
                var coloursInverted = true;
                (0, _state.setColoursInverted)(coloursInverted);
                this.updateColours();
            }
        },
        {
            key: "revertColours",
            value: function revertColours() {
                var coloursInverted = false;
                (0, _state.setColoursInverted)(coloursInverted);
                this.updateColours();
            }
        },
        {
            key: "enterFullScreen",
            value: function enterFullScreen() {
                this.requestFullScreen();
            }
        },
        {
            key: "restoreNativeGestures",
            value: function restoreNativeGestures() {
                this.addClass("native-gestures");
                this.disableCustomGestures();
            }
        },
        {
            key: "suppressNativeGestures",
            value: function suppressNativeGestures() {
                this.removeClass("native-gestures");
                this.enableCustomGestures();
            }
        },
        {
            key: "showRightDiv",
            value: function showRightDiv() {
                var displayedDiv = this.findDisplayedDiv(), divs = this.getDivs(), divsLength = divs.length, index = divs.indexOf(displayedDiv), nextIndex = index + 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showFirstDiv",
            value: function showFirstDiv() {
                var displayedDiv = this.findDisplayedDiv(), divs = this.getDivs(), index = divs.indexOf(displayedDiv), nextIndex = 0, previousIndex = index === -1 ? nextIndex : index; ///
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLeftDiv",
            value: function showLeftDiv() {
                var displayedDiv = this.findDisplayedDiv(), divs = this.getDivs(), index = divs.indexOf(displayedDiv), nextIndex = index - 1, previousIndex = index; ///
                if (nextIndex === -1) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastDiv",
            value: function showLastDiv() {
                var displayedDiv = this.findDisplayedDiv(), divs = this.getDivs(), index = divs.indexOf(displayedDiv), divsLength = divs.length, nextIndex = divsLength - 1, previousIndex = index === -1 ? nextIndex : index; ///
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextDiv",
            value: function showNextDiv(nextIndex, previousIndex) {
                var divs = this.getDivs(), nextDiv = divs[nextIndex], previousDiv = divs[previousIndex], backgroundColour = nextDiv.getBackgroundColour();
                var zoom;
                zoom = 1;
                previousDiv.zoom(zoom);
                zoom = (0, _state.getViewZoom)();
                nextDiv.zoom(zoom);
                previousDiv.hide();
                this.setBackgroundColour(backgroundColour);
                this.stopScrolling();
                this.scrollToTop();
                nextDiv.show();
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
            key: "findDisplayedDiv",
            value: function findDisplayedDiv() {
                var divs = this.getDivs(), displayedDiv = divs.find(function(div) {
                    var displayed = div.isDisplayed();
                    if (displayed) {
                        return true;
                    }
                });
                return displayedDiv;
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
                this.updateZoom();
                this.updateColours();
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
                var invertColours = this.invertColours.bind(this), revertColours = this.revertColours.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), updateOverlayDivZoom = this.updateZoom.bind(this), restoreNativeGestures = this.restoreNativeGestures.bind(this), suppressNativeGestures = this.suppressNativeGestures.bind(this);
                return {
                    invertColours: invertColours,
                    revertColours: revertColours,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen,
                    updateOverlayDivZoom: updateOverlayDivZoom,
                    restoreNativeGestures: restoreNativeGestures,
                    suppressNativeGestures: suppressNativeGestures
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                this.showFirstDiv();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEaXYgZnJvbSBcIi4uL2RpdlwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFZpZXdab29tIGFzIGdldFpvb20sIHNldFZpZXdab29tIGFzIHNldFpvb20sIHNldENvbG91cnNJbnZlcnRlZCwgYXJlQ29sb3Vyc0ludmVydGVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBPdmVybGF5RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICAgIGlmIChib3R0b20gPCBPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUKSB7XG4gICAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLnVuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCgpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB1cGRhdGVab29tKCkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgZGlzcGxheWVkRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkRGl2KCk7XG5cbiAgICBkaXNwbGF5ZWREaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZERpdiA9IHRoaXMuZmluZERpc3BsYXllZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGlzcGxheWVkRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZERpdiA9IHRoaXMuZmluZERpc3BsYXllZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXNwbGF5ZWREaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IChpbmRleCA9PT0gLTEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdERpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWREaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGlzcGxheWVkRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZERpdiA9IHRoaXMuZmluZERpc3BsYXllZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXNwbGF5ZWREaXYpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gKGluZGV4ID09PSAtMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBuZXh0RGl2ID0gZGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHByZXZpb3VzRGl2ID0gZGl2c1twcmV2aW91c0luZGV4XSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3VyID0gbmV4dERpdi5nZXRCYWNrZ3JvdW5kQ29sb3VyKCk7XG5cbiAgICBsZXQgem9vbTtcblxuICAgIHpvb20gPSAxO1xuXG4gICAgcHJldmlvdXNEaXYuem9vbSh6b29tKTtcblxuICAgIHpvb20gPSBnZXRab29tKCk7XG5cbiAgICBuZXh0RGl2Lnpvb20oem9vbSk7XG5cbiAgICBwcmV2aW91c0Rpdi5oaWRlKCk7XG5cbiAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cik7XG5cbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgIG5leHREaXYuc2hvdygpO1xuICB9XG5cbiAgc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG91ciwgLy8vXG4gICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBmaW5kRGlzcGxheWVkRGl2KCkge1xuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXNwbGF5ZWREaXYgPSBkaXZzLmZpbmQoKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkID0gZGl2LmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkRGl2O1xuICB9XG5cbiAgZ2V0RGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2cyA9IGNoaWxkRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpdnM7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZGl2RE9NRWxlbWVudHMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2RE9NRWxlbWVudHMsIERpdiksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRpdnNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGludmVydENvbG91cnMgPSB0aGlzLmludmVydENvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXZlcnRDb2xvdXJzID0gdGhpcy5yZXZlcnRDb2xvdXJzLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5RGl2Wm9vbSA9IHRoaXMudXBkYXRlWm9vbS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzID0gdGhpcy5yZXN0b3JlTmF0aXZlR2VzdHVyZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzID0gdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGludmVydENvbG91cnMsXG4gICAgICByZXZlcnRDb2xvdXJzLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICB1cGRhdGVPdmVybGF5RGl2Wm9vbSxcbiAgICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3REaXYoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXZET01FbGVtZW50c1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvdmVybGF5XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPdmVybGF5RGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJPdmVybGF5RGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiY2xvc2VNZW51IiwidXBkYXRlWm9vbSIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJ0b3AiLCJsZWZ0IiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0RGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwidGFwQ3VzdG9tSGFuZGxlciIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQiLCJvcGVuTWVudSIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJ1bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3REaXYiLCJzaG93TGFzdERpdiIsInVwZGF0ZUNvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGlzcGxheWVkRGl2IiwiZmluZERpc3BsYXllZERpdiIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJpbnZlcnRDb2xvdXJzIiwic2V0Q29sb3Vyc0ludmVydGVkIiwicmV2ZXJ0Q29sb3VycyIsImVudGVyRnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJkaXZzIiwiZ2V0RGl2cyIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXYiLCJuZXh0RGl2IiwicHJldmlvdXNEaXYiLCJiYWNrZ3JvdW5kQ29sb3VyIiwiZ2V0QmFja2dyb3VuZENvbG91ciIsImhpZGUiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2hvdyIsImJhY2tncm91bmRDb2xvciIsImNzcyIsImZpbmQiLCJkaXYiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aW5kb3ciLCJvbktleURvd24iLCJvbkN1c3RvbVRhcCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJlbmFibGVGdWxsU2NyZWVuIiwiZW5hYmxlVG91Y2giLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsImRpc2FibGVGdWxsU2NyZWVuIiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmS2V5RG93biIsImRpdkRPTUVsZW1lbnRzIiwicHJvcGVydGllcyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2IiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVPdmVybGF5RGl2Wm9vbSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaWhCQTs7O2VBQUE7OztvRUEvZ0JzQjtvQkFFQzt5QkFDRTswREFFVDs4REFDSTs0REFDSTtnRUFDSzswQkFFQTt3QkFDVzt5QkFDNEQ7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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