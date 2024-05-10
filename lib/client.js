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
var renderStyles = _easywithstyle.default.renderStyles, onFragmentChange = fragment.onFragmentChange;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgY3JlYXRlTWV0aG9kcyBmcm9tIFwiLi9jcmVhdGVNZXRob2RzXCI7XG5cbmltcG9ydCB7IHNldE9yaWVudGF0aW9uIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IsIExPQURJTkdfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRPcmllbnRhdGlvbiwgb25PcmllbnRhdGlvbkNoYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vcmllbnRhdGlvblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlLFxuICAgICAgeyBvbkZyYWdtZW50Q2hhbmdlIH0gPSBmcmFnbWVudDtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IGRpdkRPTUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVlNfU0VMRUNUT1IpIF07ICAvLy9cblxuZGl2RE9NRWxlbWVudHMuZm9yRWFjaCgoZGl2RE9NRWxlbWVudCkgPT4ge1xuICBkaXZET01FbGVtZW50LnJlbW92ZSgpO1xufSk7XG5cbmNvbnN0IHNjaGVkdWxlciA9IG51bGwsXG4gICAgICBtb2RlbCA9IG51bGwsXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8VmlldyBkaXZET01FbGVtZW50cz17ZGl2RE9NRWxlbWVudHN9IC8+XG5cbiAgICAgIDtcblxuY29udHJvbGxlci5hc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGxvYWRpbmdEaXYgPSBuZXcgRWxlbWVudChMT0FESU5HX0RJVl9TRUxFQ1RPUik7XG5cbm9uT3JpZW50YXRpb25DaGFuZ2UoKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICB2aWV3LnVwZGF0ZVpvb20oKTtcbn0pO1xuXG5cblxuZ2V0T3JpZW50YXRpb24oKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGxvYWRpbmdEaXYuaGlkZSgpO1xufSk7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwib25GcmFnbWVudENoYW5nZSIsImZyYWdtZW50IiwiZGl2RE9NRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJESVZTX1NFTEVDVE9SIiwiZm9yRWFjaCIsImRpdkRPTUVsZW1lbnQiLCJyZW1vdmUiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJWaWV3IiwiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwiYm9keSIsIkJvZHkiLCJsb2FkaW5nRGl2IiwiRWxlbWVudCIsIkxPQURJTkdfRElWX1NFTEVDVE9SIiwib25PcmllbnRhdGlvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic2V0T3JpZW50YXRpb24iLCJ1cGRhdGVab29tIiwiZ2V0T3JpZW50YXRpb24iLCJtb3VudCIsImhpZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7MEJBRUs7b0JBQ0c7MkRBRWI7b0VBQ1M7cUJBRUs7eUJBQ3FCOzJCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUEsZUFBaUJDLHNCQUFTLENBQTFCRCxjQUNGLEFBQUVFLG1CQUFxQkMsU0FBckJEO0FBRVJGO0FBRUEsSUFBTUksaUJBQW1CLHFCQUFHQyxTQUFTQyxnQkFBZ0IsQ0FBQ0Msd0JBQWEsSUFBTSxHQUFHO0FBRTVFSCxlQUFlSSxPQUFPLENBQUMsU0FBQ0M7SUFDdEJBLGNBQWNDLE1BQU07QUFDdEI7QUFFQSxJQUFNQyxZQUFZLE1BQ1pDLFFBQVEsTUFDUkMscUJBRUUsb0JBQUNDLGFBQUk7SUFBQ1YsZ0JBQWdCQTs7QUFJOUJXLHNCQUFVLENBQUNDLGFBQWEsQ0FBQ0Msc0JBQWEsRUFBRU4sV0FBV0MsT0FBT0M7QUFFMUQsSUFBTUssT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLGFBQWEsSUFBSUMsYUFBTyxDQUFDQywrQkFBb0I7QUFFbkRDLElBQUFBLGdDQUFtQixFQUFDLFNBQUNDO0lBQ25CQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmWCxLQUFLYSxVQUFVO0FBQ2pCO0FBSUFDLElBQUFBLDJCQUFjLEVBQUMsU0FBQ0g7SUFDZEMsSUFBQUEscUJBQWMsRUFBQ0Q7SUFFZk4sS0FBS1UsS0FBSyxDQUFDZjtJQUVYTyxXQUFXUyxJQUFJO0FBQ2pCIn0=