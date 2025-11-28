"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createLoadingHTML;
    }
});
var _constants = require("../constants");
function createLoadingHTML(client) {
    var loadingHTML = _constants.EMPTY_STRING;
    if (client) {
        loadingHTML = '<div class="loading">\n    <div class="spinner">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>\n</div>';
    }
    return loadingHTML;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2xvYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTG9hZGluZ0hUTUwoY2xpZW50KSB7XG4gIGxldCBsb2FkaW5nSFRNTCA9IEVNUFRZX1NUUklORztcblxuICBpZiAoY2xpZW50KSB7XG4gICAgbG9hZGluZ0hUTUwgPSBgPGRpdiBjbGFzcz1cImxvYWRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbiAgfVxuXG4gIHJldHVybiBsb2FkaW5nSFRNTDtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVMb2FkaW5nSFRNTCIsImNsaWVudCIsImxvYWRpbmdIVE1MIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3lCQUZLO0FBRWQsU0FBU0Esa0JBQWtCQyxNQUFNO0lBQzlDLElBQUlDLGNBQWNDLHVCQUFZO0lBRTlCLElBQUlGLFFBQVE7UUFDVkMsY0FBYztJQWdCaEI7SUFFQSxPQUFPQTtBQUNUIn0=