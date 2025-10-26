"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return copyClientFilesOperation;
    }
});
var _highmarkclient = require("highmark-client");
function copyClientFilesOperation(proceed, abort, context) {
    var client = context.client;
    if (client) {
        var projectDirectoryName = context.projectDirectoryName, targetDirectoryPath = projectDirectoryName; ///
        (0, _highmarkclient.copyFiles)(targetDirectoryPath);
    }
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY29weUNsaWVudEZpbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb3B5RmlsZXMgYXMgY29weUNsaWVudEZpbGVzIH0gZnJvbSBcImhpZ2htYXJrLWNsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3B5Q2xpZW50RmlsZXNPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjbGllbnQgfSA9IGNvbnRleHQ7XG5cbiAgaWYgKGNsaWVudCkge1xuICAgIGNvbnN0IHsgcHJvamVjdERpcmVjdG9yeU5hbWUgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0RGlyZWN0b3J5UGF0aCA9IHByb2plY3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgIGNvcHlDbGllbnRGaWxlcyh0YXJnZXREaXJlY3RvcnlQYXRoKTtcbiAgfVxuXG4gIHByb2NlZWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJjb3B5Q2xpZW50RmlsZXNPcGVyYXRpb24iLCJwcm9jZWVkIiwiYWJvcnQiLCJjb250ZXh0IiwiY2xpZW50IiwicHJvamVjdERpcmVjdG9yeU5hbWUiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwiY29weUNsaWVudEZpbGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzhCQUZxQjtBQUU5QixTQUFTQSx5QkFBeUJDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3RFLElBQU0sQUFBRUMsU0FBV0QsUUFBWEM7SUFFUixJQUFJQSxRQUFRO1FBQ1YsSUFBTSxBQUFFQyx1QkFBeUJGLFFBQXpCRSxzQkFDRkMsc0JBQXNCRCxzQkFBc0IsR0FBRztRQUVyREUsSUFBQUEseUJBQWUsRUFBQ0Q7SUFDbEI7SUFFQUw7QUFDRiJ9