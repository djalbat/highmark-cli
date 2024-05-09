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
    elementFromDOMElement: function() {
        return elementFromDOMElement;
    },
    elementsFromDOMElements: function() {
        return elementsFromDOMElements;
    }
});
function elementsFromDOMElements(domElements, Element) {
    var elements = domElements.map(function(domElement) {
        var element = elementFromDOMElement(domElement, Element);
        return element;
    });
    return elements;
}
function elementFromDOMElement(domElement, Element) {
    var element = /*#__PURE__*/ React.createElement(Element, null);
    element.domElement = domElement; ///
    domElement.__element__ = element; ///
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzLCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9tRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgRWxlbWVudCkge1xuICBjb25zdCBlbGVtZW50ID0gPEVsZW1lbnQvPjtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImVsZW1lbnRGcm9tRE9NRWxlbWVudCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudHMiLCJFbGVtZW50IiwiZWxlbWVudHMiLCJtYXAiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsIl9fZWxlbWVudF9fIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBWWdCQSxxQkFBcUI7ZUFBckJBOztJQVZBQyx1QkFBdUI7ZUFBdkJBOzs7QUFBVCxTQUFTQSx3QkFBd0JDLFdBQVcsRUFBRUMsT0FBTztJQUMxRCxJQUFNQyxXQUFXRixZQUFZRyxHQUFHLENBQUMsU0FBQ0M7UUFDaEMsSUFBTUMsVUFBVVAsc0JBQXNCTSxZQUFZSDtRQUVsRCxPQUFPSTtJQUNUO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNKLHNCQUFzQk0sVUFBVSxFQUFFSCxPQUFPO0lBQ3ZELElBQU1JLHdCQUFVLG9CQUFDSjtJQUVqQkksUUFBUUQsVUFBVSxHQUFHQSxZQUFhLEdBQUc7SUFFckNBLFdBQVdFLFdBQVcsR0FBR0QsU0FBUyxHQUFHO0lBRXJDLE9BQU9BO0FBQ1QifQ==