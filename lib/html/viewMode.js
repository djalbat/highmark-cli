"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createViewModeHTML;
    }
});
var _constants = require("../constants");
function createViewModeHTML(client, viewMode) {
    var loadingHTML = _constants.EMPTY_STRING;
    if (client) {
        loadingHTML = '<script>\n\n  const  viewMode = "'.concat(viewMode, '";\n\n  Object.assign(globalThis, {\n    viewMode\n  });\n\n</script>');
    }
    return loadingHTML;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL3ZpZXdNb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlSFRNTChjbGllbnQsIHZpZXdNb2RlKSB7XG4gIGxldCBsb2FkaW5nSFRNTCA9IEVNUFRZX1NUUklORztcblxuICBpZiAoY2xpZW50KSB7XG4gICAgbG9hZGluZ0hUTUwgPSBgPHNjcmlwdD5cblxuICBjb25zdCAgdmlld01vZGUgPSBcIiR7dmlld01vZGV9XCI7XG5cbiAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgdmlld01vZGVcbiAgfSk7XG5cbjwvc2NyaXB0PmA7XG4gIH1cblxuICByZXR1cm4gbG9hZGluZ0hUTUw7XG59XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVWaWV3TW9kZUhUTUwiLCJjbGllbnQiLCJ2aWV3TW9kZSIsImxvYWRpbmdIVE1MIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3lCQUZLO0FBRWQsU0FBU0EsbUJBQW1CQyxNQUFNLEVBQUVDLFFBQVE7SUFDekQsSUFBSUMsY0FBY0MsdUJBQVk7SUFFOUIsSUFBSUgsUUFBUTtRQUNWRSxjQUFjLEFBQUMsb0NBRWEsT0FBVEQsVUFBUztJQU85QjtJQUVBLE9BQU9DO0FBQ1QifQ==