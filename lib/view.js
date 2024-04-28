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
                var viewChildDivDOMElementNodeList = document.querySelectorAll(_selectors.VIEW_CHILD_DIVS_SELECTOR), viewChildDivDOMElements = (0, _tree.leafNodesFromNodeList)(viewChildDivDOMElementNodeList), leafDivs = (0, _element.elementsFromDOMElements)(viewChildDivDOMElements, function() {
                    return /*#__PURE__*/ React.createElement(_leaf.default, null);
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
            key: "setInitialState",
            value: function setInitialState() {
                var leafDivs = this.retrieveLeafDivs();
                this.setState({
                    leafDivs: leafDivs
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableTouch();
                this.onCustomTap(this.tapCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi92aWV3L25hdmlnYXRyaW9uXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2hvd1JpZ2h0TGVmdERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaGlkZU5hdmlnYXRpb24oKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zaG93TmF2aWdhdGlvbigpO1xuICB9XG5cbiAgdGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIC8vL1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0TGVmdERpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0TGVhZkRpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgY2xpY2tXaWR0aFJhdGlvID0gcGFnZVggLyB3aWR0aDtcblxuICAgIGlmIChjbGlja1dpZHRoUmF0aW8gPCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPKSB7XG4gICAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCk7XG5cbiAgICAgIHNob3dpbmdMZWFmRGl2Lnpvb21JbigpO1xuXG4gICAgICAvLyB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuICAgIH1cblxuICAgIGlmICgoMSAtIGNsaWNrV2lkdGhSYXRpbykgPCBNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPKSB7XG4gICAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCk7XG5cbiAgICAgIHNob3dpbmdMZWFmRGl2Lnpvb21PdXQoKTtcblxuICAgICAgLy8gdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0ZpcnN0TGVmdERpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0TGVhZkRpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0TGVmdERpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3RMZWFmRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGxlYWZEaXZzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgaWYgKChuZXh0SW5kZXggPT09IC0xKSB8fCAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB8fCAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkpIHtcbiAgICAgIHByZXZpb3VzTGVhZkRpdi53aWdnbGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XTtcblxuICAgIG5leHRMZWFmRGl2LnNob3coKTtcblxuICAgIHByZXZpb3VzTGVhZkRpdi5oaWRlKCk7XG4gIH1cblxuICBmb3JFYWNoTGVhZkRpdihjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpO1xuXG4gICAgbGVhZkRpdnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0xlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0xlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gbGVhZkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2hvd2luZ0xlYWZEaXY7XG4gIH1cblxuICByZXRyaWV2ZUxlYWZEaXZzKCkge1xuICAgIGNvbnN0IHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVklFV19DSElMRF9ESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICB2aWV3Q2hpbGREaXZET01FbGVtZW50cyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCh2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyh2aWV3Q2hpbGREaXZET01FbGVtZW50cywgKCkgPT5cblxuICAgICAgICAgICAgPExlYWZEaXYvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIGdldExlYWZEaXZzKCkge1xuICAgIGNvbnN0IHsgbGVhZkRpdnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBsZWFmRGl2cztcbiAgfVxuXG4gIHNldExlZnREaXZzKGxlYWZEaXZzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWFmRGl2c1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5yZXRyaWV2ZUxlYWZEaXZzKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWZEaXZzXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tVGFwKHRoaXMudGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21UYXAodGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8TmF2aWdhdGlvbi8+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2LCBpbmRleCkgPT4ge1xuICAgICAgKGluZGV4ID09PSAwKSA/XG4gICAgICAgIGxlYWZEaXYuc2hvdygpIDpcbiAgICAgICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNob3dMZWZ0TGVhZkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsImhpZGVOYXZpZ2F0aW9uIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJzaG93TmF2aWdhdGlvbiIsInRhcEN1c3RvbUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJjbGlja0hhbmRsZXIiLCJwYWdlWCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJjbGlja1dpZHRoUmF0aW8iLCJNQVhJTVVNX0NMSUNLX1dJRFRIX1JBVElPIiwic2hvd2luZ0xlYWZEaXYiLCJmaW5kU2hvd2luZ0xlYWZEaXYiLCJ6b29tSW4iLCJ6b29tT3V0IiwibGVhZkRpdnMiLCJnZXRMZWFmRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dExlYWZEaXYiLCJsZW5ndGgiLCJsZWFmRGl2c0xlbmd0aCIsInByZXZpb3VzTGVhZkRpdiIsIndpZ2dsZSIsIm5leHRMZWFmRGl2Iiwic2hvdyIsImhpZGUiLCJmb3JFYWNoTGVhZkRpdiIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZpbmQiLCJsZWFmRGl2Iiwic2hvd2luZyIsImlzU2hvd2luZyIsInJldHJpZXZlTGVhZkRpdnMiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50cyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsImdldFN0YXRlIiwic2V0TGVmdERpdnMiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZkN1c3RvbVRhcCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0IiwiZGlzYWJsZVRvdWNoIiwib2ZmQ2xpY2siLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsIk5hdmlnYXRpb24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJldmVudE1peGlucyIsInRvdWNoTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5UkE7OztlQUFBOzs7b0VBdlJzQjt5QkFFRztvQkFDTzsyREFFWjtrRUFDRzs0REFDQzs0REFDQTtvQkFFYzt1QkFDRTt5QkFDQzt5QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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