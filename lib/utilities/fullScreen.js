"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    exitFullScreen: function() {
        return exitFullScreen;
    },
    isFullScreen: function() {
        return isFullScreen;
    },
    requestFullScreen: function() {
        return requestFullScreen;
    }
});
function isFullScreen() {
    var fullscreenElement = document.fullscreenElement, fullScreen = fullscreenElement !== null;
    return fullScreen;
}
function exitFullScreen() {
    document.exitFullscreen();
}
function requestFullScreen(element, callback) {
    var domElement = element.getDOMElement();
    domElement.requestFullscreen().then(callback).catch(function(error) {
        alert(error);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZnVsbFNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVsbFNjcmVlbigpIHtcbiAgY29uc3QgeyBmdWxsc2NyZWVuRWxlbWVudCB9ID0gZG9jdW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW4gPShmdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIGZ1bGxTY3JlZW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpIHtcbiAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RGdWxsU2NyZWVuKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICAudGhlbihjYWxsYmFjaylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiZXhpdEZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZG9jdW1lbnQiLCJmdWxsU2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJlbGVtZW50IiwiY2FsbGJhY2siLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVNnQkEsY0FBYztlQUFkQTs7SUFQQUMsWUFBWTtlQUFaQTs7SUFXQUMsaUJBQWlCO2VBQWpCQTs7O0FBWFQsU0FBU0Q7SUFDZCxJQUFNLEFBQUVFLG9CQUFzQkMsU0FBdEJELG1CQUNGRSxhQUFhRixzQkFBc0I7SUFFekMsT0FBT0U7QUFDVDtBQUVPLFNBQVNMO0lBQ2RJLFNBQVNFLGNBQWM7QUFDekI7QUFFTyxTQUFTSixrQkFBa0JLLE9BQU8sRUFBRUMsUUFBUTtJQUNqRCxJQUFNQyxhQUFhRixRQUFRRyxhQUFhO0lBRXhDRCxXQUFXRSxpQkFBaUIsR0FDekJDLElBQUksQ0FBQ0osVUFDTEssS0FBSyxDQUFDLFNBQUNDO1FBQ05DLE1BQU1EO0lBQ1I7QUFDSiJ9