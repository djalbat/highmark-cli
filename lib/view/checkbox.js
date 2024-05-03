"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _styles = require("../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  cursor: pointer;  \n  display: block;\n  outline: none;\n  position: relative;\n  appearance: none;\n  \n  ::before {\n    width: ",
        ";\n    height: ",
        ";\n    border: ",
        " solid ",
        ';\n    content: " ";\n    position: absolute;\n    border-radius: ',
        ";\n    background-color: ",
        ";\n  }\n  \n  ::after {\n    top: 0;\n    left: 0;\n    width: ",
        ";\n    height: ",
        ';\n    content: " ";\n    position: absolute;\n    background-size: 0;\n    background-image: url("checkmark.svg");\n  }\n\n  :checked::after {\n    background-size: 100%;\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _default = (0, _easywithstyle.default)(_easy.Checkbox)(_templateObject(), _styles.checkboxSize, _styles.checkboxSize, _styles.checkboxSize, _styles.checkboxSize, _styles.borderWidth, _styles.borderColour, _styles.borderRadius, _styles.checkboxBackgroundColour, _styles.checkboxSize, _styles.checkboxSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGJvcmRlcldpZHRoLCBib3JkZXJSYWRpdXMsIGJvcmRlckNvbG91ciwgY2hlY2tib3hTaXplLCBjaGVja2JveEJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDaGVja2JveClgXG5cbiAgd2lkdGg6ICR7Y2hlY2tib3hTaXplfTtcbiAgaGVpZ2h0OiAke2NoZWNrYm94U2l6ZX07XG4gIGN1cnNvcjogcG9pbnRlcjsgIFxuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBcbiAgOjpiZWZvcmUge1xuICAgIHdpZHRoOiAke2NoZWNrYm94U2l6ZX07XG4gICAgaGVpZ2h0OiAke2NoZWNrYm94U2l6ZX07XG4gICAgYm9yZGVyOiAke2JvcmRlcldpZHRofSBzb2xpZCAke2JvcmRlckNvbG91cn07XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7Ym9yZGVyUmFkaXVzfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NoZWNrYm94QmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgXG4gIDo6YWZ0ZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAke2NoZWNrYm94U2l6ZX07XG4gICAgaGVpZ2h0OiAke2NoZWNrYm94U2l6ZX07XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJjaGVja21hcmsuc3ZnXCIpO1xuICB9XG5cbiAgOmNoZWNrZWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkNoZWNrYm94IiwiY2hlY2tib3hTaXplIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvdXIiLCJib3JkZXJSYWRpdXMiLCJjaGVja2JveEJhY2tncm91bmRDb2xvdXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O29FQU5zQjtvQkFFRztzQkFFdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhHLFdBQWVBLElBQUFBLHNCQUFTLEVBQUNDLGNBQVEscUJBRXRCQyxvQkFBWSxFQUNYQSxvQkFBWSxFQVFYQSxvQkFBWSxFQUNYQSxvQkFBWSxFQUNaQyxtQkFBVyxFQUFVQyxvQkFBWSxFQUcxQkMsb0JBQVksRUFDVEMsZ0NBQXdCLEVBTW5DSixvQkFBWSxFQUNYQSxvQkFBWSJ9