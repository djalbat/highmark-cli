"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return serverOperation;
    }
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _constants = require("../constants");
var _messages = require("../messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function serverOperation(proceed, abort, context) {
    var server = (0, _express.default)(); ///
    Object.assign(context, {
        server: server
    });
    var port = context.port, projectDirectoryName = context.projectDirectoryName, staticRouter = _express.default.static(projectDirectoryName);
    server.use(staticRouter);
    var listener = server.listen(port, function() {
        console.log("Server listening on port ".concat(port, "..."));
        proceed();
    });
    listener.on(_constants.ERROR, function(error) {
        var message;
        message = _messages.UNABLE_TO_START_SERVER_MESSAGE;
        console.log(message);
        message = error.message;
        console.log(message);
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBFUlJPUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFVOQUJMRV9UT19TVEFSVF9TRVJWRVJfTUVTU0FHRSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXJ2ZXJPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3Qgc2VydmVyID0gZXhwcmVzcygpOyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBzZXJ2ZXJcbiAgfSk7XG5cbiAgY29uc3QgeyBwb3J0LCBwcm9qZWN0RGlyZWN0b3J5TmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgc3RhdGljUm91dGVyID0gZXhwcmVzcy5zdGF0aWMocHJvamVjdERpcmVjdG9yeU5hbWUpO1xuXG4gIHNlcnZlci51c2Uoc3RhdGljUm91dGVyKTtcblxuICBjb25zdCBsaXN0ZW5lciA9IHNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fS4uLmApO1xuXG4gICAgcHJvY2VlZCgpO1xuICB9KTtcblxuICBsaXN0ZW5lci5vbihFUlJPUiwgKGVycm9yKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX1NUQVJUX1NFUlZFUl9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgIGFib3J0KCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInNlcnZlck9wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJzZXJ2ZXIiLCJleHByZXNzIiwiT2JqZWN0IiwiYXNzaWduIiwicG9ydCIsInByb2plY3REaXJlY3RvcnlOYW1lIiwic3RhdGljUm91dGVyIiwic3RhdGljIiwidXNlIiwibGlzdGVuZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwib24iLCJFUlJPUiIsImVycm9yIiwibWVzc2FnZSIsIlVOQUJMRV9UT19TVEFSVF9TRVJWRVJfTUVTU0FHRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozs4REFMSjt5QkFFRTt3QkFDeUI7Ozs7OztBQUVoQyxTQUFTQSxnQkFBZ0JDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzdELElBQU1DLFNBQVNDLElBQUFBLGdCQUFPLEtBQUksR0FBRztJQUU3QkMsT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCQyxRQUFBQTtJQUNGO0lBRUEsSUFBUUksT0FBK0JMLFFBQS9CSyxNQUFNQyx1QkFBeUJOLFFBQXpCTSxzQkFDUkMsZUFBZUwsZ0JBQU8sQ0FBQ00sTUFBTSxDQUFDRjtJQUVwQ0wsT0FBT1EsR0FBRyxDQUFDRjtJQUVYLElBQU1HLFdBQVdULE9BQU9VLE1BQU0sQ0FBQ04sTUFBTTtRQUNuQ08sUUFBUUMsR0FBRyxDQUFDLEFBQUMsNEJBQWdDLE9BQUxSLE1BQUs7UUFFN0NQO0lBQ0Y7SUFFQVksU0FBU0ksRUFBRSxDQUFDQyxnQkFBSyxFQUFFLFNBQUNDO1FBQ2xCLElBQUlDO1FBRUpBLFVBQVVDLHdDQUE4QjtRQUV4Q04sUUFBUUMsR0FBRyxDQUFDSTtRQUVUQSxVQUFZRCxNQUFaQztRQUVITCxRQUFRQyxHQUFHLENBQUNJO1FBRVpsQjtJQUNGO0FBQ0YifQ==