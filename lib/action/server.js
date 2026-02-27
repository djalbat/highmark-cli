"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return serverAction;
    }
});
const _watch = /*#__PURE__*/ _interop_require_default(require("../operation/watch"));
const _server = /*#__PURE__*/ _interop_require_default(require("../operation/server"));
const _operation = require("../utilities/operation");
const _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function serverAction(port, watch, quietly, projectDirectoryName) {
    const operations = [
        _server.default,
        _watch.default
    ], context = {
        port,
        watch,
        quietly,
        projectDirectoryName
    };
    (0, _operation.executeOperations)(operations, (completed)=>{
        const success = completed, message = success ? _messages.SUCCESSFUL_SERVER_MESSAGE : _messages.FAILED_SERVER_MESSAGE;
        console.log(message);
    }, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2F0Y2hPcGVyYXRpb24gZnJvbSBcIi4uL29wZXJhdGlvbi93YXRjaFwiO1xuaW1wb3J0IHNlcnZlck9wZXJhdGlvbiBmcm9tIFwiLi4vb3BlcmF0aW9uL3NlcnZlclwiO1xuXG5pbXBvcnQgeyBleGVjdXRlT3BlcmF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb3BlcmF0aW9uXCI7XG5pbXBvcnQgeyBTVUNDRVNTRlVMX1NFUlZFUl9NRVNTQUdFLCBGQUlMRURfU0VSVkVSX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VydmVyQWN0aW9uKHBvcnQsIHdhdGNoLCBxdWlldGx5LCBwcm9qZWN0RGlyZWN0b3J5TmFtZSkge1xuICBjb25zdCBvcGVyYXRpb25zID0gW1xuICAgICAgICAgIHNlcnZlck9wZXJhdGlvbixcbiAgICAgICAgICB3YXRjaE9wZXJhdGlvblxuICAgICAgICBdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgd2F0Y2gsXG4gICAgICAgICAgcXVpZXRseSxcbiAgICAgICAgICBwcm9qZWN0RGlyZWN0b3J5TmFtZVxuICAgICAgICB9O1xuXG4gIGV4ZWN1dGVPcGVyYXRpb25zKG9wZXJhdGlvbnMsIChjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gY29tcGxldGVkLCAgLy8vXG4gICAgICAgICAgbWVzc2FnZSA9IHN1Y2Nlc3MgP1xuICAgICAgICAgICAgICAgICAgICAgIFNVQ0NFU1NGVUxfU0VSVkVSX01FU1NBR0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgRkFJTEVEX1NFUlZFUl9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbInNlcnZlckFjdGlvbiIsInBvcnQiLCJ3YXRjaCIsInF1aWV0bHkiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsIm9wZXJhdGlvbnMiLCJzZXJ2ZXJPcGVyYXRpb24iLCJ3YXRjaE9wZXJhdGlvbiIsImNvbnRleHQiLCJleGVjdXRlT3BlcmF0aW9ucyIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiU1VDQ0VTU0ZVTF9TRVJWRVJfTUVTU0FHRSIsIkZBSUxFRF9TRVJWRVJfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7OERBTkc7K0RBQ0M7MkJBRU07MEJBQytCOzs7Ozs7QUFFbEQsU0FBU0EsYUFBYUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsb0JBQW9CO0lBQzdFLE1BQU1DLGFBQWE7UUFDWEMsZUFBZTtRQUNmQyxjQUFjO0tBQ2YsRUFDREMsVUFBVTtRQUNSUDtRQUNBQztRQUNBQztRQUNBQztJQUNGO0lBRU5LLElBQUFBLDRCQUFpQixFQUFDSixZQUFZLENBQUNLO1FBQzdCLE1BQU1DLFVBQVVELFdBQ1ZFLFVBQVVELFVBQ0VFLG1DQUF5QixHQUN2QkMsK0JBQXFCO1FBRXpDQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2QsR0FBR0o7QUFDTCJ9