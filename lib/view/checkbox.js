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
var _style = require("../style");
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
        ";  \n  display: inline-block;\n  outline: none;\n  position: relative;\n  appearance: none;\n  vertical-align: middle;\n  \n  ::before {\n    width: ",
        ";\n    height: ",
        ';\n    border: 10px solid #eee;\n    content: " ";\n    position: absolute;\n    border-radius: 24px;\n    background-color: #000;\n  }\n  \n  ::after {\n    top: 0;\n    left: 0;\n    width: ',
        ";\n    height: ",
        ';\n    content: " ";\n    position: absolute;\n    background-size: 0;\n    background-image: url("checkmark.svg");\n  }\n\n  :checked::after {\n    background-size: 100%;\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _default = (0, _easywithstyle.default)(_easy.Checkbox)(_templateObject(), _style.checkboxSize, _style.checkboxSize, _style.checkboxSize, _style.checkboxSize, _style.checkboxSize, _style.checkboxSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGNoZWNrYm94U2l6ZSB9IGZyb20gXCIuLi9zdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ2hlY2tib3gpYFxuXG4gIHdpZHRoOiAke2NoZWNrYm94U2l6ZX07XG4gIGhlaWdodDogJHtjaGVja2JveFNpemV9OyAgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBcbiAgOjpiZWZvcmUge1xuICAgIHdpZHRoOiAke2NoZWNrYm94U2l6ZX07XG4gICAgaGVpZ2h0OiAke2NoZWNrYm94U2l6ZX07XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNlZWU7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgOjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6ICR7Y2hlY2tib3hTaXplfTtcbiAgICBoZWlnaHQ6ICR7Y2hlY2tib3hTaXplfTtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImNoZWNrbWFyay5zdmdcIik7XG4gIH1cblxuICA6Y2hlY2tlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiQ2hlY2tib3giLCJjaGVja2JveFNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7b0VBTnNCO29CQUVHO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCLFdBQWVBLElBQUFBLHNCQUFTLEVBQUNDLGNBQVEscUJBRXRCQyxtQkFBWSxFQUNYQSxtQkFBWSxFQVFYQSxtQkFBWSxFQUNYQSxtQkFBWSxFQVdiQSxtQkFBWSxFQUNYQSxtQkFBWSJ9