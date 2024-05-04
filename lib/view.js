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
            key: "zoomOut",
            value: function zoomOut() {
                var zoom = this.getZoom();
                zoom /= _constants.ZOOM_RATIO;
                this.setZoom(zoom);
                this.zoom(zoom);
            }
        },
        {
            key: "zoomIn",
            value: function zoomIn() {
                var zoom = this.getZoom();
                zoom *= _constants.ZOOM_RATIO;
                this.setZoom(zoom);
                this.zoom(zoom);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL3ZpZXcvZWxlbWVudFwiO1xuaW1wb3J0IExlYWZEaXYgZnJvbSBcIi4vdmlldy9kaXYvbGVhZlwiO1xuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuL21peGlucy90b3VjaFwiO1xuXG5pbXBvcnQgeyBsZWFmTm9kZXNGcm9tTm9kZUxpc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvdHJlZVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBTSE9XX0RFTEFZLCBaT09NX1JBVElPLCBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgTUVOVV9ESVZfU1dJUEVfQk9UVE9NIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCk7XG5cbiAgICBpZiAobWVudURpdlRvdWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSB0aGlzLmdldFpvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgTUVOVV9ESVZfU1dJUEVfQk9UVE9NKSB7XG4gICAgICBjb250cm9sbGVyLm9wZW5NZW51KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXZUb3VjaGVkID0gdGhpcy5pc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCksXG4gICAgICAgICAgc2Nyb2xsVG9wID0gbWVudURpdlRvdWNoZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2VG91Y2hlZCA9IHRoaXMuaXNNZW51RGl2VG91Y2hlZCgpO1xuXG4gICAgaWYgKG1lbnVEaXZUb3VjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBsZXQgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuXG4gICAgem9vbSAvPSBaT09NX1JBVElPO1xuXG4gICAgdGhpcy5zZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgem9vbUluKCkge1xuICAgIGxldCB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICB6b29tICo9IFpPT01fUkFUSU87XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICB6b29tKHpvb20pIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpO1xuXG4gICAgZGlzcGxheWVkTGVhZkRpdi56b29tKHpvb20pO1xuICB9XG5cbiAgc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYpID0+IHtcbiAgICAgIGxlYWZEaXYuaW52ZXJ0Q29sb3VycygpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV2ZXJ0Q29sb3VycygpIHtcbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2KSA9PiB7XG4gICAgICBsZWFmRGl2LnJldmVydENvbG91cnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5kaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHRoaXMuZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHNob3dGaXJzdExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgaWYgKChuZXh0SW5kZXggPT09IC0xKSB8fCAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB8fCAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHpvb20gPSB0aGlzLmdldFpvb20oKTtcblxuICAgIG5leHRMZWFmRGl2Lnpvb20oem9vbSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICAgIG5leHRMZWFmRGl2LnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICBuZXh0TGVhZkRpdi5zaG93KCk7XG4gICAgfSwgU0hPV19ERUxBWSk7XG4gIH1cblxuICBpc01lbnVEaXZUb3VjaGVkKHRvcCwgbGVmdCkge1xuICAgIGxldCBtZW51RGl2VG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWVudURpdkRpc3BsYXllZCA9IHRoaXMuaXNNZW51RGl2RGlzcGxheWVkKCk7XG5cbiAgICBpZiAobWVudURpdkRpc3BsYXllZCkge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcCxcbiAgICAgICAgICAgIG1lbnVEaXZIZWlnaHQgPSB0aGlzLmdldE1lbnVEaXZIZWlnaHQoKTtcblxuICAgICAgaWYgKGJvdHRvbSA8IG1lbnVEaXZIZWlnaHQpIHtcbiAgICAgICAgbWVudURpdlRvdWNoZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZW51RGl2VG91Y2hlZDtcbiAgfVxuXG4gIGhpZGVBbGxCdXRGaXJzdExlYWZEaXZzKCkge1xuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGxlYWZEaXYuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmluZERpc3BsYXllZExlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IGxlYWZEaXZzLmZpbmQoKGxlYWZEaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZCA9IGxlYWZEaXYuaXNEaXNwbGF5ZWQoKTtcblxuICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXNwbGF5ZWRMZWFmRGl2O1xuICB9XG5cbiAgcmV0cmlldmVMZWFmRGl2cygpIHtcbiAgICBjb25zdCB2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiksXG4gICAgICAgICAgdmlld0NoaWxkRGl2RE9NRWxlbWVudHMgPSBsZWFmTm9kZXNGcm9tTm9kZUxpc3Qodmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0KSwgIC8vL1xuICAgICAgICAgIGxlYWZEaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHModmlld0NoaWxkRGl2RE9NRWxlbWVudHMsIExlYWZEaXYpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgZm9yRWFjaExlYWZEaXYoY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKTtcblxuICAgIGxlYWZEaXZzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG5cbiAgc2V0Wm9vbSh6b29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB6b29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB6b29tID0gMSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMucmV0cmlldmVMZWFmRGl2cygpLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgem9vbSxcbiAgICAgIGxlYWZEaXZzLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPE1lbnVEaXYvPlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLmhpZGVBbGxCdXRGaXJzdExlYWZEaXZzKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwibWVudURpdlRvdWNoZWQiLCJpc01lbnVEaXZUb3VjaGVkIiwiY2hlY2tlZCIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsImNvbnRyb2xsZXIiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIk1hdGgiLCJzcXJ0Iiwic2V0Wm9vbSIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic2hvd0xlZnRMZWFmRGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodExlZnREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInNjcm9sbCIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwiTUVOVV9ESVZfU1dJUEVfQk9UVE9NIiwib3Blbk1lbnUiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInRhcEN1c3RvbUhhbmRsZXIiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwic2hvd0ZpcnN0TGVmdERpdiIsInNob3dMYXN0TGVhZkRpdiIsInpvb21PdXQiLCJaT09NX1JBVElPIiwiem9vbUluIiwiZGlzcGxheWVkTGVhZkRpdiIsImZpbmREaXNwbGF5ZWRMZWFmRGl2IiwiU0NST0xMX0RFTEFZIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIkRFQ0VMRVJBVElPTiIsImludmVydENvbG91cnMiLCJmb3JFYWNoTGVhZkRpdiIsImxlYWZEaXYiLCJyZXZlcnRDb2xvdXJzIiwiYWRkQ2xhc3MiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJyZW1vdmVDbGFzcyIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dExlYWZEaXYiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsInByZXZpb3VzTGVhZkRpdiIsImhpZGUiLCJuZXh0TGVhZkRpdiIsInNldFRpbWVvdXQiLCJzaG93IiwiU0hPV19ERUxBWSIsIm1lbnVEaXZEaXNwbGF5ZWQiLCJpc01lbnVEaXZEaXNwbGF5ZWQiLCJtZW51RGl2SGVpZ2h0IiwiZ2V0TWVudURpdkhlaWdodCIsImhpZGVBbGxCdXRGaXJzdExlYWZEaXZzIiwiZmluZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwicmV0cmlldmVMZWFmRGl2cyIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnRzIiwibGVhZk5vZGVzRnJvbU5vZGVMaXN0IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldExlZnREaXZzIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25DdXN0b21UYXAiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZDdXN0b21UYXAiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImRpc2FibGVUb3VjaCIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiTWVudURpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytC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