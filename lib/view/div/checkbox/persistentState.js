"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PersistentStateCheckboxDiv;
    }
});
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox"));
var _state = require("../../../state");
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
var PersistentStateCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(PersistentStateCheckboxDiv, CheckboxDiv);
    var _super = _create_super(PersistentStateCheckboxDiv);
    function PersistentStateCheckboxDiv() {
        _class_call_check(this, PersistentStateCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var checkboxChecked = _this.isCheckboxChecked();
            checkboxChecked ? (0, _state.enablePersistentState)() : (0, _state.disablePersistentState)();
        });
        return _this;
    }
    _create_class(PersistentStateCheckboxDiv, [
        {
            key: "didMount",
            value: function didMount() {
                var persistentStateEnabled = (0, _state.isPersistentStateEnabled)(), checked = persistentStateEnabled; ///
                this.checkCheckbox(checked);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return PersistentStateCheckboxDiv;
}(_checkbox.default);
_define_property(PersistentStateCheckboxDiv, "message", "Persistent state");
_define_property(PersistentStateCheckboxDiv, "defaultProperties", {
    className: "persistent-state"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9wZXJzaXN0ZW50U3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDaGVja2JveERpdiBmcm9tIFwiLi4vLi4vZGl2L2NoZWNrYm94XCI7XG5cbmltcG9ydCB7IGVuYWJsZVBlcnNpc3RlbnRTdGF0ZSwgZGlzYWJsZVBlcnNpc3RlbnRTdGF0ZSwgaXNQZXJzaXN0ZW50U3RhdGVFbmFibGVkIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNpc3RlbnRTdGF0ZUNoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgY2hlY2tib3hDaGVja2VkID9cbiAgICAgIGVuYWJsZVBlcnNpc3RlbnRTdGF0ZSgpIDpcbiAgICAgICAgZGlzYWJsZVBlcnNpc3RlbnRTdGF0ZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0YXRlRW5hYmxlZCA9IGlzUGVyc2lzdGVudFN0YXRlRW5hYmxlZCgpLFxuICAgICAgICAgIGNoZWNrZWQgPSBwZXJzaXN0ZW50U3RhdGVFbmFibGVkOyAvLy9cblxuICAgIHRoaXMuY2hlY2tDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBcIlBlcnNpc3RlbnQgc3RhdGVcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBlcnNpc3RlbnQtc3RhdGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBlcnNpc3RlbnRTdGF0ZUNoZWNrYm94RGl2IiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tib3hDaGVja2VkIiwiZW5hYmxlUGVyc2lzdGVudFN0YXRlIiwiZGlzYWJsZVBlcnNpc3RlbnRTdGF0ZSIsImRpZE1vdW50IiwicGVyc2lzdGVudFN0YXRlRW5hYmxlZCIsImlzUGVyc2lzdGVudFN0YXRlRW5hYmxlZCIsImNoZWNrZWQiLCJjaGVja0NoZWNrYm94Iiwid2lsbFVubW91bnQiLCJDaGVja2JveERpdiIsIm1lc3NhZ2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKRztxQkFFZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLElBQUEsQUFBTUEsMkNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSxpQkFBZ0IsU0FBQ0MsT0FBT0M7WUFDdEIsSUFBTUMsa0JBQWtCLE1BQUtDLGlCQUFpQjtZQUU5Q0Qsa0JBQ0VFLElBQUFBLDRCQUFxQixNQUNuQkMsSUFBQUEsNkJBQXNCO1FBQzVCOzs7a0JBUG1CUDs7WUFTbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx5QkFBeUJDLElBQUFBLCtCQUF3QixLQUNqREMsVUFBVUYsd0JBQXdCLEdBQUc7Z0JBRTNDLElBQUksQ0FBQ0csYUFBYSxDQUFDRDtZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1dBbEJtQmI7RUFBbUNjLGlCQUFXO0FBb0JqRSxpQkFwQm1CZCw0QkFvQlplLFdBQVU7QUFFakIsaUJBdEJtQmYsNEJBc0JaZ0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==