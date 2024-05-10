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
var menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), overlayZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenOverlayZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), coloursInverted = false, nativeGesturesRestored = false, defaultPersistentState = {
    menuZoom: menuZoom,
    overlayZoom: overlayZoom,
    fullScreenOverlayZoom: fullScreenOverlayZoom,
    nativeGesturesRestored: nativeGesturesRestored,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSwgTEFORFNDQVBFX09SSUVOVEFUSU9OLCBQT1JUUkFJVF9PUklFTlRBVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZW51Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBvdmVybGF5Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBmdWxsU2NyZWVuT3ZlcmxheVpvb20gPSB7XG4gICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICB9LFxuICAgICAgY29sb3Vyc0ludmVydGVkID0gZmFsc2UsXG4gICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gZmFsc2UsXG4gICAgICBkZWZhdWx0UGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICBtZW51Wm9vbSxcbiAgICAgICAgb3ZlcmxheVpvb20sXG4gICAgICAgIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSxcbiAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCxcbiAgICAgICAgY29sb3Vyc0ludmVydGVkXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlO1xuXG4gIGNvbnN0IGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IGRlZmF1bHRQZXJzaXN0ZW50U3RhdGU7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZVN0cmluZyA9IHZhbHVlOyAgLy8vXG5cbiAgICBwZXJzaXN0ZW50U3RhdGUgPSBKU09OLnBhcnNlKHBlcnNpc3RlbnRTdGF0ZVN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcGVyc2lzdGVudFN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGVyc2lzdGVudFN0YXRlKHBlcnNpc3RlbnRTdGF0ZSkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGVTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwZXJzaXN0ZW50U3RhdGUpLFxuICAgICAgICBrZXkgPSBTVEFURV9LRVksXG4gICAgICAgIHZhbHVlID0gcGVyc2lzdGVudFN0YXRlU3RyaW5nOyAgLy8vXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRQZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJtZW51Wm9vbSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwib3ZlcmxheVpvb20iLCJmdWxsU2NyZWVuT3ZlcmxheVpvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiZGVmYXVsdFBlcnNpc3RlbnRTdGF0ZSIsInBlcnNpc3RlbnRTdGF0ZSIsImtleSIsIlNUQVRFX0tFWSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBlcnNpc3RlbnRTdGF0ZVN0cmluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldEl0ZW0iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwQmdCQSxrQkFBa0I7ZUFBbEJBOztJQWlCQUMsa0JBQWtCO2VBQWxCQTs7O3lCQXpDdUQ7Ozs7Ozs7Ozs7Ozs7O0lBRXRELE1BSUcsT0FJVTtBQVI5QixJQUFNQyxZQUFXLFdBQ1QsaUJBRFMsTUFDUkMsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRlMsTUFFUkMsZ0NBQXFCLEVBQUcsSUFGaEIsT0FJWEMsZUFBYyxZQUNaLGlCQURZLE9BQ1hGLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZZLE9BRVhDLGdDQUFxQixFQUFHLElBRmIsUUFJZEUseUJBQXdCLFlBQ3RCLGlCQURzQixPQUNyQkgsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRnNCLE9BRXJCQyxnQ0FBcUIsRUFBRyxJQUZILFFBSXhCRyxrQkFBa0IsT0FDbEJDLHlCQUF5QixPQUN6QkMseUJBQXlCO0lBQ3ZCUCxVQUFBQTtJQUNBRyxhQUFBQTtJQUNBQyx1QkFBQUE7SUFDQUUsd0JBQUFBO0lBQ0FELGlCQUFBQTtBQUNGO0FBRUMsU0FBU1A7SUFDZCxJQUFJVTtJQUVKLElBQU1DLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQ0o7SUFFbkMsSUFBSUUsVUFBVSxNQUFNO1FBQ2xCSCxrQkFBa0JELHdCQUF3QixHQUFHO0lBQy9DLE9BQU87UUFDTCxJQUFNTyx3QkFBd0JILE9BQVEsR0FBRztRQUV6Q0gsa0JBQWtCTyxLQUFLQyxLQUFLLENBQUNGO0lBQy9CO0lBRUEsT0FBT047QUFDVDtBQUVPLFNBQVNULG1CQUFtQlMsZUFBZTtJQUNoRCxJQUFNTSx3QkFBd0JDLEtBQUtFLFNBQVMsQ0FBQ1Qsa0JBQ3ZDQyxNQUFNQyxvQkFBUyxFQUNmQyxRQUFRRyx1QkFBd0IsR0FBRztJQUV6Q0YsYUFBYU0sT0FBTyxDQUFDVCxLQUFLRTtBQUM1QiJ9