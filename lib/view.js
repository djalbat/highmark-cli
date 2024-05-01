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
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var zoom = _this.getZoom(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio);
            _this.setZoom(zoom);
            _this.zoom(zoom);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            _this.showLeftLeafDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            _this.showRightLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var direction = _constants.DOWN_DIRECTION;
            _this.scroll(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var height = _this.getHeight(), bottom = height - top;
            if (bottom < _constants.MENU_DIV_SWIPE_BOTTOM) {
                _this.showMenuDiv();
                return;
            }
            var direction = _constants.UP_DIRECTION;
            _this.scroll(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "dragStartCustomHandler", function(event, element) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var scrollTop = _this.getScrollTop(), startScrollTop = scrollTop; ///
            _this.setStartScrollTop(startScrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragDownCustomHandler", function(event, element, top, left) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var startScrollTop = _this.getStartScrollTop(), scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragUpCustomHandler", function(event, element, top, left) {
            var nativeGesturesEnabled = _this.areNativeGesturesEnabled();
            if (nativeGesturesEnabled) {
                return;
            }
            var startScrollTop = _this.getStartScrollTop(), scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element) {
            alert("view tap...");
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
            }
        },
        {
            key: "disableNativeGestures",
            value: function disableNativeGestures() {
                this.removeClass("native-gestures");
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
            key: "areNativeGesturesEnabled",
            value: function areNativeGesturesEnabled() {
                var nativeGesturesEnabled = this.hasClass("native-gestures");
                return nativeGesturesEnabled;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5pbXBvcnQgTWVudURpdiBmcm9tIFwiLi92aWV3L2Rpdi9tZW51XCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IFNIT1dfREVMQVksIFpPT01fUkFUSU8sIFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBERUNFTEVSQVRJT04sIERPV05fRElSRUNUSU9OLCBNRU5VX0RJVl9TV0lQRV9CT1RUT00gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZW5hYmxlTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmIChuYXRpdmVHZXN0dXJlc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tID0gdGhpcy5nZXRab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnNjcm9sbChzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmIChuYXRpdmVHZXN0dXJlc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIGJvdHRvbSA9IGhlaWdodCAtIHRvcDtcblxuICAgIGlmIChib3R0b20gPCBNRU5VX0RJVl9TV0lQRV9CT1RUT00pIHtcbiAgICAgIHRoaXMuc2hvd01lbnVEaXYoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmIChuYXRpdmVHZXN0dXJlc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgIGFsZXJ0KFwidmlldyB0YXAuLi5cIilcblxuICAgIHRoaXMuZGlzYWJsZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBsZXQgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuXG4gICAgem9vbSAvPSBaT09NX1JBVElPO1xuXG4gICAgdGhpcy5zZXRab29tKHpvb20pO1xuXG4gICAgdGhpcy56b29tKHpvb20pO1xuICB9XG5cbiAgem9vbUluKCkge1xuICAgIGxldCB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICB6b29tICo9IFpPT01fUkFUSU87XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICB6b29tKHpvb20pIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRMZWFmRGl2ID0gdGhpcy5maW5kRGlzcGxheWVkTGVhZkRpdigpO1xuXG4gICAgZGlzcGxheWVkTGVhZkRpdi56b29tKHpvb20pO1xuICB9XG5cbiAgc2Nyb2xsKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBzaG93Rmlyc3RMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnRMZWFmRGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpc3BsYXllZExlYWZEaXYgPSB0aGlzLmZpbmREaXNwbGF5ZWRMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKGRpc3BsYXllZExlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdExlYWZEaXYoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkTGVhZkRpdiA9IHRoaXMuZmluZERpc3BsYXllZExlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2YoZGlzcGxheWVkTGVhZkRpdiksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgbmV4dEluZGV4ID0gbGVhZkRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgIGlmICgobmV4dEluZGV4ID09PSAtMSkgfHwgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkgfHwgKG5leHRJbmRleCA9PT0gbGVhZkRpdnNMZW5ndGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcblxuICAgIGNvbnN0IG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICBuZXh0TGVhZkRpdi56b29tKHpvb20pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgICBuZXh0TGVhZkRpdi5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgbmV4dExlYWZEaXYuc2hvdygpO1xuICAgIH0sIFNIT1dfREVMQVkpO1xuICB9XG5cbiAgZW5hYmxlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcbiAgfVxuXG4gIGRpc2FibGVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuICB9XG5cbiAgZm9yRWFjaExlYWZEaXYoY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKTtcblxuICAgIGxlYWZEaXZzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZERpc3BsYXllZExlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgZGlzcGxheWVkTGVhZkRpdiA9IGxlYWZEaXZzLmZpbmQoKGxlYWZEaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZCA9IGxlYWZEaXYuaXNEaXNwbGF5ZWQoKTtcblxuICAgICAgICAgICAgaWYgKGRpc3BsYXllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXNwbGF5ZWRMZWFmRGl2O1xuICB9XG5cbiAgcmV0cmlldmVMZWFmRGl2cygpIHtcbiAgICBjb25zdCB2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiksXG4gICAgICAgICAgdmlld0NoaWxkRGl2RE9NRWxlbWVudHMgPSBsZWFmTm9kZXNGcm9tTm9kZUxpc3Qodmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0KSwgIC8vL1xuICAgICAgICAgIGxlYWZEaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHModmlld0NoaWxkRGl2RE9NRWxlbWVudHMsIExlYWZEaXYpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG5cbiAgc2V0Wm9vbSh6b29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB6b29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZDtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB6b29tID0gMSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMucmV0cmlldmVMZWFmRGl2cygpLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgem9vbSxcbiAgICAgIGxlYWZEaXZzLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPE1lbnVEaXYvPlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdiwgaW5kZXgpID0+IHtcbiAgICAgIChpbmRleCA9PT0gMCkgP1xuICAgICAgICBsZWFmRGl2LnNob3coKSA6XG4gICAgICAgICAgbGVhZkRpdi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3IiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImVuYWJsZU5hdGl2ZUdlc3R1cmVzIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJuYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIk1hdGgiLCJzcXJ0Iiwic2V0Wm9vbSIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic2hvd0xlZnRMZWFmRGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodExlZnREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzY3JvbGwiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk1FTlVfRElWX1NXSVBFX0JPVFRPTSIsInNob3dNZW51RGl2IiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJ0YXBDdXN0b21IYW5kbGVyIiwiYWxlcnQiLCJkaXNhYmxlTmF0aXZlR2VzdHVyZXMiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJzaG93Rmlyc3RMZWZ0RGl2Iiwic2hvd0xhc3RMZWFmRGl2Iiwiem9vbU91dCIsIlpPT01fUkFUSU8iLCJ6b29tSW4iLCJkaXNwbGF5ZWRMZWFmRGl2IiwiZmluZERpc3BsYXllZExlYWZEaXYiLCJTQ1JPTExfREVMQVkiLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiREVDRUxFUkFUSU9OIiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dExlYWZEaXYiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsInByZXZpb3VzTGVhZkRpdiIsImhpZGUiLCJuZXh0TGVhZkRpdiIsInNldFRpbWVvdXQiLCJzaG93IiwiU0hPV19ERUxBWSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJmb3JFYWNoTGVhZkRpdiIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZpbmQiLCJsZWFmRGl2IiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJyZXRyaWV2ZUxlYWZEaXZzIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudHMiLCJsZWFmTm9kZXNGcm9tTm9kZUxpc3QiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIkxlYWZEaXYiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0TGVmdERpdnMiLCJoYXNDbGFzcyIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJkaXNhYmxlVG91Y2giLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsIk1lbnVEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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