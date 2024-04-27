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
var _constants = require("../constants");
function elementsFromDOMElements(domElements, Element) {
    var elements = domElements.map(function(domElement) {
        var element = elementFromDOMElement(domElement, Element);
        return element;
    });
    return elements;
}
function elementFromDOMElement(domElement, Element) {
    var element = Element(); ///
    var temporaryDOMElement = element.domElement, classNamesString = temporaryDOMElement.className, classNames = classNamesString.split(_constants.SINGLE_SPACE);
    var classList = domElement.classList, childNodes = temporaryDOMElement.childNodes;
    childNodes.forEach(function(childNode) {
        domElement.appendChild(childNode);
    });
    classNames.forEach(function(className) {
        classList.add(className);
    });
    element.domElement = domElement; ///
    domElement.__element__ = element; ///
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0lOR0xFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb21FbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBFbGVtZW50KCk7ICAvLy9cblxuICBjb25zdCB7IGRvbUVsZW1lbnQ6IHRlbXBvcmFyeURPTUVsZW1lbnQgfSA9IGVsZW1lbnQsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzU3RyaW5nIH0gPSB0ZW1wb3JhcnlET01FbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lc1N0cmluZy5zcGxpdChTSU5HTEVfU1BBQ0UpO1xuXG4gIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBkb21FbGVtZW50LFxuICAgICAgICB7IGNoaWxkTm9kZXMgfSA9IHRlbXBvcmFyeURPTUVsZW1lbnQ7XG5cbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBkb21FbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gIH0pO1xuXG4gIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9KTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImVsZW1lbnRGcm9tRE9NRWxlbWVudCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudHMiLCJFbGVtZW50IiwiZWxlbWVudHMiLCJtYXAiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsInRlbXBvcmFyeURPTUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzU3RyaW5nIiwiY2xhc3NOYW1lcyIsInNwbGl0IiwiU0lOR0xFX1NQQUNFIiwiY2xhc3NMaXN0IiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJhcHBlbmRDaGlsZCIsImFkZCIsIl9fZWxlbWVudF9fIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2dCQSxxQkFBcUI7ZUFBckJBOztJQVZBQyx1QkFBdUI7ZUFBdkJBOzs7eUJBRmE7QUFFdEIsU0FBU0Esd0JBQXdCQyxXQUFXLEVBQUVDLE9BQU87SUFDMUQsSUFBTUMsV0FBV0YsWUFBWUcsR0FBRyxDQUFDLFNBQUNDO1FBQ2hDLElBQU1DLFVBQVVQLHNCQUFzQk0sWUFBWUg7UUFFbEQsT0FBT0k7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTSixzQkFBc0JNLFVBQVUsRUFBRUgsT0FBTztJQUN2RCxJQUFNSSxVQUFVSixXQUFZLEdBQUc7SUFFL0IsSUFBUUcsQUFBWUUsc0JBQXdCRCxRQUFwQ0QsWUFDQUcsQUFBV0MsbUJBQXFCRixvQkFBaENDLFdBQ0ZFLGFBQWFELGlCQUFpQkUsS0FBSyxDQUFDQyx1QkFBWTtJQUV0RCxJQUFNLEFBQUVDLFlBQWNSLFdBQWRRLFdBQ0YsQUFBRUMsYUFBZVAsb0JBQWZPO0lBRVJBLFdBQVdDLE9BQU8sQ0FBQyxTQUFDQztRQUNsQlgsV0FBV1ksV0FBVyxDQUFDRDtJQUN6QjtJQUVBTixXQUFXSyxPQUFPLENBQUMsU0FBQ1A7UUFDbEJLLFVBQVVLLEdBQUcsQ0FBQ1Y7SUFDaEI7SUFFQUYsUUFBUUQsVUFBVSxHQUFHQSxZQUFhLEdBQUc7SUFFckNBLFdBQVdjLFdBQVcsR0FBR2IsU0FBUyxHQUFHO0lBRXJDLE9BQU9BO0FBQ1QifQ==