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
var _necessary = require("necessary");
var _easy = require("easy");
var _element = /*#__PURE__*/ _interop_require_default(require("./view/element"));
var _leaf = /*#__PURE__*/ _interop_require_default(require("./view/div/leaf"));
var _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
var _touch = /*#__PURE__*/ _interop_require_default(require("./mixins/touch"));
var _fullsrean = /*#__PURE__*/ _interop_require_default(require("./mixins/fullsrean"));
var _tree = require("./utilities/tree");
var _element1 = require("./utilities/element");
var _selectors = require("./selectors");
var _state = require("./state");
var _constants = require("./constants");
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
        "\n\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  touch-action: none;\n  \n  .native-gestures {\n    touch-action: auto;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "fullScreenChangeCustomHandler", function(event, element) {
            _this.updateZoom();
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = _this.isFullScreen();
            if (fullScreen) {
                _this.exitFullScreen();
                return;
            }
            var menuDivTouched = _this.isMenuDivTouched(top, left);
            if (menuDivTouched) {
                return;
            }
            var checked = true;
            _this.restoreNativeGestures();
            controller.checkRestoreNativeGesturesCheckbox(checked);
        });
        _define_property(_assert_this_initialized(_this), "pinchStartCustomHandler", function(event, element) {
            var zoom = (0, _state.getViewZoom)(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio);
            (0, _state.setViewZoom)(zoom);
            _this.zoom(zoom);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element) {
            _this.showLeftLeafDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            _this.showRightLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.DOWN_DIRECTION;
            _this.scroll(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.UP_DIRECTION;
            _this.scroll(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "dragStartCustomHandler", function(event, element, top, left) {
            var menuDivTouched = _this.isMenuDivTouched(top, left), scrollTop = menuDivTouched ? null : _this.getScrollTop(), startScrollTop = scrollTop; ///
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
            var menuDivTouched = _this.isMenuDivTouched(top, left);
            if (menuDivTouched) {
                _this.tapMenuDiv(top, left);
                return;
            }
            var fullScreen = _this.isFullScreen();
            if (!fullScreen) {
                var height = _this.getHeight(), bottom = height - top;
                if (bottom < _constants.MENU_DIV_TAP_BOTTOM) {
                    controller.openMenu();
                    return;
                }
            }
            var checked = false;
            _this.suppressNativeGestures();
            _this.checkRestoreNativeGesturesCheckbox(checked);
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
                        _this.showFirstLeftDiv();
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
    _create_class(View, [
        {
            key: "updateColours",
            value: function updateColours() {
                this.forEachLeafDiv(function(leafDiv) {
                    leafDiv.updateColours();
                });
            }
        },
        {
            key: "updateZoom",
            value: function updateZoom() {
                var zoom = (0, _state.getViewZoom)();
                this.zoom(zoom);
                this.updateMenuDiv();
            }
        },
        {
            key: "zoom",
            value: function zoom(zoom) {
                var displayedLeafDiv = this.findDisplayedLeafDiv();
                displayedLeafDiv.zoom(zoom);
            }
        },
        {
            key: "scroll",
            value: function scroll(speed, direction) {
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
                var _this = this;
                this.requestFullScreen(function() {
                    _this.closeMenu();
                });
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
            key: "showFirstLeftDiv",
            value: function showFirstLeftDiv() {
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), nextIndex = 0, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLeftLeafDiv",
            value: function showLeftLeafDiv() {
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), nextIndex = index - 1, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showRightLeftDiv",
            value: function showRightLeftDiv() {
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), nextIndex = index + 1, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastLeafDiv",
            value: function showLastLeafDiv() {
                var displayedLeafDiv = this.findDisplayedLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(displayedLeafDiv), leafDivsLength = leafDivs.length, nextIndex = leafDivsLength - 1, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextLeafDiv",
            value: function showNextLeafDiv(nextIndex, previousIndex) {
                var leafDivs = this.getLeafDivs(), leafDivsLength = leafDivs.length, previousLeafDiv = leafDivs[previousIndex];
                if (nextIndex === -1 || nextIndex === previousIndex || nextIndex === leafDivsLength) {
                    return;
                }
                previousLeafDiv.hide();
                var nextLeafDiv = leafDivs[nextIndex], zoom = (0, _state.getViewZoom)();
                nextLeafDiv.zoom(zoom);
                setTimeout(function() {
                    var scrollTop = 0;
                    nextLeafDiv.setScrollTop(scrollTop);
                    nextLeafDiv.show();
                }, _constants.SHOW_DELAY);
            }
        },
        {
            key: "isMenuDivTouched",
            value: function isMenuDivTouched(top, left) {
                var menuDivTouched = false;
                var menuDivDisplayed = this.isMenuDivDisplayed();
                if (menuDivDisplayed) {
                    var height = this.getHeight(), bottom = height - top, menuDivHeight = this.getMenuDivHeight();
                    if (bottom < menuDivHeight) {
                        menuDivTouched = true;
                    }
                }
                return menuDivTouched;
            }
        },
        {
            key: "hideAllButFirstLeafDivs",
            value: function hideAllButFirstLeafDivs() {
                this.forEachLeafDiv(function(leafDiv, index) {
                    if (index > 0) {
                        leafDiv.hide();
                    }
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
                var viewChildDivDOMElementNodeList = document.querySelectorAll(_selectors.VIEW_CHILD_DIVS_SELECTOR), viewChildDivDOMElements = (0, _tree.leafNodesFromNodeList)(viewChildDivDOMElementNodeList), leafDivs = (0, _element1.elementsFromDOMElements)(viewChildDivDOMElements, _leaf.default);
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
            key: "didMount",
            value: function didMount() {
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
                _easy.window.onKeyDown(this.keyDownHandler);
                this.enableTouch();
                this.enableFullScreen();
                this.show();
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
                return [
                    /*#__PURE__*/ React.createElement(_menu.default, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                this.suppressNativeGestures();
                this.hideAllButFirstLeafDivs();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_element.default));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
Object.assign(View.prototype, _touch.default);
Object.assign(View.prototype, _fullsrean.default);
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL3ZpZXcvZWxlbWVudFwiO1xuaW1wb3J0IExlYWZEaXYgZnJvbSBcIi4vdmlldy9kaXYvbGVhZlwiO1xuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuL21peGlucy90b3VjaFwiO1xuaW1wb3J0IGZ1bGxTY3JlZW5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2Z1bGxzcmVhblwiO1xuXG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvdHJlZVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRWaWV3Wm9vbSBhcyBnZXRab29tLCBzZXRWaWV3Wm9vbSBhcyBzZXRab29tLCBzZXRDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgU0hPV19ERUxBWSwgU0NST0xMX0RFTEFZLCBVUF9ESVJFQ1RJT04sIERFQ0VMRVJBVElPTiwgRE9XTl9ESVJFQ1RJT04sIE1FTlVfRElWX1RBUF9CT1RUT00gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIHRoaXMuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCk7XG5cbiAgICBpZiAobWVudURpdlRvdWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPWdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zY3JvbGwoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgbWVudURpdlRvdWNoZWQgPSB0aGlzLmlzTWVudURpdlRvdWNoZWQodG9wLCBsZWZ0KSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBtZW51RGl2VG91Y2hlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCk7XG5cbiAgICBpZiAobWVudURpdlRvdWNoZWQpIHtcbiAgICAgIHRoaXMudGFwTWVudURpdih0b3AsIGxlZnQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICAgIGlmIChib3R0b20gPCBNRU5VX0RJVl9UQVBfQk9UVE9NKSB7XG4gICAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2KSA9PiB7XG4gICAgICBsZWFmRGl2LnVwZGF0ZUNvbG91cnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVpvb20oKSB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcblxuICAgIHRoaXMudXBkYXRlTWVudURpdigpO1xuICB9XG5cbiAgem9vbSh6b29tKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKTtcblxuICAgIGRpc3BsYXllZExlYWZEaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG5cbiAgICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfSwgU0NST0xMX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgaW52ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSB0cnVlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIHJldmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gZmFsc2U7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHRoaXMudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5kaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHRoaXMuZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHNob3dGaXJzdExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgaWYgKChuZXh0SW5kZXggPT09IC0xKSB8fCAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB8fCAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHpvb20gPSBnZXRab29tKCk7XG5cbiAgICBuZXh0TGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgICBuZXh0TGVhZkRpdi5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgbmV4dExlYWZEaXYuc2hvdygpO1xuICAgIH0sIFNIT1dfREVMQVkpO1xuICB9XG5cbiAgaXNNZW51RGl2VG91Y2hlZCh0b3AsIGxlZnQpIHtcbiAgICBsZXQgbWVudURpdlRvdWNoZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1lbnVEaXZEaXNwbGF5ZWQgPSB0aGlzLmlzTWVudURpdkRpc3BsYXllZCgpO1xuXG4gICAgaWYgKG1lbnVEaXZEaXNwbGF5ZWQpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3AsXG4gICAgICAgICAgICBtZW51RGl2SGVpZ2h0ID0gdGhpcy5nZXRNZW51RGl2SGVpZ2h0KCk7XG5cbiAgICAgIGlmIChib3R0b20gPCBtZW51RGl2SGVpZ2h0KSB7XG4gICAgICAgIG1lbnVEaXZUb3VjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVudURpdlRvdWNoZWQ7XG4gIH1cblxuICBoaWRlQWxsQnV0Rmlyc3RMZWFmRGl2cygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmREaXNwbGF5ZWRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGRpc3BsYXllZExlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWQgPSBsZWFmRGl2LmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkTGVhZkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTGVhZkRpdnMoKSB7XG4gICAgY29uc3Qgdmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgICAgIHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzID0gbGVhZk5vZGVzRnJvbU5vZGVMaXN0KHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCksICAvLy9cbiAgICAgICAgICBsZWFmRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzLCBMZWFmRGl2KTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldExlYWZEaXZzKCkge1xuICAgIGNvbnN0IHsgbGVhZkRpdnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIHNldExlZnREaXZzKGxlYWZEaXZzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5yZXRyaWV2ZUxlYWZEaXZzKCksXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFmRGl2cyxcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuc2hvdygpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG4gICAgdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNZW51RGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMuaGlkZUFsbEJ1dEZpcnN0TGVhZkRpdnMoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZVpvb20iLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsIm1lbnVEaXZUb3VjaGVkIiwiaXNNZW51RGl2VG91Y2hlZCIsImNoZWNrZWQiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJjb250cm9sbGVyIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzY3JvbGwiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwidGFwQ3VzdG9tSGFuZGxlciIsInRhcE1lbnVEaXYiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJNRU5VX0RJVl9UQVBfQk9UVE9NIiwib3Blbk1lbnUiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwic2hvd0ZpcnN0TGVmdERpdiIsInNob3dMYXN0TGVhZkRpdiIsInVwZGF0ZUNvbG91cnMiLCJmb3JFYWNoTGVhZkRpdiIsImxlYWZEaXYiLCJ1cGRhdGVNZW51RGl2IiwiZGlzcGxheWVkTGVhZkRpdiIsImZpbmREaXNwbGF5ZWRMZWFmRGl2IiwiU0NST0xMX0RFTEFZIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIkRFQ0VMRVJBVElPTiIsImludmVydENvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJzZXRDb2xvdXJzSW52ZXJ0ZWQiLCJyZXZlcnRDb2xvdXJzIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJjbG9zZU1lbnUiLCJhZGRDbGFzcyIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsInJlbW92ZUNsYXNzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJsZWFmRGl2cyIsImdldExlYWZEaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0TGVhZkRpdiIsImxlYWZEaXZzTGVuZ3RoIiwibGVuZ3RoIiwicHJldmlvdXNMZWFmRGl2IiwiaGlkZSIsIm5leHRMZWFmRGl2Iiwic2V0VGltZW91dCIsInNob3ciLCJTSE9XX0RFTEFZIiwibWVudURpdkRpc3BsYXllZCIsImlzTWVudURpdkRpc3BsYXllZCIsIm1lbnVEaXZIZWlnaHQiLCJnZXRNZW51RGl2SGVpZ2h0IiwiaGlkZUFsbEJ1dEZpcnN0TGVhZkRpdnMiLCJmaW5kIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJyZXRyaWV2ZUxlYWZEaXZzIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudHMiLCJsZWFmTm9kZXNGcm9tTm9kZUxpc3QiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIkxlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJnZXRTdGF0ZSIsInNldExlZnREaXZzIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwib25DdXN0b21UYXAiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwid2luZG93Iiwib25LZXlEb3duIiwiZW5hYmxlVG91Y2giLCJlbmFibGVGdWxsU2NyZWVuIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiTWVudURpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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