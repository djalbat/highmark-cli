"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createClientHTML;
    }
});
var _constants = require("../constants");
function createClientHTML(client) {
    var clientHTML = _constants.EMPTY_STRING;
    if (client) {
        clientHTML = '<script src="client.js"> </script>';
    }
    return clientHTML;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2NsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDbGllbnRIVE1MKGNsaWVudCkge1xuICBsZXQgY2xpZW50SFRNTCA9IEVNUFRZX1NUUklORztcblxuICBpZiAoY2xpZW50KSB7XG4gICAgY2xpZW50SFRNTCA9IGA8c2NyaXB0IHNyYz1cImNsaWVudC5qc1wiPiA8L3NjcmlwdD5gO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudEhUTUw7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50SFRNTCIsImNsaWVudCIsImNsaWVudEhUTUwiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7eUJBRks7QUFFZCxTQUFTQSxpQkFBaUJDLE1BQU07SUFDN0MsSUFBSUMsYUFBYUMsdUJBQVk7SUFFN0IsSUFBSUYsUUFBUTtRQUNWQyxhQUFhO0lBQ2Y7SUFFQSxPQUFPQTtBQUNUIn0=