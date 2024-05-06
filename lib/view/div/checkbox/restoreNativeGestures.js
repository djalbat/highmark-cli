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
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var checkboxChecked = _this.isCheckboxChecked();
            checkboxChecked ? controller.restoreNativeGestures() : controller.suppressNativeGestures();
        });
        return _this;
    }
    _create_class(RestoreNativeGesturesCheckboxDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var checkRestoreNativeGesturesCheckbox = this.checkCheckbox.bind(this), uncheckRestoreNativeGesturesCheckbox = this.uncheckCheckbox.bind(this); ///
                return {
                    checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox,
                    uncheckRestoreNativeGesturesCheckbox: uncheckRestoreNativeGesturesCheckbox
                };
            }
        }
    ]);
    return RestoreNativeGesturesCheckboxDiv;
}(_checkbox.default);
_define_property(RestoreNativeGesturesCheckboxDiv, "message", "Restore native gestures");
_define_property(RestoreNativeGesturesCheckboxDiv, "defaultProperties", {
    className: "restore-native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9yZXN0b3JlTmF0aXZlR2VzdHVyZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDaGVja2JveERpdiBmcm9tIFwiLi4vLi4vZGl2L2NoZWNrYm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgY2hlY2tib3hDaGVja2VkID9cbiAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCA9IHRoaXMuY2hlY2tDaGVja2JveC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3ggPSB0aGlzLnVuY2hlY2tDaGVja2JveC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCxcbiAgICAgIHVuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBcIlJlc3RvcmUgbmF0aXZlIGdlc3R1cmVzXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZXN0b3JlLW5hdGl2ZS1nZXN0dXJlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2JveENoZWNrZWQiLCJjb250cm9sbGVyIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInBhcmVudENvbnRleHQiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwiY2hlY2tDaGVja2JveCIsImJpbmQiLCJ1bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJ1bmNoZWNrQ2hlY2tib3giLCJDaGVja2JveERpdiIsIm1lc3NhZ2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVULElBQUEsQUFBTUEsaURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSxpQkFBZ0IsU0FBQ0MsT0FBT0M7WUFDdEIsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtZQUU5Q0Qsa0JBQ0VFLFdBQVdDLHFCQUFxQixLQUM5QkQsV0FBV0Usc0JBQXNCO1FBQ3ZDOzs7a0JBUG1CUjs7WUFTbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQ0FBcUMsSUFBSSxDQUFDQyxhQUFhLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2pFQyx1Q0FBdUMsSUFBSSxDQUFDQyxlQUFlLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFakYsT0FBUTtvQkFDTkYsb0NBQUFBO29CQUNBRyxzQ0FBQUE7Z0JBQ0Y7WUFDRjs7O1dBakJtQmI7RUFBeUNlLGlCQUFXO0FBbUJ2RSxpQkFuQm1CZixrQ0FtQlpnQixXQUFVO0FBRWpCLGlCQXJCbUJoQixrQ0FxQlppQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9