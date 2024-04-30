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
var _navigatrion = /*#__PURE__*/ _interop_require_default(require("./view/navigatrion"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
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
        "\n\n  width: 100vw;\n  height: 100vh;\n  overflow: scroll;\n  touch-action: none;\n    \n"
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
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio);
            _this.setZoom(zoom);
            _this.zoom(zoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchStartCustomHandler", function(event, element) {
            var zoom = _this.getZoom(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element) {
            _this.showLeftLeafDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            _this.showRightLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element, speed) {
            var direction = _constants.DOWN_DIRECTION;
            _this.swipe(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element, speed) {
            var direction = _constants.UP_DIRECTION;
            _this.swipe(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "dragStartCustomHandler", function(event, element) {
            var scrollTop = _this.getScrollTop(), startScrollTop = scrollTop; ///
            _this.setStartScrollTop(startScrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragDownCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop(), scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop(), scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element) {
        ///
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
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            var pageX = event.pageX, width = _this.getWidth(), clickWidthRatio = pageX / width;
            if (clickWidthRatio < _constants.MAXIMUM_CLICK_WIDTH_RATIO) {
                _this.zoomOut();
            }
            if (1 - clickWidthRatio < _constants.MAXIMUM_CLICK_WIDTH_RATIO) {
                _this.zoomIn();
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
                var showingLeafDiv = this.findShowingLeafDiv();
                showingLeafDiv.zoom(zoom);
            }
        },
        {
            key: "swipe",
            value: function swipe(speed, direction) {
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
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), nextIndex = 0, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLeftLeafDiv",
            value: function showLeftLeafDiv() {
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), nextIndex = index - 1, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showRightLeftDiv",
            value: function showRightLeftDiv() {
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), nextIndex = index + 1, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastLeafDiv",
            value: function showLastLeafDiv() {
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), leafDivsLength = leafDivs.length, nextIndex = leafDivsLength - 1, previousIndex = index; ///
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
            key: "forEachLeafDiv",
            value: function forEachLeafDiv(callback) {
                var leafDivs = this.getLeafDivs();
                leafDivs.forEach(callback);
            }
        },
        {
            key: "findShowingLeafDiv",
            value: function findShowingLeafDiv() {
                var leafDivs = this.getLeafDivs(), showingLeafDiv = leafDivs.find(function(leafDiv) {
                    var showing = leafDiv.isShowing();
                    if (showing) {
                        return true;
                    }
                });
                return showingLeafDiv;
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
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onCustomPinchMove(this.pinchMoveCustomHandler);
                this.onCustomPinchStart(this.pinchStartCustomHandler);
                this.onClick(this.clickHandler);
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
                this.disableTouch();
                this.offClick(this.clickHandler);
                _easy.window.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_navigatrion.default, null);
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
Object.assign(View.prototype, _event.default);
Object.assign(View.prototype, _touch.default);
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi92aWV3L25hdmlnYXRyaW9uXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IFNIT1dfREVMQVksIFpPT01fUkFUSU8sIFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBET1dOX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICB6b29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHRoaXMuc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN3aXBlKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zd2lwZShzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgLy8vXG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgY2xpY2tXaWR0aFJhdGlvID0gcGFnZVggLyB3aWR0aDtcblxuICAgIGlmIChjbGlja1dpZHRoUmF0aW8gPCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPKSB7XG4gICAgICB0aGlzLnpvb21PdXQoKTtcbiAgICB9XG5cbiAgICBpZiAoKDEgLSBjbGlja1dpZHRoUmF0aW8pIDwgTUFYSU1VTV9DTElDS19XSURUSF9SQVRJTykge1xuICAgICAgdGhpcy56b29tSW4oKTtcbiAgICB9XG4gIH1cblxuICB6b29tT3V0KCkge1xuICAgIGxldCB6b29tID0gdGhpcy5nZXRab29tKCk7XG5cbiAgICB6b29tIC89IFpPT01fUkFUSU87XG5cbiAgICB0aGlzLnNldFpvb20oem9vbSk7XG5cbiAgICB0aGlzLnpvb20oem9vbSk7XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgbGV0IHpvb20gPSB0aGlzLmdldFpvb20oKTtcblxuICAgIHpvb20gKj0gWk9PTV9SQVRJTztcblxuICAgIHRoaXMuc2V0Wm9vbSh6b29tKTtcblxuICAgIHRoaXMuem9vbSh6b29tKTtcbiAgfVxuXG4gIHpvb20oem9vbSkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKTtcblxuICAgIHNob3dpbmdMZWFmRGl2Lnpvb20oem9vbSk7XG4gIH1cblxuICBzd2lwZShzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG5cbiAgICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfSwgU0NST0xMX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgc2hvd0ZpcnN0TGVmdERpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0TGVhZkRpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0TGVmdERpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3RMZWFmRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIG5leHRJbmRleCA9IGxlYWZEaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcHJldmlvdXNMZWFmRGl2ID0gbGVhZkRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICBpZiAoKG5leHRJbmRleCA9PT0gLTEpIHx8IChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHx8IChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZpb3VzTGVhZkRpdi5oaWRlKCk7XG5cbiAgICBjb25zdCBuZXh0TGVhZkRpdiA9IGxlYWZEaXZzW25leHRJbmRleF0sXG4gICAgICAgICAgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuXG4gICAgbmV4dExlYWZEaXYuem9vbSh6b29tKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgICAgbmV4dExlYWZEaXYuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIG5leHRMZWFmRGl2LnNob3coKTtcbiAgICB9LCBTSE9XX0RFTEFZKTtcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRTaG93aW5nTGVhZkRpdigpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nTGVhZkRpdiA9IGxlYWZEaXZzLmZpbmQoKGxlYWZEaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBsZWFmRGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzaG93aW5nTGVhZkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTGVhZkRpdnMoKSB7XG4gICAgY29uc3Qgdmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgICAgIHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzID0gbGVhZk5vZGVzRnJvbU5vZGVMaXN0KHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCksICAvLy9cbiAgICAgICAgICBsZWFmRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHZpZXdDaGlsZERpdkRPTUVsZW1lbnRzLCBMZWFmRGl2KTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgY29uc3QgeyB6b29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfVxuXG4gIHNldFpvb20oem9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgem9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGVhZkRpdnMoKSB7XG4gICAgY29uc3QgeyBsZWFmRGl2cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgc2V0TGVmdERpdnMobGVhZkRpdnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlYWZEaXZzXG4gICAgfSk7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgem9vbSA9IDEsXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLnJldHJpZXZlTGVhZkRpdnMoKSxcbiAgICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHpvb20sXG4gICAgICBsZWFmRGl2cyxcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25DdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxOYXZpZ2F0aW9uLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYsIGluZGV4KSA9PiB7XG4gICAgICAoaW5kZXggPT09IDApID9cbiAgICAgICAgbGVhZkRpdi5zaG93KCkgOlxuICAgICAgICAgIGxlYWZEaXYuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJyYXRpbyIsInN0YXJ0Wm9vbSIsImdldFN0YXJ0Wm9vbSIsInpvb20iLCJNYXRoIiwic3FydCIsInNldFpvb20iLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsImdldFpvb20iLCJzZXRTdGFydFpvb20iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZSIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJ0b3AiLCJsZWZ0IiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwidGFwQ3VzdG9tSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJjbGlja0hhbmRsZXIiLCJwYWdlWCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJjbGlja1dpZHRoUmF0aW8iLCJNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPIiwiem9vbU91dCIsInpvb21JbiIsIlpPT01fUkFUSU8iLCJzaG93aW5nTGVhZkRpdiIsImZpbmRTaG93aW5nTGVhZkRpdiIsIlNDUk9MTF9ERUxBWSIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJERUNFTEVSQVRJT04iLCJsZWFmRGl2cyIsImdldExlYWZEaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0TGVhZkRpdiIsImxlYWZEaXZzTGVuZ3RoIiwibGVuZ3RoIiwicHJldmlvdXNMZWFmRGl2IiwiaGlkZSIsIm5leHRMZWFmRGl2Iiwic2V0VGltZW91dCIsInNob3ciLCJTSE9XX0RFTEFZIiwiZm9yRWFjaExlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJmaW5kIiwibGVhZkRpdiIsInNob3dpbmciLCJpc1Nob3dpbmciLCJyZXRyaWV2ZUxlYWZEaXZzIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiVklFV19DSElMRF9ESVZTX1NFTEVDVE9SIiwidmlld0NoaWxkRGl2RE9NRWxlbWVudHMiLCJsZWFmTm9kZXNGcm9tTm9kZUxpc3QiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIkxlYWZEaXYiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0TGVmdERpdnMiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJvbkN1c3RvbVRhcCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DbGljayIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tVGFwIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJkaXNhYmxlVG91Y2giLCJvZmZDbGljayIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiTmF2aWdhdGlvbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImV2ZW50TWl4aW5zIiwidG91Y2hNaXhpbnMiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9iQTs7O2VBQUE7OztvRUFsYnNCO3lCQUVHO29CQUNPOzJEQUVaO2tFQUNHOzREQUNDOzREQUNBO29CQUVjO3VCQUNFO3lCQUNDO3lCQUNtRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1SCxJQUFRQSxpQkFNeUJDLG1CQUFRLENBTmpDRCxnQkFDQUUsa0JBS3lCRCxtQkFBUSxDQUxqQ0MsaUJBQ0FDLHFCQUl5QkYs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