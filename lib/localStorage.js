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
var _version_1 = require("./state/version_1");
var _migrate = require("./migrate");
var state = (0, _version_1.createState)(), defaultState = state; ///
function getPersistentState() {
    var persistentState, state;
    var key = _constants.STATE_KEY, value = localStorage.getItem(key);
    if (value === null) {
        state = defaultState; ///
    } else {
        var jsonString = value, json = JSON.parse(jsonString);
        state = json; ///
        state = (0, _migrate.migrateState)(state);
    }
    persistentState = state; ///
    return persistentState;
}
function setPersistentState(persistentState) {
    var json = persistentState, jsonString = JSON.stringify(json), key = _constants.STATE_KEY, value = jsonString; ///
    localStorage.setItem(key, value);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZS92ZXJzaW9uXzFcIjtcbmltcG9ydCB7IG1pZ3JhdGVTdGF0ZSB9IGZyb20gXCIuL21pZ3JhdGVcIjtcblxuY29uc3Qgc3RhdGUgPSBjcmVhdGVTdGF0ZSgpLFxuICAgICAgZGVmYXVsdFN0YXRlID0gc3RhdGU7IC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlLFxuICAgICAgc3RhdGU7XG5cbiAgY29uc3Qga2V5ID0gU1RBVEVfS0VZLFxuICAgICAgICB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgc3RhdGUgPSBkZWZhdWx0U3RhdGU7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGpzb25TdHJpbmcgPSB2YWx1ZSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgc3RhdGUgPSBqc29uOyAvLy9cblxuICAgIHN0YXRlID0gbWlncmF0ZVN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIHBlcnNpc3RlbnRTdGF0ZSA9IHN0YXRlOyAgLy8vXG5cbiAgcmV0dXJuIHBlcnNpc3RlbnRTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpIHtcbiAgY29uc3QganNvbiA9IHBlcnNpc3RlbnRTdGF0ZSwgLy8vXG4gICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcbiAgICAgICAga2V5ID0gU1RBVEVfS0VZLFxuICAgICAgICB2YWx1ZSA9IGpzb25TdHJpbmc7ICAvLy9cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRQZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJzdGF0ZSIsImNyZWF0ZVN0YXRlIiwiZGVmYXVsdFN0YXRlIiwicGVyc2lzdGVudFN0YXRlIiwia2V5IiwiU1RBVEVfS0VZIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwianNvblN0cmluZyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJtaWdyYXRlU3RhdGUiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFTZ0JBLGtCQUFrQjtlQUFsQkE7O0lBdUJBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBOUJVO3lCQUNFO3VCQUNDO0FBRTdCLElBQU1DLFFBQVFDLElBQUFBLHNCQUFXLEtBQ25CQyxlQUFlRixPQUFPLEdBQUc7QUFFeEIsU0FBU0Y7SUFDZCxJQUFJSyxpQkFDQUg7SUFFSixJQUFNSSxNQUFNQyxvQkFBUyxFQUNmQyxRQUFRQyxhQUFhQyxPQUFPLENBQUNKO0lBRW5DLElBQUlFLFVBQVUsTUFBTTtRQUNsQk4sUUFBUUUsY0FBYyxHQUFHO0lBQzNCLE9BQU87UUFDTCxJQUFNTyxhQUFhSCxPQUNiSSxPQUFPQyxLQUFLQyxLQUFLLENBQUNIO1FBRXhCVCxRQUFRVSxNQUFNLEdBQUc7UUFFakJWLFFBQVFhLElBQUFBLHFCQUFZLEVBQUNiO0lBQ3ZCO0lBRUFHLGtCQUFrQkgsT0FBUSxHQUFHO0lBRTdCLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTSixtQkFBbUJJLGVBQWU7SUFDaEQsSUFBTU8sT0FBT1AsaUJBQ1BNLGFBQWFFLEtBQUtHLFNBQVMsQ0FBQ0osT0FDNUJOLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFHLFlBQWEsR0FBRztJQUU5QkYsYUFBYVEsT0FBTyxDQUFDWCxLQUFLRTtBQUM1QiJ9