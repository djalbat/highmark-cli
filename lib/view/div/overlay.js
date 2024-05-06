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
        "\n  \n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n    \n  .native-gestures {\n    touch-action: auto;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
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
                var invertColours = this.invertColours.bind(this), revertColours = this.revertColours.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), updateOverlayDivZoom = this.updateZoom.bind(this); ///
                return {
                    invertColours: invertColours,
                    revertColours: revertColours,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen,
                    updateOverlayDivZoom: updateOverlayDivZoom
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi4vZGl2L2xlYWZcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFZpZXdab29tIGFzIGdldFpvb20sIHNldFZpZXdab29tIGFzIHNldFpvb20sIHNldENvbG91cnNJbnZlcnRlZCwgYXJlQ29sb3Vyc0ludmVydGVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBPdmVybGF5RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcDtcblxuICAgICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIGNvbnRyb2xsZXIudW5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlYWZEaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB1cGRhdGVab29tKCkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKTtcblxuICAgIGRpc3BsYXllZExlYWZEaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc2hvd0ZpcnN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBuZXh0SW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0TGVmdERpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdExlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgbmV4dEluZGV4ID0gbGVhZkRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBuZXh0SW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvdXIgPSBuZXh0TGVhZkRpdi5nZXRCYWNrZ3JvdW5kQ29sb3VyKCk7XG5cbiAgICBsZXQgem9vbTtcblxuICAgIHpvb20gPSAxO1xuXG4gICAgcHJldmlvdXNMZWFmRGl2Lnpvb20oem9vbSk7XG5cbiAgICB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgbmV4dExlYWZEaXYuem9vbSh6b29tKTtcblxuICAgIHByZXZpb3VzTGVhZkRpdi5oaWRlKCk7XG5cbiAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cik7XG5cbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgIG5leHRMZWFmRGl2LnNob3coKTtcbiAgfVxuXG4gIHNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cikge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvdXIsIC8vL1xuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgaGlkZUFsbExlYWZEaXZzKCkge1xuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYpID0+IHtcbiAgICAgIGxlYWZEaXYuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZERpc3BsYXllZExlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IGxlYWZEaXZzLmZpbmQoKGxlYWZEaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZCA9IGxlYWZEaXYuaXNEaXNwbGF5ZWQoKTtcblxuICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXNwbGF5ZWRMZWFmRGl2O1xuICB9XG5cbiAgcmV0cmlldmVMZWFmRGl2cygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgZGl2Tm9kZUxpc3QgPSBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRElWU19TRUxFQ1RPUiksXG4gICAgICAgICAgbGVhZkRpdk5vZGVzID0gbGVhZk5vZGVzRnJvbU5vZGVMaXN0KGRpdk5vZGVMaXN0KSwgIC8vL1xuICAgICAgICAgIGxlYWZEaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMobGVhZkRpdk5vZGVzLCBMZWFmRGl2KTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldExlYWZEaXZzKCkge1xuICAgIGNvbnN0IHsgbGVhZkRpdnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIHNldExlZnREaXZzKGxlYWZEaXZzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5yZXRyaWV2ZUxlYWZEaXZzKCksXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFmRGl2cyxcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZERpdkRPTUVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyBkaXZET01FbGVtZW50ICB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuYXBwZW5kKGRpdkRPTUVsZW1lbnQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLnNob3dGaXJzdExlYWZEaXYoKTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3VycygpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuICAgIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaW52ZXJ0Q29sb3VycyA9IHRoaXMuaW52ZXJ0Q29sb3Vycy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldmVydENvbG91cnMgPSB0aGlzLnJldmVydENvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU92ZXJsYXlEaXZab29tID0gdGhpcy51cGRhdGVab29tLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgaW52ZXJ0Q29sb3VycyxcbiAgICAgIHJldmVydENvbG91cnMsXG4gICAgICBleGl0RnVsbFNjcmVlbixcbiAgICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHVwZGF0ZU92ZXJsYXlEaXZab29tXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5hcHBlbmREaXZET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmhpZGVBbGxMZWFmRGl2cygpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImRpdkRPTUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwib3ZlcmxheVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oT3ZlcmxheURpdi5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oT3ZlcmxheURpdi5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoT3ZlcmxheURpdilgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiT3ZlcmxheURpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsImNsb3NlTWVudSIsInVwZGF0ZVpvb20iLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsImNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInpvb20iLCJnZXRab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwiTWF0aCIsInNxcnQiLCJzZXRab29tIiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzaG93TGVmdExlYWZEaXYiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0TGVmdERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwidGFwQ3VzdG9tSGFuZGxlciIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQiLCJvcGVuTWVudSIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJ1bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3RMZWFmRGl2Iiwic2hvd0xhc3RMZWFmRGl2IiwidXBkYXRlQ29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsImFyZUNvbG91cnNJbnZlcnRlZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaXNwbGF5ZWRMZWFmRGl2IiwiZmluZERpc3BsYXllZExlYWZEaXYiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiU0NST0xMX0RFTEFZIiwiREVDRUxFUkFUSU9OIiwiaW52ZXJ0Q29sb3VycyIsInNldENvbG91cnNJbnZlcnRlZCIsInJldmVydENvbG91cnMiLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0TGVhZkRpdiIsImxlYWZEaXZzIiwiZ2V0TGVhZkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsIm5leHRMZWFmRGl2IiwicHJldmlvdXNMZWFmRGl2IiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJoaWRlIiwic2V0QmFja2dyb3VuZENvbG91ciIsInNob3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJoaWRlQWxsTGVhZkRpdnMiLCJmb3JFYWNoTGVhZkRpdiIsImxlYWZEaXYiLCJmaW5kIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJyZXRyaWV2ZUxlYWZEaXZzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJkaXZOb2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJESVZTX1NFTEVDVE9SIiwibGVhZkRpdk5vZGVzIiwibGVhZk5vZGVzRnJvbU5vZGVMaXN0IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZ2V0U3RhdGUiLCJzZXRMZWZ0RGl2cyIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJhcHBlbmREaXZET01FbGVtZW50IiwiZGl2RE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJhcHBlbmQiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsImVuYWJsZUZ1bGxTY3JlZW4iLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZLZXlEb3duIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVPdmVybGF5RGl2Wm9vbSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbWlCQTs7O2VBQUE7OztvRUFqaUJzQjtvQkFFQzt5QkFDRTs4REFFTDsyREFDQTs0REFDSTtnRUFDSzswQkFFQTt5QkFDQztvQkFDUTt3QkFDRTt5QkFDNEQ7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkcsSUFBUUEsaUJBTXlCQyxtQkFBUSxDQU5qQ0QsZ0JBQ0FFLGtCQUt5QkQsbUJBQVEsQ0FMakNDLGlCQUNBQyxxQkFJeUJGLG1CQUFRLENBSmpDRSxvQkFDQUMsb0JBR3lCSCxtQkFBUSxDQUhqQ0csbUJBQ0FDLHNCQUV5QkosbUJBQVEsQ0FGakNJLHFCQUNBQyxzQkFDeUJMLG1CQUFRLENBRGpDSyxxQkFDQUMsdUJBQXlCTixtQkFBUSxDQUFqQ007QUFFUixJQUFBLEFBQU1DLDJCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxpQ0FBZ0MsU0FBQ0MsT0FBT0M7WUFDdENDLFdBQVdDLFNBQVM7WUFFcEIsTUFBS0MsVUFBVTtRQUNqQjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUNMLE9BQU9DLFNBQVNLLEtBQUtDO1lBQzdDLElBQU1DLGFBQWFDLElBQUFBLHdCQUFZO1lBRS9CLElBQUlELFlBQVk7Z0JBQ2ROLFdBQVdRLGNBQWM7Z0JBRXpCO1lBQ0Y7WUFFQSxNQUFLQyxxQkFBcUI7WUFFMUJULFdBQVdVLGtDQUFrQztRQUMvQztRQUVBQyxrREFBQUEsMkJBQTBCLFNBQUNiLE9BQU9DO1lBQ2hDLElBQU1hLE9BQU9DLElBQUFBLGtCQUFPLEtBQ2RDLFlBQVlGLE1BQU0sR0FBRztZQUUzQixNQUFLRyxZQUFZLENBQUNEO1FBQ3BCO1FBRUFFLGtEQUFBQSwwQkFBeUIsU0FBQ2xCLE9BQU9DLFNBQVNrQjtZQUN4QyxJQUFNSCxZQUFZLE1BQUtJLFlBQVksSUFDN0JOLE9BQU9FLFlBQVlLLEtBQUtDLElBQUksQ0FBQ0g7WUFFbkNJLElBQUFBLGtCQUFPLEVBQUNUO1lBRVIsTUFBS1YsVUFBVTtRQUNqQjtRQUVBb0Isa0RBQUFBLDJCQUEwQixTQUFDeEIsT0FBT0M7WUFDaEMsTUFBS3dCLGVBQWU7UUFDdEI7UUFFQUMsa0RBQUFBLDBCQUF5QixTQUFDMUIsT0FBT0M7WUFDL0IsTUFBSzBCLGdCQUFnQjtRQUN2QjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUM1QixPQUFPQyxTQUFTSyxLQUFLQyxNQUFNc0I7WUFDbkQsSUFBTUMsWUFBWUMseUJBQWM7WUFFaEMsTUFBS0MsY0FBYyxDQUFDSCxPQUFPQztRQUM3QjtRQUVBRyxrREFBQUEsd0JBQXVCLFNBQUNqQyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNc0I7WUFDakQsSUFBTUMsWUFBWUksdUJBQVk7WUFFOUIsTUFBS0YsY0FBYyxDQUFDSCxPQUFPQztRQUM3QjtRQUVBSyxrREFBQUEsMEJBQXlCLFNBQUNuQyxPQUFPQyxTQUFTSyxLQUFLQztZQUM3QyxJQUFNNkIsWUFBWSxNQUFLQyxZQUFZLElBQzdCQyxpQkFBaUJGLFdBQVcsR0FBRztZQUVyQyxNQUFLRyxpQkFBaUIsQ0FBQ0Q7UUFDekI7UUFFQUUsa0RBQUFBLHlCQUF3QixTQUFDeEMsT0FBT0MsU0FBU0ssS0FBS0M7WUFDNUMsSUFBTStCLGlCQUFpQixNQUFLRyxpQkFBaUI7WUFFN0MsSUFBSUgsbUJBQW1CLE1BQU07Z0JBQzNCO1lBQ0Y7WUFFQSxJQUFNRixZQUFZRSxpQkFBaUJoQztZQUVuQyxNQUFLb0MsWUFBWSxDQUFDTjtRQUNwQjtRQUVBTyxrREFBQUEsdUJBQXNCLFNBQUMzQyxPQUFPQyxTQUFTSyxLQUFLQztZQUMxQyxJQUFNK0IsaUJBQWlCLE1BQUtHLGlCQUFpQjtZQUU3QyxJQUFJSCxtQkFBbUIsTUFBTTtnQkFDM0I7WUFDRjtZQUVBLElBQU1GLFlBQVlFLGlCQUFpQmhDO1lBRW5DLE1BQUtvQyxZQUFZLENBQUNOO1FBQ3BCO1FBRUFRLGtEQUFBQSxvQkFBbUIsU0FBQzVDLE9BQU9DLFNBQVNLLEtBQUtDO1lBQ3ZDLElBQU1DLGFBQWFDLElBQUFBLHdCQUFZO1lBRS9CLElBQUksQ0FBQ0QsWUFBWTtnQkFDZixJQUFNcUMsU0FBUyxNQUFLQyxTQUFTLElBQ3ZCQyxTQUFTRixTQUFTdkM7Z0JBRXhCLElBQUl5QyxTQUFTQyxvQ0FBeUIsRUFBRTtvQkFDdEM5QyxXQUFXK0MsUUFBUTtvQkFFbkI7Z0JBQ0Y7WUFDRjtZQUVBLE1BQUtDLHNCQUFzQjtZQUUzQmhELFdBQVdpRCxvQ0FBb0M7UUFDakQ7UUFFQUMsa0RBQUFBLGtCQUFpQixTQUFDcEQsT0FBT0M7WUFDdkIsSUFBTSxBQUFFb0QsVUFBWXJELE1BQVpxRDtZQUVSLE9BQVFBO2dCQUNOLEtBQUsvRDtnQkFDTCxLQUFLTztvQkFBc0I7d0JBQ3pCLE1BQUs4QixnQkFBZ0I7d0JBRXJCO29CQUNGO2dCQUVBLEtBQUtsQztnQkFDTCxLQUFLRztvQkFBcUI7d0JBQ3hCLE1BQUs2QixlQUFlO3dCQUVwQjtvQkFDRjtnQkFFQSxLQUFLakM7b0JBQWlCO3dCQUdwQjtvQkFDRjtnQkFFQSxLQUFLRTtvQkFBbUI7d0JBQ3RCLE1BQUs0RCxnQkFBZ0I7d0JBRXJCO29CQUNGO2dCQUVBLEtBQUszRDtvQkFBcUI7d0JBQ3hCLE1BQUs0RCxlQUFlO3dCQUVwQjtvQkFDRjtZQUNGO1FBQ0Y7OztrQkEvSUl6RDs7WUFpSkowRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxJQUFBQSx5QkFBa0I7Z0JBRTFDRCxrQkFDRSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxzQkFDWixJQUFJLENBQUNDLFdBQVcsQ0FBQztnQkFFckIsSUFBSSxDQUFDeEQsVUFBVTtZQUNqQjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVSxPQUFPQyxJQUFBQSxrQkFBTyxLQUNkOEMsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUVsREQsaUJBQWlCL0MsSUFBSSxDQUFDQTtZQUN4Qjs7O1lBRUFpRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTNCLFlBQVk7Z0JBRWxCLElBQUksQ0FBQ00sWUFBWSxDQUFDTjtZQUNwQjs7O1lBRUE0QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRS9CLElBQUlELGFBQWEsTUFBTTtvQkFDckJFLGNBQWNGO29CQUVkQSxXQUFXO29CQUVYLElBQUksQ0FBQ0csV0FBVyxDQUFDSDtnQkFDbkI7WUFDRjs7O1lBRUFqQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsS0FBSyxFQUFFQyxTQUFTOztnQkFDN0IsSUFBSU0sWUFBWSxJQUFJLENBQUNDLFlBQVk7Z0JBRWpDRCxhQUFhUCxRQUFRd0MsdUJBQVk7Z0JBRWpDLElBQUksQ0FBQzNCLFlBQVksQ0FBQ047Z0JBRWxCLElBQUk2QixXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFL0IsSUFBSUQsYUFBYSxNQUFNO29CQUNyQkUsY0FBY0Y7Z0JBQ2hCO2dCQUVBQSxXQUFXRyxZQUFZO29CQUNyQnZDLFFBQVFBLFFBQVFDLFlBQVl3Qyx1QkFBWTtvQkFFeEMsSUFBSSxBQUFDekMsUUFBUUMsWUFBYSxHQUFHO3dCQUMzQnFDLGNBQWNGO3dCQUVkQSxXQUFXO3dCQUVYLE1BQUtHLFdBQVcsQ0FBQ0g7b0JBQ25CO29CQUVBLElBQUk3QixZQUFZLE1BQUtDLFlBQVk7b0JBRWpDRCxhQUFhUCxRQUFRd0MsdUJBQVk7b0JBRWpDLE1BQUszQixZQUFZLENBQUNOO2dCQUNwQixHQUFHaUMsdUJBQVk7Z0JBRWYsSUFBSSxDQUFDRCxXQUFXLENBQUNIO1lBQ25COzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLGtCQUFrQjtnQkFFeEJlLElBQUFBLHlCQUFrQixFQUFDZjtnQkFFbkIsSUFBSSxDQUFDRCxhQUFhO1lBQ3BCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsa0JBQWtCO2dCQUV4QmUsSUFBQUEseUJBQWtCLEVBQUNmO2dCQUVuQixJQUFJLENBQUNELGFBQWE7WUFDcEI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsaUJBQWlCO1lBQ3hCOzs7WUFFQWhFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNnRCxRQUFRLENBQUM7Z0JBRWQsSUFBSSxDQUFDaUIscUJBQXFCO1lBQzVCOzs7WUFFQTFCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNVLFdBQVcsQ0FBQztnQkFFakIsSUFBSSxDQUFDaUIsb0JBQW9CO1lBQzNCOzs7WUFFQXZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNd0IsWUFBWSxHQUNaQyxnQkFBZ0JELFdBQVksR0FBRztnQkFFckMsSUFBSSxDQUFDRSxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQXRELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNb0MsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzVDbUIsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFFBQVFGLFNBQVNHLE9BQU8sQ0FBQ3ZCLG1CQUN6QmlCLFlBQVlLLFFBQVEsR0FDcEJKLGdCQUFnQkksT0FBUSxHQUFHO2dCQUVqQyxJQUFJTCxjQUFjLENBQUMsR0FBRztvQkFDcEI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRSxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQXBELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNa0MsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzVDbUIsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JHLGlCQUFpQkosU0FBU0ssTUFBTSxFQUNoQ0gsUUFBUUYsU0FBU0csT0FBTyxDQUFDdkIsbUJBQ3pCaUIsWUFBWUssUUFBUSxHQUNwQkosZ0JBQWdCSSxPQUFRLEdBQUc7Z0JBRWpDLElBQUlMLGNBQWNPLGdCQUFnQjtvQkFDaEM7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTCxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQXhCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNMEIsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JHLGlCQUFpQkosU0FBU0ssTUFBTSxFQUNoQ1IsWUFBWU8saUJBQWlCLEdBQzdCTixnQkFBZ0JELFdBQVksR0FBRztnQkFFckMsSUFBSSxDQUFDRSxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkYsU0FBUyxFQUFFQyxhQUFhO2dCQUN0QyxJQUFNRSxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkssY0FBY04sUUFBUSxDQUFDSCxVQUFVLEVBQ2pDVSxrQkFBa0JQLFFBQVEsQ0FBQ0YsY0FBYyxFQUN6Q1UsbUJBQW1CRixZQUFZRyxtQkFBbUI7Z0JBRXhELElBQUk1RTtnQkFFSkEsT0FBTztnQkFFUDBFLGdCQUFnQjFFLElBQUksQ0FBQ0E7Z0JBRXJCQSxPQUFPQyxJQUFBQSxrQkFBTztnQkFFZHdFLFlBQVl6RSxJQUFJLENBQUNBO2dCQUVqQjBFLGdCQUFnQkcsSUFBSTtnQkFFcEIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ0g7Z0JBRXpCLElBQUksQ0FBQ3pCLGFBQWE7Z0JBRWxCLElBQUksQ0FBQ0QsV0FBVztnQkFFaEJ3QixZQUFZTSxJQUFJO1lBQ2xCOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkgsZ0JBQWdCO2dCQUNsQyxJQUFNSyxrQkFBa0JMLGtCQUNsQk0sTUFBTTtvQkFDSkQsaUJBQUFBO2dCQUNGO2dCQUVOLElBQUksQ0FBQ0MsR0FBRyxDQUFDQTtZQUNYOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsY0FBYyxDQUFDLFNBQUNDO29CQUNuQkEsUUFBUVAsSUFBSTtnQkFDZDtZQUNGOzs7WUFFQTdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbUIsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JyQixtQkFBbUJvQixTQUFTa0IsSUFBSSxDQUFDLFNBQUNEO29CQUNoQyxJQUFNRSxZQUFZRixRQUFRRyxXQUFXO29CQUVyQyxJQUFJRCxXQUFXO3dCQUNiLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sT0FBT3ZDO1lBQ1Q7OztZQUVBeUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxjQUFjRixXQUFXRyxnQkFBZ0IsQ0FBQ0Msd0JBQWEsR0FDdkRDLGVBQWVDLElBQUFBLDJCQUFxQixFQUFDSixjQUNyQ3hCLFdBQVc2QixJQUFBQSxpQ0FBdUIsRUFBQ0YsY0FBY0csYUFBTztnQkFFOUQsT0FBTzlCO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVlLFFBQVE7Z0JBQ3JCLElBQU0vQixXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFakNELFNBQVNnQyxPQUFPLENBQUNEO1lBQ25COzs7WUFFQTlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELFdBQWEsSUFBSSxDQUFDaUMsUUFBUSxHQUExQmpDO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBa0MsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlsQyxRQUFRO2dCQUNsQixJQUFJLENBQUNtQyxXQUFXLENBQUM7b0JBQ2ZuQyxVQUFBQTtnQkFDRjtZQUNGOzs7WUFFQWYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsV0FBYSxJQUFJLENBQUNpRCxRQUFRLEdBQTFCakQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFZSCxRQUFRO2dCQUNsQixJQUFJLENBQUNtRCxXQUFXLENBQUM7b0JBQ2ZuRCxVQUFBQTtnQkFDRjtZQUNGOzs7WUFFQTdDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVKLFlBQWMsSUFBSSxDQUFDa0csUUFBUSxHQUEzQmxHO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUQsU0FBUztnQkFDcEIsSUFBSSxDQUFDb0csV0FBVyxDQUFDO29CQUNmcEcsV0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUF5QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFSCxpQkFBbUIsSUFBSSxDQUFDNEUsUUFBUSxHQUFoQzVFO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCRCxjQUFjO2dCQUM5QixJQUFJLENBQUM4RSxXQUFXLENBQUM7b0JBQ2Y5RSxnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUErRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXBDLFdBQVcsSUFBSSxDQUFDcUIsZ0JBQWdCLElBQ2hDckMsV0FBVyxNQUNYakQsWUFBWSxNQUNac0IsaUJBQWlCO2dCQUV2QixJQUFJLENBQUNnRixRQUFRLENBQUM7b0JBQ1pyQyxVQUFBQTtvQkFDQWhCLFVBQUFBO29CQUNBakQsV0FBQUE7b0JBQ0FzQixnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFpRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxnQkFBbUIsSUFBSSxDQUFDQyxVQUFVLENBQWxDRCxlQUNGakIsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXJDRCxXQUFXbUIsTUFBTSxDQUFDRjtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRUMsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDekUsY0FBYztnQkFFcEMsSUFBSSxDQUFDMEUsV0FBVyxDQUFDLElBQUksQ0FBQ2xGLGdCQUFnQjtnQkFDdEMsSUFBSSxDQUFDbUYsY0FBYyxDQUFDLElBQUksQ0FBQ3BGLG1CQUFtQjtnQkFDNUMsSUFBSSxDQUFDcUYsZ0JBQWdCLENBQUMsSUFBSSxDQUFDeEYscUJBQXFCO2dCQUNoRCxJQUFJLENBQUN5RixpQkFBaUIsQ0FBQyxJQUFJLENBQUM5RixzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQytGLGVBQWUsQ0FBQyxJQUFJLENBQUNqRyxvQkFBb0I7Z0JBQzlDLElBQUksQ0FBQ2tHLGlCQUFpQixDQUFDLElBQUksQ0FBQ3ZHLHNCQUFzQjtnQkFDbEQsSUFBSSxDQUFDd0csaUJBQWlCLENBQUMsSUFBSSxDQUFDMUcsc0JBQXNCO2dCQUNsRCxJQUFJLENBQUMyRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM3Ryx1QkFBdUI7Z0JBQ3BELElBQUksQ0FBQzhHLGlCQUFpQixDQUFDLElBQUksQ0FBQ3BILHNCQUFzQjtnQkFDbEQsSUFBSSxDQUFDcUgsa0JBQWtCLENBQUMsSUFBSSxDQUFDMUgsdUJBQXVCO2dCQUNwRCxJQUFJLENBQUMySCxpQkFBaUIsQ0FBQyxJQUFJLENBQUNuSSxzQkFBc0I7Z0JBRWxELElBQUksQ0FBQ29JLHdCQUF3QixDQUFDLElBQUksQ0FBQzFJLDZCQUE2QjtnQkFFaEUsSUFBSSxDQUFDMkksZ0JBQWdCO2dCQUNyQixJQUFJLENBQUNDLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ3JGLGdCQUFnQjtnQkFFckIsSUFBSSxDQUFDRSxhQUFhO2dCQUVsQixJQUFJLENBQUNwRCxVQUFVO1lBQ2pCOzs7WUFFQXdJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFlBQVk7Z0JBQ2pCLElBQUksQ0FBQ0MsaUJBQWlCO2dCQUV0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNuRyxnQkFBZ0I7Z0JBQ3ZDLElBQUksQ0FBQ29HLGVBQWUsQ0FBQyxJQUFJLENBQUNyRyxtQkFBbUI7Z0JBQzdDLElBQUksQ0FBQ3NHLGlCQUFpQixDQUFDLElBQUksQ0FBQ3pHLHFCQUFxQjtnQkFDakQsSUFBSSxDQUFDMEcsa0JBQWtCLENBQUMsSUFBSSxDQUFDL0csc0JBQXNCO2dCQUNuRCxJQUFJLENBQUNnSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNsSCxvQkFBb0I7Z0JBQy9DLElBQUksQ0FBQ21ILGtCQUFrQixDQUFDLElBQUksQ0FBQ3hILHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDeUgsa0JBQWtCLENBQUMsSUFBSSxDQUFDM0gsc0JBQXNCO2dCQUNuRCxJQUFJLENBQUM0SCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM5SCx1QkFBdUI7Z0JBQ3JELElBQUksQ0FBQytILGtCQUFrQixDQUFDLElBQUksQ0FBQ3JJLHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDc0ksbUJBQW1CLENBQUMsSUFBSSxDQUFDM0ksdUJBQXVCO2dCQUNyRCxJQUFJLENBQUM0SSxrQkFBa0IsQ0FBQyxJQUFJLENBQUNwSixzQkFBc0I7Z0JBRW5ELElBQUksQ0FBQ3FKLHlCQUF5QixDQUFDLElBQUksQ0FBQzNKLDZCQUE2QjtnQkFFakU2SCxZQUFNLENBQUMrQixVQUFVLENBQUMsSUFBSSxDQUFDdkcsY0FBYztZQUN2Qzs7O1lBRUF3RyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXJGLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ3NGLElBQUksQ0FBQyxJQUFJLEdBQzVDcEYsZ0JBQWdCLElBQUksQ0FBQ0EsYUFBYSxDQUFDb0YsSUFBSSxDQUFDLElBQUksR0FDNUNuSixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNtSixJQUFJLENBQUMsSUFBSSxHQUM5Q25GLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ21GLElBQUksQ0FBQyxJQUFJLEdBQ2hEQyx1QkFBdUIsSUFBSSxDQUFDMUosVUFBVSxDQUFDeUosSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU3RCxPQUFRO29CQUNOdEYsZUFBQUE7b0JBQ0FFLGVBQUFBO29CQUNBL0QsZ0JBQUFBO29CQUNBZ0UsaUJBQUFBO29CQUNBb0Ysc0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUFJLENBQUN6QyxtQkFBbUI7Z0JBRXhCLElBQUksQ0FBQ0YsZUFBZTtnQkFFcEIsSUFBSSxDQUFDbkUsc0JBQXNCO2dCQUUzQixJQUFJLENBQUM4QyxlQUFlO1lBQ3RCOzs7V0F4ZklsRztxQkFBbUJtSyxnQkFBTztBQTBmOUIsaUJBMWZJbkssWUEwZkdvSyxXQUFVO0FBRWpCLGlCQTVmSXBLLFlBNGZHcUsscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkFoZ0JJckssWUFnZ0JHc0sscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRkMsT0FBT0MsTUFBTSxDQUFDekssV0FBVzBLLFNBQVMsRUFBRUMsY0FBVztBQUMvQ0gsT0FBT0MsTUFBTSxDQUFDekssV0FBVzBLLFNBQVMsRUFBRUUsa0JBQWdCO0lBRXBELFdBQWVDLElBQUFBLHNCQUFTLEVBQUM3SyJ9