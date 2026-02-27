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
const _necessary = require("necessary");
const _highmarkmarkdown = require("highmark-markdown");
const _fileSystem = require("./utilities/fileSystem");
const _division = require("./utilities/division");
const { concatenatePaths } = _necessary.pathUtilities, { tokensFromMarkdown, documentMarkdownNodeFromTokens } = _highmarkmarkdown.grammarUtilities;
function importer(filePath, context) {
    const { projectDirectoryName } = context;
    filePath = concatenatePaths(projectDirectoryName, filePath); ///
    const content = (0, _fileSystem.readFile)(filePath);
    if (content !== null) {
        const markdown = content, tokens = tokensFromMarkdown(markdown), documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);
        if (documentMarkdownNode !== null) {
            const className = (0, _division.classNameFromFilePath)(filePath), importedNode = documentMarkdownNode, importedTokens = tokens, importedClassName = className; ///
            Object.assign(context, {
                importedNode,
                importedTokens,
                importedClassName
            });
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbXBvcnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGdyYW1tYXJVdGlsaXRpZXMgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lRnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgdG9rZW5zRnJvbU1hcmtkb3duLCBkb2N1bWVudE1hcmtkb3duTm9kZUZyb21Ub2tlbnMgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcHJvamVjdERpcmVjdG9yeU5hbWUgfSA9IGNvbnRleHQ7XG5cbiAgZmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3REaXJlY3RvcnlOYW1lLCBmaWxlUGF0aCk7ICAvLy9cblxuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpO1xuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSBjb250ZW50LCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICAgIGRvY3VtZW50TWFya2Rvd25Ob2RlID0gZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cblxuICAgIGlmIChkb2N1bWVudE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lRnJvbUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgIGltcG9ydGVkTm9kZSA9IGRvY3VtZW50TWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBpbXBvcnRlZFRva2VucyA9IHRva2VucywgIC8vL1xuICAgICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBjbGFzc05hbWU7ICAvLy9cblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGltcG9ydGVkTm9kZSxcbiAgICAgICAgaW1wb3J0ZWRUb2tlbnMsXG4gICAgICAgIGltcG9ydGVkQ2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbXBvcnRlciIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwidG9rZW5zRnJvbU1hcmtkb3duIiwiZG9jdW1lbnRNYXJrZG93bk5vZGVGcm9tVG9rZW5zIiwiZ3JhbW1hclV0aWxpdGllcyIsImZpbGVQYXRoIiwiY29udGV4dCIsInByb2plY3REaXJlY3RvcnlOYW1lIiwiY29udGVudCIsInJlYWRGaWxlIiwibWFya2Rvd24iLCJ0b2tlbnMiLCJkb2N1bWVudE1hcmtkb3duTm9kZSIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUZyb21GaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBd0JBOzs7MkJBVE07a0NBQ0c7NEJBRVI7MEJBQ2E7QUFFdEMsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQyx3QkFBYSxFQUNwQyxFQUFFQyxrQkFBa0IsRUFBRUMsOEJBQThCLEVBQUUsR0FBR0Msa0NBQWdCO0FBRWhFLFNBQVNMLFNBQVNNLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxNQUFNLEVBQUVDLG9CQUFvQixFQUFFLEdBQUdEO0lBRWpDRCxXQUFXTCxpQkFBaUJPLHNCQUFzQkYsV0FBWSxHQUFHO0lBRWpFLE1BQU1HLFVBQVVDLElBQUFBLG9CQUFRLEVBQUNKO0lBRXpCLElBQUlHLFlBQVksTUFBTTtRQUNwQixNQUFNRSxXQUFXRixTQUNYRyxTQUFTVCxtQkFBbUJRLFdBQzVCRSx1QkFBdUJULCtCQUErQlE7UUFHNUQsSUFBSUMseUJBQXlCLE1BQU07WUFDakMsTUFBTUMsWUFBWUMsSUFBQUEsK0JBQXFCLEVBQUNULFdBQ2xDVSxlQUFlSCxzQkFDZkksaUJBQWlCTCxRQUNqQk0sb0JBQW9CSixXQUFZLEdBQUc7WUFFekNLLE9BQU9DLE1BQU0sQ0FBQ2IsU0FBUztnQkFDckJTO2dCQUNBQztnQkFDQUM7WUFDRjtRQUNGO0lBQ0Y7QUFDRiJ9