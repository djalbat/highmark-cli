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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _leaf = /*#__PURE__*/ _interop_require_default(require("../div/leaf"));
var _touch = /*#__PURE__*/ _interop_require_default(require("../../mixins/touch"));
var _fullsrean = /*#__PURE__*/ _interop_require_default(require("../../mixins/fullsrean"));
var _fullScreen = require("../../utilities/fullScreen");
var _selectors = require("../../selectors");
var _tree = require("../../utilities/tree");
var _element1 = require("../../utilities/element");
var _constants = require("../../constants");
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
        "\n  \n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n    \n  .native-gestures {\n    touch-action: auto;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
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
            _this.showLeftLeafDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            _this.showRightLeftDiv();
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
                        _this.showRightLeftDiv();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftLeafDiv();
                        break;
                    }
                case ESCAPE_KEY_CODE:
                    {
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstLeafDiv();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastLeafDiv();
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
                var zoom = (0, _state.getViewZoom)(), displayedLeafDiv = this.findDisplayedLeafDiv();
                displayedLeafDiv.zoom(zoom);
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
            key: "showFirstLeafDiv",
            value: function showFirstLeafDiv() {
                var nextIndex = 0, previousIndex = nextIndex; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLeftLeafDiv",
            value: function showLeftLeafDiv() {
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), nextIndex = index - 1, previousIndex = index; ///
                if (nextIndex === -1) {
                    return;
                }
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showRightLeftDiv",
            value: function showRightLeftDiv() {
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), leafDivsLength = leafDivs.length, index = leafDivs.indexOf(displayedLeafDiv), nextIndex = index + 1, previousIndex = index; ///
                if (nextIndex === leafDivsLength) {
                    return;
                }
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastLeafDiv",
            value: function showLastLeafDiv() {
                var leafDivs = this.getLeafDivs(), leafDivsLength = leafDivs.length, nextIndex = leafDivsLength - 1, previousIndex = nextIndex; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextLeafDiv",
            value: function showNextLeafDiv(nextIndex, previousIndex) {
                var leafDivs = this.getLeafDivs(), nextLeafDiv = leafDivs[nextIndex], previousLeafDiv = leafDivs[previousIndex], backgroundColour = nextLeafDiv.getBackgroundColour();
                var zoom;
                zoom = 1;
                previousLeafDiv.zoom(zoom);
                zoom = (0, _state.getViewZoom)();
                nextLeafDiv.zoom(zoom);
                previousLeafDiv.hide();
                this.setBackgroundColour(backgroundColour);
                this.stopScrolling();
                this.scrollToTop();
                nextLeafDiv.show();
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
            key: "hideAllLeafDivs",
            value: function hideAllLeafDivs() {
                this.forEachLeafDiv(function(leafDiv) {
                    leafDiv.hide();
                });
            }
        },
        {
            key: "findDisplayedLeafDiv",
            value: function findDisplayedLeafDiv() {
                var leafDivs = this.getLeafDivs(), displayedLeafDiv = leafDivs.find(function(leafDiv) {
                    var displayed = leafDiv.isDisplayed();
                    if (displayed) {
                        return true;
                    }
                });
                return displayedLeafDiv;
            }
        },
        {
            key: "retrieveLeafDivs",
            value: function retrieveLeafDivs() {
                var domElement = this.getDOMElement(), divNodeList = domElement.querySelectorAll(_selectors.DIVS_SELECTOR), leafDivNodes = (0, _tree.leafNodesFromNodeList)(divNodeList), leafDivs = (0, _element1.elementsFromDOMElements)(leafDivNodes, _leaf.default);
                return leafDivs;
            }
        },
        {
            key: "forEachLeafDiv",
            value: function forEachLeafDiv(callback) {
                var leafDivs = this.getLeafDivs();
                leafDivs.forEach(callback);
            }
        },
        {
            key: "getLeafDivs",
            value: function getLeafDivs() {
                var leafDivs = this.getState().leafDivs;
                return leafDivs;
            }
        },
        {
            key: "setLeftDivs",
            value: function setLeftDivs(leafDivs) {
                this.updateState({
                    leafDivs: leafDivs
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
                var leafDivs = this.retrieveLeafDivs(), interval = null, startZoom = null, startScrollTop = null;
                this.setState({
                    leafDivs: leafDivs,
                    interval: interval,
                    startZoom: startZoom,
                    startScrollTop: startScrollTop
                });
            }
        },
        {
            key: "appendDivDOMElement",
            value: function appendDivDOMElement() {
                var divDOMElement = this.properties.divDOMElement, domElement = this.getDOMElement();
                domElement.append(divDOMElement);
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
                this.showFirstLeafDiv();
                this.updateColours();
                this.updateZoom();
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
            key: "parentContext",
            value: function parentContext() {
                var invertColours = this.invertColours.bind(this), revertColours = this.revertColours.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this);
                return {
                    invertColours: invertColours,
                    revertColours: revertColours,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.appendDivDOMElement();
                this.setInitialState();
                this.suppressNativeGestures();
                this.hideAllLeafDivs();
            }
        }
    ]);
    return OverlayDiv;
}(_wrap_native_super(_element.default));
_define_property(OverlayDiv, "tagName", "div");
_define_property(OverlayDiv, "ignoredProperties", [
    "divDOMElement"
]);
_define_property(OverlayDiv, "defaultProperties", {
    className: "overlay"
});
Object.assign(OverlayDiv.prototype, _touch.default);
Object.assign(OverlayDiv.prototype, _fullsrean.default);
var _default = (0, _easywithstyle.default)(OverlayDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi4vZGl2L2xlYWZcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFZpZXdab29tIGFzIGdldFpvb20sIHNldFZpZXdab29tIGFzIHNldFpvb20sIHNldENvbG91cnNJbnZlcnRlZCwgYXJlQ29sb3Vyc0ludmVydGVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBPdmVybGF5RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIGNvbnRyb2xsZXIuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCgpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICB6b29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgdGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgICBpZiAoYm90dG9tIDwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCkge1xuICAgICAgICBjb250cm9sbGVyLm9wZW5NZW51KCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgY29udHJvbGxlci51bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdExlYWZEaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGFyZUNvbG91cnNJbnZlcnRlZCgpO1xuXG4gICAgY29sb3Vyc0ludmVydGVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImludmVydGVkLWNvbG91cnNcIik7XG5cbiAgICB0aGlzLnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIHVwZGF0ZVpvb20oKSB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpO1xuXG4gICAgZGlzcGxheWVkTGVhZkRpdi56b29tKHpvb20pO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGludmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gdHJ1ZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICByZXZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGZhbHNlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cblxuICByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBzaG93Rmlyc3RMZWFmRGl2KCkge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IG5leHRJbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IG5leHRJbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBuZXh0TGVhZkRpdiA9IGxlYWZEaXZzW25leHRJbmRleF0sXG4gICAgICAgICAgcHJldmlvdXNMZWFmRGl2ID0gbGVhZkRpdnNbcHJldmlvdXNJbmRleF0sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG91ciA9IG5leHRMZWFmRGl2LmdldEJhY2tncm91bmRDb2xvdXIoKTtcblxuICAgIGxldCB6b29tO1xuXG4gICAgem9vbSA9IDE7XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuem9vbSh6b29tKTtcblxuICAgIHpvb20gPSBnZXRab29tKCk7XG5cbiAgICBuZXh0TGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcblxuICAgIHRoaXMuc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKTtcblxuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgbmV4dExlYWZEaXYuc2hvdygpO1xuICB9XG5cbiAgc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG91ciwgLy8vXG4gICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBoaWRlQWxsTGVhZkRpdnMoKSB7XG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdikgPT4ge1xuICAgICAgbGVhZkRpdi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRGlzcGxheWVkTGVhZkRpdigpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBkaXNwbGF5ZWRMZWFmRGl2ID0gbGVhZkRpdnMuZmluZCgobGVhZkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkID0gbGVhZkRpdi5pc0Rpc3BsYXllZCgpO1xuXG4gICAgICAgICAgICBpZiAoZGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpc3BsYXllZExlYWZEaXY7XG4gIH1cblxuICByZXRyaWV2ZUxlYWZEaXZzKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBkaXZOb2RlTGlzdCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICBsZWFmRGl2Tm9kZXMgPSBsZWFmTm9kZXNGcm9tTm9kZUxpc3QoZGl2Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhsZWFmRGl2Tm9kZXMsIExlYWZEaXYpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgZm9yRWFjaExlYWZEaXYoY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKTtcblxuICAgIGxlYWZEaXZzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0TGVhZkRpdnMoKSB7XG4gICAgY29uc3QgeyBsZWFmRGl2cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgc2V0TGVmdERpdnMobGVhZkRpdnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlYWZEaXZzXG4gICAgfSk7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLnJldHJpZXZlTGVhZkRpdnMoKSxcbiAgICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWZEaXZzLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kRGl2RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IGRpdkRPTUVsZW1lbnQgIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5hcHBlbmQoZGl2RE9NRWxlbWVudCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuc2hvd0ZpcnN0TGVhZkRpdigpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG4gICAgdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBpbnZlcnRDb2xvdXJzID0gdGhpcy5pbnZlcnRDb2xvdXJzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV2ZXJ0Q29sb3VycyA9IHRoaXMucmV2ZXJ0Q29sb3Vycy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGV4aXRGdWxsU2NyZWVuID0gdGhpcy5leGl0RnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVudGVyRnVsbFNjcmVlbiA9IHRoaXMuZW50ZXJGdWxsU2NyZWVuLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGludmVydENvbG91cnMsXG4gICAgICByZXZlcnRDb2xvdXJzLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW5cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLmFwcGVuZERpdkRPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMuaGlkZUFsbExlYWZEaXZzKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZGl2RE9NRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvdmVybGF5XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihPdmVybGF5RGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPdmVybGF5RGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJPdmVybGF5RGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGVab29tIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJ0YXBDdXN0b21IYW5kbGVyIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwiT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCIsIm9wZW5NZW51Iiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInVuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsInNob3dGaXJzdExlYWZEaXYiLCJzaG93TGFzdExlYWZEaXYiLCJ1cGRhdGVDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRpc3BsYXllZExlYWZEaXYiLCJmaW5kRGlzcGxheWVkTGVhZkRpdiIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJpbnZlcnRDb2xvdXJzIiwic2V0Q29sb3Vyc0ludmVydGVkIiwicmV2ZXJ0Q29sb3VycyIsImVudGVyRnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHRMZWFmRGl2IiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsImxlYWZEaXZzTGVuZ3RoIiwibGVuZ3RoIiwibmV4dExlYWZEaXYiLCJwcmV2aW91c0xlYWZEaXYiLCJiYWNrZ3JvdW5kQ29sb3VyIiwiZ2V0QmFja2dyb3VuZENvbG91ciIsImhpZGUiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2hvdyIsImJhY2tncm91bmRDb2xvciIsImNzcyIsImhpZGVBbGxMZWFmRGl2cyIsImZvckVhY2hMZWFmRGl2IiwibGVhZkRpdiIsImZpbmQiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInJldHJpZXZlTGVhZkRpdnMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImRpdk5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsIkRJVlNfU0VMRUNUT1IiLCJsZWFmRGl2Tm9kZXMiLCJsZWFmTm9kZXNGcm9tTm9kZUxpc3QiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIkxlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJnZXRTdGF0ZSIsInNldExlZnREaXZzIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImFwcGVuZERpdkRPTUVsZW1lbnQiLCJkaXZET01FbGVtZW50IiwicHJvcGVydGllcyIsImFwcGVuZCIsImRpZE1vdW50Iiwid2luZG93Iiwib25LZXlEb3duIiwib25DdXN0b21UYXAiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9mZktleURvd24iLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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