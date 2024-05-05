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
var _easy = require("easy");
var _styles = require("../styles");
var _customEventTypes = require("../customEventTypes");
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
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  cursor: pointer;\n  border: ",
        " solid ",
        ";\n  margin: 0;\n  padding: ",
        ";\n  background: transparent;\n  border-radius: ",
        ";   \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _default = (0, _easywithstyle.default)(/*#__PURE__*/ function(Button) {
    _inherits(_class, Button);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        return _super.apply(this, arguments);
    }
    _create_class(_class, [
        {
            key: "tap",
            value: function tap(top, left) {
                var bounds = this.getBounds(), mouseTop = top, mouseLeft = left, overlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft);
                if (overlappingMouse) {
                    var event = null, element = this, customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
                    this.callCustomHandlers(customEventType, event, element);
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
                this.onCustomEvent(customEventType, this.tapCustomHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var customEventType = _customEventTypes.TAP_CUSTOM_EVENT_TYPE;
                this.offCustomEvent(customEventType, this.tapCustomHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var SVG = this.constructor.SVG;
                return /*#__PURE__*/ React.createElement(SVG, null);
            }
        }
    ]);
    return _class;
}(_easy.Button))(_templateObject(), _styles.buttonSize, _styles.buttonSize, _styles.borderWidth, _styles.borderColour, _styles.buttonPadding, _styles.borderRadius);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgYnV0dG9uU2l6ZSwgYm9yZGVyV2lkdGgsIGJvcmRlclJhZGl1cywgYm9yZGVyQ29sb3VyLCBidXR0b25QYWRkaW5nIH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHtUQVBfQ1VTVE9NX0VWRU5UX1RZUEV9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShjbGFzcyBleHRlbmRzIEJ1dHRvbiB7XG4gIHRhcCh0b3AsIGxlZnQpIHtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpLFxuICAgICAgICAgIG1vdXNlVG9wID0gdG9wLCAvLy9cbiAgICAgICAgICBtb3VzZUxlZnQgPSBsZWZ0LCAvLy9cbiAgICAgICAgICBvdmVybGFwcGluZ01vdXNlID0gYm91bmRzLmlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KTtcblxuICAgIGlmIChvdmVybGFwcGluZ01vdXNlKSB7XG4gICAgICBjb25zdCBldmVudCA9IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgdGhpcy50YXBDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFRBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCB0aGlzLnRhcEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTVkcvPlxuXG4gICAgKTtcbiAgfVxufSlgXG5cbiAgd2lkdGg6ICR7YnV0dG9uU2l6ZX07XG4gIGhlaWdodDogJHtidXR0b25TaXplfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6ICR7Ym9yZGVyV2lkdGh9IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAke2J1dHRvblBhZGRpbmd9O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogJHtib3JkZXJSYWRpdXN9OyAgIFxuICBcbmA7XG4iXSwibmFtZXMiOlsid2l0aFN0eWxlIiwidGFwIiwidG9wIiwibGVmdCIsImJvdW5kcyIsImdldEJvdW5kcyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0Iiwib3ZlcmxhcHBpbmdNb3VzZSIsImlzT3ZlcmxhcHBpbmdNb3VzZSIsImV2ZW50IiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlRBUF9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsImRpZE1vdW50Iiwib25DdXN0b21FdmVudCIsInRhcEN1c3RvbUhhbmRsZXIiLCJ3aWxsVW5tb3VudCIsIm9mZkN1c3RvbUV2ZW50IiwiY2hpbGRFbGVtZW50cyIsIlNWRyIsImNvbnN0cnVjdG9yIiwiQnV0dG9uIiwiYnV0dG9uU2l6ZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3VyIiwiYnV0dG9uUGFkZGluZyIsImJvcmRlclJhZGl1cyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7b0VBUHNCO29CQUVDO3NCQUU0RDtnQ0FDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLFdBQWVBLElBQUFBLHNCQUFTLGdCQUFDOzs7Ozs7Ozs7WUFDdkJDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxHQUFHLEVBQUVDLElBQUk7Z0JBQ1gsSUFBTUMsU0FBUyxJQUFJLENBQUNDLFNBQVMsSUFDdkJDLFdBQVdKLEtBQ1hLLFlBQVlKLE1BQ1pLLG1CQUFtQkosT0FBT0ssa0JBQWtCLENBQUNILFVBQVVDO2dCQUU3RCxJQUFJQyxrQkFBa0I7b0JBQ3BCLElBQU1FLFFBQVEsTUFDUkMsVUFBVSxJQUFJLEVBQ2RDLGtCQUFrQkMsdUNBQXFCO29CQUU3QyxJQUFJLENBQUNDLGtCQUFrQixDQUFDRixpQkFBaUJGLE9BQU9DO2dCQUNsRDtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGtCQUFrQkMsdUNBQXFCO2dCQUU3QyxJQUFJLENBQUNHLGFBQWEsQ0FBQ0osaUJBQWlCLElBQUksQ0FBQ0ssZ0JBQWdCO1lBQzNEOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLGtCQUFrQkMsdUNBQXFCO2dCQUU3QyxJQUFJLENBQUNNLGNBQWMsQ0FBQ1AsaUJBQWlCLElBQUksQ0FBQ0ssZ0JBQWdCO1lBQzVEOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsTUFBUSxJQUFJLENBQUNDLFdBQVcsQ0FBeEJEO2dCQUVSLHFCQUVFLG9CQUFDQTtZQUdMOzs7O0VBcENxQ0UsWUFBTSxzQkF1Q2xDQyxrQkFBVSxFQUNUQSxrQkFBVSxFQUVWQyxtQkFBVyxFQUFVQyxvQkFBWSxFQUVoQ0MscUJBQWEsRUFFUEMsb0JBQVkifQ==