"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateToVersion1_1", {
    enumerable: true,
    get: function() {
        return migrateToVersion1_1;
    }
});
var _versions = require("../versions");
var _defaults = require("../defaults");
function migrateToVersion1_1(json) {
    var version = _versions.VERSION_1_1, contentsDepth = _defaults.DEFAULT_CONTENTS_DEPTH;
    json = Object.assign({}, json, {
        version: version,
        contentsDepth: contentsDepth
    });
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8xLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzFfMSB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0NPTlRFTlRTX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uMV8xKGpzb24pIHtcbiAgY29uc3QgdmVyc2lvbiA9IFZFUlNJT05fMV8xLFxuICAgICAgICBjb250ZW50c0RlcHRoID0gREVGQVVMVF9DT05URU5UU19ERVBUSDtcblxuICBqc29uID0gT2JqZWN0LmFzc2lnbih7fSwganNvbiwge1xuICAgIHZlcnNpb24sXG4gICAgY29udGVudHNEZXB0aFxuICB9KTtcblxuICByZXR1cm4ganNvbjtcbn0iXSwibmFtZXMiOlsibWlncmF0ZVRvVmVyc2lvbjFfMSIsImpzb24iLCJ2ZXJzaW9uIiwiVkVSU0lPTl8xXzEiLCJjb250ZW50c0RlcHRoIiwiREVGQVVMVF9DT05URU5UU19ERVBUSCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7d0JBSlk7d0JBRVc7QUFFaEMsU0FBU0Esb0JBQW9CQyxJQUFJO0lBQ3RDLElBQU1DLFVBQVVDLHFCQUFXLEVBQ3JCQyxnQkFBZ0JDLGdDQUFzQjtJQUU1Q0osT0FBT0ssT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR04sTUFBTTtRQUM3QkMsU0FBQUE7UUFDQUUsZUFBQUE7SUFDRjtJQUVBLE9BQU9IO0FBQ1QifQ==