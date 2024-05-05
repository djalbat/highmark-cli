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
    var persistentState = null;
    var key = _constants.STATE_KEY, value = localStorage.getItem(key);
    if (value !== null) {
        var persistentStateString = value; ///
        persistentState = JSON.parse(persistentStateString);
    }
    return persistentState;
}
function setPersistentState(persistentState) {
    var persistentStateString = JSON.stringify(persistentState), key = _constants.STATE_KEY, value = persistentStateString; ///
    localStorage.setItem(key, value);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlID0gbnVsbDtcblxuICBjb25zdCBrZXkgPSBTVEFURV9LRVksXG4gICAgICAgIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwZXJzaXN0ZW50U3RhdGVTdHJpbmcgPSB2YWx1ZTsgIC8vL1xuXG4gICAgcGVyc2lzdGVudFN0YXRlID0gSlNPTi5wYXJzZShwZXJzaXN0ZW50U3RhdGVTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBlcnNpc3RlbnRTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpIHtcbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGVyc2lzdGVudFN0YXRlKSxcbiAgICAgICAga2V5ID0gU1RBVEVfS0VZLFxuICAgICAgICB2YWx1ZSA9IHBlcnNpc3RlbnRTdGF0ZVN0cmluZzsgIC8vL1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbImdldFBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsInBlcnNpc3RlbnRTdGF0ZSIsImtleSIsIlNUQVRFX0tFWSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBlcnNpc3RlbnRTdGF0ZVN0cmluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldEl0ZW0iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWdCQSxrQkFBa0I7ZUFBbEJBOztJQWVBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBakJVO0FBRW5CLFNBQVNEO0lBQ2QsSUFBSUUsa0JBQWtCO0lBRXRCLElBQU1DLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQ0o7SUFFbkMsSUFBSUUsVUFBVSxNQUFNO1FBQ2xCLElBQU1HLHdCQUF3QkgsT0FBUSxHQUFHO1FBRXpDSCxrQkFBa0JPLEtBQUtDLEtBQUssQ0FBQ0Y7SUFDL0I7SUFFQSxPQUFPTjtBQUNUO0FBRU8sU0FBU0QsbUJBQW1CQyxlQUFlO0lBQ2hELElBQU1NLHdCQUF3QkMsS0FBS0UsU0FBUyxDQUFDVCxrQkFDdkNDLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFHLHVCQUF3QixHQUFHO0lBRXpDRixhQUFhTSxPQUFPLENBQUNULEtBQUtFO0FBQzVCIn0=