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
var _tree = require("./utilities/tree");
var _element1 = require("./utilities/element");
var _selectors = require("./selectors");
var _eventTypes = require("./eventTypes");
var _fullScreen = require("./utilities/fullScreen");
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
        _define_property(_assert_this_initialized(_this), "fullScreenChangeHandler", function(event, element) {
            _this.updateZoom();
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = (0, _fullScreen.isFullScreen)();
            if (fullScreen) {
                (0, _fullScreen.exitFullScreen)();
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
            var fullScreen = (0, _fullScreen.isFullScreen)();
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
                var coloursInverted = (0, _state.areColoursInverted)();
                coloursInverted ? this.invertColours() : this.revertColours();
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
                this.forEachLeafDiv(function(leafDiv) {
                    leafDiv.invertColours();
                });
            }
        },
        {
            key: "revertColours",
            value: function revertColours() {
                this.forEachLeafDiv(function(leafDiv) {
                    leafDiv.revertColours();
                });
            }
        },
        {
            key: "requestFullScreen",
            value: function requestFullScreen() {
                var _this = this;
                var element = this; ///
                (0, _fullScreen.requestFullScreen)(element, function() {
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
                this.enableTouch();
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
                this.onEvent(_eventTypes.FULLSCREENCHANGE_EVENT_TYPE, this.fullScreenChangeHandler);
                _easy.window.onKeyDown(this.keyDownHandler);
                this.show();
                this.updateZoom();
                this.updateColours();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
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
                this.offEvent(_eventTypes.FULLSCREENCHANGE_EVENT_TYPE, this.fullScreenChangeHandler);
                _easy.window.offKeyDown(this.keyDownHandler);
                this.disableTouch();
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
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL3ZpZXcvZWxlbWVudFwiO1xuaW1wb3J0IExlYWZEaXYgZnJvbSBcIi4vdmlldy9kaXYvbGVhZlwiO1xuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuL21peGlucy90b3VjaFwiO1xuXG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvdHJlZVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW4sIGV4aXRGdWxsU2NyZWVuLCByZXF1ZXN0RnVsbFNjcmVlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgeyBnZXRWaWV3Wm9vbSBhcyBnZXRab29tLCBzZXRWaWV3Wm9vbSBhcyBzZXRab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgU0hPV19ERUxBWSwgU0NST0xMX0RFTEFZLCBVUF9ESVJFQ1RJT04sIERFQ0VMRVJBVElPTiwgRE9XTl9ESVJFQ1RJT04sIE1FTlVfRElWX1RBUF9CT1RUT00gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICBleGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVudURpdlRvdWNoZWQgPSB0aGlzLmlzTWVudURpdlRvdWNoZWQodG9wLCBsZWZ0KTtcblxuICAgIGlmIChtZW51RGl2VG91Y2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIGNvbnRyb2xsZXIuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9Z2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICB6b29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zY3JvbGwoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2VG91Y2hlZCA9IHRoaXMuaXNNZW51RGl2VG91Y2hlZCh0b3AsIGxlZnQpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IG1lbnVEaXZUb3VjaGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgdGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgbWVudURpdlRvdWNoZWQgPSB0aGlzLmlzTWVudURpdlRvdWNoZWQodG9wLCBsZWZ0KTtcblxuICAgIGlmIChtZW51RGl2VG91Y2hlZCkge1xuICAgICAgdGhpcy50YXBNZW51RGl2KHRvcCwgbGVmdCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICAgIGlmIChib3R0b20gPCBNRU5VX0RJVl9UQVBfQk9UVE9NKSB7XG4gICAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmludmVydENvbG91cnMoKSA6XG4gICAgICAgIHRoaXMucmV2ZXJ0Q29sb3VycygpO1xuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuXG4gICAgdGhpcy51cGRhdGVNZW51RGl2KCk7XG4gIH1cblxuICB6b29tKHpvb20pIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpO1xuXG4gICAgZGlzcGxheWVkTGVhZkRpdi56b29tKHpvb20pO1xuICB9XG5cbiAgc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYpID0+IHtcbiAgICAgIGxlYWZEaXYuaW52ZXJ0Q29sb3VycygpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV2ZXJ0Q29sb3VycygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2KSA9PiB7XG4gICAgICBsZWFmRGl2LnJldmVydENvbG91cnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcXVlc3RGdWxsU2NyZWVuKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIHJlcXVlc3RGdWxsU2NyZWVuKGVsZW1lbnQsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfSk7XG4gIH1cblxuICByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBzaG93Rmlyc3RMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgbmV4dEluZGV4ID0gbGVhZkRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgIGlmICgobmV4dEluZGV4ID09PSAtMSkgfHwgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkgfHwgKG5leHRJbmRleCA9PT0gbGVhZkRpdnNMZW5ndGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcblxuICAgIGNvbnN0IG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgbmV4dExlYWZEaXYuem9vbSh6b29tKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgICAgbmV4dExlYWZEaXYuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIG5leHRMZWFmRGl2LnNob3coKTtcbiAgICB9LCBTSE9XX0RFTEFZKTtcbiAgfVxuXG4gIGlzTWVudURpdlRvdWNoZWQodG9wLCBsZWZ0KSB7XG4gICAgbGV0IG1lbnVEaXZUb3VjaGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZW51RGl2RGlzcGxheWVkID0gdGhpcy5pc01lbnVEaXZEaXNwbGF5ZWQoKTtcblxuICAgIGlmIChtZW51RGl2RGlzcGxheWVkKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wLFxuICAgICAgICAgICAgbWVudURpdkhlaWdodCA9IHRoaXMuZ2V0TWVudURpdkhlaWdodCgpO1xuXG4gICAgICBpZiAoYm90dG9tIDwgbWVudURpdkhlaWdodCkge1xuICAgICAgICBtZW51RGl2VG91Y2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbnVEaXZUb3VjaGVkO1xuICB9XG5cbiAgaGlkZUFsbEJ1dEZpcnN0TGVhZkRpdnMoKSB7XG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGVhZkRpdi5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRGlzcGxheWVkTGVhZkRpdigpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBkaXNwbGF5ZWRMZWFmRGl2ID0gbGVhZkRpdnMuZmluZCgobGVhZkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkID0gbGVhZkRpdi5pc0Rpc3BsYXllZCgpO1xuXG4gICAgICAgICAgICBpZiAoZGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpc3BsYXllZExlYWZEaXY7XG4gIH1cblxuICByZXRyaWV2ZUxlYWZEaXZzKCkge1xuICAgIGNvbnN0IHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVklFV19DSElMRF9ESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICB2aWV3Q2hpbGREaXZET01FbGVtZW50cyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCh2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyh2aWV3Q2hpbGREaXZET01FbGVtZW50cywgTGVhZkRpdik7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBmb3JFYWNoTGVhZkRpdihjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpO1xuXG4gICAgbGVhZkRpdnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMucmV0cmlldmVMZWFmRGl2cygpLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZkRpdnMsXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25FdmVudChGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUsIHRoaXMuZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMuc2hvdygpO1xuXG4gICAgdGhpcy51cGRhdGVab29tKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkV2ZW50KEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSwgdGhpcy5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWVudURpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmhpZGVBbGxCdXRGaXJzdExlYWZEaXZzKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsImZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlWm9vbSIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJ0b3AiLCJsZWZ0IiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwibWVudURpdlRvdWNoZWQiLCJpc01lbnVEaXZUb3VjaGVkIiwiY2hlY2tlZCIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsImNvbnRyb2xsZXIiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIk1hdGgiLCJzcXJ0Iiwic2V0Wm9vbSIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic2hvd0xlZnRMZWFmRGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodExlZnREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInNjcm9sbCIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJ0YXBDdXN0b21IYW5kbGVyIiwidGFwTWVudURpdiIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk1FTlVfRElWX1RBUF9CT1RUT00iLCJvcGVuTWVudSIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3RMZWZ0RGl2Iiwic2hvd0xhc3RMZWFmRGl2IiwidXBkYXRlQ29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsImFyZUNvbG91cnNJbnZlcnRlZCIsImludmVydENvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwidXBkYXRlTWVudURpdiIsImRpc3BsYXllZExlYWZEaXYiLCJmaW5kRGlzcGxheWVkTGVhZkRpdiIsIlNDUk9MTF9ERUxBWSIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJERUNFTEVSQVRJT04iLCJmb3JFYWNoTGVhZkRpdiIsImxlYWZEaXYiLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImNsb3NlTWVudSIsImFkZENsYXNzIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwicmVtb3ZlQ2xhc3MiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsImxlYWZEaXZzIiwiZ2V0TGVhZkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHRMZWFmRGl2IiwibGVhZkRpdnNMZW5ndGgiLCJsZW5ndGgiLCJwcmV2aW91c0xlYWZEaXYiLCJoaWRlIiwibmV4dExlYWZEaXYiLCJzZXRUaW1lb3V0Iiwic2hvdyIsIlNIT1dfREVMQVkiLCJtZW51RGl2RGlzcGxheWVkIiwiaXNNZW51RGl2RGlzcGxheWVkIiwibWVudURpdkhlaWdodCIsImdldE1lbnVEaXZIZWlnaHQiLCJoaWRlQWxsQnV0Rmlyc3RMZWFmRGl2cyIsImZpbmQiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInJldHJpZXZlTGVhZkRpdnMiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50cyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImdldFN0YXRlIiwic2V0TGVmdERpdnMiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uRXZlbnQiLCJGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmRXZlbnQiLCJvZmZLZXlEb3duIiwiZGlzYWJsZVRvdWNoIiwiY2hpbGRFbGVtZW50cyIsIk1lbnVEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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