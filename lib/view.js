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
        "\n\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  touch-action: none;\n    \n"
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
            alert("down!");
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element) {
            alert("up!");
        });
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element) {
        ///
        });
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            var pageX = event.pageX, width = _this.getWidth(), clickWidthRatio = pageX / width;
            if (clickWidthRatio < _constants.MAXIMUM_CLICK_WIDTH_RATIO) {
                _this.showLeftLeafDiv();
            }
            if (1 - clickWidthRatio < _constants.MAXIMUM_CLICK_WIDTH_RATIO) {
                _this.showRightLeftDiv();
            }
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
            key: "disableSwipes",
            value: function disableSwipes() {
                var swipesDisabled = true;
                this.setSwipesDisabled(swipesDisabled);
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
                var _this = this;
                var viewChildDivDOMElementNodeList = document.querySelectorAll(_selectors.VIEW_CHILD_DIVS_SELECTOR), viewChildDivDOMElements = (0, _tree.leafNodesFromNodeList)(viewChildDivDOMElementNodeList), leafDivs = (0, _element.elementsFromDOMElements)(viewChildDivDOMElements, function() {
                    return /*#__PURE__*/ React.createElement(_leaf.default, {
                        onCustomTap: _this.tapCustomHandler,
                        onCustomSwipeUp: _this.swipeUpCustomHandler,
                        onCustomSwipeDown: _this.swipeDownCustomHandler,
                        onCustomSwipeLeft: _this.swipeLeftCustomHandler,
                        onCustomSwipeRight: _this.swipeRightCustomHandler
                    });
                }), swipesDisabled = false;
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
            key: "initialise",
            value: function initialise() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IEVOQUJMRV9TV0lQRVNfREVMQVksIE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzd2lwZXNEaXNhYmxlZCA9IHRoaXMuYXJlU3dpcGVzRGlzYWJsZWQoKTtcblxuICAgIGlmIChzd2lwZXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzYWJsZVN3aXBlcygpO1xuICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG4gICAgdGhpcy53YWl0VG9FbmFibGVTd2lwZXMoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzd2lwZXNEaXNhYmxlZCA9IHRoaXMuYXJlU3dpcGVzRGlzYWJsZWQoKTtcblxuICAgIGlmIChzd2lwZXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzYWJsZVN3aXBlcygpO1xuICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuICAgIHRoaXMud2FpdFRvRW5hYmxlU3dpcGVzKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgYWxlcnQoXCJkb3duIVwiKVxuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBhbGVydChcInVwIVwiKVxuICB9XG5cbiAgdGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIC8vL1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgY2xpY2tXaWR0aFJhdGlvID0gcGFnZVggLyB3aWR0aDtcblxuICAgIGlmIChjbGlja1dpZHRoUmF0aW8gPCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPKSB7XG4gICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuICAgIH1cblxuICAgIGlmICgoMSAtIGNsaWNrV2lkdGhSYXRpbykgPCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPKSB7XG4gICAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRMZWFmRGl2KCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3RMZWZ0RGl2KCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3RMZWFmRGl2KCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93Rmlyc3RMZWZ0RGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnRMZWFmRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHRMZWZ0RGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdExlYWZEaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihzaG93aW5nTGVhZkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gbGVhZkRpdnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgbGVhZkRpdnNMZW5ndGggPSBsZWFmRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcHJldmlvdXNMZWFmRGl2ID0gbGVhZkRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICBpZiAoKG5leHRJbmRleCA9PT0gLTEpIHx8IChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHx8IChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSkge1xuICAgICAgcHJldmlvdXNMZWFmRGl2LndpZ2dsZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dExlYWZEaXYgPSBsZWFmRGl2c1tuZXh0SW5kZXhdO1xuXG4gICAgbmV4dExlYWZEaXYuc2hvdygpO1xuXG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcbiAgfVxuXG4gIGZvckVhY2hMZWFmRGl2KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCk7XG5cbiAgICBsZWFmRGl2cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRTaG93aW5nTGVhZkRpdigpIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nTGVhZkRpdiA9IGxlYWZEaXZzLmZpbmQoKGxlYWZEaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBsZWFmRGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzaG93aW5nTGVhZkRpdjtcbiAgfVxuXG4gIGRpc2FibGVTd2lwZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVzRGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTd2lwZXNEaXNhYmxlZChzd2lwZXNEaXNhYmxlZCk7XG4gIH1cblxuICBlbmFibGVTd2lwZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3dpcGVzRGlzYWJsZWQoc3dpcGVzRGlzYWJsZWQpO1xuICB9XG5cbiAgd2FpdFRvRW5hYmxlU3dpcGVzKCkge1xuICAgIGNvbnN0IGRlbGF5ID0gRU5BQkxFX1NXSVBFU19ERUxBWTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbmFibGVTd2lwZXMoKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN3aXBlc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IHsgc3dpcGVzRGlzYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzd2lwZXNEaXNhYmxlZDtcbiAgfVxuXG4gIHNldFN3aXBlc0Rpc2FibGVkKHN3aXBlc0Rpc2FibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzd2lwZXNEaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVklFV19DSElMRF9ESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICB2aWV3Q2hpbGREaXZET01FbGVtZW50cyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCh2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyh2aWV3Q2hpbGREaXZET01FbGVtZW50cywgKCkgPT5cblxuICAgICAgICAgICAgPExlYWZEaXYgb25DdXN0b21UYXA9e3RoaXMudGFwQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU3dpcGVVcD17dGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU3dpcGVEb3duPXt0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVN3aXBlTGVmdD17dGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Td2lwZVJpZ2h0PXt0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyfSAvPlxuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzd2lwZXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFmRGl2cyxcbiAgICAgIHN3aXBlc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2LCBpbmRleCkgPT4ge1xuICAgICAgKGluZGV4ID09PSAwKSA/XG4gICAgICAgIGxlYWZEaXYuc2hvdygpIDpcbiAgICAgICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgXG5gOyJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwic3dpcGVzRGlzYWJsZWQiLCJhcmVTd2lwZXNEaXNhYmxlZCIsImRpc2FibGVTd2lwZXMiLCJzaG93TGVmdExlYWZEaXYiLCJ3YWl0VG9FbmFibGVTd2lwZXMiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0TGVmdERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJhbGVydCIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwidGFwQ3VzdG9tSGFuZGxlciIsImNsaWNrSGFuZGxlciIsInBhZ2VYIiwid2lkdGgiLCJnZXRXaWR0aCIsImNsaWNrV2lkdGhSYXRpbyIsIk1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8iLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJzaG93aW5nTGVhZkRpdiIsImZpbmRTaG93aW5nTGVhZkRpdiIsImxlYWZEaXZzIiwiZ2V0TGVhZkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHRMZWFmRGl2IiwibGVuZ3RoIiwibGVhZkRpdnNMZW5ndGgiLCJwcmV2aW91c0xlYWZEaXYiLCJ3aWdnbGUiLCJuZXh0TGVhZkRpdiIsInNob3ciLCJoaWRlIiwiZm9yRWFjaExlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJmaW5kIiwibGVhZkRpdiIsInNob3dpbmciLCJpc1Nob3dpbmciLCJzZXRTd2lwZXNEaXNhYmxlZCIsImVuYWJsZVN3aXBlcyIsImRlbGF5IiwiRU5BQkxFX1NXSVBFU19ERUxBWSIsInNldFRpbWVvdXQiLCJnZXRTdGF0ZSIsInNldExlZnREaXZzIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50cyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJvbkNsaWNrIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZDbGljayIsIm9mZktleURvd24iLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaVNBOzs7ZUFBQTs7O29FQS9Sc0I7eUJBRUc7b0JBQ087MkRBRVo7b0JBRWtCO3VCQUNFO3lCQUNDO3lCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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