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
function publishAction(port, fonts, watch, client, quietly, viewMode, inputFileName, projectDirectoryName) {
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
        viewMode: viewMode,
        inputFileName: inputFileName,
        projectDirectoryName: projectDirectoryName
    };
    (0, _operation.executeOperations)(operations, function(completed) {
        var success = completed, message = success ? _messages.SUCCESSFUL_PUBLISH_MESSAGE : _messages.FAILED_PUBLISH_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvcHlGb250c09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NvcHlGb250c1wiO1xuaW1wb3J0IGluZGV4T3B0aW9uc09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IGNvcHlDbGllbnRGaWxlT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY29weUNsaWVudEZpbGVcIjtcbmltcG9ydCBjcmVhdGVJbmRleEhUTUxPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVJbmRleEhUTUxcIjtcbmltcG9ydCBjcmVhdGVIaWdobWFya0NTU09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NyZWF0ZUhpZ2htYXJrQ1NTXCI7XG5pbXBvcnQgY3JlYXRlSGlnaG1hcmtIVE1MT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY3JlYXRlSGlnaG1hcmtIVE1MXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFLCBGQUlMRURfUFVCTElTSF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHB1Ymxpc2hBY3Rpb24ocG9ydCwgZm9udHMsIHdhdGNoLCBjbGllbnQsIHF1aWV0bHksIHZpZXdNb2RlLCBpbnB1dEZpbGVOYW1lLCBwcm9qZWN0RGlyZWN0b3J5TmFtZSkge1xuICBjb25zdCBvcGVyYXRpb25zID0gW1xuICAgICAgICAgIGluZGV4T3B0aW9uc09wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVIaWdobWFya0hUTUxPcGVyYXRpb24sXG4gICAgICAgICAgY3JlYXRlSGlnaG1hcmtDU1NPcGVyYXRpb24sXG4gICAgICAgICAgY3JlYXRlSW5kZXhIVE1MT3BlcmF0aW9uLFxuICAgICAgICAgIGNvcHlDbGllbnRGaWxlT3BlcmF0aW9uLFxuICAgICAgICAgIGNvcHlGb250c09wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgZm9udHMsXG4gICAgICAgICAgd2F0Y2gsXG4gICAgICAgICAgY2xpZW50LFxuICAgICAgICAgIHF1aWV0bHksXG4gICAgICAgICAgdmlld01vZGUsXG4gICAgICAgICAgaW5wdXRGaWxlTmFtZSxcbiAgICAgICAgICBwcm9qZWN0RGlyZWN0b3J5TmFtZVxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gY29tcGxldGVkLCAgLy8vXG4gICAgICAgICAgbWVzc2FnZSA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgIFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEZBSUxFRF9QVUJMSVNIX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsicHVibGlzaEFjdGlvbiIsInBvcnQiLCJmb250cyIsIndhdGNoIiwiY2xpZW50IiwicXVpZXRseSIsInZpZXdNb2RlIiwiaW5wdXRGaWxlTmFtZSIsInByb2plY3REaXJlY3RvcnlOYW1lIiwib3BlcmF0aW9ucyIsImluZGV4T3B0aW9uc09wZXJhdGlvbiIsImNyZWF0ZUhpZ2htYXJrSFRNTE9wZXJhdGlvbiIsImNyZWF0ZUhpZ2htYXJrQ1NTT3BlcmF0aW9uIiwiY3JlYXRlSW5kZXhIVE1MT3BlcmF0aW9uIiwiY29weUNsaWVudEZpbGVPcGVyYXRpb24iLCJjb3B5Rm9udHNPcGVyYXRpb24iLCJjb250ZXh0IiwiZXhlY3V0ZU9wZXJhdGlvbnMiLCJjb21wbGV0ZWQiLCJzdWNjZXNzIiwibWVzc2FnZSIsIlNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFIiwiRkFJTEVEX1BVQkxJU0hfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7Z0VBVk87bUVBQ0c7cUVBQ0U7c0VBQ0M7d0VBQ0U7eUVBQ0M7eUJBRU47d0JBQ2lDOzs7Ozs7QUFFcEQsU0FBU0EsY0FBY0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxvQkFBb0I7SUFDdEgsSUFBTUMsYUFBYTtRQUNYQyxxQkFBcUI7UUFDckJDLDJCQUEyQjtRQUMzQkMsMEJBQTBCO1FBQzFCQyx3QkFBd0I7UUFDeEJDLHVCQUF1QjtRQUN2QkMsa0JBQWtCO0tBQ25CLEVBQ0RDLFVBQVU7UUFDUmYsTUFBQUE7UUFDQUMsT0FBQUE7UUFDQUMsT0FBQUE7UUFDQUMsUUFBQUE7UUFDQUMsU0FBQUE7UUFDQUMsVUFBQUE7UUFDQUMsZUFBQUE7UUFDQUMsc0JBQUFBO0lBQ0Y7SUFFTlMsSUFBQUEsNEJBQWlCLEVBQUNSLFlBQVksU0FBQ1M7UUFDN0IsSUFBTUMsVUFBVUQsV0FDVkUsVUFBVUQsVUFDRUUsb0NBQTBCLEdBQ3hCQyxnQ0FBc0I7UUFFMUNDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDZCxHQUFHSjtBQUNMIn0=