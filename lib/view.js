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
var _leaf = /*#__PURE__*/ _interop_require_default(require("./view/div/leaf"));
var _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
var _touch = /*#__PURE__*/ _interop_require_default(require("./mixins/touch"));
var _tree = require("./utilities/tree");
var _element = require("./utilities/element");
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
        "\n\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  touch-action: none;\n  \n  .native-gestures {\n    touch-action: auto;\n  }\n    \n"
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
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element) {
            _this.enableNativeGestures();
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
            var menuDivDragging = _this.isMenuDivDragging();
            if (menuDivDragging) {
                debugger;
                return;
            }
            var direction = _constants.DOWN_DIRECTION;
            _this.scroll(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var menuDivSwipedUp = false;
            var height = _this.getHeight(), bottom = height - top;
            if (bottom < _constants.MENU_DIV_SWIPE_BOTTOM) {
                _this.showMenuDiv();
                menuDivSwipedUp = true;
            }
            if (menuDivSwipedUp) {
                return;
            }
            var direction = _constants.UP_DIRECTION;
            _this.scroll(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "dragEndCustomHandler", function(event, element, top, left) {
            _this.menuDivDragEnd();
        });
        _define_property(_assert_this_initialized(_this), "dragStartCustomHandler", function(event, element, top, left) {
            var menuDivStartingDrag = false;
            var menuDivDisplayed = _this.isMenuDivDisplayed();
            if (menuDivDisplayed) {
                var height = _this.getHeight(), bottom = height - top, menuDivHeight = _this.getMenuDivHeight();
                if (bottom < menuDivHeight) {
                    menuDivStartingDrag = true;
                }
            }
            if (menuDivStartingDrag) {
                _this.menuDivDragStart();
                return;
            }
            var scrollTop = _this.getScrollTop(), startScrollTop = scrollTop; ///
            _this.setStartScrollTop(startScrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragDownCustomHandler", function(event, element, top, left) {
            var menuDivDragging = _this.isMenuDivDragging();
            if (menuDivDragging) {
                _this.menuDivDrag(top);
                return;
            }
            var startScrollTop = _this.getStartScrollTop(), scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragUpCustomHandler", function(event, element, top, left) {
            var menuDivDragging = _this.isMenuDivDragging();
            if (menuDivDragging) {
                _this.menuDivDrag(top);
                return;
            }
            var startScrollTop = _this.getStartScrollTop(), scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element) {
            _this.disableNativeGestures();
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
            key: "enableNativeGestures",
            value: function enableNativeGestures() {
                this.addClass("native-gestures");
                this.disableGestures();
            }
        },
        {
            key: "disableNativeGestures",
            value: function disableNativeGestures() {
                this.removeClass("native-gestures");
                this.enableGestures();
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
                var viewChildDivDOMElementNodeList = document.querySelectorAll(_selectors.VIEW_CHILD_DIVS_SELECTOR), viewChildDivDOMElements = (0, _tree.leafNodesFromNodeList)(viewChildDivDOMElementNodeList), leafDivs = (0, _element.elementsFromDOMElements)(viewChildDivDOMElements, _leaf.default);
                return leafDivs;
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
                this.onCustomDragEnd(this.dragEndCustomHandler);
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
                this.offCustomDragEnd(this.dragEndCustomHandler);
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
                this.forEachLeafDiv(function(leafDiv, index) {
                    index === 0 ? leafDiv.show() : leafDiv.hide();
                });
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
Object.assign(View.prototype, _touch.default);
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5pbXBvcnQgTWVudURpdiBmcm9tIFwiLi92aWV3L2Rpdi9tZW51XCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IFNIT1dfREVMQVksIFpPT01fUkFUSU8sIFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBERUNFTEVSQVRJT04sIERPV05fRElSRUNUSU9OLCBNRU5VX0RJVl9TV0lQRV9CT1RUT00gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZW5hYmxlTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICB6b29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHRoaXMuc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2RHJhZ2dpbmcgPSB0aGlzLmlzTWVudURpdkRyYWdnaW5nKCk7XG5cbiAgICBpZiAobWVudURpdkRyYWdnaW5nKSB7XG4gICAgICBkZWJ1Z2dlclxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgbGV0IG1lbnVEaXZTd2lwZWRVcCA9IGZhbHNlO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgTUVOVV9ESVZfU1dJUEVfQk9UVE9NKSB7XG4gICAgICB0aGlzLnNob3dNZW51RGl2KCk7XG5cbiAgICAgIG1lbnVEaXZTd2lwZWRVcCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1lbnVEaXZTd2lwZWRVcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ0VuZEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMubWVudURpdkRyYWdFbmQoKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGxldCBtZW51RGl2U3RhcnRpbmdEcmFnID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZW51RGl2RGlzcGxheWVkID0gdGhpcy5pc01lbnVEaXZEaXNwbGF5ZWQoKTtcblxuICAgIGlmIChtZW51RGl2RGlzcGxheWVkKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wLFxuICAgICAgICAgICAgbWVudURpdkhlaWdodCA9IHRoaXMuZ2V0TWVudURpdkhlaWdodCgpO1xuXG4gICAgICBpZiAoYm90dG9tIDwgbWVudURpdkhlaWdodCkge1xuICAgICAgICBtZW51RGl2U3RhcnRpbmdEcmFnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWVudURpdlN0YXJ0aW5nRHJhZykge1xuICAgICAgdGhpcy5tZW51RGl2RHJhZ1N0YXJ0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2RHJhZ2dpbmcgPSB0aGlzLmlzTWVudURpdkRyYWdnaW5nKCk7XG5cbiAgICBpZiAobWVudURpdkRyYWdnaW5nKSB7XG4gICAgICB0aGlzLm1lbnVEaXZEcmFnKHRvcCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBtZW51RGl2RHJhZ2dpbmcgPSB0aGlzLmlzTWVudURpdkRyYWdnaW5nKCk7XG5cbiAgICBpZiAobWVudURpdkRyYWdnaW5nKSB7XG4gICAgICB0aGlzLm1lbnVEaXZEcmFnKHRvcCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kaXNhYmxlTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdExlYWZEaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGxldCB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICB6b29tIC89IFpPT01fUkFUSU87XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgbGV0IHpvb20gPSB0aGlzLmdldFpvb20oKTtcblxuICAgIHpvb20gKj0gWk9PTV9SQVRJTztcblxuICAgIHRoaXMuc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHpvb20oem9vbSkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCk7XG5cbiAgICBkaXNwbGF5ZWRMZWFmRGl2Lnpvb20oem9vbSk7XG4gIH1cblxuICBzY3JvbGwoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIHNob3dGaXJzdExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodExlZnREaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihkaXNwbGF5ZWRMZWFmRGl2KSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgaWYgKChuZXh0SW5kZXggPT09IC0xKSB8fCAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB8fCAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHpvb20gPSB0aGlzLmdldFpvb20oKTtcblxuICAgIG5leHRMZWFmRGl2Lnpvb20oem9vbSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICAgIG5leHRMZWFmRGl2LnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICBuZXh0TGVhZkRpdi5zaG93KCk7XG4gICAgfSwgU0hPV19ERUxBWSk7XG4gIH1cblxuICBlbmFibGVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5kaXNhYmxlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGRpc2FibGVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgdGhpcy5lbmFibGVHZXN0dXJlcygpO1xuICB9XG5cbiAgZm9yRWFjaExlYWZEaXYoY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKTtcblxuICAgIGxlYWZEaXZzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZERpc3BsYXllZExlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IGxlYWZEaXZzLmZpbmQoKGxlYWZEaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZCA9IGxlYWZEaXYuaXNEaXNwbGF5ZWQoKTtcblxuICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXNwbGF5ZWRMZWFmRGl2O1xuICB9XG5cbiAgcmV0cmlldmVMZWFmRGl2cygpIHtcbiAgICBjb25zdCB2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiksXG4gICAgICAgICAgdmlld0NoaWxkRGl2RE9NRWxlbWVudHMgPSBsZWFmTm9kZXNGcm9tTm9kZUxpc3Qodmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0KSwgIC8vL1xuICAgICAgICAgIGxlYWZEaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHModmlld0NoaWxkRGl2RE9NRWxlbWVudHMsIExlYWZEaXYpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG5cbiAgc2V0Wm9vbSh6b29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB6b29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB6b29tID0gMSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMucmV0cmlldmVMZWFmRGl2cygpLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgem9vbSxcbiAgICAgIGxlYWZEaXZzLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0VuZCh0aGlzLmRyYWdFbmRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRW5kKHRoaXMuZHJhZ0VuZEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxNZW51RGl2Lz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYsIGluZGV4KSA9PiB7XG4gICAgICAoaW5kZXggPT09IDApID9cbiAgICAgICAgbGVhZkRpdi5zaG93KCkgOlxuICAgICAgICAgIGxlYWZEaXYuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJlbmFibGVOYXRpdmVHZXN0dXJlcyIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJzcGVlZCIsIm1lbnVEaXZEcmFnZ2luZyIsImlzTWVudURpdkRyYWdnaW5nIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzY3JvbGwiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIm1lbnVEaXZTd2lwZWRVcCIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk1FTlVfRElWX1NXSVBFX0JPVFRPTSIsInNob3dNZW51RGl2IiwiVVBfRElSRUNUSU9OIiwiZHJhZ0VuZEN1c3RvbUhhbmRsZXIiLCJtZW51RGl2RHJhZ0VuZCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJtZW51RGl2U3RhcnRpbmdEcmFnIiwibWVudURpdkRpc3BsYXllZCIsImlzTWVudURpdkRpc3BsYXllZCIsIm1lbnVEaXZIZWlnaHQiLCJnZXRNZW51RGl2SGVpZ2h0IiwibWVudURpdkRyYWdTdGFydCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJtZW51RGl2RHJhZyIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInRhcEN1c3RvbUhhbmRsZXIiLCJkaXNhYmxlTmF0aXZlR2VzdHVyZXMiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3RMZWZ0RGl2Iiwic2hvd0xhc3RMZWFmRGl2Iiwiem9vbU91dCIsIlpPT01fUkFUSU8iLCJ6b29tSW4iLCJkaXNwbGF5ZWRMZWFmRGl2IiwiZmluZERpc3BsYXllZExlYWZEaXYiLCJTQ1JPTExfREVMQVkiLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiREVDRUxFUkFUSU9OIiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dExlYWZEaXYiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsInByZXZpb3VzTGVhZkRpdiIsImhpZGUiLCJuZXh0TGVhZkRpdiIsInNldFRpbWVvdXQiLCJzaG93IiwiU0hPV19ERUxBWSIsImFkZENsYXNzIiwiZGlzYWJsZUdlc3R1cmVzIiwicmVtb3ZlQ2xhc3MiLCJlbmFibGVHZXN0dXJlcyIsImZvckVhY2hMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZmluZCIsImxlYWZEaXYiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInJldHJpZXZlTGVhZkRpdnMiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50cyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRMZWZ0RGl2cyIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbURyYWdFbmQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21EcmFnRW5kIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZGlzYWJsZVRvdWNoIiwib2ZmS2V5RG93biIsImNoaWxkRWxlbWVudHMiLCJNZW51RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbWZBOzs7ZUFBQTs7O29FQWpmc0I7eUJBRUc7b0JBQ087MkRBRVo7MkRBQ0E7NERBQ0k7b0JBRWM7dUJBQ0U7eUJBQ0M7eUJBQytFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhILElBQVFBLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpD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