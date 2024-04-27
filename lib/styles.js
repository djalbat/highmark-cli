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
    wiggleCount: function() {
        return wiggleCount;
    },
    wiggleDuration: function() {
        return wiggleDuration;
    }
});
var _constants = require("./constants");
var wiggleCount = _constants.WIGGLE_DURATION * _constants.WIGGLE_FREQUENCY;
var wiggleDuration = "".concat(_constants.WIGGLE_DURATION / _constants.WIGGLE_FREQUENCY, "s");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFdJR0dMRV9EVVJBVElPTiwgV0lHR0xFX0ZSRVFVRU5DWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3Qgd2lnZ2xlQ291bnQgPSBXSUdHTEVfRFVSQVRJT04gKiBXSUdHTEVfRlJFUVVFTkNZO1xuZXhwb3J0IGNvbnN0IHdpZ2dsZUR1cmF0aW9uID0gYCR7V0lHR0xFX0RVUkFUSU9OIC8gV0lHR0xFX0ZSRVFVRU5DWX1zYDtcbiJdLCJuYW1lcyI6WyJ3aWdnbGVDb3VudCIsIndpZ2dsZUR1cmF0aW9uIiwiV0lHR0xFX0RVUkFUSU9OIiwiV0lHR0xFX0ZSRVFVRU5DWSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWFBLFdBQVc7ZUFBWEE7O0lBQ0FDLGNBQWM7ZUFBZEE7Ozt5QkFIcUM7QUFFM0MsSUFBTUQsY0FBY0UsMEJBQWUsR0FBR0MsMkJBQWdCO0FBQ3RELElBQU1GLGlCQUFpQixBQUFDLEdBQXFDLE9BQW5DQywwQkFBZSxHQUFHQywyQkFBZ0IsRUFBQyJ9