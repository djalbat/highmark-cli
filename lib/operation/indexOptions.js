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
        jsonString = JSON.stringify(json, null, _constants.DOUBLE_SPACE);
        content = jsonString; ///
        (0, _fileSystem.writeFile)(indexJSONFilePath, content);
        indexOptions = json; ///
    }
    Object.assign(context, {
        indexOptions
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vaW5kZXhPcHRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGVmYXVsdEluZGV4T3B0aW9ucyBmcm9tIFwiLi4vZGVmYXVsdEluZGV4T3B0aW9uc1wiO1xuXG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIElOREVYX0pTT05fRklMRV9OQU1FIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4T3B0aW9uc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHByb2plY3REaXJlY3RvcnlOYW1lIH0gPSBjb250ZXh0O1xuXG4gIGxldCBjb250ZW50LFxuICAgICAgaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGluZGV4SlNPTkZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0RGlyZWN0b3J5TmFtZSwgSU5ERVhfSlNPTl9GSUxFX05BTUUpLFxuICAgICAgICBmaWxlUGF0aCA9IGluZGV4SlNPTkZpbGVQYXRoO1xuXG4gIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCk7XG5cbiAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICBpbmRleE9wdGlvbnMgPSBkZWZhdWx0SW5kZXhPcHRpb25zOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBsZXQganNvbixcbiAgICAgICAganNvblN0cmluZztcblxuICAgIGpzb25TdHJpbmcgPSBjb250ZW50OyAgLy8vXG5cbiAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgIGNvbnN0IHsgcGhyYXNlcyA9IFtdLFxuICAgICAgICAgICAgcGx1cmFscyA9IFtdLFxuICAgICAgICAgICAgYWNyb255bXMgPSBbXSxcbiAgICAgICAgICAgIHByb3Blck5vdW5zID0gW10sXG4gICAgICAgICAgICBpZ25vcmVkV29yZHMgPSBbXSB9ID0ganNvbjtcblxuICAgIHBocmFzZXMuc29ydCgpO1xuICAgIHBsdXJhbHMuc29ydCgpO1xuICAgIGFjcm9ueW1zLnNvcnQoKTtcbiAgICBwcm9wZXJOb3Vucy5zb3J0KCk7XG4gICAgaWdub3JlZFdvcmRzLnNvcnQoKTtcblxuICAgIGpzb24gPSB7XG4gICAgICBwaHJhc2VzLFxuICAgICAgcGx1cmFscyxcbiAgICAgIGFjcm9ueW1zLFxuICAgICAgcHJvcGVyTm91bnMsXG4gICAgICBpZ25vcmVkV29yZHNcbiAgICB9O1xuXG4gICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIERPVUJMRV9TUEFDRSk7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuXG4gICAgd3JpdGVGaWxlKGluZGV4SlNPTkZpbGVQYXRoLCBjb250ZW50KTtcblxuICAgIGluZGV4T3B0aW9ucyA9IGpzb247ICAvLy9cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGluZGV4T3B0aW9uc1xuICB9KTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsiaW5kZXhPcHRpb25zT3BlcmF0aW9uIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwicHJvamVjdERpcmVjdG9yeU5hbWUiLCJjb250ZW50IiwiaW5kZXhPcHRpb25zIiwiaW5kZXhKU09ORmlsZVBhdGgiLCJJTkRFWF9KU09OX0ZJTEVfTkFNRSIsImZpbGVQYXRoIiwicmVhZEZpbGUiLCJkZWZhdWx0SW5kZXhPcHRpb25zIiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJwaHJhc2VzIiwicGx1cmFscyIsImFjcm9ueW1zIiwicHJvcGVyTm91bnMiLCJpZ25vcmVkV29yZHMiLCJzb3J0Iiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwid3JpdGVGaWxlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzJCQVRNOzRFQUVFOzRCQUVJOzJCQUNlOzs7Ozs7QUFFbkQsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQyx3QkFBYTtBQUUzQixTQUFTRixzQkFBc0JHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ25FLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUUsR0FBR0Q7SUFFakMsSUFBSUUsU0FDQUM7SUFFSixNQUFNQyxvQkFBb0JSLGlCQUFpQkssc0JBQXNCSSwrQkFBb0IsR0FDL0VDLFdBQVdGO0lBRWpCRixVQUFVSyxJQUFBQSxvQkFBUSxFQUFDRDtJQUVuQixJQUFJSixZQUFZLE1BQU07UUFDcEJDLGVBQWVLLDRCQUFtQixFQUFFLEdBQUc7SUFDekMsT0FBTztRQUNMLElBQUlDLE1BQ0FDO1FBRUpBLGFBQWFSLFNBQVUsR0FBRztRQUUxQk8sT0FBT0UsS0FBS0MsS0FBSyxDQUFDRjtRQUVsQixNQUFNLEVBQUVHLFVBQVUsRUFBRSxFQUNaQyxVQUFVLEVBQUUsRUFDWkMsV0FBVyxFQUFFLEVBQ2JDLGNBQWMsRUFBRSxFQUNoQkMsZUFBZSxFQUFFLEVBQUUsR0FBR1I7UUFFOUJJLFFBQVFLLElBQUk7UUFDWkosUUFBUUksSUFBSTtRQUNaSCxTQUFTRyxJQUFJO1FBQ2JGLFlBQVlFLElBQUk7UUFDaEJELGFBQWFDLElBQUk7UUFFakJULE9BQU87WUFDTEk7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtRQUVBUCxhQUFhQyxLQUFLUSxTQUFTLENBQUNWLE1BQU0sTUFBTVcsdUJBQVk7UUFFcERsQixVQUFVUSxZQUFhLEdBQUc7UUFFMUJXLElBQUFBLHFCQUFTLEVBQUNqQixtQkFBbUJGO1FBRTdCQyxlQUFlTSxNQUFPLEdBQUc7SUFDM0I7SUFFQWEsT0FBT0MsTUFBTSxDQUFDdkIsU0FBUztRQUNyQkc7SUFDRjtJQUVBTDtBQUNGIn0=