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
var _markdownHTML = /*#__PURE__*/ _interop_require_default(require("../operation/markdownHTML"));
var _copyClientFiles = /*#__PURE__*/ _interop_require_default(require("../operation/copyClientFiles"));
var _createClientHTML = /*#__PURE__*/ _interop_require_default(require("../operation/createClientHTML"));
var _markdownStylesCSS = /*#__PURE__*/ _interop_require_default(require("../operation/markdownStylesCSS"));
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
        _markdownHTML.default,
        _markdownStylesCSS.default,
        _createClientHTML.default,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vcHVibGlzaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdhdGNoT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vd2F0Y2hcIjtcbmltcG9ydCBjb3B5Rm9udHNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jb3B5Rm9udHNcIjtcbmltcG9ydCBpbmRleE9wdGlvbnNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBtYXJrZG93bkhUTUxPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9tYXJrZG93bkhUTUxcIjtcbmltcG9ydCBjb3B5Q2xpZW50RmlsZXNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9jb3B5Q2xpZW50RmlsZXNcIjtcbmltcG9ydCBjcmVhdGVDbGllbnRIVE1MT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vY3JlYXRlQ2xpZW50SFRNTFwiO1xuaW1wb3J0IG1hcmtkb3duU3R5bGVzQ1NTT3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vbWFya2Rvd25TdHlsZXNDU1NcIjtcblxuaW1wb3J0IHsgZXhlY3V0ZU9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29wZXJhdGlvblwiO1xuaW1wb3J0IHsgU1VDQ0VTU0ZVTF9QVUJMSVNIX01FU1NBR0UsIEZBSUxFRF9QVUJMSVNIX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVibGlzaEFjdGlvbihwb3J0LCBmb250cywgd2F0Y2gsIGNsaWVudCwgcXVpZXRseSwgaW5wdXRGaWxlTmFtZSwgcHJvamVjdERpcmVjdG9yeU5hbWUpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBpbmRleE9wdGlvbnNPcGVyYXRpb24sXG4gICAgICAgICAgbWFya2Rvd25IVE1MT3BlcmF0aW9uLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVzQ1NTT3BlcmF0aW9uLFxuICAgICAgICAgIGNyZWF0ZUNsaWVudEhUTUxPcGVyYXRpb24sXG4gICAgICAgICAgY29weUNsaWVudEZpbGVzT3BlcmF0aW9uLFxuICAgICAgICAgIGNvcHlGb250c09wZXJhdGlvbixcbiAgICAgICAgICB3YXRjaE9wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgZm9udHMsXG4gICAgICAgICAgd2F0Y2gsXG4gICAgICAgICAgY2xpZW50LFxuICAgICAgICAgIHF1aWV0bHksXG4gICAgICAgICAgaW5wdXRGaWxlTmFtZSxcbiAgICAgICAgICBwcm9qZWN0RGlyZWN0b3J5TmFtZVxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gY29tcGxldGVkLCAgLy8vXG4gICAgICAgICAgbWVzc2FnZSA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgIFNVQ0NFU1NGVUxfUFVCTElTSF9NRVNTQUdFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEZBSUxFRF9QVUJMSVNIX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsicHVibGlzaEFjdGlvbiIsInBvcnQiLCJmb250cyIsIndhdGNoIiwiY2xpZW50IiwicXVpZXRseSIsImlucHV0RmlsZU5hbWUiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsIm9wZXJhdGlvbnMiLCJpbmRleE9wdGlvbnNPcGVyYXRpb24iLCJtYXJrZG93bkhUTUxPcGVyYXRpb24iLCJtYXJrZG93blN0eWxlc0NTU09wZXJhdGlvbiIsImNyZWF0ZUNsaWVudEhUTUxPcGVyYXRpb24iLCJjb3B5Q2xpZW50RmlsZXNPcGVyYXRpb24iLCJjb3B5Rm9udHNPcGVyYXRpb24iLCJ3YXRjaE9wZXJhdGlvbiIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiU1VDQ0VTU0ZVTF9QVUJMSVNIX01FU1NBR0UiLCJGQUlMRURfUFVCTElTSF9NRVNTQUdFIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUF3QkE7Ozs0REFYRztnRUFDSTttRUFDRzttRUFDQTtzRUFDRzt1RUFDQzt3RUFDQzt5QkFFTDt3QkFDaUM7Ozs7OztBQUVwRCxTQUFTQSxjQUFjQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxvQkFBb0I7SUFDNUcsSUFBTUMsYUFBYTtRQUNYQyxxQkFBcUI7UUFDckJDLHFCQUFxQjtRQUNyQkMsMEJBQTBCO1FBQzFCQyx5QkFBeUI7UUFDekJDLHdCQUF3QjtRQUN4QkMsa0JBQWtCO1FBQ2xCQyxjQUFjO0tBQ2YsRUFDREMsVUFBVTtRQUNSZixNQUFBQTtRQUNBQyxPQUFBQTtRQUNBQyxPQUFBQTtRQUNBQyxRQUFBQTtRQUNBQyxTQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxzQkFBQUE7SUFDRjtJQUVOVSxJQUFBQSw0QkFBaUIsRUFBQ1QsWUFBWSxTQUFDVTtRQUM3QixJQUFNQyxVQUFVRCxXQUNWRSxVQUFVRCxVQUNFRSxvQ0FBMEIsR0FDeEJDLGdDQUFzQjtRQUUxQ0MsUUFBUUMsR0FBRyxDQUFDSjtJQUNkLEdBQUdKO0FBQ0wifQ==