"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return indexOptionsOperation;
    }
});
const _necessary = require("necessary");
const _defaultIndexOptions = /*#__PURE__*/ _interop_require_default(require("../defaultIndexOptions"));
const _fileSystem = require("../utilities/fileSystem");
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { concatenatePaths } = _necessary.pathUtilities;
function indexOptionsOperation(proceed, abort, context) {
    const { projectDirectoryName } = context;
    let content, indexOptions;
    const indexJSONFilePath = concatenatePaths(projectDirectoryName, _constants.INDEX_JSON_FILE_NAME), filePath = indexJSONFilePath;
    content = (0, _fileSystem.readFile)(filePath);
    if (content === null) {
        indexOptions = _defaultIndexOptions.default; ///
    } else {
        let json, jsonString;
        jsonString = content; ///
        json = JSON.parse(jsonString);
        const { phrases = [], plurals = [], acronyms = [], properNouns = [], ignoredWords = [] } = json;
        phrases.sort();
        plurals.sort();
        acronyms.sort();
        properNouns.sort();
        ignoredWords.sort();
        json = {
            phrases,
            plurals,
            acronyms,
            properNouns,
            ignoredWords
        };
        jsonString = JSON.stringify(json, null, 2);
        content = jsonString; ///
        (0, _fileSystem.writeFile)(indexJSONFilePath, content);
        indexOptions = json; ///
    }
    Object.assign(context, {
        indexOptions
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vaW5kZXhPcHRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGVmYXVsdEluZGV4T3B0aW9ucyBmcm9tIFwiLi4vZGVmYXVsdEluZGV4T3B0aW9uc1wiO1xuXG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBJTkRFWF9KU09OX0ZJTEVfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleE9wdGlvbnNPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBwcm9qZWN0RGlyZWN0b3J5TmFtZSB9ID0gY29udGV4dDtcblxuICBsZXQgY29udGVudCxcbiAgICAgIGluZGV4T3B0aW9ucztcblxuICBjb25zdCBpbmRleEpTT05GaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdERpcmVjdG9yeU5hbWUsIElOREVYX0pTT05fRklMRV9OQU1FKSxcbiAgICAgICAgZmlsZVBhdGggPSBpbmRleEpTT05GaWxlUGF0aDtcblxuICBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpO1xuXG4gIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgaW5kZXhPcHRpb25zID0gZGVmYXVsdEluZGV4T3B0aW9uczsgLy8vXG4gIH0gZWxzZSB7XG4gICAgbGV0IGpzb24sXG4gICAgICAgIGpzb25TdHJpbmc7XG5cbiAgICBqc29uU3RyaW5nID0gY29udGVudDsgIC8vL1xuXG4gICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICBjb25zdCB7IHBocmFzZXMgPSBbXSxcbiAgICAgICAgICAgIHBsdXJhbHMgPSBbXSxcbiAgICAgICAgICAgIGFjcm9ueW1zID0gW10sXG4gICAgICAgICAgICBwcm9wZXJOb3VucyA9IFtdLFxuICAgICAgICAgICAgaWdub3JlZFdvcmRzID0gW10gfSA9IGpzb247XG5cbiAgICBwaHJhc2VzLnNvcnQoKTtcbiAgICBwbHVyYWxzLnNvcnQoKTtcbiAgICBhY3Jvbnltcy5zb3J0KCk7XG4gICAgcHJvcGVyTm91bnMuc29ydCgpO1xuICAgIGlnbm9yZWRXb3Jkcy5zb3J0KCk7XG5cbiAgICBqc29uID0ge1xuICAgICAgcGhyYXNlcyxcbiAgICAgIHBsdXJhbHMsXG4gICAgICBhY3JvbnltcyxcbiAgICAgIHByb3Blck5vdW5zLFxuICAgICAgaWdub3JlZFdvcmRzXG4gICAgfTtcblxuICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG5cbiAgICB3cml0ZUZpbGUoaW5kZXhKU09ORmlsZVBhdGgsIGNvbnRlbnQpO1xuXG4gICAgaW5kZXhPcHRpb25zID0ganNvbjsgIC8vL1xuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgaW5kZXhPcHRpb25zXG4gIH0pO1xuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJpbmRleE9wdGlvbnNPcGVyYXRpb24iLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsImNvbnRlbnQiLCJpbmRleE9wdGlvbnMiLCJpbmRleEpTT05GaWxlUGF0aCIsIklOREVYX0pTT05fRklMRV9OQU1FIiwiZmlsZVBhdGgiLCJyZWFkRmlsZSIsImRlZmF1bHRJbmRleE9wdGlvbnMiLCJqc29uIiwianNvblN0cmluZyIsIkpTT04iLCJwYXJzZSIsInBocmFzZXMiLCJwbHVyYWxzIiwiYWNyb255bXMiLCJwcm9wZXJOb3VucyIsImlnbm9yZWRXb3JkcyIsInNvcnQiLCJzdHJpbmdpZnkiLCJ3cml0ZUZpbGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7MkJBVE07NEVBRUU7NEJBRUk7MkJBQ0M7Ozs7OztBQUVyQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdDLHdCQUFhO0FBRTNCLFNBQVNGLHNCQUFzQkcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDbkUsTUFBTSxFQUFFQyxvQkFBb0IsRUFBRSxHQUFHRDtJQUVqQyxJQUFJRSxTQUNBQztJQUVKLE1BQU1DLG9CQUFvQlIsaUJBQWlCSyxzQkFBc0JJLCtCQUFvQixHQUMvRUMsV0FBV0Y7SUFFakJGLFVBQVVLLElBQUFBLG9CQUFRLEVBQUNEO0lBRW5CLElBQUlKLFlBQVksTUFBTTtRQUNwQkMsZUFBZUssNEJBQW1CLEVBQUUsR0FBRztJQUN6QyxPQUFPO1FBQ0wsSUFBSUMsTUFDQUM7UUFFSkEsYUFBYVIsU0FBVSxHQUFHO1FBRTFCTyxPQUFPRSxLQUFLQyxLQUFLLENBQUNGO1FBRWxCLE1BQU0sRUFBRUcsVUFBVSxFQUFFLEVBQ1pDLFVBQVUsRUFBRSxFQUNaQyxXQUFXLEVBQUUsRUFDYkMsY0FBYyxFQUFFLEVBQ2hCQyxlQUFlLEVBQUUsRUFBRSxHQUFHUjtRQUU5QkksUUFBUUssSUFBSTtRQUNaSixRQUFRSSxJQUFJO1FBQ1pILFNBQVNHLElBQUk7UUFDYkYsWUFBWUUsSUFBSTtRQUNoQkQsYUFBYUMsSUFBSTtRQUVqQlQsT0FBTztZQUNMSTtZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBRUFQLGFBQWFDLEtBQUtRLFNBQVMsQ0FBQ1YsTUFBTSxNQUFNO1FBRXhDUCxVQUFVUSxZQUFhLEdBQUc7UUFFMUJVLElBQUFBLHFCQUFTLEVBQUNoQixtQkFBbUJGO1FBRTdCQyxlQUFlTSxNQUFPLEdBQUc7SUFDM0I7SUFFQVksT0FBT0MsTUFBTSxDQUFDdEIsU0FBUztRQUNyQkc7SUFDRjtJQUVBTDtBQUNGIn0=