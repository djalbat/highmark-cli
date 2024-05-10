"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _sufficient = require("sufficient");
var _easy = require("easy");
var _fragmented = require("fragmented");
var _view = /*#__PURE__*/ _interop_require_default(require("./view"));
var _createMethods = /*#__PURE__*/ _interop_require_default(require("./createMethods"));
var _state = require("./state");
var _selectors = require("./selectors");
var _orientation = require("./utilities/orientation");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var renderStyles = _easywithstyle.default.renderStyles;
renderStyles();
var divDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.DIVS_SELECTOR)); ///
divDOMElements.forEach(function(divDOMElement) {
    divDOMElement.remove();
});
var scheduler = null, model = null, view = /*#__PURE__*/ React.createElement(_view.default, {
    divDOMElements: divDOMElements
});
_sufficient.controller.assignMethods(_createMethods.default, scheduler, model, view);
var body = new _easy.Body(), loadingDiv = new _easy.Element(_selectors.LOADING_DIV_SELECTOR);
(0, _orientation.onOrientationChange)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    view.updateZoom();
});
(0, _fragmented.onFragmentChange)(function(event, fragment) {});
(0, _orientation.getOrientation)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    body.mount(view);
    loadingDiv.hide();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgb25GcmFnbWVudENoYW5nZSB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL2NyZWF0ZU1ldGhvZHNcIjtcblxuaW1wb3J0IHsgc2V0T3JpZW50YXRpb24gfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgRElWU19TRUxFQ1RPUiwgTE9BRElOR19ESVZfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IGdldE9yaWVudGF0aW9uLCBvbk9yaWVudGF0aW9uQ2hhbmdlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29yaWVudGF0aW9uXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBkaXZET01FbGVtZW50cyA9IFsgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChESVZTX1NFTEVDVE9SKSBdOyAgLy8vXG5cbmRpdkRPTUVsZW1lbnRzLmZvckVhY2goKGRpdkRPTUVsZW1lbnQpID0+IHtcbiAgZGl2RE9NRWxlbWVudC5yZW1vdmUoKTtcbn0pO1xuXG5jb25zdCBzY2hlZHVsZXIgPSBudWxsLFxuICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgdmlldyA9XG5cbiAgICAgICAgPFZpZXcgZGl2RE9NRWxlbWVudHM9e2RpdkRPTUVsZW1lbnRzfSAvPlxuXG4gICAgICA7XG5cbmNvbnRyb2xsZXIuYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBsb2FkaW5nRGl2ID0gbmV3IEVsZW1lbnQoTE9BRElOR19ESVZfU0VMRUNUT1IpO1xuXG5vbk9yaWVudGF0aW9uQ2hhbmdlKChvcmllbnRhdGlvbikgPT4ge1xuICBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG5cbiAgdmlldy51cGRhdGVab29tKCk7XG59KTtcblxub25GcmFnbWVudENoYW5nZSgoZXZlbnQsIGZyYWdtZW50KSA9PiB7XG5cbn0pO1xuXG5nZXRPcmllbnRhdGlvbigob3JpZW50YXRpb24pID0+IHtcbiAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgbG9hZGluZ0Rpdi5oaWRlKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJkaXZET01FbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkRJVlNfU0VMRUNUT1IiLCJmb3JFYWNoIiwiZGl2RE9NRWxlbWVudCIsInJlbW92ZSIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIlZpZXciLCJjb250cm9sbGVyIiwiYXNzaWduTWV0aG9kcyIsImNyZWF0ZU1ldGhvZHMiLCJib2R5IiwiQm9keSIsImxvYWRpbmdEaXYiLCJFbGVtZW50IiwiTE9BRElOR19ESVZfU0VMRUNUT1IiLCJvbk9yaWVudGF0aW9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJzZXRPcmllbnRhdGlvbiIsInVwZGF0ZVpvb20iLCJvbkZyYWdtZW50Q2hhbmdlIiwiZXZlbnQiLCJmcmFnbWVudCIsImdldE9yaWVudGF0aW9uIiwibW91bnQiLCJoaWRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7MEJBRUs7b0JBQ0c7MEJBQ0c7MkRBRWhCO29FQUNTO3FCQUVLO3lCQUNxQjsyQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVBLGVBQWlCQyxzQkFBUyxDQUExQkQ7QUFFUkE7QUFFQSxJQUFNRSxpQkFBbUIscUJBQUdDLFNBQVNDLGdCQUFnQixDQUFDQyx3QkFBYSxJQUFNLEdBQUc7QUFFNUVILGVBQWVJLE9BQU8sQ0FBQyxTQUFDQztJQUN0QkEsY0FBY0MsTUFBTTtBQUN0QjtBQUVBLElBQU1DLFlBQVksTUFDWkMsUUFBUSxNQUNSQyxxQkFFRSxvQkFBQ0MsYUFBSTtJQUFDVixnQkFBZ0JBOztBQUk5Qlcsc0JBQVUsQ0FBQ0MsYUFBYSxDQUFDQyxzQkFBYSxFQUFFTixXQUFXQyxPQUFPQztBQUUxRCxJQUFNSyxPQUFPLElBQUlDLFVBQUksSUFDZkMsYUFBYSxJQUFJQyxhQUFPLENBQUNDLCtCQUFvQjtBQUVuREMsSUFBQUEsZ0NBQW1CLEVBQUMsU0FBQ0M7SUFDbkJDLElBQUFBLHFCQUFjLEVBQUNEO0lBRWZYLEtBQUthLFVBQVU7QUFDakI7QUFFQUMsSUFBQUEsNEJBQWdCLEVBQUMsU0FBQ0MsT0FBT0MsV0FFekI7QUFFQUMsSUFBQUEsMkJBQWMsRUFBQyxTQUFDTjtJQUNkQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmTixLQUFLYSxLQUFLLENBQUNsQjtJQUVYTyxXQUFXWSxJQUFJO0FBQ2pCIn0=