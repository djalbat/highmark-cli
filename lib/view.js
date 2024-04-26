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
var _easy = require("easy");
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
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
            _this.showPreviousLeftDiv();
            _this.waitToEnableSwipes();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element) {
            var swipesDisabled = _this.areSwipesDisabled();
            if (swipesDisabled) {
                return;
            }
            _this.disableSwipes();
            _this.showNextLeafDiv();
            _this.waitToEnableSwipes();
        });
        _define_property(_assert_this_initialized(_this), "tapCustomHandler", function(event, element) {
        ///
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "getFirstLeafDiv",
            value: function getFirstLeafDiv() {
                var leafDivs = this.getLeafDivs(), firstLeafDiv = first(leafDivs) || null;
                return firstLeafDiv;
            }
        },
        {
            key: "showNextLeafDiv",
            value: function showNextLeafDiv() {
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), nextIndex = index + 1, leafDivsLength = leafDivs.length;
                if (nextIndex === leafDivsLength) {
                    // showingLeafDiv.wiggle();
                    return;
                }
                var nextLeafDiv = leafDivs[nextIndex], previousLeafDiv = showingLeafDiv; ///
                nextLeafDiv.show();
                previousLeafDiv.hide();
            }
        },
        {
            key: "showPreviousLeftDiv",
            value: function showPreviousLeftDiv() {
                var showingLeafDiv = this.findShowingLeafDiv(), leafDivs = this.getLeafDivs(), index = leafDivs.indexOf(showingLeafDiv), previousIndex = index - 1;
                if (previousIndex === -1) {
                    // showingLeafDiv.wiggle();
                    return;
                }
                var nextLeafDiv = showingLeafDiv, previousLeftDiv = leafDivs[previousIndex];
                nextLeafDiv.hide();
                previousLeftDiv.show();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVhZkRpdiBmcm9tIFwiLi92aWV3L2Rpdi9sZWFmXCI7XG5cbmltcG9ydCB7IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCB9IGZyb20gXCIuL3V0aWxpdGllcy90cmVlXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBFTkFCTEVfU1dJUEVTX0RFTEFZLCBWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzd2lwZXNEaXNhYmxlZCA9IHRoaXMuYXJlU3dpcGVzRGlzYWJsZWQoKTtcblxuICAgIGlmIChzd2lwZXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzYWJsZVN3aXBlcygpO1xuICAgIHRoaXMuc2hvd1ByZXZpb3VzTGVmdERpdigpO1xuICAgIHRoaXMud2FpdFRvRW5hYmxlU3dpcGVzKCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3dpcGVzRGlzYWJsZWQgPSB0aGlzLmFyZVN3aXBlc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoc3dpcGVzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpc2FibGVTd2lwZXMoKTtcbiAgICB0aGlzLnNob3dOZXh0TGVhZkRpdigpO1xuICAgIHRoaXMud2FpdFRvRW5hYmxlU3dpcGVzKCk7XG4gIH1cblxuICB0YXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRGaXJzdExlYWZEaXYoKSB7XG4gICAgY29uc3QgbGVhZkRpdnMgPSB0aGlzLmdldExlYWZEaXZzKCksXG4gICAgICAgICAgZmlyc3RMZWFmRGl2ID0gZmlyc3QobGVhZkRpdnMpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RMZWFmRGl2O1xuICB9XG5cbiAgc2hvd05leHRMZWFmRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdMZWFmRGl2ID0gdGhpcy5maW5kU2hvd2luZ0xlYWZEaXYoKSxcbiAgICAgICAgICBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGxlYWZEaXZzLmluZGV4T2Yoc2hvd2luZ0xlYWZEaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBsZWFmRGl2c0xlbmd0aCA9IGxlYWZEaXZzLmxlbmd0aDtcblxuICAgIGlmIChuZXh0SW5kZXggPT09IGxlYWZEaXZzTGVuZ3RoKSB7XG4gICAgICAvLyBzaG93aW5nTGVhZkRpdi53aWdnbGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRMZWFmRGl2ID0gbGVhZkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICBwcmV2aW91c0xlYWZEaXYgPSBzaG93aW5nTGVhZkRpdjsgLy8vXG5cbiAgICBuZXh0TGVhZkRpdi5zaG93KCk7XG4gICAgcHJldmlvdXNMZWFmRGl2LmhpZGUoKTtcbiAgfVxuXG4gIHNob3dQcmV2aW91c0xlZnREaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0xlYWZEaXYgPSB0aGlzLmZpbmRTaG93aW5nTGVhZkRpdigpLFxuICAgICAgICAgIGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gbGVhZkRpdnMuaW5kZXhPZihzaG93aW5nTGVhZkRpdiksXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4IC0gMTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ID09PSAtMSkge1xuICAgICAgLy8gc2hvd2luZ0xlYWZEaXYud2lnZ2xlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0TGVhZkRpdiA9IHNob3dpbmdMZWFmRGl2LCAvLy9cbiAgICAgICAgICBwcmV2aW91c0xlZnREaXYgPSBsZWFmRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgIG5leHRMZWFmRGl2LmhpZGUoKTtcbiAgICBwcmV2aW91c0xlZnREaXYuc2hvdygpO1xuICB9XG5cbiAgZm9yRWFjaExlYWZEaXYoY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZWFmRGl2cyA9IHRoaXMuZ2V0TGVhZkRpdnMoKTtcblxuICAgIGxlYWZEaXZzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZFNob3dpbmdMZWFmRGl2KCkge1xuICAgIGNvbnN0IGxlYWZEaXZzID0gdGhpcy5nZXRMZWFmRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdMZWFmRGl2ID0gbGVhZkRpdnMuZmluZCgobGVhZkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd2luZyA9IGxlYWZEaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3dpbmdMZWFmRGl2O1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHZpZXdDaGlsZERpdkRPTUVsZW1lbnROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVklFV19DSElMRF9ESVZTX1NFTEVDVE9SKSxcbiAgICAgICAgICB2aWV3Q2hpbGREaXZET01FbGVtZW50cyA9IGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCh2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QpLCAgLy8vXG4gICAgICAgICAgbGVhZkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyh2aWV3Q2hpbGREaXZET01FbGVtZW50cywgKCkgPT5cblxuICAgICAgICAgICAgPExlYWZEaXYgb25DdXN0b21UYXA9e3RoaXMudGFwQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU3dpcGVMZWZ0PXt0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVN3aXBlUmlnaHQ9e3RoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXJ9IC8+XG5cbiAgICAgICAgICApLFxuICAgICAgICAgIHN3aXBlc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWZEaXZzLFxuICAgICAgc3dpcGVzRGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVTd2lwZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVzRGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTd2lwZXNEaXNhYmxlZChzd2lwZXNEaXNhYmxlZCk7XG4gIH1cblxuICBlbmFibGVTd2lwZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3dpcGVzRGlzYWJsZWQoc3dpcGVzRGlzYWJsZWQpO1xuICB9XG5cbiAgd2FpdFRvRW5hYmxlU3dpcGVzKCkge1xuICAgIGNvbnN0IGRlbGF5ID0gRU5BQkxFX1NXSVBFU19ERUxBWTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbmFibGVTd2lwZXMoKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBnZXRMZWFmRGl2cygpIHtcbiAgICBjb25zdCB7IGxlYWZEaXZzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbGVhZkRpdnM7XG4gIH1cblxuICBzZXRMZWZ0RGl2cyhsZWFmRGl2cykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbGVhZkRpdnNcbiAgICB9KTtcbiAgfVxuXG4gIGFyZVN3aXBlc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IHsgc3dpcGVzRGlzYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzd2lwZXNEaXNhYmxlZDtcbiAgfVxuXG4gIHNldFN3aXBlc0Rpc2FibGVkKHN3aXBlc0Rpc2FibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzd2lwZXNEaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5mb3JFYWNoTGVhZkRpdigobGVhZkRpdiwgaW5kZXgpID0+IHtcbiAgICAgIChpbmRleCA9PT0gMCkgP1xuICAgICAgICBsZWFmRGl2LnNob3coKSA6XG4gICAgICAgICAgbGVhZkRpdi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwic3dpcGVzRGlzYWJsZWQiLCJhcmVTd2lwZXNEaXNhYmxlZCIsImRpc2FibGVTd2lwZXMiLCJzaG93UHJldmlvdXNMZWZ0RGl2Iiwid2FpdFRvRW5hYmxlU3dpcGVzIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dOZXh0TGVhZkRpdiIsInRhcEN1c3RvbUhhbmRsZXIiLCJnZXRGaXJzdExlYWZEaXYiLCJsZWFmRGl2cyIsImdldExlYWZEaXZzIiwiZmlyc3RMZWFmRGl2Iiwic2hvd2luZ0xlYWZEaXYiLCJmaW5kU2hvd2luZ0xlYWZEaXYiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJsZWFmRGl2c0xlbmd0aCIsImxlbmd0aCIsIm5leHRMZWFmRGl2IiwicHJldmlvdXNMZWFmRGl2Iiwic2hvdyIsImhpZGUiLCJwcmV2aW91c0luZGV4IiwicHJldmlvdXNMZWZ0RGl2IiwiZm9yRWFjaExlYWZEaXYiLCJjYWxsYmFjayIsImZvckVhY2giLCJmaW5kIiwibGVhZkRpdiIsInNob3dpbmciLCJpc1Nob3dpbmciLCJzZXRJbml0aWFsU3RhdGUiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50Tm9kZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJWSUVXX0NISUxEX0RJVlNfU0VMRUNUT1IiLCJ2aWV3Q2hpbGREaXZET01FbGVtZW50cyIsImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiTGVhZkRpdiIsIm9uQ3VzdG9tVGFwIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJzZXRTdGF0ZSIsInNldFN3aXBlc0Rpc2FibGVkIiwiZW5hYmxlU3dpcGVzIiwiZGVsYXkiLCJFTkFCTEVfU1dJUEVTX0RFTEFZIiwic2V0VGltZW91dCIsImdldFN0YXRlIiwic2V0TGVmdERpdnMiLCJ1cGRhdGVTdGF0ZSIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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