"use strict";
import { asynchronousUtilities } from "necessary";
var whilst = asynchronousUtilities.whilst;
export function executeOperations(operations, callback, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb3BlcmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgd2hpbHN0IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlT3BlcmF0aW9ucyhvcGVyYXRpb25zLCBjYWxsYmFjaywgY29udGV4dCkge1xuICBjb25zdCBjb21wbGV0ZWQgPSB0cnVlO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIG9wZXJhdGlvbnMsXG4gICAgY29tcGxldGVkXG4gIH0pO1xuXG4gIHdoaWxzdChleGVjdXRlT3BlcmF0aW9uLCAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IGNvbnRleHQ7XG5cbiAgICBkZWxldGUgY29udGV4dC5vcGVyYXRpb25zO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuY29tcGxldGVkO1xuXG4gICAgY2FsbGJhY2soY29tcGxldGVkKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVPcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgY29uc3QgeyBvcGVyYXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICBvcGVyYXRpb25zTGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG9wZXJhdGlvbnNMZW5ndGggLSAxO1xuXG4gIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgIGRvbmUoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xuXG4gIG9wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gcHJvY2VlZCgpIHtcbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgY29tcGxldGVkXG4gICAgfSk7XG5cbiAgICBkb25lKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJ3aGlsc3QiLCJleGVjdXRlT3BlcmF0aW9ucyIsIm9wZXJhdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJleGVjdXRlT3BlcmF0aW9uIiwibmV4dCIsImRvbmUiLCJpbmRleCIsIm9wZXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJvcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsU0FBU0EscUJBQXFCLFFBQVEsWUFBWTtBQUVsRCxJQUFNLEFBQUVDLFNBQVdELHNCQUFYQztBQUVSLE9BQU8sU0FBU0Msa0JBQWtCQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUM3RCxJQUFNQyxZQUFZO0lBRWxCQyxPQUFPQyxNQUFNLENBQUNILFNBQVM7UUFDckJGLFlBQUFBO1FBQ0FHLFdBQUFBO0lBQ0Y7SUFFQUwsT0FBT1Esa0JBQWtCO1FBQ3ZCLElBQU0sQUFBRUgsWUFBY0QsUUFBZEM7UUFFUixPQUFPRCxRQUFRRixVQUFVO1FBRXpCLE9BQU9FLFFBQVFDLFNBQVM7UUFFeEJGLFNBQVNFO0lBQ1gsR0FBR0Q7QUFDTDtBQUVBLFNBQVNJLGlCQUFpQkMsSUFBSSxFQUFFQyxJQUFJLEVBQUVOLE9BQU8sRUFBRU8sS0FBSztJQUNsRCxJQUFNLEFBQUVULGFBQWVFLFFBQWZGLFlBQ0ZVLG1CQUFtQlYsV0FBV1csTUFBTSxFQUNwQ0MsWUFBWUYsbUJBQW1CO0lBRXJDLElBQUlELFFBQVFHLFdBQVc7UUFDckJKO1FBRUE7SUFDRjtJQUVBLElBQU1LLFlBQVliLFVBQVUsQ0FBQ1MsTUFBTTtJQUVuQ0ksVUFBVUMsU0FBU0MsT0FBT2I7SUFFMUIsU0FBU1k7UUFDUFA7SUFDRjtJQUVBLFNBQVNRO1FBQ1AsSUFBTVosWUFBWTtRQUVsQkMsT0FBT0MsTUFBTSxDQUFDSCxTQUFTO1lBQ3JCQyxXQUFBQTtRQUNGO1FBRUFLO0lBQ0Y7QUFDRiJ9