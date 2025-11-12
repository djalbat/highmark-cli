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
var _watch = /*#__PURE__*/ _interop_require_default(require("../operation/watch"));
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
        _copyFonts.default,
        _watch.default
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdhdGNoT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vd2F0Y2hcIjtcbmltcG9ydCBjb3B5Rm9udHNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jb3B5Rm9udHNcIjtcbmltcG9ydCBpbmRleE9wdGlvbnNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBjb3B5Q2xpZW50RmlsZXNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jb3B5Q2xpZW50RmlsZXNcIjtcbmltcG9ydCBjcmVhdGVJbmRleEhUTUxPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jcmVhdGVJbmRleEhUTUxcIjtcbmltcG9ydCBjcmVhdGVIaWdobWFya0NTU09wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL2NyZWF0ZUhpZ2htYXJrQ1NTXCI7XG5pbXBvcnQgY3JlYXRlSGlnaG1hcmtIVE1MT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY3JlYXRlSGlnaG1hcmtIVE1MXCI7XG5cbmltcG9ydCB7IGV4ZWN1dGVPcGVyYXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vcGVyYXRpb25cIjtcbmltcG9ydCB7IFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFLCBGQUlMRURfUFVCTElTSF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHB1Ymxpc2hBY3Rpb24ocG9ydCwgZm9udHMsIHdhdGNoLCBjbGllbnQsIHF1aWV0bHksIGlucHV0RmlsZU5hbWUsIHByb2plY3REaXJlY3RvcnlOYW1lKSB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSBbXG4gICAgICAgICAgaW5kZXhPcHRpb25zT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZUhpZ2htYXJrSFRNTE9wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVIaWdobWFya0NTU09wZXJhdGlvbixcbiAgICAgICAgICBjcmVhdGVJbmRleEhUTUxPcGVyYXRpb24sXG4gICAgICAgICAgY29weUNsaWVudEZpbGVzT3BlcmF0aW9uLFxuICAgICAgICAgIGNvcHlGb250c09wZXJhdGlvbixcbiAgICAgICAgICB3YXRjaE9wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgZm9udHMsXG4gICAgICAgICAgd2F0Y2gsXG4gICAgICAgICAgY2xpZW50LFxuICAgICAgICAgIHF1aWV0bHksXG4gICAgICAgICAgaW5wdXRGaWxlTmFtZSxcbiAgICAgICAgICBwcm9qZWN0RGlyZWN0b3J5TmFtZVxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gY29tcGxldGVkLCAgLy8vXG4gICAgICAgICAgbWVzc2FnZSA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgIFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEZBSUxFRF9QVUJMSVNIX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsicHVibGlzaEFjdGlvbiIsInBvcnQiLCJmb250cyIsIndhdGNoIiwiY2xpZW50IiwicXVpZXRseSIsImlucHV0RmlsZU5hbWUiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsIm9wZXJhdGlvbnMiLCJpbmRleE9wdGlvbnNPcGVyYXRpb24iLCJjcmVhdGVIaWdobWFya0hUTUxPcGVyYXRpb24iLCJjcmVhdGVIaWdobWFya0NTU09wZXJhdGlvbiIsImNyZWF0ZUluZGV4SFRNTE9wZXJhdGlvbiIsImNvcHlDbGllbnRGaWxlc09wZXJhdGlvbiIsImNvcHlGb250c09wZXJhdGlvbiIsIndhdGNoT3BlcmF0aW9uIiwiY29udGV4dCIsImV4ZWN1dGVPcGVyYXRpb25zIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJTVUNDRVNTRlVMX1BVQkxJU0hfTUVTU0FHRSIsIkZBSUxFRF9QVUJMSVNIX01FU1NBR0UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQXdCQTs7OzREQVhHO2dFQUNJO21FQUNHO3NFQUNHO3NFQUNBO3dFQUNFO3lFQUNDO3lCQUVOO3dCQUNpQzs7Ozs7O0FBRXBELFNBQVNBLGNBQWNDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLG9CQUFvQjtJQUM1RyxJQUFNQyxhQUFhO1FBQ1hDLHFCQUFxQjtRQUNyQkMsMkJBQTJCO1FBQzNCQywwQkFBMEI7UUFDMUJDLHdCQUF3QjtRQUN4QkMsd0JBQXdCO1FBQ3hCQyxrQkFBa0I7UUFDbEJDLGNBQWM7S0FDZixFQUNEQyxVQUFVO1FBQ1JmLE1BQUFBO1FBQ0FDLE9BQUFBO1FBQ0FDLE9BQUFBO1FBQ0FDLFFBQUFBO1FBQ0FDLFNBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FDLHNCQUFBQTtJQUNGO0lBRU5VLElBQUFBLDRCQUFpQixFQUFDVCxZQUFZLFNBQUNVO1FBQzdCLElBQU1DLFVBQVVELFdBQ1ZFLFVBQVVELFVBQ0VFLG9DQUEwQixHQUN4QkMsZ0NBQXNCO1FBRTFDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2QsR0FBR0o7QUFDTCJ9