"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resetFragment", {
    enumerable: true,
    get: function() {
        return resetFragment;
    }
});
var _constants = require("../constants");
function resetFragment() {
    var href = location.href;
    var index = href.indexOf(_constants.HASH);
    if (index === -1) {
        return;
    }
    var start = 0, end = index; ///
    href = href.substring(start, end); ///
    history.replaceState({}, _constants.EMPTY_STRING, href);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZnJhZ21lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhBU0gsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RnJhZ21lbnQoKSB7XG4gIGxldCB7IGhyZWYgfSA9IGxvY2F0aW9uO1xuXG4gIGNvbnN0IGluZGV4ID0gaHJlZi5pbmRleE9mKEhBU0gpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdGFydCA9IDAsXG4gICAgZW5kID0gaW5kZXg7ICAvLy9cblxuICBocmVmID0gaHJlZi5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7IC8vL1xuXG4gIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBFTVBUWV9TVFJJTkcsIGhyZWYpO1xufVxuIl0sIm5hbWVzIjpbInJlc2V0RnJhZ21lbnQiLCJocmVmIiwibG9jYXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJIQVNIIiwic3RhcnQiLCJlbmQiLCJzdWJzdHJpbmciLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiRU1QVFlfU1RSSU5HIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJZ0JBOzs7ZUFBQUE7Ozt5QkFGbUI7QUFFNUIsU0FBU0E7SUFDZCxJQUFJLEFBQUVDLE9BQVNDLFNBQVREO0lBRU4sSUFBTUUsUUFBUUYsS0FBS0csT0FBTyxDQUFDQyxlQUFJO0lBRS9CLElBQUlGLFVBQVUsQ0FBQyxHQUFHO1FBQ2hCO0lBQ0Y7SUFFQSxJQUFNRyxRQUFRLEdBQ1pDLE1BQU1KLE9BQVEsR0FBRztJQUVuQkYsT0FBT0EsS0FBS08sU0FBUyxDQUFDRixPQUFPQyxNQUFNLEdBQUc7SUFFdENFLFFBQVFDLFlBQVksQ0FBQyxDQUFDLEdBQUdDLHVCQUFZLEVBQUVWO0FBQ3pDIn0=