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
var extract = _necessary.arrayUtilities.extract;
function leafNodesFromNodeList(nodeList) {
    var nodes = _to_consumable_array(nodeList);
    extract(nodes, function(node) {
        var childNodeList = node.childNodes, childNodes = _to_consumable_array(childNodeList), nodesIncludeChildNode = childNodes.some(function(childNode) {
            var nodesIncludesChildNode = nodes.includes(childNode);
            if (nodesIncludesChildNode) {
                return true;
            }
        });
        if (nodesIncludeChildNode) {
            return true;
        }
    });
    var leafNodes = nodes; ///
    return leafNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWFmTm9kZXNGcm9tTm9kZUxpc3Qobm9kZUxpc3QpIHtcbiAgY29uc3Qgbm9kZXMgPSBbIC4uLm5vZGVMaXN0IF07XG5cbiAgZXh0cmFjdChub2RlcywgKG5vZGUpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkTm9kZXM6IGNoaWxkTm9kZUxpc3QgfSA9IG5vZGUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFsgLi4uY2hpbGROb2RlTGlzdCBdLFxuICAgICAgICAgIG5vZGVzSW5jbHVkZUNoaWxkTm9kZSA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2Rlc0luY2x1ZGVzQ2hpbGROb2RlID0gbm9kZXMuaW5jbHVkZXMoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVzSW5jbHVkZXNDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAobm9kZXNJbmNsdWRlQ2hpbGROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxlYWZOb2RlcyA9IG5vZGVzOyAgLy8vXG5cbiAgcmV0dXJuIGxlYWZOb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJsZWFmTm9kZXNGcm9tTm9kZUxpc3QiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlTGlzdCIsIm5vZGVzIiwibm9kZSIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVMaXN0Iiwibm9kZXNJbmNsdWRlQ2hpbGROb2RlIiwic29tZSIsImNoaWxkTm9kZSIsIm5vZGVzSW5jbHVkZXNDaGlsZE5vZGUiLCJpbmNsdWRlcyIsImxlYWZOb2RlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozt5QkFKZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFRCxTQUFTRCxzQkFBc0JHLFFBQVE7SUFDNUMsSUFBTUMsUUFBVSxxQkFBR0Q7SUFFbkJGLFFBQVFHLE9BQU8sU0FBQ0M7UUFDZCxJQUFRQyxBQUFZQyxnQkFBa0JGLEtBQTlCQyxZQUNGQSxhQUFlLHFCQUFHQyxnQkFDbEJDLHdCQUF3QkYsV0FBV0csSUFBSSxDQUFDLFNBQUNDO1lBQ3ZDLElBQU1DLHlCQUF5QlAsTUFBTVEsUUFBUSxDQUFDRjtZQUU5QyxJQUFJQyx3QkFBd0I7Z0JBQzFCLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUgsdUJBQXVCO1lBQ3pCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBTUssWUFBWVQsT0FBUSxHQUFHO0lBRTdCLE9BQU9TO0FBQ1QifQ==