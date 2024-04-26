"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "leafNodesFromNodeList", {
    enumerable: true,
    get: function() {
        return leafNodesFromNodeList;
    }
});
var _necessary = require("necessary");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
var filter = _necessary.arrayUtilities.filter;
function leafNodesFromNodeList(nodeList) {
    var nodes = _to_consumable_array(nodeList);
    filter(nodes, function(node) {
        var childNodeList = node.childNodes, childNodes = _to_consumable_array(childNodeList), childNodesIncludesNodes = nodes.some(function(node) {
            var childNodesIncludesNode = childNodes.includes(node);
            if (childNodesIncludesNode) {
                return true;
            }
        });
        if (!childNodesIncludesNodes) {
            return true;
        }
    });
    var leafNodes = nodes; ///
    return leafNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGxlYWZOb2Rlc0Zyb21Ob2RlTGlzdChub2RlTGlzdCkge1xuICBjb25zdCBub2RlcyA9IFsgLi4ubm9kZUxpc3QgXTtcblxuICBmaWx0ZXIobm9kZXMsIChub2RlKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZE5vZGVzOiBjaGlsZE5vZGVMaXN0IH0gPSBub2RlLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbIC4uLmNoaWxkTm9kZUxpc3QgXSxcbiAgICAgICAgICBjaGlsZE5vZGVzSW5jbHVkZXNOb2RlcyA9IG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNJbmNsdWRlc05vZGUgPSBjaGlsZE5vZGVzLmluY2x1ZGVzKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlc0luY2x1ZGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghY2hpbGROb2Rlc0luY2x1ZGVzTm9kZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGVhZk5vZGVzID0gbm9kZXM7ICAvLy9cblxuICByZXR1cm4gbGVhZk5vZGVzO1xufVxuIl0sIm5hbWVzIjpbImxlYWZOb2Rlc0Zyb21Ob2RlTGlzdCIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwibm9kZUxpc3QiLCJub2RlcyIsIm5vZGUiLCJjaGlsZE5vZGVzIiwiY2hpbGROb2RlTGlzdCIsImNoaWxkTm9kZXNJbmNsdWRlc05vZGVzIiwic29tZSIsImNoaWxkTm9kZXNJbmNsdWRlc05vZGUiLCJpbmNsdWRlcyIsImxlYWZOb2RlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozt5QkFKZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFRCxTQUFTRCxzQkFBc0JHLFFBQVE7SUFDNUMsSUFBTUMsUUFBVSxxQkFBR0Q7SUFFbkJGLE9BQU9HLE9BQU8sU0FBQ0M7UUFDYixJQUFRQyxBQUFZQyxnQkFBa0JGLEtBQTlCQyxZQUNGQSxhQUFlLHFCQUFHQyxnQkFDbEJDLDBCQUEwQkosTUFBTUssSUFBSSxDQUFDLFNBQUNKO1lBQ3BDLElBQU1LLHlCQUF5QkosV0FBV0ssUUFBUSxDQUFDTjtZQUVuRCxJQUFJSyx3QkFBd0I7Z0JBQzFCLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSSxDQUFDRix5QkFBeUI7WUFDNUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFNSSxZQUFZUixPQUFRLEdBQUc7SUFFN0IsT0FBT1E7QUFDVCJ9