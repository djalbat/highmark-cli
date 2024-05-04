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
            var zoom = _this.getZoom(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio);
            _this.setZoom(zoom);
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
                var nextLeafDiv = leafDivs[nextIndex], zoom = this.getZoom();
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
            key: "getZoom",
            value: function getZoom() {
                var zoom = this.getState().zoom;
                return zoom;
            }
        },
        {
            key: "setZoom",
            value: function setZoom(zoom) {
                this.updateState({
                    zoom: zoom
                });
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
                var zoom = 1, leafDivs = this.retrieveLeafDivs(), interval = null, startZoom = null, startScrollTop = null;
                this.setState({
                    zoom: zoom,
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
                return /*#__PURE__*/ React.createElement(_menu.default, null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL3ZpZXcvZWxlbWVudFwiO1xuaW1wb3J0IExlYWZEaXYgZnJvbSBcIi4vdmlldy9kaXYvbGVhZlwiO1xuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuL21peGlucy90b3VjaFwiO1xuXG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvdHJlZVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBTSE9XX0RFTEFZLCBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgTUVOVV9ESVZfU1dJUEVfQk9UVE9NIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCk7XG5cbiAgICBpZiAobWVudURpdlRvdWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSB0aGlzLmdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgTUVOVV9ESVZfU1dJUEVfQk9UVE9NKSB7XG4gICAgICBjb250cm9sbGVyLm9wZW5NZW51KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCksXG4gICAgICAgICAgc2Nyb2xsVG9wID0gbWVudURpdlRvdWNoZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2VG91Y2hlZCA9IHRoaXMuaXNNZW51RGl2VG91Y2hlZCgpO1xuXG4gICAgaWYgKG1lbnVEaXZUb3VjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgem9vbSh6b29tKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKTtcblxuICAgIGRpc3BsYXllZExlYWZEaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG5cbiAgICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfSwgU0NST0xMX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgaW52ZXJ0Q29sb3VycygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2KSA9PiB7XG4gICAgICBsZWFmRGl2LmludmVydENvbG91cnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldmVydENvbG91cnMoKSB7XG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdikgPT4ge1xuICAgICAgbGVhZkRpdi5yZXZlcnRDb2xvdXJzKCk7XG4gICAgfSk7XG4gIH1cblxuICByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBzaG93Rmlyc3RMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgbmV4dEluZGV4ID0gbGVhZkRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgIGlmICgobmV4dEluZGV4ID09PSAtMSkgfHwgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkgfHwgKG5leHRJbmRleCA9PT0gbGVhZkRpdnNMZW5ndGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcblxuICAgIGNvbnN0IG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICBuZXh0TGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgICBuZXh0TGVhZkRpdi5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgbmV4dExlYWZEaXYuc2hvdygpO1xuICAgIH0sIFNIT1dfREVMQVkpO1xuICB9XG5cbiAgaXNNZW51RGl2VG91Y2hlZCh0b3AsIGxlZnQpIHtcbiAgICBsZXQgbWVudURpdlRvdWNoZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1lbnVEaXZEaXNwbGF5ZWQgPSB0aGlzLmlzTWVudURpdkRpc3BsYXllZCgpO1xuXG4gICAgaWYgKG1lbnVEaXZEaXNwbGF5ZWQpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3AsXG4gICAgICAgICAgICBtZW51RGl2SGVpZ2h0ID0gdGhpcy5nZXRNZW51RGl2SGVpZ2h0KCk7XG5cbiAgICAgIGlmIChib3R0b20gPCBtZW51RGl2SGVpZ2h0KSB7XG4gICAgICAgIG1lbnVEaXZUb3VjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVudURpdlRvdWNoZWQ7XG4gIH1cblxuICBoaWRlQWxsQnV0Rmlyc3RMZWFmRGl2cygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmREaXNwbGF5ZWRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGRpc3BsYXllZExlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWQgPSBsZWFmRGl2LmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkTGVhZkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTGVhZkRpdnMoKSB7XG4gICAgY29uc3Qgdmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgICAgIHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzID0gbGVhZk5vZGVzRnJvbU5vZGVMaXN0KHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCksICAvLy9cbiAgICAgICAgICBsZWFmRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzLCBMZWFmRGl2KTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgY29uc3QgeyB6b29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfVxuXG4gIHNldFpvb20oem9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgem9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGVhZkRpdnMoKSB7XG4gICAgY29uc3QgeyBsZWFmRGl2cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgc2V0TGVmdERpdnMobGVhZkRpdnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlYWZEaXZzXG4gICAgfSk7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgem9vbSA9IDEsXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLnJldHJpZXZlTGVhZkRpdnMoKSxcbiAgICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHpvb20sXG4gICAgICBsZWFmRGl2cyxcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxNZW51RGl2Lz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5oaWRlQWxsQnV0Rmlyc3RMZWFmRGl2cygpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsIm1lbnVEaXZUb3VjaGVkIiwiaXNNZW51RGl2VG91Y2hlZCIsImNoZWNrZWQiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJjb250cm9sbGVyIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzY3JvbGwiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk1FTlVfRElWX1NXSVBFX0JPVFRPTSIsIm9wZW5NZW51IiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJ0YXBDdXN0b21IYW5kbGVyIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJkaXNwbGF5ZWRMZWFmRGl2IiwiZmluZERpc3BsYXllZExlYWZEaXYiLCJTQ1JPTExfREVMQVkiLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiREVDRUxFUkFUSU9OIiwiaW52ZXJ0Q29sb3VycyIsImZvckVhY2hMZWFmRGl2IiwibGVhZkRpdiIsInJldmVydENvbG91cnMiLCJhZGRDbGFzcyIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsInJlbW92ZUNsYXNzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJsZWFmRGl2cyIsImdldExlYWZEaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0TGVhZkRpdiIsImxlYWZEaXZzTGVuZ3RoIiwibGVuZ3RoIiwicHJldmlvdXNMZWFmRGl2IiwiaGlkZSIsIm5leHRMZWFmRGl2Iiwic2V0VGltZW91dCIsInNob3ciLCJTSE9XX0RFTEFZIiwibWVudURpdkRpc3BsYXllZCIsImlzTWVudURpdkRpc3BsYXllZCIsIm1lbnVEaXZIZWlnaHQiLCJnZXRNZW51RGl2SGVpZ2h0IiwiaGlkZUFsbEJ1dEZpcnN0TGVhZkRpdnMiLCJmaW5kIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJyZXRyaWV2ZUxlYWZEaXZzIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudHMiLCJsZWFmTm9kZXNGcm9tTm9kZUxpc3QiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIkxlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0TGVmdERpdnMiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJvbkN1c3RvbVRhcCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZGlzYWJsZVRvdWNoIiwib2ZmS2V5RG93biIsImNoaWxkRWxlbWVudHMiLCJNZW51RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNmVBOzs7ZUFBQTs7O29FQTNlc0I7eUJBRUc7b0JBQ0Y7OERBRUg7MkRBQ0E7MkRBQ0E7NERBQ0k7b0JBRWM7d0JBQ0U7eUJBQ0M7eUJBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVHLElBQVFBLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpDQyxpQkFDQUMscUJBSXlC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