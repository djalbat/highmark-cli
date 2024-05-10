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
var _state = require("../../state");
var _constants = require("../../constants");
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
        "\n  \n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  touch-action: none;\n    \n  .native-gestures {\n    overflow: scroll;\n    touch-action: auto;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
var OverlayDiv = /*#__PURE__*/ function(Element) {
    _inherits(OverlayDiv, Element);
    var _super = _create_super(OverlayDiv);
    function OverlayDiv() {
        _class_call_check(this, OverlayDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "fullScreenChangeCustomHandler", function(event, element) {
            controller.closeMenu();
            _this.updateOverlayZoom();
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = (0, _fullScreen.isFullScreen)();
            fullScreen ? controller.exitFullScreen() : controller.enterFullScreen();
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
                return;
            }
            var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
            nativeGesturesRestored ? controller.suppressNativeGestures() : controller.restoreNativeGestures();
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
                        controller.exitFullScreen();
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
            value: function enterFullScreen(callback) {
                this.requestFullScreen(callback);
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
                this.updateOverlayZoom();
            }
        },
        {
            key: "updateNativeGestures",
            value: function updateNativeGestures() {
            // const nativeGesturesRestored = areNativeGesturesRestored();
            //
            // nativeGesturesRestored ?
            //   this.addClass("native-gestures") :
            //     this.removeClass("native-gestures");
            //
            // nativeGesturesRestored ?
            //   this.disableCustomGestures() :
            //     this.enableCustomGestures();
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
                var div = this.findDiv(), divs = this.getDivs(), index = divs.indexOf(div), divsLength = divs.length, nextIndex = divsLength - 1, previousIndex = index === -1 ? nextIndex : index; ///
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextDiv",
            value: function showNextDiv(nextIndex, previousIndex) {
                var _this = this;
                var zoom = (0, _state.getOverlayZoom)(), divs = this.getDivs(), nextDiv = divs[nextIndex], previousDiv = divs[previousIndex];
                this.stopScrolling();
                this.scrollToTop();
                this.remove(previousDiv);
                this.add(nextDiv);
                nextDiv.zoom(zoom);
                setTimeout(function() {
                    var backgroundColour = nextDiv.getBackgroundColour();
                    _this.setBackgroundColour(backgroundColour);
                }, 0);
            }
        },
        {
            key: "showFirstDiv",
            value: function showFirstDiv() {
                var _this = this;
                var zoom = (0, _state.getOverlayZoom)(), divs = this.getDivs(), firstDiv = first(divs);
                this.add(firstDiv);
                firstDiv.zoom(zoom);
                setTimeout(function() {
                    var backgroundColour = firstDiv.getBackgroundColour();
                    _this.setBackgroundColour(backgroundColour);
                }, 0);
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
                    var added = div.isAdded();
                    if (added) {
                        return true;
                    }
                });
                return div;
            }
        },
        {
            key: "getDivs",
            value: function getDivs() {
                var divs = this.getState().divs;
                return divs;
            }
        },
        {
            key: "setDivs",
            value: function setDivs(divs) {
                this.updateState({
                    divs: divs
                });
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
                var divs = this.createDivs(), interval = null, startZoom = null, startScrollTop = null;
                this.setState({
                    divs: divs,
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
            key: "createDivs",
            value: function createDivs() {
                var divDOMElements = this.properties.divDOMElements, divs = (0, _element1.elementsFromDOMElements)(divDOMElements, _div.default);
                return divs;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), updateOverlayZoom = this.updateOverlayZoom.bind(this), updateOverlayColours = this.updateOverlayColours.bind(this), updateNativeGestures = this.updateNativeGestures.bind(this);
                return {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMsIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy90b3VjaFwiO1xuaW1wb3J0IGZ1bGxTY3JlZW5NaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9mdWxsc3JlYW5cIjtcblxuaW1wb3J0IHsgaXNGdWxsU2NyZWVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0T3ZlcmxheVpvb20gYXMgZ2V0Wm9vbSwgYXJlQ29sb3Vyc0ludmVydGVkLCBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgT3ZlcmxheURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIuY2xvc2VNZW51KCk7XG5cbiAgICB0aGlzLnVwZGF0ZU92ZXJsYXlab29tKCk7XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBmdWxsU2NyZWVuID9cbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKSA6XG4gICAgICAgIGNvbnRyb2xsZXIuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIG92ZXJsYXlab29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tT3ZlcmxheShvdmVybGF5Wm9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcDtcblxuICAgIGlmIChib3R0b20gPCBPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUKSB7XG4gICAgICBjb250cm9sbGVyLm9wZW5NZW51KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSA6XG4gICAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGVudGVyRnVsbFNjcmVlbihjYWxsYmFjaykge1xuICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oY2FsbGJhY2spO1xuICB9XG5cbiAgdXBkYXRlT3ZlcmxheVpvb20oKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgem9vbSA9IGdldFpvb20oKTtcblxuICAgIGRpdi56b29tKHpvb20pO1xuICB9XG5cbiAgdXBkYXRlT3ZlcmxheUNvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gYXJlQ29sb3Vyc0ludmVydGVkKCk7XG5cbiAgICBjb2xvdXJzSW52ZXJ0ZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImludmVydGVkLWNvbG91cnNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKTtcblxuICAgIHRoaXMudXBkYXRlT3ZlcmxheVpvb20oKTtcbiAgfVxuXG4gIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIC8vIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCk7XG4gICAgLy9cbiAgICAvLyBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAvLyAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIikgOlxuICAgIC8vICAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuICAgIC8vXG4gICAgLy8gbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgLy8gICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpIDpcbiAgICAvLyAgICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gdGhpcy5oYXNDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnREaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IChpbmRleCA9PT0gLTEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBuZXh0RGl2ID0gZGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHByZXZpb3VzRGl2ID0gZGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgdGhpcy5yZW1vdmUocHJldmlvdXNEaXYpO1xuXG4gICAgdGhpcy5hZGQobmV4dERpdik7XG5cbiAgICBuZXh0RGl2Lnpvb20oem9vbSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBuZXh0RGl2LmdldEJhY2tncm91bmRDb2xvdXIoKTtcblxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2KCkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGZpcnN0RGl2ID0gZmlyc3QoZGl2cyk7XG5cbiAgICB0aGlzLmFkZChmaXJzdERpdik7XG5cbiAgICBmaXJzdERpdi56b29tKHpvb20pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gZmlyc3REaXYuZ2V0QmFja2dyb3VuZENvbG91cigpO1xuXG4gICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cik7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGZpbmREaXYoKSB7XG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdiA9IGRpdnMuZmluZCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGRlZCA9IGRpdi5pc0FkZGVkKCk7XG5cbiAgICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBnZXREaXZzKCkge1xuICAgIGNvbnN0IHsgZGl2cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpdnM7XG4gIH1cblxuICBzZXREaXZzKGRpdnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBkaXZzID0gdGhpcy5jcmVhdGVEaXZzKCksXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXZzLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjcmVhdGVEaXZzKCkge1xuICAgIGNvbnN0IHsgZGl2RE9NRWxlbWVudHMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2RE9NRWxlbWVudHMsIERpdik7XG5cbiAgICByZXR1cm4gZGl2cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5Wm9vbSA9IHRoaXMudXBkYXRlT3ZlcmxheVpvb20uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5Q29sb3VycyA9IHRoaXMudXBkYXRlT3ZlcmxheUNvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlcyA9IHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICB1cGRhdGVPdmVybGF5Wm9vbSxcbiAgICAgIHVwZGF0ZU92ZXJsYXlDb2xvdXJzLFxuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3REaXYoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXZET01FbGVtZW50c1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvdmVybGF5XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPdmVybGF5RGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiT3ZlcmxheURpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsImNsb3NlTWVudSIsInVwZGF0ZU92ZXJsYXlab29tIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJlbnRlckZ1bGxTY3JlZW4iLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInpvb20iLCJnZXRab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwib3ZlcmxheVpvb20iLCJNYXRoIiwic3FydCIsInpvb21PdmVybGF5Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzaG93TGVmdERpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInRhcEN1c3RvbUhhbmRsZXIiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3REaXYiLCJzaG93TGFzdERpdiIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJjYWxsYmFjayIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZGl2IiwiZmluZERpdiIsInVwZGF0ZU92ZXJsYXlDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwiaGFzQ2xhc3MiLCJkaXZzIiwiZ2V0RGl2cyIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXYiLCJuZXh0RGl2IiwicHJldmlvdXNEaXYiLCJyZW1vdmUiLCJhZGQiLCJzZXRUaW1lb3V0IiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZmlyc3REaXYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJmaW5kIiwiYWRkZWQiLCJpc0FkZGVkIiwiZ2V0U3RhdGUiLCJzZXREaXZzIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJjcmVhdGVEaXZzIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsImVuYWJsZUZ1bGxTY3JlZW4iLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZLZXlEb3duIiwiZGl2RE9NRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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