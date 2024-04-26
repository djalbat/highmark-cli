"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _necessary = require("necessary");
var _easy = require("easy");
var _leaf = /*#__PURE__*/ _interop_require_default(require("./view/div/leaf"));
var _tree = require("./utilities/tree");
var _element = require("./utilities/element");
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
                var viewChildDivDOMElementNodeList = document.querySelectorAll(_constants.VIEW_CHILD_DIVS_SELECTOR), viewChildDivDOMElements = (0, _tree.leafNodesFromNodeList)(viewChildDivDOMElementNodeList), leafDivs = (0, _element.elementsFromDOMElements)(viewChildDivDOMElements, function() {
                    return /*#__PURE__*/ React.createElement(_leaf.default, {
                        onCustomTap: _this.tapCustomHandler,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBMZWFmRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2xlYWZcIjtcblxuaW1wb3J0IHsgbGVhZk5vZGVzRnJvbU5vZGVMaXN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IEVOQUJMRV9TV0lQRVNfREVMQVksIE1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8sIFZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN3aXBlc0Rpc2FibGVkID0gdGhpcy5hcmVTd2lwZXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKHN3aXBlc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlU3dpcGVzKCk7XG4gICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgICB0aGlzLndhaXRUb0VuYWJsZVN3aXBlcygpO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN3aXBlc0Rpc2FibGVkID0gdGhpcy5hcmVTd2lwZXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKHN3aXBlc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlU3dpcGVzKCk7XG4gICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gICAgdGhpcy53YWl0VG9FbmFibGVTd2lwZXMoKTtcbiAgfVxuXG4gIHRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAvLy9cbiAgfVxuXG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNsaWNrV2lkdGhSYXRpbyA9IHBhZ2VYIC8gd2lkdGg7XG5cbiAgICBpZiAoY2xpY2tXaWR0aFJhdGlvIDwgTUFYSU1VTV9DTElDS19XSURUSF9SQVRJTykge1xuICAgICAgdGhpcy5zaG93TGVmdExlYWZEaXYoKTtcbiAgICB9XG5cbiAgICBpZiAoKDEgLSBjbGlja1dpZHRoUmF0aW8pIDwgTUFYSU1VTV9DTElDS19XSURUSF9SQVRJTykge1xuICAgICAgdGhpcy5zaG93UmlnaHRMZWZ0RGl2KCk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodExlZnREaXYoKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TGVhZkRpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0TGVmdERpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0TGVhZkRpdigpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvd0ZpcnN0TGVmdERpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dExlYWZEaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0TGVhZkRpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0TGVmdERpdigpIHtcbiAgICBjb25zdCBzaG93aW5nTGVhZkRpdiA9IHRoaXMuZmluZFNob3dpbmdMZWFmRGl2KCksXG4gICAgICAgICAgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBsZWFmRGl2cy5pbmRleE9mKHNob3dpbmdMZWFmRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3RMZWFmRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGxlYWZEaXZzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGxlYWZEaXZzTGVuZ3RoID0gbGVhZkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHByZXZpb3VzTGVhZkRpdiA9IGxlYWZEaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgaWYgKChuZXh0SW5kZXggPT09IC0xKSB8fCAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB8fCAobmV4dEluZGV4ID09PSBsZWFmRGl2c0xlbmd0aCkpIHtcbiAgICAgIHByZXZpb3VzTGVhZkRpdi53aWdnbGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XTtcblxuICAgIG5leHRMZWFmRGl2LnNob3coKTtcblxuICAgIHByZXZpb3VzTGVhZkRpdi5oaWRlKCk7XG4gIH1cblxuICBmb3JFYWNoTGVhZkRpdihjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpO1xuXG4gICAgbGVhZkRpdnMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0xlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0xlYWZEaXYgPSBsZWFmRGl2cy5maW5kKChsZWFmRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gbGVhZkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2hvd2luZ0xlYWZEaXY7XG4gIH1cblxuICBkaXNhYmxlU3dpcGVzKCkge1xuICAgIGNvbnN0IHN3aXBlc0Rpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U3dpcGVzRGlzYWJsZWQoc3dpcGVzRGlzYWJsZWQpO1xuICB9XG5cbiAgZW5hYmxlU3dpcGVzKCkge1xuICAgIGNvbnN0IHN3aXBlc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN3aXBlc0Rpc2FibGVkKHN3aXBlc0Rpc2FibGVkKTtcbiAgfVxuXG4gIHdhaXRUb0VuYWJsZVN3aXBlcygpIHtcbiAgICBjb25zdCBkZWxheSA9IEVOQUJMRV9TV0lQRVNfREVMQVk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZW5hYmxlU3dpcGVzKCk7XG4gICAgfSwgZGVsYXkpO1xuICB9XG5cbiAgZ2V0TGVhZkRpdnMoKSB7XG4gICAgY29uc3QgeyBsZWFmRGl2cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGxlYWZEaXZzO1xuICB9XG5cbiAgc2V0TGVmdERpdnMobGVhZkRpdnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlYWZEaXZzXG4gICAgfSk7XG4gIH1cblxuICBhcmVTd2lwZXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCB7IHN3aXBlc0Rpc2FibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3dpcGVzRGlzYWJsZWQ7XG4gIH1cblxuICBzZXRTd2lwZXNEaXNhYmxlZChzd2lwZXNEaXNhYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3dpcGVzRGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFZJRVdfQ0hJTERfRElWU19TRUxFQ1RPUiksXG4gICAgICAgICAgdmlld0NoaWxkRGl2RE9NRWxlbWVudHMgPSBsZWFmTm9kZXNGcm9tTm9kZUxpc3Qodmlld0NoaWxkRGl2RE9NRWxlbWVudE5vZGVMaXN0KSwgIC8vL1xuICAgICAgICAgIGxlYWZEaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHModmlld0NoaWxkRGl2RE9NRWxlbWVudHMsICgpID0+XG5cbiAgICAgICAgICAgIDxMZWFmRGl2IG9uQ3VzdG9tVGFwPXt0aGlzLnRhcEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVN3aXBlTGVmdD17dGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Td2lwZVJpZ2h0PXt0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyfSAvPlxuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzd2lwZXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFmRGl2cyxcbiAgICAgIHN3aXBlc0Rpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLmZvckVhY2hMZWFmRGl2KChsZWFmRGl2LCBpbmRleCkgPT4ge1xuICAgICAgKGluZGV4ID09PSAwKSA/XG4gICAgICAgIGxlYWZEaXYuc2hvdygpIDpcbiAgICAgICAgICBsZWFmRGl2LmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzd2lwZXNEaXNhYmxlZCIsImFyZVN3aXBlc0Rpc2FibGVkIiwiZGlzYWJsZVN3aXBlcyIsInNob3dMZWZ0TGVhZkRpdiIsIndhaXRUb0VuYWJsZVN3aXBlcyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHRMZWZ0RGl2IiwidGFwQ3VzdG9tSGFuZGxlciIsImNsaWNrSGFuZGxlciIsInBhZ2VYIiwid2lkdGgiLCJnZXRXaWR0aCIsImNsaWNrV2lkdGhSYXRpbyIsIk1BWElNVU1fQ0xJQ0tfV0lEVEhfUkFUSU8iLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dGaXJzdExlZnREaXYiLCJzaG93TGFzdExlYWZEaXYiLCJzaG93aW5nTGVhZkRpdiIsImZpbmRTaG93aW5nTGVhZkRpdiIsImxlYWZEaXZzIiwiZ2V0TGVhZkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHRMZWFmRGl2IiwibGVuZ3RoIiwibGVhZkRpdnNMZW5ndGgiLCJwcmV2aW91c0xlYWZEaXYiLCJ3aWdnbGUiLCJuZXh0TGVhZkRpdiIsInNob3ciLCJoaWRlIiwiZm9yRWFjaExlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJmaW5kIiwibGVhZkRpdiIsInNob3dpbmciLCJpc1Nob3dpbmciLCJzZXRTd2lwZXNEaXNhYmxlZCIsImVuYWJsZVN3aXBlcyIsImRlbGF5IiwiRU5BQkxFX1NXSVBFU19ERUxBWSIsInNldFRpbWVvdXQiLCJnZXRTdGF0ZSIsInNldExlZnREaXZzIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50cyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwib25DbGljayIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJvZmZLZXlEb3duIiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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