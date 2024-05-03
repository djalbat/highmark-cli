"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PersistentStateCheckbox;
    }
});
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../checkbox"));
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
var PersistentStateCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(PersistentStateCheckbox, Checkbox);
    var _super = _create_super(PersistentStateCheckbox);
    function PersistentStateCheckbox() {
        _class_call_check(this, PersistentStateCheckbox);
        return _super.apply(this, arguments);
    }
    _create_class(PersistentStateCheckbox, [
        {
            key: "parentContext",
            value: function parentContext() {
                var onPersistentStateCheckboxChange = this.onChange.bind(this), isPersistentStateCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    onPersistentStateCheckboxChange: onPersistentStateCheckboxChange,
                    isPersistentStateCheckboxChecked: isPersistentStateCheckboxChecked
                };
            }
        }
    ]);
    return PersistentStateCheckbox;
}(_checkbox.default);
_define_property(PersistentStateCheckbox, "defaultProperties", {
    className: "persistent-state"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2NoZWNrYm94L3BlcnNpc3RlbnRTdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RhdGVDaGVja2JveCBleHRlbmRzIENoZWNrYm94IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBvblBlcnNpc3RlbnRTdGF0ZUNoZWNrYm94Q2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc1BlcnNpc3RlbnRTdGF0ZUNoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblBlcnNpc3RlbnRTdGF0ZUNoZWNrYm94Q2hhbmdlLFxuICAgICAgaXNQZXJzaXN0ZW50U3RhdGVDaGVja2JveENoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGVyc2lzdGVudC1zdGF0ZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUGVyc2lzdGVudFN0YXRlQ2hlY2tib3giLCJwYXJlbnRDb250ZXh0Iiwib25QZXJzaXN0ZW50U3RhdGVDaGVja2JveENoYW5nZSIsIm9uQ2hhbmdlIiwiYmluZCIsImlzUGVyc2lzdGVudFN0YXRlQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiQ2hlY2tib3giLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0NBQWtDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUN6REMsbUNBQW1DLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXZFLE9BQVE7b0JBQ05GLGlDQUFBQTtvQkFDQUcsa0NBQUFBO2dCQUNGO1lBQ0Y7OztXQVRtQkw7RUFBZ0NPLGlCQUFRO0FBVzNELGlCQVhtQlAseUJBV1pRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=