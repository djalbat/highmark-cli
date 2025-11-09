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
var _highmarkmarkdown = require("highmark-markdown");
var _fileSystem = require("./utilities/fileSystem");
var _division = require("./utilities/division");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, tokensFromMarkdown = _highmarkmarkdown.grammarUtilities.tokensFromMarkdown, markdownNodeFromTokens = _highmarkmarkdown.grammarUtilities.markdownNodeFromTokens;
function importer(filePath, context) {
    var projectDirectoryName = context.projectDirectoryName;
    filePath = concatenatePaths(projectDirectoryName, filePath); ///
    var content = (0, _fileSystem.readFile)(filePath);
    if (content !== null) {
        var markdown = content, tokens = tokensFromMarkdown(markdown), markdownNode = markdownNodeFromTokens(tokens);
        if (markdownNode !== null) {
            var className = (0, _division.classNameFromFilePath)(filePath), importedNode = markdownNode, importedTokens = tokens, importedClassName = className; ///
            Object.assign(context, {
                importedNode: importedNode,
                importedTokens: importedTokens,
                importedClassName: importedClassName
            });
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBvcnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGdyYW1tYXJVdGlsaXRpZXMgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lRnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgdG9rZW5zRnJvbU1hcmtkb3duLCBtYXJrZG93bk5vZGVGcm9tVG9rZW5zIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCkge1xuICBjb25zdCB7IHByb2plY3REaXJlY3RvcnlOYW1lIH0gPSBjb250ZXh0O1xuXG4gIGZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0RGlyZWN0b3J5TmFtZSwgZmlsZVBhdGgpOyAgLy8vXG5cbiAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGZpbGVQYXRoKTtcblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gY29udGVudCwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duKG1hcmtkb3duKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cblxuICAgIGlmIChtYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZUZyb21GaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgICBpbXBvcnRlZE5vZGUgPSBtYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gdG9rZW5zLCAgLy8vXG4gICAgICAgICAgICBpbXBvcnRlZENsYXNzTmFtZSA9IGNsYXNzTmFtZTsgIC8vL1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgaW1wb3J0ZWROb2RlLFxuICAgICAgICBpbXBvcnRlZFRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImltcG9ydGVyIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJ0b2tlbnNGcm9tTWFya2Rvd24iLCJncmFtbWFyVXRpbGl0aWVzIiwibWFya2Rvd25Ob2RlRnJvbVRva2VucyIsImZpbGVQYXRoIiwiY29udGV4dCIsInByb2plY3REaXJlY3RvcnlOYW1lIiwiY29udGVudCIsInJlYWRGaWxlIiwibWFya2Rvd24iLCJ0b2tlbnMiLCJtYXJrZG93bk5vZGUiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVGcm9tRmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7O3lCQVRNO2dDQUNHOzBCQUVSO3dCQUNhO0FBRXRDLElBQU0sQUFBRUMsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLHFCQUErQ0Msa0NBQWdCLENBQS9ERCxvQkFBb0JFLHlCQUEyQkQsa0NBQWdCLENBQTNDQztBQUViLFNBQVNMLFNBQVNNLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxJQUFNLEFBQUVDLHVCQUF5QkQsUUFBekJDO0lBRVJGLFdBQVdMLGlCQUFpQk8sc0JBQXNCRixXQUFZLEdBQUc7SUFFakUsSUFBTUcsVUFBVUMsSUFBQUEsb0JBQVEsRUFBQ0o7SUFFekIsSUFBSUcsWUFBWSxNQUFNO1FBQ3BCLElBQU1FLFdBQVdGLFNBQ1hHLFNBQVNULG1CQUFtQlEsV0FDNUJFLGVBQWVSLHVCQUF1Qk87UUFHNUMsSUFBSUMsaUJBQWlCLE1BQU07WUFDekIsSUFBTUMsWUFBWUMsSUFBQUEsK0JBQXFCLEVBQUNULFdBQ2xDVSxlQUFlSCxjQUNmSSxpQkFBaUJMLFFBQ2pCTSxvQkFBb0JKLFdBQVksR0FBRztZQUV6Q0ssT0FBT0MsTUFBTSxDQUFDYixTQUFTO2dCQUNyQlMsY0FBQUE7Z0JBQ0FDLGdCQUFBQTtnQkFDQUMsbUJBQUFBO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YifQ==