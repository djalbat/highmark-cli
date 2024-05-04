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
function getPersistentState() {
    var persistentState;
    var key = _constants.STATE_KEY, value = localStorage.getItem(key);
    if (value === null) {
        persistentState = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlO1xuXG4gIGNvbnN0IGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0YXRlU3RyaW5nID0gdmFsdWU7ICAvLy9cblxuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IEpTT04ucGFyc2UocGVyc2lzdGVudFN0YXRlU3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwZXJzaXN0ZW50U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBlcnNpc3RlbnRTdGF0ZSksXG4gICAgICAgIGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBwZXJzaXN0ZW50U3RhdGVTdHJpbmc7ICAvLy9cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRQZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJwZXJzaXN0ZW50U3RhdGUiLCJrZXkiLCJTVEFURV9LRVkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwZXJzaXN0ZW50U3RhdGVTdHJpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxrQkFBa0I7ZUFBbEJBOztJQWlCQUMsa0JBQWtCO2VBQWxCQTs7O3lCQW5CVTtBQUVuQixTQUFTRDtJQUNkLElBQUlFO0lBRUosSUFBTUMsTUFBTUMsb0JBQVMsRUFDZkMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDSjtJQUVuQyxJQUFJRSxVQUFVLE1BQU07UUFDbEJILGtCQUFrQjtJQUNwQixPQUFPO1FBQ0wsSUFBTU0sd0JBQXdCSCxPQUFRLEdBQUc7UUFFekNILGtCQUFrQk8sS0FBS0MsS0FBSyxDQUFDRjtJQUMvQjtJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTRCxtQkFBbUJDLGVBQWU7SUFDaEQsSUFBTU0sd0JBQXdCQyxLQUFLRSxTQUFTLENBQUNULGtCQUN2Q0MsTUFBTUMsb0JBQVMsRUFDZkMsUUFBUUcsdUJBQXdCLEdBQUc7SUFFekNGLGFBQWFNLE9BQU8sQ0FBQ1QsS0FBS0U7QUFDNUIifQ==