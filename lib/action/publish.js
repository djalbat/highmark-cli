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
var _copyClientFile = /*#__PURE__*/ _interop_require_default(require("../operation/copyClientFile"));
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
        _copyClientFile.default,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvcHlGb250c09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NvcHlGb250c1wiO1xuaW1wb3J0IGluZGV4T3B0aW9uc09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IGNvcHlDbGllbnRGaWxlT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY29weUNsaWVudEZpbGVcIjtcbmltcG9ydCBjcmVhdGVJbmRleEhUTUxPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVJbmRleEhUTUxcIjtcbmltcG9ydCBjcmVhdGVIaWdobWFya0NTU09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NyZWF0ZUhpZ2htYXJrQ1NTXCI7XG5pbXBvcnQgY3JlYXRlSGlnaG1hcmtIVE1MT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY3JlYXRlSGlnaG1hcmtIVE1MXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFLCBGQUlMRURfUFVCTElTSF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHB1Ymxpc2hBY3Rpb24ocG9ydCwgZm9udHMsIHdhdGNoLCBjbGllbnQsIHF1aWV0bHksIGlucHV0RmlsZU5hbWUsIHByb2plY3REaXJlY3RvcnlOYW1lKSB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSBbXG4gICAgICAgICAgaW5kZXhPcHRpb25zT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZUhpZ2htYXJrSFRNTE9wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVIaWdobWFya0NTU09wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVJbmRleEhUTUxPcGVyYXRpb24sXG4gICAgICAgICAgY29weUNsaWVudEZpbGVPcGVyYXRpb24sXG4gICAgICAgICAgY29weUZvbnRzT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgICBmb250cyxcbiAgICAgICAgICB3YXRjaCxcbiAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgcXVpZXRseSxcbiAgICAgICAgICBpbnB1dEZpbGVOYW1lLFxuICAgICAgICAgIHByb2plY3REaXJlY3RvcnlOYW1lXG4gICAgICAgIH07XG5cbiAgZXhlY3V0ZU9wZXJhdGlvbnMob3BlcmF0aW9ucywgKGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjb21wbGV0ZWQsICAvLy9cbiAgICAgICAgICBtZXNzYWdlID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgICAgU1VDQ0VTU0ZVTF9QVUJMSVNIX01FU1NBR0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRkFJTEVEX1BVQkxJU0hfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJwdWJsaXNoQWN0aW9uIiwicG9ydCIsImZvbnRzIiwid2F0Y2giLCJjbGllbnQiLCJxdWlldGx5IiwiaW5wdXRGaWxlTmFtZSIsInByb2plY3REaXJlY3RvcnlOYW1lIiwib3BlcmF0aW9ucyIsImluZGV4T3B0aW9uc09wZXJhdGlvbiIsImNyZWF0ZUhpZ2htYXJrSFRNTE9wZXJhdGlvbiIsImNyZWF0ZUhpZ2htYXJrQ1NTT3BlcmF0aW9uIiwiY3JlYXRlSW5kZXhIVE1MT3BlcmF0aW9uIiwiY29weUNsaWVudEZpbGVPcGVyYXRpb24iLCJjb3B5Rm9udHNPcGVyYXRpb24iLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJzdWNjZXNzIiwibWVzc2FnZSIsIlNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFIiwiRkFJTEVEX1BVQkxJU0hfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7Z0VBVk87bUVBQ0c7cUVBQ0U7c0VBQ0M7d0VBQ0U7eUVBQ0M7eUJBRU47d0JBQ2lDOzs7Ozs7QUFFcEQsU0FBU0EsY0FBY0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsb0JBQW9CO0lBQzVHLElBQU1DLGFBQWE7UUFDWEMscUJBQXFCO1FBQ3JCQywyQkFBMkI7UUFDM0JDLDBCQUEwQjtRQUMxQkMsd0JBQXdCO1FBQ3hCQyx1QkFBdUI7UUFDdkJDLGtCQUFrQjtLQUNuQixFQUNEQyxVQUFVO1FBQ1JkLE1BQUFBO1FBQ0FDLE9BQUFBO1FBQ0FDLE9BQUFBO1FBQ0FDLFFBQUFBO1FBQ0FDLFNBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FDLHNCQUFBQTtJQUNGO0lBRU5TLElBQUFBLDRCQUFpQixFQUFDUixZQUFZLFNBQUNTO1FBQzdCLElBQU1DLFVBQVVELFdBQ1ZFLFVBQVVELFVBQ0VFLG9DQUEwQixHQUN4QkMsZ0NBQXNCO1FBRTFDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2QsR0FBR0o7QUFDTCJ9