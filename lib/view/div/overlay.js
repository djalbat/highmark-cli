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
        "\n  \n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  touch-action: none;\n    \n  .native-gestures {\n    touch-action: auto;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
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
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), nextIndex = 0, previousIndex = index === -1 ? nextIndex : index; ///
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
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), leafDivsLength = leafDivs.length, nextIndex = leafDivsLength - 1, previousIndex = index === -1 ? nextIndex : index; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi4vZGl2L2xlYWZcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFZpZXdab29tIGFzIGdldFpvb20sIHNldFZpZXdab29tIGFzIHNldFpvb20sIHNldENvbG91cnNJbnZlcnRlZCwgYXJlQ29sb3Vyc0ludmVydGVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBPdmVybGF5RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcDtcblxuICAgICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIGNvbnRyb2xsZXIudW5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlYWZEaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB1cGRhdGVab29tKCkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKTtcblxuICAgIGRpc3BsYXllZExlYWZEaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc2hvd0ZpcnN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSAoaW5kZXggPT09IC0xKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IChpbmRleCA9PT0gLTEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3VyID0gbmV4dExlYWZEaXYuZ2V0QmFja2dyb3VuZENvbG91cigpO1xuXG4gICAgbGV0IHpvb207XG5cbiAgICB6b29tID0gMTtcblxuICAgIHByZXZpb3VzTGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgem9vbSA9IGdldFpvb20oKTtcblxuICAgIG5leHRMZWFmRGl2Lnpvb20oem9vbSk7XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0TGVhZkRpdi5zaG93KCk7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGhpZGVBbGxMZWFmRGl2cygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2KSA9PiB7XG4gICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmREaXNwbGF5ZWRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGRpc3BsYXllZExlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWQgPSBsZWFmRGl2LmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkTGVhZkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTGVhZkRpdnMoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGRpdk5vZGVMaXN0ID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVlNfU0VMRUNUT1IpLFxuICAgICAgICAgIGxlYWZEaXZOb2RlcyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdChkaXZOb2RlTGlzdCksICAvLy9cbiAgICAgICAgICBsZWFmRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGxlYWZEaXZOb2RlcywgTGVhZkRpdik7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBmb3JFYWNoTGVhZkRpdihjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpO1xuXG4gICAgbGVhZkRpdnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMucmV0cmlldmVMZWFmRGl2cygpLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZkRpdnMsXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmREaXZET01FbGVtZW50KCkge1xuICAgIGNvbnN0IHsgZGl2RE9NRWxlbWVudCAgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmFwcGVuZChkaXZET01FbGVtZW50KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3RMZWFmRGl2KCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGludmVydENvbG91cnMgPSB0aGlzLmludmVydENvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXZlcnRDb2xvdXJzID0gdGhpcy5yZXZlcnRDb2xvdXJzLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5RGl2Wm9vbSA9IHRoaXMudXBkYXRlWm9vbS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGludmVydENvbG91cnMsXG4gICAgICByZXZlcnRDb2xvdXJzLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICB1cGRhdGVPdmVybGF5RGl2Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuYXBwZW5kRGl2RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5oaWRlQWxsTGVhZkRpdnMoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXZET01FbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm92ZXJsYXlcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE92ZXJsYXlEaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKE92ZXJsYXlEaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE92ZXJsYXlEaXYpYFxuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiT3ZlcmxheURpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsImNsb3NlTWVudSIsInVwZGF0ZVpvb20iLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsImNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInpvb20iLCJnZXRab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwiTWF0aCIsInNxcnQiLCJzZXRab29tIiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzaG93TGVmdExlYWZEaXYiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0TGVmdERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwidGFwQ3VzdG9tSGFuZGxlciIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQiLCJvcGVuTWVudSIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJ1bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3RMZWFmRGl2Iiwic2hvd0xhc3RMZWFmRGl2IiwidXBkYXRlQ29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsImFyZUNvbG91cnNJbnZlcnRlZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaXNwbGF5ZWRMZWFmRGl2IiwiZmluZERpc3BsYXllZExlYWZEaXYiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiU0NST0xMX0RFTEFZIiwiREVDRUxFUkFUSU9OIiwiaW52ZXJ0Q29sb3VycyIsInNldENvbG91cnNJbnZlcnRlZCIsInJldmVydENvbG91cnMiLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dExlYWZEaXYiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsIm5leHRMZWFmRGl2IiwicHJldmlvdXNMZWFmRGl2IiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJoaWRlIiwic2V0QmFja2dyb3VuZENvbG91ciIsInNob3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJoaWRlQWxsTGVhZkRpdnMiLCJmb3JFYWNoTGVhZkRpdiIsImxlYWZEaXYiLCJmaW5kIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJyZXRyaWV2ZUxlYWZEaXZzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJkaXZOb2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJESVZTX1NFTEVDVE9SIiwibGVhZkRpdk5vZGVzIiwibGVhZk5vZGVzRnJvbU5vZGVMaXN0IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZ2V0U3RhdGUiLCJzZXRMZWZ0RGl2cyIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJhcHBlbmREaXZET01FbGVtZW50IiwiZGl2RE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJhcHBlbmQiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsImVuYWJsZUZ1bGxTY3JlZW4iLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZLZXlEb3duIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVPdmVybGF5RGl2Wm9vbSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNGlCQTs7O2VBQUE7OztvRUExaUJzQjtvQkFFQzt5QkFDRTs4REFFTDsyREFDQTs0REFDSTtnRUFDSzswQkFFQTt5QkFDQztvQkFDUTt3QkFDRTt5QkFDNEQ7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkcsSUFBUUEsaUJBTXlCQyxtQkFBUSxDQU5qQ0QsZ0JBQ0FFLGtCQUt5QkQsbUJBQVEsQ0FMakNDLGlCQUNBQyxxQkFJeUJGLG1CQUFRLENBSmpDRSxvQkFDQUMsb0JBR3lCSCxtQkFBUSxDQUhqQ0csbUJBQ0FDLHNCQUV5QkosbUJBQVEsQ0FGakNJLHFCQUNBQyxzQkFDeUJMLG1CQUFRLENBRGpDSyxxQkFDQUMsdUJBQXlCTixtQkFBUSxDQUFqQ007QUFFUixJQUFBLEFBQU1DLDJCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxpQ0FBZ0MsU0FBQ0MsT0FBT0M7WUFDdENDLFdBQVdDLFNBQVM7WUFFcEIsTUFBS0MsVUFBVTtRQUNqQjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUNMLE9BQU9DLFNBQVNLLEtBQUtDO1lBQzdDLElBQU1DLGFBQWFDLElBQUFBLHdCQUFZO1lBRS9CLElBQUlELFlBQVk7Z0JBQ2ROLFdBQVdRLGNBQWM7Z0JBRXpCO1lBQ0Y7WUFFQSxNQUFLQyxxQkFBcUI7WUFFMUJULFdBQVdVLGtDQUFrQztRQUMvQztRQUVBQyxrREFBQUEsMkJBQTBCLFNBQUNiLE9BQU9DO1lBQ2hDLElBQU1hLE9BQU9DLElBQUFBLGtCQUFPLEtBQ2RDLFlBQVlGLE1BQU0sR0FBRztZQUUzQixNQUFLRyxZQUFZLENBQUNEO1FBQ3BCO1FBRUFFLGtEQUFBQSwwQkFBeUIsU0FBQ2xCLE9BQU9DLFNBQVNrQjtZQUN4QyxJQUFNSCxZQUFZLE1BQUtJLFlBQVksSUFDN0JOLE9BQU9FLFlBQVlLLEtBQUtDLElBQUksQ0FBQ0g7WUFFbkNJLElBQUFBLGtCQUFPLEVBQUNUO1lBRVIsTUFBS1YsVUFBVTtRQUNqQjtRQUVBb0Isa0RBQUFBLDJCQUEwQixTQUFDeEIsT0FBT0M7WUFDaEMsTUFBS3dCLGVBQWU7UUFDdEI7UUFFQUMsa0RBQUFBLDBCQUF5QixTQUFDMUIsT0FBT0M7WUFDL0IsTUFBSzBCLGdCQUFnQjtRQUN2QjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUM1QixPQUFPQyxTQUFTSyxLQUFLQyxNQUFNc0I7WUFDbkQsSUFBTUMsWUFBWUMseUJBQWM7WUFFaEMsTUFBS0MsY0FBYyxDQUFDSCxPQUFPQztRQUM3QjtRQUVBRyxrREFBQUEsd0JBQXVCLFNBQUNqQyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNc0I7WUFDakQsSUFBTUMsWUFBWUksdUJBQVk7WUFFOUIsTUFBS0YsY0FBYyxDQUFDSCxPQUFPQztRQUM3QjtRQUVBSyxrREFBQUEsMEJBQXlCLFNBQUNuQyxPQUFPQyxTQUFTSyxLQUFLQztZQUM3QyxJQUFNNkIsWUFBWSxNQUFLQyxZQUFZLElBQzdCQyxpQkFBaUJGLFdBQVcsR0FBRztZQUVyQyxNQUFLRyxpQkFBaUIsQ0FBQ0Q7UUFDekI7UUFFQUUsa0RBQUFBLHlCQUF3QixTQUFDeEMsT0FBT0MsU0FBU0ssS0FBS0M7WUFDNUMsSUFBTStCLGlCQUFpQixNQUFLRyxpQkFBaUI7WUFFN0MsSUFBSUgsbUJBQW1CLE1BQU07Z0JBQzNCO1lBQ0Y7WUFFQSxJQUFNRixZQUFZRSxpQkFBaUJoQztZQUVuQyxNQUFLb0MsWUFBWSxDQUFDTjtRQUNwQjtRQUVBTyxrREFBQUEsdUJBQXNCLFNBQUMzQyxPQUFPQyxTQUFTSyxLQUFLQztZQUMxQyxJQUFNK0IsaUJBQWlCLE1BQUtHLGlCQUFpQjtZQUU3QyxJQUFJSCxtQkFBbUIsTUFBTTtnQkFDM0I7WUFDRjtZQUVBLElBQU1GLFlBQVlFLGlCQUFpQmhDO1lBRW5DLE1BQUtvQyxZQUFZLENBQUNOO1FBQ3BCO1FBRUFRLGtEQUFBQSxvQkFBbUIsU0FBQzVDLE9BQU9DLFNBQVNLLEtBQUtDO1lBQ3ZDLElBQU1DLGFBQWFDLElBQUFBLHdCQUFZO1lBRS9CLElBQUksQ0FBQ0QsWUFBWTtnQkFDZixJQUFNcUMsU0FBUyxNQUFLQyxTQUFTLElBQ3ZCQyxTQUFTRixTQUFTdkM7Z0JBRXhCLElBQUl5QyxTQUFTQyxvQ0FBeUIsRUFBRTtvQkFDdEM5QyxXQUFXK0MsUUFBUTtvQkFFbkI7Z0JBQ0Y7WUFDRjtZQUVBLE1BQUtDLHNCQUFzQjtZQUUzQmhELFdBQVdpRCxvQ0FBb0M7UUFDakQ7UUFFQUMsa0RBQUFBLGtCQUFpQixTQUFDcEQsT0FBT0M7WUFDdkIsSUFBTSxBQUFFb0QsVUFBWXJELE1BQVpxRDtZQUVSLE9BQVFBO2dCQUNOLEtBQUsvRDtnQkFDTCxLQUFLTztvQkFBc0I7d0JBQ3pCLE1BQUs4QixnQkFBZ0I7d0JBRXJCO29CQUNGO2dCQUVBLEtBQUtsQztnQkFDTCxLQUFLRztvQkFBcUI7d0JBQ3hCLE1BQUs2QixlQUFlO3dCQUVwQjtvQkFDRjtnQkFFQSxLQUFLakM7b0JBQWlCO3dCQUdwQjtvQkFDRjtnQkFFQSxLQUFLRTtvQkFBbUI7d0JBQ3RCLE1BQUs0RCxnQkFBZ0I7d0JBRXJCO29CQUNGO2dCQUVBLEtBQUszRDtvQkFBcUI7d0JBQ3hCLE1BQUs0RCxlQUFlO3dCQUVwQjtvQkFDRjtZQUNGO1FBQ0Y7OztrQkEvSUl6RDs7WUFpSkowRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxJQUFBQSx5QkFBa0I7Z0JBRTFDRCxrQkFDRSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxzQkFDWixJQUFJLENBQUNDLFdBQVcsQ0FBQztnQkFFckIsSUFBSSxDQUFDeEQsVUFBVTtZQUNqQjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVSxPQUFPQyxJQUFBQSxrQkFBTyxLQUNkOEMsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUVsREQsaUJBQWlCL0MsSUFBSSxDQUFDQTtZQUN4Qjs7O1lBRUFpRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTNCLFlBQVk7Z0JBRWxCLElBQUksQ0FBQ00sWUFBWSxDQUFDTjtZQUNwQjs7O1lBRUE0QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRS9CLElBQUlELGFBQWEsTUFBTTtvQkFDckJFLGNBQWNGO29CQUVkQSxXQUFXO29CQUVYLElBQUksQ0FBQ0csV0FBVyxDQUFDSDtnQkFDbkI7WUFDRjs7O1lBRUFqQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsS0FBSyxFQUFFQyxTQUFTOztnQkFDN0IsSUFBSU0sWUFBWSxJQUFJLENBQUNDLFlBQVk7Z0JBRWpDRCxhQUFhUCxRQUFRd0MsdUJBQVk7Z0JBRWpDLElBQUksQ0FBQzNCLFlBQVksQ0FBQ047Z0JBRWxCLElBQUk2QixXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFL0IsSUFBSUQsYUFBYSxNQUFNO29CQUNyQkUsY0FBY0Y7Z0JBQ2hCO2dCQUVBQSxXQUFXRyxZQUFZO29CQUNyQnZDLFFBQVFBLFFBQVFDLFlBQVl3Qyx1QkFBWTtvQkFFeEMsSUFBSSxBQUFDekMsUUFBUUMsWUFBYSxHQUFHO3dCQUMzQnFDLGNBQWNGO3dCQUVkQSxXQUFXO3dCQUVYLE1BQUtHLFdBQVcsQ0FBQ0g7b0JBQ25CO29CQUVBLElBQUk3QixZQUFZLE1BQUtDLFlBQVk7b0JBRWpDRCxhQUFhUCxRQUFRd0MsdUJBQVk7b0JBRWpDLE1BQUszQixZQUFZLENBQUNOO2dCQUNwQixHQUFHaUMsdUJBQVk7Z0JBRWYsSUFBSSxDQUFDRCxXQUFXLENBQUNIO1lBQ25COzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLGtCQUFrQjtnQkFFeEJlLElBQUFBLHlCQUFrQixFQUFDZjtnQkFFbkIsSUFBSSxDQUFDRCxhQUFhO1lBQ3BCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsa0JBQWtCO2dCQUV4QmUsSUFBQUEseUJBQWtCLEVBQUNmO2dCQUVuQixJQUFJLENBQUNELGFBQWE7WUFDcEI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsaUJBQWlCO1lBQ3hCOzs7WUFFQWhFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNnRCxRQUFRLENBQUM7Z0JBRWQsSUFBSSxDQUFDaUIscUJBQXFCO1lBQzVCOzs7WUFFQTFCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNVLFdBQVcsQ0FBQztnQkFFakIsSUFBSSxDQUFDaUIsb0JBQW9CO1lBQzNCOzs7WUFFQXZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTyxtQkFBbUIsSUFBSSxDQUFDQyxvQkFBb0IsSUFDNUNnQixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsUUFBUUYsU0FBU0csT0FBTyxDQUFDcEIsbUJBQ3pCcUIsWUFBWSxHQUNaQyxnQkFBZ0IsQUFBQ0gsVUFBVSxDQUFDLElBQ1ZFLFlBQ0VGLE9BQVEsR0FBRztnQkFFckMsSUFBSSxDQUFDSSxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQTFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNb0MsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzVDZ0IsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFFBQVFGLFNBQVNHLE9BQU8sQ0FBQ3BCLG1CQUN6QnFCLFlBQVlGLFFBQVEsR0FDcEJHLGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjLENBQUMsR0FBRztvQkFDcEI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRSxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQXhELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNa0MsbUJBQW1CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzVDZ0IsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JNLGlCQUFpQlAsU0FBU1EsTUFBTSxFQUNoQ04sUUFBUUYsU0FBU0csT0FBTyxDQUFDcEIsbUJBQ3pCcUIsWUFBWUYsUUFBUSxHQUNwQkcsZ0JBQWdCSCxPQUFRLEdBQUc7Z0JBRWpDLElBQUlFLGNBQWNHLGdCQUFnQjtvQkFDaEM7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRCxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQTVCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSxtQkFBbUIsSUFBSSxDQUFDQyxvQkFBb0IsSUFDNUNnQixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsUUFBUUYsU0FBU0csT0FBTyxDQUFDcEIsbUJBQ3pCd0IsaUJBQWlCUCxTQUFTUSxNQUFNLEVBQ2hDSixZQUFZRyxpQkFBaUIsR0FDN0JGLGdCQUFnQixBQUFDSCxVQUFVLENBQUMsSUFDVkUsWUFDRUYsT0FBUSxHQUFHO2dCQUVyQyxJQUFJLENBQUNJLGVBQWUsQ0FBQ0YsV0FBV0M7WUFDbEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCRixTQUFTLEVBQUVDLGFBQWE7Z0JBQ3RDLElBQU1MLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCUSxjQUFjVCxRQUFRLENBQUNJLFVBQVUsRUFDakNNLGtCQUFrQlYsUUFBUSxDQUFDSyxjQUFjLEVBQ3pDTSxtQkFBbUJGLFlBQVlHLG1CQUFtQjtnQkFFeEQsSUFBSTVFO2dCQUVKQSxPQUFPO2dCQUVQMEUsZ0JBQWdCMUUsSUFBSSxDQUFDQTtnQkFFckJBLE9BQU9DLElBQUFBLGtCQUFPO2dCQUVkd0UsWUFBWXpFLElBQUksQ0FBQ0E7Z0JBRWpCMEUsZ0JBQWdCRyxJQUFJO2dCQUVwQixJQUFJLENBQUNDLG1CQUFtQixDQUFDSDtnQkFFekIsSUFBSSxDQUFDekIsYUFBYTtnQkFFbEIsSUFBSSxDQUFDRCxXQUFXO2dCQUVoQndCLFlBQVlNLElBQUk7WUFDbEI7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CSCxnQkFBZ0I7Z0JBQ2xDLElBQU1LLGtCQUFrQkwsa0JBQ2xCTSxNQUFNO29CQUNKRCxpQkFBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxjQUFjLENBQUMsU0FBQ0M7b0JBQ25CQSxRQUFRUCxJQUFJO2dCQUNkO1lBQ0Y7OztZQUVBN0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1nQixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQmxCLG1CQUFtQmlCLFNBQVNxQixJQUFJLENBQUMsU0FBQ0Q7b0JBQ2hDLElBQU1FLFlBQVlGLFFBQVFHLFdBQVc7b0JBRXJDLElBQUlELFdBQVc7d0JBQ2IsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPdkM7WUFDVDs7O1lBRUF5QyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGNBQWNGLFdBQVdHLGdCQUFnQixDQUFDQyx3QkFBYSxHQUN2REMsZUFBZUMsSUFBQUEsMkJBQXFCLEVBQUNKLGNBQ3JDM0IsV0FBV2dDLElBQUFBLGlDQUF1QixFQUFDRixjQUFjRyxhQUFPO2dCQUU5RCxPQUFPakM7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZWUsUUFBUTtnQkFDckIsSUFBTWxDLFdBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUVqQ0QsU0FBU21DLE9BQU8sQ0FBQ0Q7WUFDbkI7OztZQUVBakMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsV0FBYSxJQUFJLENBQUNvQyxRQUFRLEdBQTFCcEM7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFxQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWXJDLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ3NDLFdBQVcsQ0FBQztvQkFDZnRDLFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBWixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxXQUFhLElBQUksQ0FBQ2lELFFBQVEsR0FBMUJqRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQVlILFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ21ELFdBQVcsQ0FBQztvQkFDZm5ELFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBN0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUosWUFBYyxJQUFJLENBQUNrRyxRQUFRLEdBQTNCbEc7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxTQUFTO2dCQUNwQixJQUFJLENBQUNvRyxXQUFXLENBQUM7b0JBQ2ZwRyxXQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVILGlCQUFtQixJQUFJLENBQUM0RSxRQUFRLEdBQWhDNUU7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JELGNBQWM7Z0JBQzlCLElBQUksQ0FBQzhFLFdBQVcsQ0FBQztvQkFDZjlFLGdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQStFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdkMsV0FBVyxJQUFJLENBQUN3QixnQkFBZ0IsSUFDaENyQyxXQUFXLE1BQ1hqRCxZQUFZLE1BQ1pzQixpQkFBaUI7Z0JBRXZCLElBQUksQ0FBQ2dGLFFBQVEsQ0FBQztvQkFDWnhDLFVBQUFBO29CQUNBYixVQUFBQTtvQkFDQWpELFdBQUFBO29CQUNBc0IsZ0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBaUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsZ0JBQW1CLElBQUksQ0FBQ0MsVUFBVSxDQUFsQ0QsZUFDRmpCLGFBQWEsSUFBSSxDQUFDQyxhQUFhO2dCQUVyQ0QsV0FBV21CLE1BQU0sQ0FBQ0Y7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0VDLFlBQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ3pFLGNBQWM7Z0JBRXBDLElBQUksQ0FBQzBFLFdBQVcsQ0FBQyxJQUFJLENBQUNsRixnQkFBZ0I7Z0JBQ3RDLElBQUksQ0FBQ21GLGNBQWMsQ0FBQyxJQUFJLENBQUNwRixtQkFBbUI7Z0JBQzVDLElBQUksQ0FBQ3FGLGdCQUFnQixDQUFDLElBQUksQ0FBQ3hGLHFCQUFxQjtnQkFDaEQsSUFBSSxDQUFDeUYsaUJBQWlCLENBQUMsSUFBSSxDQUFDOUYsc0JBQXNCO2dCQUNsRCxJQUFJLENBQUMrRixlQUFlLENBQUMsSUFBSSxDQUFDakcsb0JBQW9CO2dCQUM5QyxJQUFJLENBQUNrRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUN2RyxzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQ3dHLGlCQUFpQixDQUFDLElBQUksQ0FBQzFHLHNCQUFzQjtnQkFDbEQsSUFBSSxDQUFDMkcsa0JBQWtCLENBQUMsSUFBSSxDQUFDN0csdUJBQXVCO2dCQUNwRCxJQUFJLENBQUM4RyxpQkFBaUIsQ0FBQyxJQUFJLENBQUNwSCxzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQ3FILGtCQUFrQixDQUFDLElBQUksQ0FBQzFILHVCQUF1QjtnQkFDcEQsSUFBSSxDQUFDMkgsaUJBQWlCLENBQUMsSUFBSSxDQUFDbkksc0JBQXNCO2dCQUVsRCxJQUFJLENBQUNvSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMxSSw2QkFBNkI7Z0JBRWhFLElBQUksQ0FBQzJJLGdCQUFnQjtnQkFDckIsSUFBSSxDQUFDQyxXQUFXO2dCQUVoQixJQUFJLENBQUNyRixnQkFBZ0I7Z0JBRXJCLElBQUksQ0FBQ0UsYUFBYTtnQkFFbEIsSUFBSSxDQUFDcEQsVUFBVTtZQUNqQjs7O1lBRUF3SSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxZQUFZO2dCQUNqQixJQUFJLENBQUNDLGlCQUFpQjtnQkFFdEIsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDbkcsZ0JBQWdCO2dCQUN2QyxJQUFJLENBQUNvRyxlQUFlLENBQUMsSUFBSSxDQUFDckcsbUJBQW1CO2dCQUM3QyxJQUFJLENBQUNzRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUN6RyxxQkFBcUI7Z0JBQ2pELElBQUksQ0FBQzBHLGtCQUFrQixDQUFDLElBQUksQ0FBQy9HLHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDZ0gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDbEgsb0JBQW9CO2dCQUMvQyxJQUFJLENBQUNtSCxrQkFBa0IsQ0FBQyxJQUFJLENBQUN4SCxzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQ3lILGtCQUFrQixDQUFDLElBQUksQ0FBQzNILHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDNEgsbUJBQW1CLENBQUMsSUFBSSxDQUFDOUgsdUJBQXVCO2dCQUNyRCxJQUFJLENBQUMrSCxrQkFBa0IsQ0FBQyxJQUFJLENBQUNySSxzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQ3NJLG1CQUFtQixDQUFDLElBQUksQ0FBQzNJLHVCQUF1QjtnQkFDckQsSUFBSSxDQUFDNEksa0JBQWtCLENBQUMsSUFBSSxDQUFDcEosc0JBQXNCO2dCQUVuRCxJQUFJLENBQUNxSix5QkFBeUIsQ0FBQyxJQUFJLENBQUMzSiw2QkFBNkI7Z0JBRWpFNkgsWUFBTSxDQUFDK0IsVUFBVSxDQUFDLElBQUksQ0FBQ3ZHLGNBQWM7WUFDdkM7OztZQUVBd0csS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1yRixnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNzRixJQUFJLENBQUMsSUFBSSxHQUM1Q3BGLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ29GLElBQUksQ0FBQyxJQUFJLEdBQzVDbkosaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDbUosSUFBSSxDQUFDLElBQUksR0FDOUNuRixrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNtRixJQUFJLENBQUMsSUFBSSxHQUNoREMsdUJBQXVCLElBQUksQ0FBQzFKLFVBQVUsQ0FBQ3lKLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFN0QsT0FBUTtvQkFDTnRGLGVBQUFBO29CQUNBRSxlQUFBQTtvQkFDQS9ELGdCQUFBQTtvQkFDQWdFLGlCQUFBQTtvQkFDQW9GLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBSSxDQUFDekMsbUJBQW1CO2dCQUV4QixJQUFJLENBQUNGLGVBQWU7Z0JBRXBCLElBQUksQ0FBQ25FLHNCQUFzQjtnQkFFM0IsSUFBSSxDQUFDOEMsZUFBZTtZQUN0Qjs7O1dBamdCSWxHO3FCQUFtQm1LLGdCQUFPO0FBbWdCOUIsaUJBbmdCSW5LLFlBbWdCR29LLFdBQVU7QUFFakIsaUJBcmdCSXBLLFlBcWdCR3FLLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBemdCSXJLLFlBeWdCR3NLLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0ZDLE9BQU9DLE1BQU0sQ0FBQ3pLLFdBQVcwSyxTQUFTLEVBQUVDLGNBQVc7QUFDL0NILE9BQU9DLE1BQU0sQ0FBQ3pLLFdBQVcwSyxTQUFTLEVBQUVFLGtCQUFnQjtJQUVwRCxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDN0sifQ==