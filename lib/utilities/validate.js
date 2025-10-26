"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get validateCharactersPerLine () {
        return validateCharactersPerLine;
    },
    get validateContentsDepth () {
        return validateContentsDepth;
    },
    get validateLinesPerPage () {
        return validateLinesPerPage;
    }
});
function validateLinesPerPage(linesPerPage) {
    return /^\d*$/.test(linesPerPage);
}
function validateContentsDepth(contentsDepth) {
    return /^1|2|3|4$/.test(contentsDepth);
}
function validateCharactersPerLine(charactersPerLine) {
    return /^\d+$/.test(charactersPerLine);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUxpbmVzUGVyUGFnZShsaW5lc1BlclBhZ2UpIHsgcmV0dXJuIC9eXFxkKiQvLnRlc3QobGluZXNQZXJQYWdlKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb250ZW50c0RlcHRoKGNvbnRlbnRzRGVwdGgpIHsgcmV0dXJuIC9eMXwyfDN8NCQvLnRlc3QoY29udGVudHNEZXB0aCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2hhcmFjdGVyc1BlckxpbmUoY2hhcmFjdGVyc1BlckxpbmUpIHsgcmV0dXJuIC9eXFxkKyQvLnRlc3QoY2hhcmFjdGVyc1BlckxpbmUpOyB9XG4iXSwibmFtZXMiOlsidmFsaWRhdGVDaGFyYWN0ZXJzUGVyTGluZSIsInZhbGlkYXRlQ29udGVudHNEZXB0aCIsInZhbGlkYXRlTGluZXNQZXJQYWdlIiwibGluZXNQZXJQYWdlIiwidGVzdCIsImNvbnRlbnRzRGVwdGgiLCJjaGFyYWN0ZXJzUGVyTGluZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBTWdCQTtlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBRkFDO2VBQUFBOzs7QUFBVCxTQUFTQSxxQkFBcUJDLFlBQVk7SUFBSSxPQUFPLFFBQVFDLElBQUksQ0FBQ0Q7QUFBZTtBQUVqRixTQUFTRixzQkFBc0JJLGFBQWE7SUFBSSxPQUFPLFlBQVlELElBQUksQ0FBQ0M7QUFBZ0I7QUFFeEYsU0FBU0wsMEJBQTBCTSxpQkFBaUI7SUFBSSxPQUFPLFFBQVFGLElBQUksQ0FBQ0U7QUFBb0IifQ==