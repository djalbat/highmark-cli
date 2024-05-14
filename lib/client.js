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
var _constants = require("./constants");
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
(0, _fragmented.onFragmentChange)(function(event, element, fragment1) {
    var anchorId = "".concat(fragment1);
    anchorId === _constants.EMPTY_STRING ? view.showFirstDiv() : view.scrollToAnchor(anchorId);
});
(0, _orientation.getOrientation)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    loadingDiv.hide();
    body.mount(view);
    var anchorId = "".concat(fragment);
    anchorId === _constants.EMPTY_STRING ? view.showFirstDiv() : view.scrollToAnchor(anchorId);
    view.updateZoom();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgb25GcmFnbWVudENoYW5nZSB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL2NyZWF0ZU1ldGhvZHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzZXRPcmllbnRhdGlvbiB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBESVZTX1NFTEVDVE9SLCBMT0FESU5HX0RJVl9TRUxFQ1RPUiB9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgZ2V0T3JpZW50YXRpb24sIG9uT3JpZW50YXRpb25DaGFuZ2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvb3JpZW50YXRpb25cIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IGRpdkRPTUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVlNfU0VMRUNUT1IpIF07ICAvLy9cblxuZGl2RE9NRWxlbWVudHMuZm9yRWFjaCgoZGl2RE9NRWxlbWVudCkgPT4ge1xuICBkaXZET01FbGVtZW50LnJlbW92ZSgpO1xufSk7XG5cbmNvbnN0IHNjaGVkdWxlciA9IG51bGwsXG4gICAgICBtb2RlbCA9IG51bGwsXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8VmlldyBkaXZET01FbGVtZW50cz17ZGl2RE9NRWxlbWVudHN9IC8+XG5cbiAgICAgIDtcblxuY29udHJvbGxlci5hc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGxvYWRpbmdEaXYgPSBuZXcgRWxlbWVudChMT0FESU5HX0RJVl9TRUxFQ1RPUik7XG5cbm9uT3JpZW50YXRpb25DaGFuZ2UoKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICB2aWV3LnVwZGF0ZVpvb20oKTtcbn0pO1xuXG5vbkZyYWdtZW50Q2hhbmdlKChldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpID0+IHtcbiAgY29uc3QgYW5jaG9ySWQgPSBgJHtmcmFnbWVudH1gO1xuXG4gIChhbmNob3JJZCA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgdmlldy5zaG93Rmlyc3REaXYoKSA6XG4gICAgICB2aWV3LnNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbn0pO1xuXG5nZXRPcmllbnRhdGlvbigob3JpZW50YXRpb24pID0+IHtcbiAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gIGxvYWRpbmdEaXYuaGlkZSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgY29uc3QgYW5jaG9ySWQgPSBgJHtmcmFnbWVudH1gO1xuXG4gIChhbmNob3JJZCA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgdmlldy5zaG93Rmlyc3REaXYoKSA6XG4gICAgICB2aWV3LnNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcblxuICB2aWV3LnVwZGF0ZVpvb20oKTtcbn0pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlcyIsIndpdGhTdHlsZSIsImRpdkRPTUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRElWU19TRUxFQ1RPUiIsImZvckVhY2giLCJkaXZET01FbGVtZW50IiwicmVtb3ZlIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwiVmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwibG9hZGluZ0RpdiIsIkVsZW1lbnQiLCJMT0FESU5HX0RJVl9TRUxFQ1RPUiIsIm9uT3JpZW50YXRpb25DaGFuZ2UiLCJvcmllbnRhdGlvbiIsInNldE9yaWVudGF0aW9uIiwidXBkYXRlWm9vbSIsIm9uRnJhZ21lbnRDaGFuZ2UiLCJldmVudCIsImVsZW1lbnQiLCJmcmFnbWVudCIsImFuY2hvcklkIiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJnZXRPcmllbnRhdGlvbiIsImhpZGUiLCJtb3VudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztvRUFFZTswQkFFSztvQkFDRzswQkFDRzsyREFFaEI7b0VBQ1M7eUJBRUc7cUJBQ0U7eUJBQ3FCOzJCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUEsZUFBaUJDLHNCQUFTLENBQTFCRDtBQUVSQTtBQUVBLElBQU1FLGlCQUFtQixxQkFBR0MsU0FBU0MsZ0JBQWdCLENBQUNDLHdCQUFhLElBQU0sR0FBRztBQUU1RUgsZUFBZUksT0FBTyxDQUFDLFNBQUNDO0lBQ3RCQSxjQUFjQyxNQUFNO0FBQ3RCO0FBRUEsSUFBTUMsWUFBWSxNQUNaQyxRQUFRLE1BQ1JDLHFCQUVFLG9CQUFDQyxhQUFJO0lBQUNWLGdCQUFnQkE7O0FBSTlCVyxzQkFBVSxDQUFDQyxhQUFhLENBQUNDLHNCQUFhLEVBQUVOLFdBQVdDLE9BQU9DO0FBRTFELElBQU1LLE9BQU8sSUFBSUMsVUFBSSxJQUNmQyxhQUFhLElBQUlDLGFBQU8sQ0FBQ0MsK0JBQW9CO0FBRW5EQyxJQUFBQSxnQ0FBbUIsRUFBQyxTQUFDQztJQUNuQkMsSUFBQUEscUJBQWMsRUFBQ0Q7SUFFZlgsS0FBS2EsVUFBVTtBQUNqQjtBQUVBQyxJQUFBQSw0QkFBZ0IsRUFBQyxTQUFDQyxPQUFPQyxTQUFTQztJQUNoQyxJQUFNQyxXQUFXLEFBQUMsR0FBVyxPQUFURDtJQUVuQkMsYUFBYUMsdUJBQVksR0FDeEJuQixLQUFLb0IsWUFBWSxLQUNmcEIsS0FBS3FCLGNBQWMsQ0FBQ0g7QUFDMUI7QUFFQUksSUFBQUEsMkJBQWMsRUFBQyxTQUFDWDtJQUNkQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmSixXQUFXZ0IsSUFBSTtJQUVmbEIsS0FBS21CLEtBQUssQ0FBQ3hCO0lBRVgsSUFBTWtCLFdBQVcsQUFBQyxHQUFXLE9BQVREO0lBRW5CQyxhQUFhQyx1QkFBWSxHQUN4Qm5CLEtBQUtvQixZQUFZLEtBQ2ZwQixLQUFLcUIsY0FBYyxDQUFDSDtJQUV4QmxCLEtBQUthLFVBQVU7QUFDakIifQ==