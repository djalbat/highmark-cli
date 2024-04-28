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
            var swipesDisabled = _this.areSwipesDisabled();
            if (swipesDisabled) {
                return;
            }
            _this.disableSwipes();
            _this.showLeftLeafDiv();
            _this.waitToEnableSwipes();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            var swipesDisabled = _this.areSwipesDisabled();
            if (swipesDisabled) {
                return;
            }
            _this.disableSwipes();
            _this.showRightLeftDiv();
            _this.waitToEnableSwipes();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element) {
            _this.hideNavigation();
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element) {
            _this.showNavigation();
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
                        event.preventDefault();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftLeafDiv();
                        event.preventDefault();
                        break;
                    }
                case ESCAPE_KEY_CODE:
                    {
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstLeftDiv();
                        event.preventDefault();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastLeafDiv();
                        event.preventDefault();
                        break;
                    }
            }
        });
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            var pageX = event.pageX, width = _this.getWidth(), clickWidthRatio = pageX / width;
            if (clickWidthRatio < _constants.MAXIMUM_CLICK_WIDTH_RATIO) {
                var showingLeafDiv = _this.findShowingLeafDiv();
                showingLeafDiv.zoomIn();
            // this.showLeftLeafDiv();
            }
            if (1 - clickWidthRatio < _constants.MAXIMUM_CLICK_WIDTH_RATIO) {
                var showingLeafDiv1 = _this.findShowingLeafDiv();
                showingLeafDiv1.zoomOut();
            // this.showRightLeftDiv();
            }
        });
        return _this;
    }
    _create_class(View, [
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
                var nextLeafDiv = leafDivs[nextIndex];
                nextLeafDiv.show();
                previousLeafDiv.hide();
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
            key: "enableSwipes",
            value: function enableSwipes() {
                var swipesDisabled = false;
                this.setSwipesDisabled(swipesDisabled);
            }
        },
        {
            key: "disableSwipes",
            value: function disableSwipes() {
                var swipesDisabled = true;
                this.setSwipesDisabled(swipesDisabled);
            }
        },
        {
            key: "waitToEnableSwipes",
            value: function waitToEnableSwipes() {
                var _this = this;
                var delay = _constants.ENABLE_SWIPES_DELAY;
                setTimeout(function() {
                    _this.enableSwipes();
                }, delay);
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
                var _this = this;
                var viewChildDivDOMElementNodeList = document.querySelectorAll(_selectors.VIEW_CHILD_DIVS_SELECTOR), viewChildDivDOMElements = (0, _tree.leafNodesFromNodeList)(viewChildDivDOMElementNodeList), leafDivs = (0, _element.elementsFromDOMElements)(viewChildDivDOMElements, function() {
                    return /*#__PURE__*/ React.createElement(_leaf.default, {
                        onCustomTap: _this.tapCustomHandler,
                        onCustomSwipeUp: _this.swipeUpCustomHandler,
                        onCustomSwipeDown: _this.swipeDownCustomHandler,
                        onCustomSwipeLeft: _this.swipeLeftCustomHandler,
                        onCustomSwipeRight: _this.swipeRightCustomHandler
                    });
                });
                return leafDivs;
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
            key: "areSwipesDisabled",
            value: function areSwipesDisabled() {
                var swipesDisabled = this.getState().swipesDisabled;
                return swipesDisabled;
            }
        },
        {
            key: "setSwipesDisabled",
            value: function setSwipesDisabled(swipesDisabled) {
                this.updateState({
                    swipesDisabled: swipesDisabled
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var leafDivs = this.retrieveLeafDivs(), swipesDisabled = false;
                this.setState({
                    leafDivs: leafDivs,
                    swipesDisabled: swipesDisabled
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onClick(this.clickHandler);
                _easy.window.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
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
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi92aWV3L25hdmlnYXRyaW9uXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IEVOQUJMRV9TV0lQRVNfREVMQVksIE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzd2lwZXNEaXNhYmxlZCA9IHRoaXMuYXJlU3dpcGVzRGlzYWJsZWQoKTtcblxuICAgIGlmIChzd2lwZXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzYWJsZVN3aXBlcygpO1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gICAgdGhpcy53YWl0VG9FbmFibGVTd2lwZXMoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzd2lwZXNEaXNhYmxlZCA9IHRoaXMuYXJlU3dpcGVzRGlzYWJsZWQoKTtcblxuICAgIGlmIChzd2lwZXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzYWJsZVN3aXBlcygpO1xuICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuICAgIHRoaXMud2FpdFRvRW5hYmxlU3dpcGVzKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlTmF2aWdhdGlvbigpO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dOYXZpZ2F0aW9uKCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgLy8vXG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3RMZWZ0RGl2KCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHBhZ2VYIH0gPSBldmVudCxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBjbGlja1dpZHRoUmF0aW8gPSBwYWdlWCAvIHdpZHRoO1xuXG4gICAgaWYgKGNsaWNrV2lkdGhSYXRpbyA8IE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8pIHtcbiAgICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKTtcblxuICAgICAgc2hvd2luZ0xlYWZEaXYuem9vbUluKCk7XG5cbiAgICAgIC8vIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gICAgfVxuXG4gICAgaWYgKCgxIC0gY2xpY2tXaWR0aFJhdGlvKSA8IE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8pIHtcbiAgICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKTtcblxuICAgICAgc2hvd2luZ0xlYWZEaXYuem9vbU91dCgpO1xuXG4gICAgICAvLyB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Rmlyc3RMZWZ0RGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnRMZWFmRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdExlYWZEaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihzaG93aW5nTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gbGVhZkRpdnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcHJldmlvdXNMZWFmRGl2ID0gbGVhZkRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICBpZiAoKG5leHRJbmRleCA9PT0gLTEpIHx8IChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHx8IChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSkge1xuICAgICAgcHJldmlvdXNMZWFmRGl2LndpZ2dsZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdO1xuXG4gICAgbmV4dExlYWZEaXYuc2hvdygpO1xuXG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGVuYWJsZVN3aXBlcygpIHtcbiAgICBjb25zdCBzd2lwZXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTd2lwZXNEaXNhYmxlZChzd2lwZXNEaXNhYmxlZCk7XG4gIH1cblxuICBkaXNhYmxlU3dpcGVzKCkge1xuICAgIGNvbnN0IHN3aXBlc0Rpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U3dpcGVzRGlzYWJsZWQoc3dpcGVzRGlzYWJsZWQpO1xuICB9XG5cbiAgd2FpdFRvRW5hYmxlU3dpcGVzKCkge1xuICAgIGNvbnN0IGRlbGF5ID0gRU5BQkxFX1NXSVBFU19ERUxBWTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbmFibGVTd2lwZXMoKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0xlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0xlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gbGVhZkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2hvd2luZ0xlYWZEaXY7XG4gIH1cblxuICByZXRyaWV2ZUxlYWZEaXZzKCkge1xuICAgIGNvbnN0IHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVklFV19DSElMRF9ESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICB2aWV3Q2hpbGREaXZET01FbGVtZW50cyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCh2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyh2aWV3Q2hpbGREaXZET01FbGVtZW50cywgKCkgPT5cblxuICAgICAgICAgICAgPExlYWZEaXYgb25DdXN0b21UYXA9e3RoaXMudGFwQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU3dpcGVVcD17dGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU3dpcGVEb3duPXt0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVN3aXBlTGVmdD17dGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Td2lwZVJpZ2h0PXt0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGdldExlYWZEaXZzKCkge1xuICAgIGNvbnN0IHsgbGVhZkRpdnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIHNldExlZnREaXZzKGxlYWZEaXZzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgYXJlU3dpcGVzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgeyBzd2lwZXNEaXNhYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN3aXBlc0Rpc2FibGVkO1xuICB9XG5cbiAgc2V0U3dpcGVzRGlzYWJsZWQoc3dpcGVzRGlzYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN3aXBlc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLnJldHJpZXZlTGVhZkRpdnMoKSxcbiAgICAgICAgICBzd2lwZXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFmRGl2cyxcbiAgICAgIHN3aXBlc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxOYXZpZ2F0aW9uLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuZm9yRWFjaExlYWZEaXYoKGxlYWZEaXYsIGluZGV4KSA9PiB7XG4gICAgICAoaW5kZXggPT09IDApID9cbiAgICAgICAgbGVhZkRpdi5zaG93KCkgOlxuICAgICAgICAgIGxlYWZEaXYuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInN3aXBlc0Rpc2FibGVkIiwiYXJlU3dpcGVzRGlzYWJsZWQiLCJkaXNhYmxlU3dpcGVzIiwic2hvd0xlZnRMZWFmRGl2Iiwid2FpdFRvRW5hYmxlU3dpcGVzIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodExlZnREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwiaGlkZU5hdmlnYXRpb24iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsInNob3dOYXZpZ2F0aW9uIiwidGFwQ3VzdG9tSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic2hvd0ZpcnN0TGVmdERpdiIsInNob3dMYXN0TGVhZkRpdiIsImNsaWNrSGFuZGxlciIsInBhZ2VYIiwid2lkdGgiLCJnZXRXaWR0aCIsImNsaWNrV2lkdGhSYXRpbyIsIk1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8iLCJzaG93aW5nTGVhZkRpdiIsImZpbmRTaG93aW5nTGVhZkRpdiIsInpvb21JbiIsInpvb21PdXQiLCJsZWFmRGl2cyIsImdldExlYWZEaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0TGVhZkRpdiIsImxlbmd0aCIsImxlYWZEaXZzTGVuZ3RoIiwicHJldmlvdXNMZWFmRGl2Iiwid2lnZ2xlIiwibmV4dExlYWZEaXYiLCJzaG93IiwiaGlkZSIsImZvckVhY2hMZWFmRGl2IiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZW5hYmxlU3dpcGVzIiwic2V0U3dpcGVzRGlzYWJsZWQiLCJkZWxheSIsIkVOQUJMRV9TV0lQRVNfREVMQVkiLCJzZXRUaW1lb3V0IiwiZmluZCIsImxlYWZEaXYiLCJzaG93aW5nIiwiaXNTaG93aW5nIiwicmV0cmlldmVMZWFmRGl2cyIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiIsInZpZXdDaGlsZERpdkRPTUVsZW1lbnRzIiwibGVhZk5vZGVzRnJvbU5vZGVMaXN0IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJMZWFmRGl2Iiwib25DdXN0b21UYXAiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0IiwiZ2V0U3RhdGUiLCJzZXRMZWZ0RGl2cyIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwib2ZmS2V5RG93biIsImNoaWxkRWxlbWVudHMiLCJOYXZpZ2F0aW9uIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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