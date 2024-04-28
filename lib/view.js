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
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element) {
            _this.showLeftLeafDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            _this.showRightLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element) {
            _this.hideNavigation();
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element) {
            _this.showNavigation();
        });
        _define_property(_assert_this_initialized(_this), "pinchCustomHandler", function(event, element, radius) {
        ///
        });
        _define_property(_assert_this_initialized(_this), "dragCustomHandler", function(event, element, top, left) {
            console.log(top, left);
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
            key: "zoomIn",
            value: function zoomIn() {
                var zoom_ratio = 1 * _constants.ZOOM_RATIO;
                this.zoom(zoom_ratio);
            }
        },
        {
            key: "zoomOut",
            value: function zoomOut() {
                var zoom_ratio = 1 / _constants.ZOOM_RATIO;
                this.zoom(zoom_ratio);
            }
        },
        {
            key: "zoom",
            value: function zoom(zoom_ratio) {
                var zoom = this.getZoom();
                zoom *= zoom_ratio;
                this.setZoom(zoom);
                var showingLeafDiv = this.findShowingLeafDiv();
                showingLeafDiv.zoom(zoom);
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
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), nextIndex = leafDivs.length - 1, previousIndex = index; ///
                this.showNextLeafDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextLeafDiv",
            value: function showNextLeafDiv(nextIndex, previousIndex) {
                var leafDivs = this.getLeafDivs(), leafDivsLength = leafDivs.length, previousLeafDiv = leafDivs[previousIndex];
                if (nextIndex === -1 || nextIndex === previousIndex || nextIndex === leafDivsLength) {
                    previousLeafDiv.wiggle();
                    return;
                }
                previousLeafDiv.hide();
                var nextLeafDiv = leafDivs[nextIndex], zoom = this.getZoom();
                nextLeafDiv.zoom(zoom);
                nextLeafDiv.show();
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
            key: "setInitialState",
            value: function setInitialState() {
                var zoom = 1, leafDivs = this.retrieveLeafDivs();
                this.setState({
                    zoom: zoom,
                    leafDivs: leafDivs
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableTouch();
                this.onCustomTap(this.tapCustomHandler);
                this.onCustomDrag(this.dragCustomHandler);
                this.onCustomPinch(this.pinchCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onClick(this.clickHandler);
                _easy.window.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomTap(this.tapCustomHandler);
                this.offCustomDrag(this.dragCustomHandler);
                this.offCustomPinch(this.pinchCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi92aWV3L25hdmlnYXRyaW9uXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IFpPT01fUkFUSU8sIE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaGlkZU5hdmlnYXRpb24oKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93TmF2aWdhdGlvbigpO1xuICB9XG5cbiAgcGluY2hDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYWRpdXMpID0+IHtcbiAgICAvLy9cbiAgfVxuXG4gIGRyYWdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b3AsIGxlZnQpXG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgLy8vXG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdExlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgY2xpY2tXaWR0aFJhdGlvID0gcGFnZVggLyB3aWR0aDtcblxuICAgIGlmIChjbGlja1dpZHRoUmF0aW8gPCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPKSB7XG4gICAgICB0aGlzLnpvb21PdXQoKTtcbiAgICB9XG5cbiAgICBpZiAoKDEgLSBjbGlja1dpZHRoUmF0aW8pIDwgTUFYSU1VTV9DTElDS19XSURUSF9SQVRJTykge1xuICAgICAgdGhpcy56b29tSW4oKTtcbiAgICB9XG4gIH1cblxuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgem9vbV9yYXRpbyA9IDEgKiBaT09NX1JBVElPO1xuXG4gICAgdGhpcy56b29tKHpvb21fcmF0aW8pO1xuICB9XG5cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCB6b29tX3JhdGlvID0gMSAvIFpPT01fUkFUSU87XG5cbiAgICB0aGlzLnpvb20oem9vbV9yYXRpbyk7XG4gIH1cblxuICB6b29tKHpvb21fcmF0aW8pIHtcbiAgICBsZXQgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpO1xuXG4gICAgem9vbSAqPSB6b29tX3JhdGlvO1xuXG4gICAgdGhpcy5zZXRab29tKHpvb20pO1xuXG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpO1xuXG4gICAgc2hvd2luZ0xlYWZEaXYuem9vbSh6b29tKTtcbiAgfVxuXG4gIHNob3dGaXJzdExlZnREaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihzaG93aW5nTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdExlYWZEaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihzaG93aW5nTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodExlZnREaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihzaG93aW5nTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0TGVhZkRpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBsZWFmRGl2cy5sZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aCxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgIGlmICgobmV4dEluZGV4ID09PSAtMSkgfHwgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkgfHwgKG5leHRJbmRleCA9PT0gbGVhZkRpdnNMZW5ndGgpKSB7XG4gICAgICBwcmV2aW91c0xlYWZEaXYud2lnZ2xlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c0xlYWZEaXYuaGlkZSgpO1xuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIHpvb20gPSB0aGlzLmdldFpvb20oKTtcblxuICAgIG5leHRMZWFmRGl2Lnpvb20oem9vbSk7XG5cbiAgICBuZXh0TGVhZkRpdi5zaG93KCk7XG4gIH1cblxuICBmb3JFYWNoTGVhZkRpdihjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpO1xuXG4gICAgbGVhZkRpdnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0xlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0xlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gbGVhZkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2hvd2luZ0xlYWZEaXY7XG4gIH1cblxuICByZXRyaWV2ZUxlYWZEaXZzKCkge1xuICAgIGNvbnN0IHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVklFV19DSElMRF9ESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICB2aWV3Q2hpbGREaXZET01FbGVtZW50cyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCh2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyh2aWV3Q2hpbGREaXZET01FbGVtZW50cywgTGVhZkRpdik7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIGNvbnN0IHsgem9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH1cblxuICBzZXRab29tKHpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldExlYWZEaXZzKCkge1xuICAgIGNvbnN0IHsgbGVhZkRpdnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIHNldExlZnREaXZzKGxlYWZEaXZzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHpvb20gPSAxLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5yZXRyaWV2ZUxlYWZEaXZzKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHpvb20sXG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVRhcCh0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnKHRoaXMuZHJhZ0N1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaCh0aGlzLnBpbmNoQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaCh0aGlzLnBpbmNoQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPE5hdmlnYXRpb24vPlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdiwgaW5kZXgpID0+IHtcbiAgICAgIChpbmRleCA9PT0gMCkgP1xuICAgICAgICBsZWFmRGl2LnNob3coKSA6XG4gICAgICAgICAgbGVhZkRpdi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzaG93TGVmdExlYWZEaXYiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0TGVmdERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJoaWRlTmF2aWdhdGlvbiIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwic2hvd05hdmlnYXRpb24iLCJwaW5jaEN1c3RvbUhhbmRsZXIiLCJyYWRpdXMiLCJkcmFnQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJjb25zb2xlIiwibG9nIiwidGFwQ3VzdG9tSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJjbGlja0hhbmRsZXIiLCJwYWdlWCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJjbGlja1dpZHRoUmF0aW8iLCJNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPIiwiem9vbU91dCIsInpvb21JbiIsInpvb21fcmF0aW8iLCJaT09NX1JBVElPIiwiem9vbSIsImdldFpvb20iLCJzZXRab29tIiwic2hvd2luZ0xlYWZEaXYiLCJmaW5kU2hvd2luZ0xlYWZEaXYiLCJsZWFmRGl2cyIsImdldExlYWZEaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0TGVhZkRpdiIsImxlbmd0aCIsImxlYWZEaXZzTGVuZ3RoIiwicHJldmlvdXNMZWFmRGl2Iiwid2lnZ2xlIiwiaGlkZSIsIm5leHRMZWFmRGl2Iiwic2hvdyIsImZvckVhY2hMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZmluZCIsImxlYWZEaXYiLCJzaG93aW5nIiwiaXNTaG93aW5nIiwicmV0cmlldmVMZWFmRGl2cyIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnRzIiwibGVhZk5vZGVzRnJvbU5vZGVMaXN0IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJMZWFmRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldExlZnREaXZzIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25DdXN0b21UYXAiLCJvbkN1c3RvbURyYWciLCJvbkN1c3RvbVBpbmNoIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbURyYWciLCJvZmZDdXN0b21QaW5jaCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0IiwiZGlzYWJsZVRvdWNoIiwib2ZmQ2xpY2siLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsIk5hdmlnYXRpb24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJldmVudE1peGlucyIsInRvdWNoTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBUQTs7O2VBQUE7OztvRUF4VHNCO3lCQUVHO29CQUNPOzJEQUVaO2tFQUNHOzREQUNDOzREQUNBO29CQUVjO3VCQUNFO3lCQUNDO3lCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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