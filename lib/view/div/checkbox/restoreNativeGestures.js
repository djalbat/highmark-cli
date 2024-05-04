"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RestoreNativeGesturesCheckboxDiv;
    }
});
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox"));
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
var RestoreNativeGesturesCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(RestoreNativeGesturesCheckboxDiv, CheckboxDiv);
    var _super = _create_super(RestoreNativeGesturesCheckboxDiv);
    function RestoreNativeGesturesCheckboxDiv() {
        _class_call_check(this, RestoreNativeGesturesCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
            var checkboxChecked = _this.isCheckboxChecked();
            checkboxChecked ? controller.restoreNativeGestures() : controller.suppressNativeGestures();
        });
        return _this;
    }
    _create_class(RestoreNativeGesturesCheckboxDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var checkRestoreNativeGesturesCheckbox = this.checkCheckbox.bind(this); ///
                return {
                    checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
                };
            }
        }
    ]);
    return RestoreNativeGesturesCheckboxDiv;
}(_checkbox.default);
_define_property(RestoreNativeGesturesCheckboxDiv, "message", "Restore native gestures\n(alternatively double tap \nand then tap to suppress)");
_define_property(RestoreNativeGesturesCheckboxDiv, "defaultProperties", {
    className: "restore-native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9yZXN0b3JlTmF0aXZlR2VzdHVyZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDaGVja2JveERpdiBmcm9tIFwiLi4vLi4vZGl2L2NoZWNrYm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICBjaGVja2JveENoZWNrZWQgP1xuICAgICAgY29udHJvbGxlci5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSA6XG4gICAgICAgIGNvbnRyb2xsZXIuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94ID0gdGhpcy5jaGVja0NoZWNrYm94LmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbWVzc2FnZSA9IGBSZXN0b3JlIG5hdGl2ZSBnZXN0dXJlc1xuKGFsdGVybmF0aXZlbHkgZG91YmxlIHRhcCBcbmFuZCB0aGVuIHRhcCB0byBzdXBwcmVzcylgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzdG9yZS1uYXRpdmUtZ2VzdHVyZXNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2JveENoZWNrZWQiLCJjb250cm9sbGVyIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInBhcmVudENvbnRleHQiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwiY2hlY2tDaGVja2JveCIsImJpbmQiLCJDaGVja2JveERpdiIsIm1lc3NhZ2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSxpREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLElBQU1DLGtCQUFrQixNQUFLQyxpQkFBaUI7WUFFOUNELGtCQUNFRSxXQUFXQyxxQkFBcUIsS0FDOUJELFdBQVdFLHNCQUFzQjtRQUN2Qzs7O2tCQVBtQlI7O1lBU25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUNBQXFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRTdFLE9BQVE7b0JBQ05GLG9DQUFBQTtnQkFDRjtZQUNGOzs7V0FmbUJWO0VBQXlDYSxpQkFBVztBQWlCdkUsaUJBakJtQmIsa0NBaUJaYyxXQUFXO0FBSWxCLGlCQXJCbUJkLGtDQXFCWmUscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==