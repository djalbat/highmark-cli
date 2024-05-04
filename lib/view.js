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
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
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
            var height = _this.getHeight(), bottom = height - top;
            if (bottom < _constants.MENU_DIV_SWIPE_BOTTOM) {
                controller.openMenu();
                return;
            }
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
            var menuDivTouched = _this.isMenuDivTouched();
            if (menuDivTouched) {
                return;
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
            key: "enterFullScreen",
            value: function enterFullScreen() {
                var domElement = this.getDOMElement();
                domElement.requestFullscreen().catch(function(error) {
                    alert(error);
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
                _easy.window.onKeyDown(this.keyDownHandler);
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
                this.disableTouch();
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
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL3ZpZXcvZWxlbWVudFwiO1xuaW1wb3J0IExlYWZEaXYgZnJvbSBcIi4vdmlldy9kaXYvbGVhZlwiO1xuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuL21peGlucy90b3VjaFwiO1xuXG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvdHJlZVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRWaWV3Wm9vbSBhcyBnZXRab29tLCBzZXRWaWV3Wm9vbSBhcyBzZXRab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgU0hPV19ERUxBWSwgU0NST0xMX0RFTEFZLCBVUF9ESVJFQ1RJT04sIERFQ0VMRVJBVElPTiwgRE9XTl9ESVJFQ1RJT04sIE1FTlVfRElWX1NXSVBFX0JPVFRPTSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2VG91Y2hlZCA9IHRoaXMuaXNNZW51RGl2VG91Y2hlZCh0b3AsIGxlZnQpO1xuXG4gICAgaWYgKG1lbnVEaXZUb3VjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tlZCA9IHRydWU7XG5cbiAgICB0aGlzLnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgY29udHJvbGxlci5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KGNoZWNrZWQpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID1nZXRab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIHpvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcDtcblxuICAgIGlmIChib3R0b20gPCBNRU5VX0RJVl9TV0lQRV9CT1RUT00pIHtcbiAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgbWVudURpdlRvdWNoZWQgPSB0aGlzLmlzTWVudURpdlRvdWNoZWQodG9wLCBsZWZ0KSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBtZW51RGl2VG91Y2hlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKCk7XG5cbiAgICBpZiAobWVudURpdlRvdWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdExlYWZEaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGFyZUNvbG91cnNJbnZlcnRlZCgpO1xuXG4gICAgY29sb3Vyc0ludmVydGVkID9cbiAgICAgIHRoaXMuaW52ZXJ0Q29sb3VycygpIDpcbiAgICAgICAgdGhpcy5yZXZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICB1cGRhdGVab29tKCkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1lbnVEaXYoKTtcbiAgfVxuXG4gIHpvb20oem9vbSkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCk7XG5cbiAgICBkaXNwbGF5ZWRMZWFmRGl2Lnpvb20oem9vbSk7XG4gIH1cblxuICBzY3JvbGwoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGludmVydENvbG91cnMoKSB7XG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdikgPT4ge1xuICAgICAgbGVhZkRpdi5pbnZlcnRDb2xvdXJzKCk7XG4gICAgfSk7XG4gIH1cblxuICByZXZlcnRDb2xvdXJzKCkge1xuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYpID0+IHtcbiAgICAgIGxlYWZEaXYucmV2ZXJ0Q29sb3VycygpO1xuICAgIH0pO1xuICB9XG5cbiAgZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5kaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHRoaXMuZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHNob3dGaXJzdExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgaWYgKChuZXh0SW5kZXggPT09IC0xKSB8fCAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB8fCAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHpvb20gPSBnZXRab29tKCk7XG5cbiAgICBuZXh0TGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgICBuZXh0TGVhZkRpdi5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgbmV4dExlYWZEaXYuc2hvdygpO1xuICAgIH0sIFNIT1dfREVMQVkpO1xuICB9XG5cbiAgaXNNZW51RGl2VG91Y2hlZCh0b3AsIGxlZnQpIHtcbiAgICBsZXQgbWVudURpdlRvdWNoZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1lbnVEaXZEaXNwbGF5ZWQgPSB0aGlzLmlzTWVudURpdkRpc3BsYXllZCgpO1xuXG4gICAgaWYgKG1lbnVEaXZEaXNwbGF5ZWQpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3AsXG4gICAgICAgICAgICBtZW51RGl2SGVpZ2h0ID0gdGhpcy5nZXRNZW51RGl2SGVpZ2h0KCk7XG5cbiAgICAgIGlmIChib3R0b20gPCBtZW51RGl2SGVpZ2h0KSB7XG4gICAgICAgIG1lbnVEaXZUb3VjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVudURpdlRvdWNoZWQ7XG4gIH1cblxuICBoaWRlQWxsQnV0Rmlyc3RMZWFmRGl2cygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmREaXNwbGF5ZWRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGRpc3BsYXllZExlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWQgPSBsZWFmRGl2LmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkTGVhZkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTGVhZkRpdnMoKSB7XG4gICAgY29uc3Qgdmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgICAgIHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzID0gbGVhZk5vZGVzRnJvbU5vZGVMaXN0KHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCksICAvLy9cbiAgICAgICAgICBsZWFmRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzLCBMZWFmRGl2KTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldExlYWZEaXZzKCkge1xuICAgIGNvbnN0IHsgbGVhZkRpdnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIHNldExlZnREaXZzKGxlYWZEaXZzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5yZXRyaWV2ZUxlYWZEaXZzKCksXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFmRGl2cyxcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMudXBkYXRlWm9vbSgpO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1lbnVEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5oaWRlQWxsQnV0Rmlyc3RMZWFmRGl2cygpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsIm1lbnVEaXZUb3VjaGVkIiwiaXNNZW51RGl2VG91Y2hlZCIsImNoZWNrZWQiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJjb250cm9sbGVyIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzY3JvbGwiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk1FTlVfRElWX1NXSVBFX0JPVFRPTSIsIm9wZW5NZW51IiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJ0YXBDdXN0b21IYW5kbGVyIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJ1cGRhdGVDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiaW52ZXJ0Q29sb3VycyIsInJldmVydENvbG91cnMiLCJ1cGRhdGVab29tIiwidXBkYXRlTWVudURpdiIsImRpc3BsYXllZExlYWZEaXYiLCJmaW5kRGlzcGxheWVkTGVhZkRpdiIsIlNDUk9MTF9ERUxBWSIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJERUNFTEVSQVRJT04iLCJmb3JFYWNoTGVhZkRpdiIsImxlYWZEaXYiLCJlbnRlckZ1bGxTY3JlZW4iLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwiY2F0Y2giLCJlcnJvciIsImFsZXJ0IiwiYWRkQ2xhc3MiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJyZW1vdmVDbGFzcyIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dExlYWZEaXYiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsInByZXZpb3VzTGVhZkRpdiIsImhpZGUiLCJuZXh0TGVhZkRpdiIsInNldFRpbWVvdXQiLCJzaG93IiwiU0hPV19ERUxBWSIsIm1lbnVEaXZEaXNwbGF5ZWQiLCJpc01lbnVEaXZEaXNwbGF5ZWQiLCJtZW51RGl2SGVpZ2h0IiwiZ2V0TWVudURpdkhlaWdodCIsImhpZGVBbGxCdXRGaXJzdExlYWZEaXZzIiwiZmluZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwicmV0cmlldmVMZWFmRGl2cyIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnRzIiwibGVhZk5vZGVzRnJvbU5vZGVMaXN0IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZ2V0U3RhdGUiLCJzZXRMZWZ0RGl2cyIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25DdXN0b21UYXAiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImRpc2FibGVUb3VjaCIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiTWVudURpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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