"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createIndexHTMLOperation;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _livelycli = require("lively-cli");
var _necessary = require("necessary");
var _highmarkclient = require("highmark-client");
var _fileSystem = require("../utilities/fileSystem");
var _constants = require("../constants");
var parseContent = _necessary.templateUtilities.parseContent, concatenatePaths = _necessary.pathUtilities.concatenatePaths;
function createIndexHTMLOperation(proceed, abort, context) {
    var client = context.client, highmarkCSS = context.highmarkCSS, highmarkHTML = context.highmarkHTML, projectDirectoryName = context.projectDirectoryName, liveReloadHTML = _livelycli.liveReloadSnippet, fontCSS = _highmarkmarkdown.fontStyle, args = {
        fontCSS: fontCSS,
        highmarkCSS: highmarkCSS,
        highmarkHTML: highmarkHTML,
        liveReloadHTML: liveReloadHTML
    };
    if (client) {
        Object.assign(args, {
            clientHTML: _highmarkclient.clientHTML,
            loadingCSS: _highmarkclient.loadingCSS,
            loadingHTML: _highmarkclient.loadingHTML,
            documentCSS: _highmarkclient.documentCSS
        });
    } else {
        var _$documentCSS = "body {\n  background-color: #d5d1d1;\n}\n    \nbody > div.document {\n  width: 100%;\n  display: flex;\n  row-gap: 40px;\n  padding: 40px;\n  min-height: 100%;\n  align-items: center;\n  padding-bottom: 80px;\n  flex-direction: column;\n  justify-content: flex-start;\n} ";
        Object.assign(args, {
            documentCSS: _$documentCSS
        });
    }
    var content;
    content = _highmarkclient.indexHTML; ///
    var regularExpression = /{(.+?)}/g, parsedContent = parseContent(content, args, regularExpression);
    content = parsedContent; ///
    var filePath = concatenatePaths(projectDirectoryName, _constants.INDEX_HTML_FILE_NAME);
    (0, _fileSystem.writeFile)(filePath, content);
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlSW5kZXhIVE1MLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmb250U3R5bGUgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcbmltcG9ydCB7IGxpdmVSZWxvYWRTbmlwcGV0IH0gZnJvbSBcImxpdmVseS1jbGlcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIHRlbXBsYXRlVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgaW5kZXhIVE1MLCBjbGllbnRIVE1MLCBsb2FkaW5nSFRNTCwgbG9hZGluZ0NTUywgZG9jdW1lbnRDU1MgfSBmcm9tIFwiaGlnaG1hcmstY2xpZW50XCJcblxuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBJTkRFWF9IVE1MX0ZJTEVfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBwYXJzZUNvbnRlbnQgfSA9IHRlbXBsYXRlVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbmRleEhUTUxPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjbGllbnQsIGhpZ2htYXJrQ1NTLCBoaWdobWFya0hUTUwsIHByb2plY3REaXJlY3RvcnlOYW1lIH0gPSBjb250ZXh0LFxuICAgICAgICBsaXZlUmVsb2FkSFRNTCA9IGxpdmVSZWxvYWRTbmlwcGV0LCAvLy9cbiAgICAgICAgZm9udENTUyA9IGZvbnRTdHlsZSwgIC8vL1xuICAgICAgICBhcmdzID0ge1xuICAgICAgICAgIGZvbnRDU1MsXG4gICAgICAgICAgaGlnaG1hcmtDU1MsXG4gICAgICAgICAgaGlnaG1hcmtIVE1MLFxuICAgICAgICAgIGxpdmVSZWxvYWRIVE1MXG4gICAgICAgIH07XG5cbiAgaWYgKGNsaWVudCkge1xuICAgIE9iamVjdC5hc3NpZ24oYXJncywge1xuICAgICAgY2xpZW50SFRNTCxcbiAgICAgIGxvYWRpbmdDU1MsXG4gICAgICBsb2FkaW5nSFRNTCxcbiAgICAgIGRvY3VtZW50Q1NTXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZG9jdW1lbnRDU1MgPSBgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQxZDE7XG59XG4gICAgXG5ib2R5ID4gZGl2LmRvY3VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHJvdy1nYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59IGA7XG5cbiAgICBPYmplY3QuYXNzaWduKGFyZ3MsIHtcbiAgICAgIGRvY3VtZW50Q1NTXG4gICAgfSk7XG4gIH1cblxuICBsZXQgY29udGVudDtcblxuICBjb250ZW50ID0gaW5kZXhIVE1MOyAgLy8vXG5cbiAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSAveyguKz8pfS9nLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICBjb250ZW50ID0gcGFyc2VkQ29udGVudDsgIC8vL1xuXG4gIGNvbnN0IGZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0RGlyZWN0b3J5TmFtZSwgSU5ERVhfSFRNTF9GSUxFX05BTUUpO1xuXG4gIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG5cbiAgcHJvY2VlZCgpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUluZGV4SFRNTE9wZXJhdGlvbiIsInBhcnNlQ29udGVudCIsInRlbXBsYXRlVXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwiY2xpZW50IiwiaGlnaG1hcmtDU1MiLCJoaWdobWFya0hUTUwiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsImxpdmVSZWxvYWRIVE1MIiwibGl2ZVJlbG9hZFNuaXBwZXQiLCJmb250Q1NTIiwiZm9udFN0eWxlIiwiYXJncyIsIk9iamVjdCIsImFzc2lnbiIsImNsaWVudEhUTUwiLCJsb2FkaW5nQ1NTIiwibG9hZGluZ0hUTUwiLCJkb2N1bWVudENTUyIsImNvbnRlbnQiLCJpbmRleEhUTUwiLCJyZWd1bGFyRXhwcmVzc2lvbiIsInBhcnNlZENvbnRlbnQiLCJmaWxlUGF0aCIsIklOREVYX0hUTUxfRklMRV9OQU1FIiwid3JpdGVGaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7O2dDQVhFO3lCQUNRO3lCQUNlOzhCQUMyQjswQkFFbEQ7eUJBQ1c7QUFFckMsSUFBTSxBQUFFQyxlQUFpQkMsNEJBQWlCLENBQWxDRCxjQUNGLEFBQUVFLG1CQUFxQkMsd0JBQWEsQ0FBbENEO0FBRU8sU0FBU0gseUJBQXlCSyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUN0RSxJQUFRQyxTQUE0REQsUUFBNURDLFFBQVFDLGNBQW9ERixRQUFwREUsYUFBYUMsZUFBdUNILFFBQXZDRyxjQUFjQyx1QkFBeUJKLFFBQXpCSSxzQkFDckNDLGlCQUFpQkMsNEJBQWlCLEVBQ2xDQyxVQUFVQywyQkFBUyxFQUNuQkMsT0FBTztRQUNMRixTQUFBQTtRQUNBTCxhQUFBQTtRQUNBQyxjQUFBQTtRQUNBRSxnQkFBQUE7SUFDRjtJQUVOLElBQUlKLFFBQVE7UUFDVlMsT0FBT0MsTUFBTSxDQUFDRixNQUFNO1lBQ2xCRyxZQUFBQSwwQkFBVTtZQUNWQyxZQUFBQSwwQkFBVTtZQUNWQyxhQUFBQSwyQkFBVztZQUNYQyxhQUFBQSwyQkFBVztRQUNiO0lBQ0YsT0FBTztRQUNMLElBQU1BLGdCQUFjO1FBZ0JwQkwsT0FBT0MsTUFBTSxDQUFDRixNQUFNO1lBQ2xCTSxhQUFBQTtRQUNGO0lBQ0Y7SUFFQSxJQUFJQztJQUVKQSxVQUFVQyx5QkFBUyxFQUFHLEdBQUc7SUFFekIsSUFBTUMsb0JBQW9CLFlBQ3BCQyxnQkFBZ0J6QixhQUFhc0IsU0FBU1AsTUFBTVM7SUFFbERGLFVBQVVHLGVBQWdCLEdBQUc7SUFFN0IsSUFBTUMsV0FBV3hCLGlCQUFpQlEsc0JBQXNCaUIsK0JBQW9CO0lBRTVFQyxJQUFBQSxxQkFBUyxFQUFDRixVQUFVSjtJQUVwQmxCO0FBQ0YifQ==