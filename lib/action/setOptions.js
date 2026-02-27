"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return setOptionsAction;
    }
});
const _setOptions = /*#__PURE__*/ _interop_require_default(require("../operation/setOptions"));
const _linesPerPage = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/linesPerPage"));
const _contentsDepth = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/contentsDepth"));
const _charactersPerLine = /*#__PURE__*/ _interop_require_default(require("../operation/prompt/charactersPerLine"));
const _configuration = require("../configuration");
const _operation = require("../utilities/operation");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function setOptionsAction() {
    const options = (0, _configuration.retrieveOptions)(), { linesPerPage, contentsDepth, charactersPerLine } = options, operations = [
        _contentsDepth.default,
        _linesPerPage.default,
        _charactersPerLine.default,
        _setOptions.default
    ], context = {
        linesPerPage,
        contentsDepth,
        charactersPerLine
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        const success = completed, message = success ? _messages.SUCCESSFUL_SET_OPTIONS_MESSAGE : _messages.FAILED_SET_OPTIONS_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vc2V0T3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNldE9wdGlvbnNPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9zZXRPcHRpb25zXCI7XG5pbXBvcnQgbGluZXNQZXJQYWdlUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L2xpbmVzUGVyUGFnZVwiO1xuaW1wb3J0IGNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi9wcm9tcHQvY29udGVudHNEZXB0aFwiO1xuaW1wb3J0IGNoYXJhY3RlcnNQZXJMaW5lUHJvbXB0T3BlcmF0aW9uIGZyb20gXCIuLi9vcGVyYXRpb24vcHJvbXB0L2NoYXJhY3RlcnNQZXJMaW5lXCI7XG5cbmltcG9ydCB7IHJldHJpZXZlT3B0aW9ucyB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBleGVjdXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBTVUNDRVNTRlVMX1NFVF9PUFRJT05TX01FU1NBR0UsIEZBSUxFRF9TRVRfT1BUSU9OU19NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldE9wdGlvbnNBY3Rpb24oKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSByZXRyaWV2ZU9wdGlvbnMoKSxcbiAgICAgICAgeyBsaW5lc1BlclBhZ2UsXG4gICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZSB9ID0gb3B0aW9ucyxcbiAgICAgICAgb3BlcmF0aW9ucyA9IFtcbiAgICAgICAgICBjb250ZW50c0RlcHRoUHJvbXB0T3BlcmF0aW9uLFxuICAgICAgICAgIGxpbmVzUGVyUGFnZVByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVByb21wdE9wZXJhdGlvbixcbiAgICAgICAgICBzZXRPcHRpb25zT3BlcmF0aW9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgbGluZXNQZXJQYWdlLFxuICAgICAgICAgIGNvbnRlbnRzRGVwdGgsXG4gICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgfTtcblxuICBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCAoY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGNvbXBsZXRlZCwgIC8vL1xuICAgICAgICAgIG1lc3NhZ2UgPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICAgICBTVUNDRVNTRlVMX1NFVF9PUFRJT05TX01FU1NBR0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRkFJTEVEX1NFVF9PUFRJT05TX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsic2V0T3B0aW9uc0FjdGlvbiIsIm9wdGlvbnMiLCJyZXRyaWV2ZU9wdGlvbnMiLCJsaW5lc1BlclBhZ2UiLCJjb250ZW50c0RlcHRoIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJvcGVyYXRpb25zIiwiY29udGVudHNEZXB0aFByb21wdE9wZXJhdGlvbiIsImxpbmVzUGVyUGFnZVByb21wdE9wZXJhdGlvbiIsImNoYXJhY3RlcnNQZXJMaW5lUHJvbXB0T3BlcmF0aW9uIiwic2V0T3B0aW9uc09wZXJhdGlvbiIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiU1VDQ0VTU0ZVTF9TRVRfT1BUSU9OU19NRVNTQUdFIiwiRkFJTEVEX1NFVF9PUFRJT05TX01FU1NBR0UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7O21FQVRRO3FFQUNRO3NFQUNDOzBFQUNJOytCQUViOzJCQUNFOzBCQUN5Qzs7Ozs7O0FBRTVELFNBQVNBO0lBQ3RCLE1BQU1DLFVBQVVDLElBQUFBLDhCQUFlLEtBQ3pCLEVBQUVDLFlBQVksRUFDWkMsYUFBYSxFQUNiQyxpQkFBaUIsRUFBRSxHQUFHSixTQUN4QkssYUFBYTtRQUNYQyxzQkFBNEI7UUFDNUJDLHFCQUEyQjtRQUMzQkMsMEJBQWdDO1FBQ2hDQyxtQkFBbUI7S0FDcEIsRUFDREMsVUFBVTtRQUNSUjtRQUNBQztRQUNBQztJQUNGO0lBRU5PLElBQUFBLDRCQUFpQixFQUFDTixZQUFZLENBQUNPO1FBQzdCLE1BQU1DLFVBQVVELFdBQ1ZFLFVBQVVELFVBQ0VFLHdDQUE4QixHQUM1QkMsb0NBQTBCO1FBRTlDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2QsR0FBR0o7QUFDTCJ9