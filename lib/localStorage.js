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
var menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), overlayZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenOverlayZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), coloursInverted = false, defaultPersistentState = {
    menuZoom: menuZoom,
    overlayZoom: overlayZoom,
    fullScreenOverlayZoom: fullScreenOverlayZoom,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSwgTEFORFNDQVBFX09SSUVOVEFUSU9OLCBQT1JUUkFJVF9PUklFTlRBVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZW51Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBvdmVybGF5Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBmdWxsU2NyZWVuT3ZlcmxheVpvb20gPSB7XG4gICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICB9LFxuICAgICAgY29sb3Vyc0ludmVydGVkID0gZmFsc2UsXG4gICAgICBkZWZhdWx0UGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICBtZW51Wm9vbSxcbiAgICAgICAgb3ZlcmxheVpvb20sXG4gICAgICAgIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSxcbiAgICAgICAgY29sb3Vyc0ludmVydGVkXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlO1xuXG4gIGNvbnN0IGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IGRlZmF1bHRQZXJzaXN0ZW50U3RhdGU7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZVN0cmluZyA9IHZhbHVlOyAgLy8vXG5cbiAgICBwZXJzaXN0ZW50U3RhdGUgPSBKU09OLnBhcnNlKHBlcnNpc3RlbnRTdGF0ZVN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcGVyc2lzdGVudFN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGVyc2lzdGVudFN0YXRlKHBlcnNpc3RlbnRTdGF0ZSkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGVTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwZXJzaXN0ZW50U3RhdGUpLFxuICAgICAgICBrZXkgPSBTVEFURV9LRVksXG4gICAgICAgIHZhbHVlID0gcGVyc2lzdGVudFN0YXRlU3RyaW5nOyAgLy8vXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRQZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJtZW51Wm9vbSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwib3ZlcmxheVpvb20iLCJmdWxsU2NyZWVuT3ZlcmxheVpvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJkZWZhdWx0UGVyc2lzdGVudFN0YXRlIiwicGVyc2lzdGVudFN0YXRlIiwia2V5IiwiU1RBVEVfS0VZIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGVyc2lzdGVudFN0YXRlU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0JnQkEsa0JBQWtCO2VBQWxCQTs7SUFpQkFDLGtCQUFrQjtlQUFsQkE7Ozt5QkF2Q3VEOzs7Ozs7Ozs7Ozs7OztJQUV0RCxNQUlHLE9BSVU7QUFSOUIsSUFBTUMsWUFBVyxXQUNULGlCQURTLE1BQ1JDLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZTLE1BRVJDLGdDQUFxQixFQUFHLElBRmhCLE9BSVhDLGVBQWMsWUFDWixpQkFEWSxPQUNYRiwrQkFBb0IsRUFBRyxJQUN4QixpQkFGWSxPQUVYQyxnQ0FBcUIsRUFBRyxJQUZiLFFBSWRFLHlCQUF3QixZQUN0QixpQkFEc0IsT0FDckJILCtCQUFvQixFQUFHLElBQ3hCLGlCQUZzQixPQUVyQkMsZ0NBQXFCLEVBQUcsSUFGSCxRQUl4Qkcsa0JBQWtCLE9BQ2xCQyx5QkFBeUI7SUFDdkJOLFVBQUFBO0lBQ0FHLGFBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBQyxpQkFBQUE7QUFDRjtBQUVDLFNBQVNQO0lBQ2QsSUFBSVM7SUFFSixJQUFNQyxNQUFNQyxvQkFBUyxFQUNmQyxRQUFRQyxhQUFhQyxPQUFPLENBQUNKO0lBRW5DLElBQUlFLFVBQVUsTUFBTTtRQUNsQkgsa0JBQWtCRCx3QkFBd0IsR0FBRztJQUMvQyxPQUFPO1FBQ0wsSUFBTU8sd0JBQXdCSCxPQUFRLEdBQUc7UUFFekNILGtCQUFrQk8sS0FBS0MsS0FBSyxDQUFDRjtJQUMvQjtJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTUixtQkFBbUJRLGVBQWU7SUFDaEQsSUFBTU0sd0JBQXdCQyxLQUFLRSxTQUFTLENBQUNULGtCQUN2Q0MsTUFBTUMsb0JBQVMsRUFDZkMsUUFBUUcsdUJBQXdCLEdBQUc7SUFFekNGLGFBQWFNLE9BQU8sQ0FBQ1QsS0FBS0U7QUFDNUIifQ==