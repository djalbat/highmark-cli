"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _sufficient = require("sufficient");
var _easy = require("easy");
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
(0, _orientation.getOrientation)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    body.mount(view);
    loadingDiv.hide();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgY3JlYXRlTWV0aG9kcyBmcm9tIFwiLi9jcmVhdGVNZXRob2RzXCI7XG5cbmltcG9ydCB7IHNldE9yaWVudGF0aW9uIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IsIExPQURJTkdfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRPcmllbnRhdGlvbiwgb25PcmllbnRhdGlvbkNoYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vcmllbnRhdGlvblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuY29uc3QgZGl2RE9NRWxlbWVudHMgPSBbIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRElWU19TRUxFQ1RPUikgXTsgIC8vL1xuXG5kaXZET01FbGVtZW50cy5mb3JFYWNoKChkaXZET01FbGVtZW50KSA9PiB7XG4gIGRpdkRPTUVsZW1lbnQucmVtb3ZlKCk7XG59KTtcblxuY29uc3Qgc2NoZWR1bGVyID0gbnVsbCxcbiAgICAgIG1vZGVsID0gbnVsbCxcbiAgICAgIHZpZXcgPVxuXG4gICAgICAgIDxWaWV3IGRpdkRPTUVsZW1lbnRzPXtkaXZET01FbGVtZW50c30gLz5cblxuICAgICAgO1xuXG5jb250cm9sbGVyLmFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgc2NoZWR1bGVyLCBtb2RlbCwgdmlldyk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgbG9hZGluZ0RpdiA9IG5ldyBFbGVtZW50KExPQURJTkdfRElWX1NFTEVDVE9SKTtcblxub25PcmllbnRhdGlvbkNoYW5nZSgob3JpZW50YXRpb24pID0+IHtcbiAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gIHZpZXcudXBkYXRlWm9vbSgpO1xufSk7XG5cbmdldE9yaWVudGF0aW9uKChvcmllbnRhdGlvbikgPT4ge1xuICBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG5cbiAgYm9keS5tb3VudCh2aWV3KTtcblxuICBsb2FkaW5nRGl2LmhpZGUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlcyIsIndpdGhTdHlsZSIsImRpdkRPTUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRElWU19TRUxFQ1RPUiIsImZvckVhY2giLCJkaXZET01FbGVtZW50IiwicmVtb3ZlIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwiVmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwibG9hZGluZ0RpdiIsIkVsZW1lbnQiLCJMT0FESU5HX0RJVl9TRUxFQ1RPUiIsIm9uT3JpZW50YXRpb25DaGFuZ2UiLCJvcmllbnRhdGlvbiIsInNldE9yaWVudGF0aW9uIiwidXBkYXRlWm9vbSIsImdldE9yaWVudGF0aW9uIiwibW91bnQiLCJoaWRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlOzBCQUVLO29CQUNHOzJEQUViO29FQUNTO3FCQUVLO3lCQUNxQjsyQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVBLGVBQWlCQyxzQkFBUyxDQUExQkQ7QUFFUkE7QUFFQSxJQUFNRSxpQkFBbUIscUJBQUdDLFNBQVNDLGdCQUFnQixDQUFDQyx3QkFBYSxJQUFNLEdBQUc7QUFFNUVILGVBQWVJLE9BQU8sQ0FBQyxTQUFDQztJQUN0QkEsY0FBY0MsTUFBTTtBQUN0QjtBQUVBLElBQU1DLFlBQVksTUFDWkMsUUFBUSxNQUNSQyxxQkFFRSxvQkFBQ0MsYUFBSTtJQUFDVixnQkFBZ0JBOztBQUk5Qlcsc0JBQVUsQ0FBQ0MsYUFBYSxDQUFDQyxzQkFBYSxFQUFFTixXQUFXQyxPQUFPQztBQUUxRCxJQUFNSyxPQUFPLElBQUlDLFVBQUksSUFDZkMsYUFBYSxJQUFJQyxhQUFPLENBQUNDLCtCQUFvQjtBQUVuREMsSUFBQUEsZ0NBQW1CLEVBQUMsU0FBQ0M7SUFDbkJDLElBQUFBLHFCQUFjLEVBQUNEO0lBRWZYLEtBQUthLFVBQVU7QUFDakI7QUFFQUMsSUFBQUEsMkJBQWMsRUFBQyxTQUFDSDtJQUNkQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmTixLQUFLVSxLQUFLLENBQUNmO0lBRVhPLFdBQVdTLElBQUk7QUFDakIifQ==