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
    var element = /*#__PURE__*/ React.createElement(Element, null), className = classNameFromElement(element);
    addClassNameToDOMElement(domElement, className);
    element.domElement = domElement; ///
    domElement.__element__ = element; ///
    return element;
}
function classNameFromElement(element) {
    var domElement = element.getDOMElement(), className = domElement.className;
    return className;
}
function addClassNameToDOMElement(domElement, className) {
    var classList = domElement.classList;
    classList.add(className);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzLCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9tRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgRWxlbWVudCkge1xuICBjb25zdCBlbGVtZW50ID1cblxuICAgICAgICAgIDxFbGVtZW50Lz5cblxuICAgICAgICAsXG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuXG4gIGFkZENsYXNzTmFtZVRvRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGFzc05hbWUpXG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gIGRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBkb21FbGVtZW50O1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzTmFtZVRvRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgeyBjbGFzc0xpc3QgfSA9IGRvbUVsZW1lbnQ7XG5cbiAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xufSJdLCJuYW1lcyI6WyJlbGVtZW50RnJvbURPTUVsZW1lbnQiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImRvbUVsZW1lbnRzIiwiRWxlbWVudCIsImVsZW1lbnRzIiwibWFwIiwiZG9tRWxlbWVudCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVGcm9tRWxlbWVudCIsImFkZENsYXNzTmFtZVRvRE9NRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZ2V0RE9NRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlnQkEscUJBQXFCO2VBQXJCQTs7SUFWQUMsdUJBQXVCO2VBQXZCQTs7O0FBQVQsU0FBU0Esd0JBQXdCQyxXQUFXLEVBQUVDLE9BQU87SUFDMUQsSUFBTUMsV0FBV0YsWUFBWUcsR0FBRyxDQUFDLFNBQUNDO1FBQ2hDLElBQU1DLFVBQVVQLHNCQUFzQk0sWUFBWUg7UUFFbEQsT0FBT0k7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTSixzQkFBc0JNLFVBQVUsRUFBRUgsT0FBTztJQUN2RCxJQUFNSSx3QkFFRSxvQkFBQ0osZ0JBR0hLLFlBQVlDLHFCQUFxQkY7SUFFdkNHLHlCQUF5QkosWUFBWUU7SUFFckNELFFBQVFELFVBQVUsR0FBR0EsWUFBYSxHQUFHO0lBRXJDQSxXQUFXSyxXQUFXLEdBQUdKLFNBQVMsR0FBRztJQUVyQyxPQUFPQTtBQUNUO0FBRUEsU0FBU0UscUJBQXFCRixPQUFPO0lBQ25DLElBQU1ELGFBQWFDLFFBQVFLLGFBQWEsSUFDbEMsQUFBRUosWUFBY0YsV0FBZEU7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU0UseUJBQXlCSixVQUFVLEVBQUVFLFNBQVM7SUFDckQsSUFBTSxBQUFFSyxZQUFjUCxXQUFkTztJQUVSQSxVQUFVQyxHQUFHLENBQUNOO0FBQ2hCIn0=