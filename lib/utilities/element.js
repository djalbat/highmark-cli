"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "elementsFromDOMElements", {
    enumerable: true,
    get: function() {
        return elementsFromDOMElements;
    }
});
var _constants = require("../constants");
function elementsFromDOMElements(domElements, Element) {
    var elements = domElements.map(function(domElement) {
        var element = /*#__PURE__*/ React.createElement(Element, null);
        var temporaryDOMElement = element.domElement, classNamesString = temporaryDOMElement.className, classNames = classNamesString.split(_constants.SINGLE_SPACE);
        var classList = domElement.classList;
        classNames.forEach(function(className) {
            classList.add(className);
        });
        element.domElement = domElement; ///
        domElement.__element__ = element; ///
        return element;
    });
    return elements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0lOR0xFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb21FbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gPEVsZW1lbnQgLz47XG5cbiAgICBjb25zdCB7IGRvbUVsZW1lbnQ6IHRlbXBvcmFyeURPTUVsZW1lbnQgfSA9IGVsZW1lbnQsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXNTdHJpbmcgfSA9IHRlbXBvcmFyeURPTUVsZW1lbnQsXG4gICAgICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXNTdHJpbmcuc3BsaXQoU0lOR0xFX1NQQUNFKTtcblxuICAgIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBkb21FbGVtZW50O1xuXG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcblxuICAgIGVsZW1lbnQuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJkb21FbGVtZW50cyIsIkVsZW1lbnQiLCJlbGVtZW50cyIsIm1hcCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwidGVtcG9yYXJ5RE9NRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXNTdHJpbmciLCJjbGFzc05hbWVzIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJjbGFzc0xpc3QiLCJmb3JFYWNoIiwiYWRkIiwiX19lbGVtZW50X18iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJZ0JBOzs7ZUFBQUE7Ozt5QkFGYTtBQUV0QixTQUFTQSx3QkFBd0JDLFdBQVcsRUFBRUMsT0FBTztJQUMxRCxJQUFNQyxXQUFXRixZQUFZRyxHQUFHLENBQUMsU0FBQ0M7UUFDaEMsSUFBTUMsd0JBQVUsb0JBQUNKO1FBRWpCLElBQVFHLEFBQVlFLHNCQUF3QkQsUUFBcENELFlBQ0FHLEFBQVdDLG1CQUFxQkYsb0JBQWhDQyxXQUNGRSxhQUFhRCxpQkFBaUJFLEtBQUssQ0FBQ0MsdUJBQVk7UUFFdEQsSUFBTSxBQUFFQyxZQUFjUixXQUFkUTtRQUVSSCxXQUFXSSxPQUFPLENBQUMsU0FBQ047WUFDbEJLLFVBQVVFLEdBQUcsQ0FBQ1A7UUFDaEI7UUFFQUYsUUFBUUQsVUFBVSxHQUFHQSxZQUFhLEdBQUc7UUFFckNBLFdBQVdXLFdBQVcsR0FBR1YsU0FBUyxHQUFHO1FBRXJDLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUIn0=