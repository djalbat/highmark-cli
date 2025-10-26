"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "executeOperations", {
    enumerable: true,
    get: function() {
        return executeOperations;
    }
});
var _necessary = require("necessary");
var whilst = _necessary.asynchronousUtilities.whilst;
function executeOperations(operations, callback, context) {
    var completed = true;
    Object.assign(context, {
        operations: operations,
        completed: completed
    });
    whilst(executeOperation, function() {
        var completed = context.completed;
        delete context.operations;
        delete context.completed;
        callback(completed);
    }, context);
}
function executeOperation(next, done, context, index) {
    var operations = context.operations, operationsLength = operations.length, lastIndex = operationsLength - 1;
    if (index > lastIndex) {
        done();
        return;
    }
    var operation = operations[index];
    operation(proceed, abort, context);
    function proceed() {
        next();
    }
    function abort() {
        var completed = false;
        Object.assign(context, {
            completed: completed
        });
        done();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb3BlcmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgd2hpbHN0IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBjb25zdCBjb21wbGV0ZWQgPSB0cnVlO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIG9wZXJhdGlvbnMsXG4gICAgY29tcGxldGVkXG4gIH0pO1xuXG4gIHdoaWxzdChleGVjdXRlT3BlcmF0aW9uLCAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IGNvbnRleHQ7XG5cbiAgICBkZWxldGUgY29udGV4dC5vcGVyYXRpb25zO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuY29tcGxldGVkO1xuXG4gICAgY2FsbGJhY2soY29tcGxldGVkKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVPcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICBvcGVyYXRpb25zTGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG9wZXJhdGlvbnNMZW5ndGggLSAxO1xuXG4gIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgIGRvbmUoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xuXG4gIG9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcHJvY2VlZCgpIHtcbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgY29tcGxldGVkXG4gICAgfSk7XG5cbiAgICBkb25lKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJleGVjdXRlT3BlcmF0aW9ucyIsIndoaWxzdCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIm9wZXJhdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJleGVjdXRlT3BlcmF0aW9uIiwibmV4dCIsImRvbmUiLCJpbmRleCIsIm9wZXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJvcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1nQkE7OztlQUFBQTs7O3lCQUpzQjtBQUV0QyxJQUFNLEFBQUVDLFNBQVdDLGdDQUFxQixDQUFoQ0Q7QUFFRCxTQUFTRCxrQkFBa0JHLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxPQUFPO0lBQzdELElBQU1DLFlBQVk7SUFFbEJDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztRQUNyQkYsWUFBQUE7UUFDQUcsV0FBQUE7SUFDRjtJQUVBTCxPQUFPUSxrQkFBa0I7UUFDdkIsSUFBTSxBQUFFSCxZQUFjRCxRQUFkQztRQUVSLE9BQU9ELFFBQVFGLFVBQVU7UUFFekIsT0FBT0UsUUFBUUMsU0FBUztRQUV4QkYsU0FBU0U7SUFDWCxHQUFHRDtBQUNMO0FBRUEsU0FBU0ksaUJBQWlCQyxJQUFJLEVBQUVDLElBQUksRUFBRU4sT0FBTyxFQUFFTyxLQUFLO0lBQ2xELElBQU0sQUFBRVQsYUFBZUUsUUFBZkYsWUFDRlUsbUJBQW1CVixXQUFXVyxNQUFNLEVBQ3BDQyxZQUFZRixtQkFBbUI7SUFFckMsSUFBSUQsUUFBUUcsV0FBVztRQUNyQko7UUFFQTtJQUNGO0lBRUEsSUFBTUssWUFBWWIsVUFBVSxDQUFDUyxNQUFNO0lBRW5DSSxVQUFVQyxTQUFTQyxPQUFPYjtJQUUxQixTQUFTWTtRQUNQUDtJQUNGO0lBRUEsU0FBU1E7UUFDUCxJQUFNWixZQUFZO1FBRWxCQyxPQUFPQyxNQUFNLENBQUNILFNBQVM7WUFDckJDLFdBQUFBO1FBQ0Y7UUFFQUs7SUFDRjtBQUNGIn0=