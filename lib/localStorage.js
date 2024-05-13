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
var menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 0.5), _obj), overlayZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenOverlayZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), coloursInverted = false, nativeGesturesRestored = false, defaultPersistentState = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSwgTEFORFNDQVBFX09SSUVOVEFUSU9OLCBQT1JUUkFJVF9PUklFTlRBVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZW51Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDAuNVxuICAgICAgfSxcbiAgICAgIG92ZXJsYXlab29tID0ge1xuICAgICAgICBbUE9SVFJBSVRfT1JJRU5UQVRJT05dOiAxLFxuICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgfSxcbiAgICAgIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZSxcbiAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBmYWxzZSxcbiAgICAgIGRlZmF1bHRQZXJzaXN0ZW50U3RhdGUgPSB7XG4gICAgICAgIG1lbnVab29tLFxuICAgICAgICBvdmVybGF5Wm9vbSxcbiAgICAgICAgZnVsbFNjcmVlbk92ZXJsYXlab29tLFxuICAgICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkLFxuICAgICAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgICAgIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGxldCBwZXJzaXN0ZW50U3RhdGU7XG5cbiAgY29uc3Qga2V5ID0gU1RBVEVfS0VZLFxuICAgICAgICB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcGVyc2lzdGVudFN0YXRlID0gZGVmYXVsdFBlcnNpc3RlbnRTdGF0ZTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0YXRlU3RyaW5nID0gdmFsdWU7ICAvLy9cblxuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IEpTT04ucGFyc2UocGVyc2lzdGVudFN0YXRlU3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwZXJzaXN0ZW50U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBlcnNpc3RlbnRTdGF0ZSksXG4gICAgICAgIGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBwZXJzaXN0ZW50U3RhdGVTdHJpbmc7ICAvLy9cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbn1cblxuIl0sIm5hbWVzIjpbImdldFBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsIm1lbnVab29tIiwiUE9SVFJBSVRfT1JJRU5UQVRJT04iLCJMQU5EU0NBUEVfT1JJRU5UQVRJT04iLCJvdmVybGF5Wm9vbSIsImZ1bGxTY3JlZW5PdmVybGF5Wm9vbSIsImNvbG91cnNJbnZlcnRlZCIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJkZWZhdWx0UGVyc2lzdGVudFN0YXRlIiwicGVyc2lzdGVudFN0YXRlIiwia2V5IiwiU1RBVEVfS0VZIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGVyc2lzdGVudFN0YXRlU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBCZ0JBLGtCQUFrQjtlQUFsQkE7O0lBaUJBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBekN1RDs7Ozs7Ozs7Ozs7Ozs7SUFFdEQsTUFJRyxPQUlVO0FBUjlCLElBQU1DLFlBQVcsV0FDVCxpQkFEUyxNQUNSQywrQkFBb0IsRUFBRyxJQUN4QixpQkFGUyxNQUVSQyxnQ0FBcUIsRUFBRyxNQUZoQixPQUlYQyxlQUFjLFlBQ1osaUJBRFksT0FDWEYsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRlksT0FFWEMsZ0NBQXFCLEVBQUcsSUFGYixRQUlkRSx5QkFBd0IsWUFDdEIsaUJBRHNCLE9BQ3JCSCwrQkFBb0IsRUFBRyxJQUN4QixpQkFGc0IsT0FFckJDLGdDQUFxQixFQUFHLElBRkgsUUFJeEJHLGtCQUFrQixPQUNsQkMseUJBQXlCLE9BQ3pCQyx5QkFBeUI7SUFDdkJQLFVBQUFBO0lBQ0FHLGFBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBRSx3QkFBQUE7SUFDQUQsaUJBQUFBO0FBQ0Y7QUFFQyxTQUFTUDtJQUNkLElBQUlVO0lBRUosSUFBTUMsTUFBTUMsb0JBQVMsRUFDZkMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDSjtJQUVuQyxJQUFJRSxVQUFVLE1BQU07UUFDbEJILGtCQUFrQkQsd0JBQXdCLEdBQUc7SUFDL0MsT0FBTztRQUNMLElBQU1PLHdCQUF3QkgsT0FBUSxHQUFHO1FBRXpDSCxrQkFBa0JPLEtBQUtDLEtBQUssQ0FBQ0Y7SUFDL0I7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU1QsbUJBQW1CUyxlQUFlO0lBQ2hELElBQU1NLHdCQUF3QkMsS0FBS0UsU0FBUyxDQUFDVCxrQkFDdkNDLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFHLHVCQUF3QixHQUFHO0lBRXpDRixhQUFhTSxPQUFPLENBQUNULEtBQUtFO0FBQzVCIn0=