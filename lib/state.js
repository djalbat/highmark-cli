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
    getOrientation: function() {
        return getOrientation;
    },
    setOrientation: function() {
        return setOrientation;
    }
});
var orientation = null, state = {
    orientation: orientation
};
function getOrientation() {
    var orientation = state.orientation;
    return orientation;
}
function setOrientation(orientation) {
    Object.assign(state, {
        orientation: orientation
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRPcmllbnRhdGlvbiIsInNldE9yaWVudGF0aW9uIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBT2dCQSxjQUFjO2VBQWRBOztJQU1BQyxjQUFjO2VBQWRBOzs7QUFYaEIsSUFBTUMsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFQyxTQUFTRjtJQUNkLElBQU0sQUFBRUUsY0FBZ0JDLE1BQWhCRDtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTRCxlQUFlQyxXQUFXO0lBQ3hDRSxPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJELGFBQUFBO0lBQ0Y7QUFDRiJ9