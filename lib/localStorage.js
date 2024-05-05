"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getPersistentState: function() {
        return getPersistentState;
    },
    setPersistentState: function() {
        return setPersistentState;
    }
});
var _constants = require("./constants");
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
var _obj, _obj1, _obj2;
var viewZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), menuDivZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenViewZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), coloursInverted = false, defaultPersistentState = {
    viewZoom: viewZoom,
    menuDivZoom: menuDivZoom,
    fullScreenViewZoom: fullScreenViewZoom,
    coloursInverted: coloursInverted
};
function getPersistentState() {
    var persistentState;
    var key = _constants.STATE_KEY, value = localStorage.getItem(key);
    if (value === null) {
        persistentState = defaultPersistentState; ///
    } else {
        var persistentStateString = value; ///
        persistentState = JSON.parse(persistentStateString);
    }
    return persistentState;
}
function setPersistentState(persistentState) {
    var persistentStateString = JSON.stringify(persistentState), key = _constants.STATE_KEY, value = persistentStateString; ///
    localStorage.setItem(key, value);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSwgTEFORFNDQVBFX09SSUVOVEFUSU9OLCBQT1JUUkFJVF9PUklFTlRBVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB2aWV3Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBtZW51RGl2Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBmdWxsU2NyZWVuVmlld1pvb20gPSB7XG4gICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICB9LFxuICAgICAgY29sb3Vyc0ludmVydGVkID0gZmFsc2UsXG4gICAgICBkZWZhdWx0UGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICB2aWV3Wm9vbSxcbiAgICAgICAgbWVudURpdlpvb20sXG4gICAgICAgIGZ1bGxTY3JlZW5WaWV3Wm9vbSxcbiAgICAgICAgY29sb3Vyc0ludmVydGVkXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlO1xuXG4gIGNvbnN0IGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IGRlZmF1bHRQZXJzaXN0ZW50U3RhdGU7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZVN0cmluZyA9IHZhbHVlOyAgLy8vXG5cbiAgICBwZXJzaXN0ZW50U3RhdGUgPSBKU09OLnBhcnNlKHBlcnNpc3RlbnRTdGF0ZVN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcGVyc2lzdGVudFN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGVyc2lzdGVudFN0YXRlKHBlcnNpc3RlbnRTdGF0ZSkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGVTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwZXJzaXN0ZW50U3RhdGUpLFxuICAgICAgICBrZXkgPSBTVEFURV9LRVksXG4gICAgICAgIHZhbHVlID0gcGVyc2lzdGVudFN0YXRlU3RyaW5nOyAgLy8vXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0UGVyc2lzdGVudFN0YXRlIiwic2V0UGVyc2lzdGVudFN0YXRlIiwidmlld1pvb20iLCJQT1JUUkFJVF9PUklFTlRBVElPTiIsIkxBTkRTQ0FQRV9PUklFTlRBVElPTiIsIm1lbnVEaXZab29tIiwiZnVsbFNjcmVlblZpZXdab29tIiwiY29sb3Vyc0ludmVydGVkIiwiZGVmYXVsdFBlcnNpc3RlbnRTdGF0ZSIsInBlcnNpc3RlbnRTdGF0ZSIsImtleSIsIlNUQVRFX0tFWSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBlcnNpc3RlbnRTdGF0ZVN0cmluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldEl0ZW0iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXdCZ0JBLGtCQUFrQjtlQUFsQkE7O0lBaUJBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBdkN1RDs7Ozs7Ozs7Ozs7Ozs7SUFFdEQsTUFJRyxPQUlPO0FBUjNCLElBQU1DLFlBQVcsV0FDVCxpQkFEUyxNQUNSQywrQkFBb0IsRUFBRyxJQUN4QixpQkFGUyxNQUVSQyxnQ0FBcUIsRUFBRyxJQUZoQixPQUlYQyxlQUFjLFlBQ1osaUJBRFksT0FDWEYsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRlksT0FFWEMsZ0NBQXFCLEVBQUcsSUFGYixRQUlkRSxzQkFBcUIsWUFDbkIsaUJBRG1CLE9BQ2xCSCwrQkFBb0IsRUFBRyxJQUN4QixpQkFGbUIsT0FFbEJDLGdDQUFxQixFQUFHLElBRk4sUUFJckJHLGtCQUFrQixPQUNsQkMseUJBQXlCO0lBQ3ZCTixVQUFBQTtJQUNBRyxhQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsaUJBQUFBO0FBQ0Y7QUFFQyxTQUFTUDtJQUNkLElBQUlTO0lBRUosSUFBTUMsTUFBTUMsb0JBQVMsRUFDZkMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDSjtJQUVuQyxJQUFJRSxVQUFVLE1BQU07UUFDbEJILGtCQUFrQkQsd0JBQXdCLEdBQUc7SUFDL0MsT0FBTztRQUNMLElBQU1PLHdCQUF3QkgsT0FBUSxHQUFHO1FBRXpDSCxrQkFBa0JPLEtBQUtDLEtBQUssQ0FBQ0Y7SUFDL0I7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU1IsbUJBQW1CUSxlQUFlO0lBQ2hELElBQU1NLHdCQUF3QkMsS0FBS0UsU0FBUyxDQUFDVCxrQkFDdkNDLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFHLHVCQUF3QixHQUFHO0lBRXpDRixhQUFhTSxPQUFPLENBQUNULEtBQUtFO0FBQzVCIn0=