"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateState", {
    enumerable: true,
    get: function() {
        return migrateState;
    }
});
var _necessary = require("necessary");
var _versions = require("./versions");
var _version_1 = require("./state/version_1");
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
var migrate = _necessary.versionUtilities.migrate;
function migrateState(state) {
    var migrationMap = _define_property({}, _versions.VERSION_1, _version_1.migrateStateToVersion_1), latestVersion = _versions.VERSION_1;
    state = migrate(state, migrationMap, latestVersion);
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzEgfSBmcm9tIFwiLi92ZXJzaW9uc1wiO1xuaW1wb3J0IHsgbWlncmF0ZVN0YXRlVG9WZXJzaW9uXzEgfSBmcm9tIFwiLi9zdGF0ZS92ZXJzaW9uXzFcIjtcblxuY29uc3QgeyBtaWdyYXRlIH0gPSB2ZXJzaW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZVN0YXRlKHN0YXRlKSB7XG4gIGNvbnN0IG1pZ3JhdGlvbk1hcCA9IHtcbiAgICAgICAgICBbVkVSU0lPTl8xXTogbWlncmF0ZVN0YXRlVG9WZXJzaW9uXzFcbiAgICAgICAgfSxcbiAgICAgICAgbGF0ZXN0VmVyc2lvbiA9IFZFUlNJT05fMTtcblxuICBzdGF0ZSA9IG1pZ3JhdGUoc3RhdGUsIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbik7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVTdGF0ZSIsIm1pZ3JhdGUiLCJ2ZXJzaW9uVXRpbGl0aWVzIiwic3RhdGUiLCJtaWdyYXRpb25NYXAiLCJWRVJTSU9OXzEiLCJtaWdyYXRlU3RhdGVUb1ZlcnNpb25fMSIsImxhdGVzdFZlcnNpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU2dCQTs7O2VBQUFBOzs7eUJBUGlCO3dCQUVQO3lCQUNjOzs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLFVBQVlDLDJCQUFnQixDQUE1QkQ7QUFFRCxTQUFTRCxhQUFhRyxLQUFLO0lBQ2hDLElBQU1DLGVBQ0UscUJBQUNDLG1CQUFTLEVBQUdDLGtDQUF1QixHQUV0Q0MsZ0JBQWdCRixtQkFBUztJQUUvQkYsUUFBUUYsUUFBUUUsT0FBT0MsY0FBY0c7SUFFckMsT0FBT0o7QUFDVCJ9