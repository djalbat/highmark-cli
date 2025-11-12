"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return publishAction;
    }
});
var _copyFonts = /*#__PURE__*/ _interop_require_default(require("../operation/copyFonts"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("../operation/indexOptions"));
var _copyClientFiles = /*#__PURE__*/ _interop_require_default(require("../operation/copyClientFiles"));
var _createIndexHTML = /*#__PURE__*/ _interop_require_default(require("../operation/createIndexHTML"));
var _createHighmarkCSS = /*#__PURE__*/ _interop_require_default(require("../operation/createHighmarkCSS"));
var _createHighmarkHTML = /*#__PURE__*/ _interop_require_default(require("../operation/createHighmarkHTML"));
var _operation = require("../utilities/operation");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function publishAction(port, fonts, watch, client, quietly, inputFileName, projectDirectoryName) {
    var operations = [
        _indexOptions.default,
        _createHighmarkHTML.default,
        _createHighmarkCSS.default,
        _createIndexHTML.default,
        _copyClientFiles.default,
        _copyFonts.default
    ], context = {
        port: port,
        fonts: fonts,
        watch: watch,
        client: client,
        quietly: quietly,
        inputFileName: inputFileName,
        projectDirectoryName: projectDirectoryName
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        var success = completed, message = success ? _messages.SUCCESSFUL_PUBLISH_MESSAGE : _messages.FAILED_PUBLISH_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvcHlGb250c09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NvcHlGb250c1wiO1xuaW1wb3J0IGluZGV4T3B0aW9uc09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IGNvcHlDbGllbnRGaWxlc09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NvcHlDbGllbnRGaWxlc1wiO1xuaW1wb3J0IGNyZWF0ZUluZGV4SFRNTE9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NyZWF0ZUluZGV4SFRNTFwiO1xuaW1wb3J0IGNyZWF0ZUhpZ2htYXJrQ1NTT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY3JlYXRlSGlnaG1hcmtDU1NcIjtcbmltcG9ydCBjcmVhdGVIaWdobWFya0hUTUxPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVIaWdobWFya0hUTUxcIjtcblxuaW1wb3J0IHsgZXhlY3V0ZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29wZXJhdGlvblwiO1xuaW1wb3J0IHsgU1VDQ0VTU0ZVTF9QVUJMSVNIX01FU1NBR0UsIEZBSUxFRF9QVUJMSVNIX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVibGlzaEFjdGlvbihwb3J0LCBmb250cywgd2F0Y2gsIGNsaWVudCwgcXVpZXRseSwgaW5wdXRGaWxlTmFtZSwgcHJvamVjdERpcmVjdG9yeU5hbWUpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBpbmRleE9wdGlvbnNPcGVyYXRpb24sXG4gICAgICAgICAgY3JlYXRlSGlnaG1hcmtIVE1MT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZUhpZ2htYXJrQ1NTT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZUluZGV4SFRNTE9wZXJhdGlvbixcbiAgICAgICAgICBjb3B5Q2xpZW50RmlsZXNPcGVyYXRpb24sXG4gICAgICAgICAgY29weUZvbnRzT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgICBmb250cyxcbiAgICAgICAgICB3YXRjaCxcbiAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgcXVpZXRseSxcbiAgICAgICAgICBpbnB1dEZpbGVOYW1lLFxuICAgICAgICAgIHByb2plY3REaXJlY3RvcnlOYW1lXG4gICAgICAgIH07XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjb21wbGV0ZWQsICAvLy9cbiAgICAgICAgICBtZXNzYWdlID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgU1VDQ0VTU0ZVTF9QVUJMSVNIX01FU1NBR0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRkFJTEVEX1BVQkxJU0hfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJwdWJsaXNoQWN0aW9uIiwicG9ydCIsImZvbnRzIiwid2F0Y2giLCJjbGllbnQiLCJxdWlldGx5IiwiaW5wdXRGaWxlTmFtZSIsInByb2plY3REaXJlY3RvcnlOYW1lIiwib3BlcmF0aW9ucyIsImluZGV4T3B0aW9uc09wZXJhdGlvbiIsImNyZWF0ZUhpZ2htYXJrSFRNTE9wZXJhdGlvbiIsImNyZWF0ZUhpZ2htYXJrQ1NTT3BlcmF0aW9uIiwiY3JlYXRlSW5kZXhIVE1MT3BlcmF0aW9uIiwiY29weUNsaWVudEZpbGVzT3BlcmF0aW9uIiwiY29weUZvbnRzT3BlcmF0aW9uIiwiY29udGV4dCIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX1BVQkxJU0hfTUVTU0FHRSIsIkZBSUxFRF9QVUJMSVNIX01FU1NBR0UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7O2dFQVZPO21FQUNHO3NFQUNHO3NFQUNBO3dFQUNFO3lFQUNDO3lCQUVOO3dCQUNpQzs7Ozs7O0FBRXBELFNBQVNBLGNBQWNDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLG9CQUFvQjtJQUM1RyxJQUFNQyxhQUFhO1FBQ1hDLHFCQUFxQjtRQUNyQkMsMkJBQTJCO1FBQzNCQywwQkFBMEI7UUFDMUJDLHdCQUF3QjtRQUN4QkMsd0JBQXdCO1FBQ3hCQyxrQkFBa0I7S0FDbkIsRUFDREMsVUFBVTtRQUNSZCxNQUFBQTtRQUNBQyxPQUFBQTtRQUNBQyxPQUFBQTtRQUNBQyxRQUFBQTtRQUNBQyxTQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxzQkFBQUE7SUFDRjtJQUVOUyxJQUFBQSw0QkFBaUIsRUFBQ1IsWUFBWSxTQUFDUztRQUM3QixJQUFNQyxVQUFVRCxXQUNWRSxVQUFVRCxVQUNFRSxvQ0FBMEIsR0FDeEJDLGdDQUFzQjtRQUUxQ0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNkLEdBQUdKO0FBQ0wifQ==