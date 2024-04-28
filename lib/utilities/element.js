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
    var element = /*#__PURE__*/ React.createElement(Element, null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0lOR0xFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb21FbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSA8RWxlbWVudC8+O1xuXG4gIGNvbnN0IHsgZG9tRWxlbWVudDogdGVtcG9yYXJ5RE9NRWxlbWVudCB9ID0gZWxlbWVudCxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXNTdHJpbmcgfSA9IHRlbXBvcmFyeURPTUVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzU3RyaW5nLnNwbGl0KFNJTkdMRV9TUEFDRSk7XG5cbiAgY29uc3QgeyBjbGFzc0xpc3QgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgIHsgY2hpbGROb2RlcyB9ID0gdGVtcG9yYXJ5RE9NRWxlbWVudDtcblxuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgfSk7XG5cbiAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICBkb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudEZyb21ET01FbGVtZW50IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJkb21FbGVtZW50cyIsIkVsZW1lbnQiLCJlbGVtZW50cyIsIm1hcCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwidGVtcG9yYXJ5RE9NRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXNTdHJpbmciLCJjbGFzc05hbWVzIiwic3BsaXQiLCJTSU5HTEVfU1BBQ0UiLCJjbGFzc0xpc3QiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImFwcGVuZENoaWxkIiwiYWRkIiwiX19lbGVtZW50X18iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLHFCQUFxQjtlQUFyQkE7O0lBVkFDLHVCQUF1QjtlQUF2QkE7Ozt5QkFGYTtBQUV0QixTQUFTQSx3QkFBd0JDLFdBQVcsRUFBRUMsT0FBTztJQUMxRCxJQUFNQyxXQUFXRixZQUFZRyxHQUFHLENBQUMsU0FBQ0M7UUFDaEMsSUFBTUMsVUFBVVAsc0JBQXNCTSxZQUFZSDtRQUVsRCxPQUFPSTtJQUNUO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNKLHNCQUFzQk0sVUFBVSxFQUFFSCxPQUFPO0lBQ3ZELElBQU1JLHdCQUFVLG9CQUFDSjtJQUVqQixJQUFRRyxBQUFZRSxzQkFBd0JELFFBQXBDRCxZQUNBRyxBQUFXQyxtQkFBcUJGLG9CQUFoQ0MsV0FDRkUsYUFBYUQsaUJBQWlCRSxLQUFLLENBQUNDLHVCQUFZO0lBRXRELElBQU0sQUFBRUMsWUFBY1IsV0FBZFEsV0FDRixBQUFFQyxhQUFlUCxvQkFBZk87SUFFUkEsV0FBV0MsT0FBTyxDQUFDLFNBQUNDO1FBQ2xCWCxXQUFXWSxXQUFXLENBQUNEO0lBQ3pCO0lBRUFOLFdBQVdLLE9BQU8sQ0FBQyxTQUFDUDtRQUNsQkssVUFBVUssR0FBRyxDQUFDVjtJQUNoQjtJQUVBRixRQUFRRCxVQUFVLEdBQUdBLFlBQWEsR0FBRztJQUVyQ0EsV0FBV2MsV0FBVyxHQUFHYixTQUFTLEdBQUc7SUFFckMsT0FBT0E7QUFDVCJ9