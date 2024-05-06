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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi4vZGl2L2xlYWZcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFZpZXdab29tIGFzIGdldFpvb20sIHNldFZpZXdab29tIGFzIHNldFpvb20sIHNldENvbG91cnNJbnZlcnRlZCwgYXJlQ29sb3Vyc0ludmVydGVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBPdmVybGF5RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcDtcblxuICAgICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIGNvbnRyb2xsZXIudW5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlYWZEaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG4gIH1cblxuICB1cGRhdGVab29tKCkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKTtcblxuICAgIGRpc3BsYXllZExlYWZEaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgc2hvd0ZpcnN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSAoaW5kZXggPT09IC0xKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IChpbmRleCA9PT0gLTEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3VyID0gbmV4dExlYWZEaXYuZ2V0QmFja2dyb3VuZENvbG91cigpO1xuXG4gICAgbGV0IHpvb207XG5cbiAgICB6b29tID0gMTtcblxuICAgIHByZXZpb3VzTGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgem9vbSA9IGdldFpvb20oKTtcblxuICAgIG5leHRMZWFmRGl2Lnpvb20oem9vbSk7XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0TGVhZkRpdi5zaG93KCk7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGhpZGVBbGxMZWFmRGl2cygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2KSA9PiB7XG4gICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmREaXNwbGF5ZWRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGRpc3BsYXllZExlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWQgPSBsZWFmRGl2LmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkTGVhZkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTGVhZkRpdnMoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGRpdk5vZGVMaXN0ID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVlNfU0VMRUNUT1IpLFxuICAgICAgICAgIGxlYWZEaXZOb2RlcyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdChkaXZOb2RlTGlzdCksICAvLy9cbiAgICAgICAgICBsZWFmRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGxlYWZEaXZOb2RlcywgTGVhZkRpdik7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBmb3JFYWNoTGVhZkRpdihjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpO1xuXG4gICAgbGVhZkRpdnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMucmV0cmlldmVMZWFmRGl2cygpLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZkRpdnMsXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmREaXZET01FbGVtZW50KCkge1xuICAgIGNvbnN0IHsgZGl2RE9NRWxlbWVudCAgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmFwcGVuZChkaXZET01FbGVtZW50KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3RMZWFmRGl2KCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGludmVydENvbG91cnMgPSB0aGlzLmludmVydENvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXZlcnRDb2xvdXJzID0gdGhpcy5yZXZlcnRDb2xvdXJzLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVPdmVybGF5RGl2Wm9vbSA9IHRoaXMudXBkYXRlWm9vbS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGludmVydENvbG91cnMsXG4gICAgICByZXZlcnRDb2xvdXJzLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICB1cGRhdGVPdmVybGF5RGl2Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuYXBwZW5kRGl2RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5oaWRlQWxsTGVhZkRpdnMoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXZET01FbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm92ZXJsYXlcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE92ZXJsYXlEaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKE92ZXJsYXlEaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE92ZXJsYXlEaXYpYFxuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICB9XG4gIFxuICAuaW52ZXJ0ZWQtY29sb3VycyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIk92ZXJsYXlEaXYiLCJmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJjbG9zZU1lbnUiLCJ1cGRhdGVab29tIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIk1hdGgiLCJzcXJ0Iiwic2V0Wm9vbSIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic2hvd0xlZnRMZWFmRGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodExlZnREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInRhcEN1c3RvbUhhbmRsZXIiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwidW5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwic2hvd0ZpcnN0TGVhZkRpdiIsInNob3dMYXN0TGVhZkRpdiIsInVwZGF0ZUNvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGlzcGxheWVkTGVhZkRpdiIsImZpbmREaXNwbGF5ZWRMZWFmRGl2Iiwic2Nyb2xsVG9Ub3AiLCJzdG9wU2Nyb2xsaW5nIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIlNDUk9MTF9ERUxBWSIsIkRFQ0VMRVJBVElPTiIsImludmVydENvbG91cnMiLCJzZXRDb2xvdXJzSW52ZXJ0ZWQiLCJyZXZlcnRDb2xvdXJzIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsImxlYWZEaXZzIiwiZ2V0TGVhZkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHRMZWFmRGl2IiwibGVhZkRpdnNMZW5ndGgiLCJsZW5ndGgiLCJuZXh0TGVhZkRpdiIsInByZXZpb3VzTGVhZkRpdiIsImJhY2tncm91bmRDb2xvdXIiLCJnZXRCYWNrZ3JvdW5kQ29sb3VyIiwiaGlkZSIsInNldEJhY2tncm91bmRDb2xvdXIiLCJzaG93IiwiYmFja2dyb3VuZENvbG9yIiwiY3NzIiwiaGlkZUFsbExlYWZEaXZzIiwiZm9yRWFjaExlYWZEaXYiLCJsZWFmRGl2IiwiZmluZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwicmV0cmlldmVMZWFmRGl2cyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZGl2Tm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRElWU19TRUxFQ1RPUiIsImxlYWZEaXZOb2RlcyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImdldFN0YXRlIiwic2V0TGVmdERpdnMiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiYXBwZW5kRGl2RE9NRWxlbWVudCIsImRpdkRPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiYXBwZW5kIiwiZGlkTW91bnQiLCJ3aW5kb3ciLCJvbktleURvd24iLCJvbkN1c3RvbVRhcCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJlbmFibGVGdWxsU2NyZWVuIiwiZW5hYmxlVG91Y2giLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsImRpc2FibGVGdWxsU2NyZWVuIiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmS2V5RG93biIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidXBkYXRlT3ZlcmxheURpdlpvb20iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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