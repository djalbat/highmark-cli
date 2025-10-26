"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return importer;
    }
});
var _necessary = require("necessary");
var _fileSystem = require("./utilities/fileSystem");
var _division = require("./utilities/division");
var _markdown = require("./utilities/markdown");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths;
function importer(filePath, context) {
    var projectDirectoryName = context.projectDirectoryName;
    filePath = concatenatePaths(projectDirectoryName, filePath); ///
    var content = (0, _fileSystem.readFile)(filePath);
    if (content !== null) {
        var className = (0, _division.classNameFromFilePath)(filePath), tokens = (0, _markdown.tokensFromContent)(content), node = (0, _markdown.nodeFromTokens)(tokens), importedNode = node, importedTokens = tokens, importedClassName = className; ///
        if (node !== null) {
            Object.assign(context, {
                importedNode: importedNode,
                importedTokens: importedTokens,
                importedClassName: importedClassName
            });
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBvcnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lRnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5pbXBvcnQgeyBub2RlRnJvbVRva2VucywgdG9rZW5zRnJvbUNvbnRlbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCkge1xuICBjb25zdCB7IHByb2plY3REaXJlY3RvcnlOYW1lIH0gPSBjb250ZXh0O1xuXG4gIGZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0RGlyZWN0b3J5TmFtZSwgZmlsZVBhdGgpOyAgLy8vXG5cbiAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGZpbGVQYXRoKTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZUZyb21GaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLCAgLy8vXG4gICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBjbGFzc05hbWU7ICAvLy9cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgaW1wb3J0ZWROb2RlLFxuICAgICAgICBpbXBvcnRlZFRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImltcG9ydGVyIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsImNvbnRlbnQiLCJyZWFkRmlsZSIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUZyb21GaWxlUGF0aCIsInRva2VucyIsInRva2Vuc0Zyb21Db250ZW50Iiwibm9kZSIsIm5vZGVGcm9tVG9rZW5zIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJpbXBvcnRlZENsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7Ozt5QkFSTTswQkFFTDt3QkFDYTt3QkFDWTtBQUVsRCxJQUFNLEFBQUVDLG1CQUFxQkMsd0JBQWEsQ0FBbENEO0FBRU8sU0FBU0QsU0FBU0csUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQU0sQUFBRUMsdUJBQXlCRCxRQUF6QkM7SUFFUkYsV0FBV0YsaUJBQWlCSSxzQkFBc0JGLFdBQVksR0FBRztJQUVqRSxJQUFNRyxVQUFVQyxJQUFBQSxvQkFBUSxFQUFDSjtJQUV6QixJQUFJRyxZQUFZLE1BQU07UUFDcEIsSUFBTUUsWUFBWUMsSUFBQUEsK0JBQXFCLEVBQUNOLFdBQ2xDTyxTQUFTQyxJQUFBQSwyQkFBaUIsRUFBQ0wsVUFDM0JNLE9BQU9DLElBQUFBLHdCQUFjLEVBQUNILFNBQ3RCSSxlQUFlRixNQUNmRyxpQkFBaUJMLFFBQ2pCTSxvQkFBb0JSLFdBQVksR0FBRztRQUV6QyxJQUFJSSxTQUFTLE1BQU07WUFDakJLLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJVLGNBQUFBO2dCQUNBQyxnQkFBQUE7Z0JBQ0FDLG1CQUFBQTtZQUNGO1FBQ0Y7SUFDRjtBQUNGIn0=