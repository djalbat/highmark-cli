"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createDocumentCSS;
    }
});
function createDocumentCSS(client) {
    var documentCSS;
    if (client) {
        documentCSS = "body {\n  background-color: #d5d1d1;\n}\n    \nbody > div.document {\n  display: none;\n}";
    } else {
        documentCSS = "body {\n  background-color: #d5d1d1;\n}\n    \nbody > div.document {\n  width: fit-content;\n  margin: auto;\n  display: flex;\n  min-height: 100%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n \nbody > div.document > div {\n  border-bottom: 1px solid #0c0d0f;\n}\n\nbody > div.document > div:last-of-type {\n  border-bottom: none;\n}";
    }
    return documentCSS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50Q1NTKGNsaWVudCkge1xuICBsZXQgZG9jdW1lbnRDU1M7XG5cbiAgaWYgKGNsaWVudCkge1xuICAgIGRvY3VtZW50Q1NTID0gYGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkMWQxO1xufVxuICAgIFxuYm9keSA+IGRpdi5kb2N1bWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59YDtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudENTUyA9IGBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDFkMTtcbn1cbiAgICBcbmJvZHkgPiBkaXYuZG9jdW1lbnQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIFxuYm9keSA+IGRpdi5kb2N1bWVudCA+IGRpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGMwZDBmO1xufVxuXG5ib2R5ID4gZGl2LmRvY3VtZW50ID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59YDtcbiAgfVxuXG4gIHJldHVybiBkb2N1bWVudENTUztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudENTUyIsImNsaWVudCIsImRvY3VtZW50Q1NTIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0Esa0JBQWtCQyxNQUFNO0lBQzlDLElBQUlDO0lBRUosSUFBSUQsUUFBUTtRQUNWQyxjQUFjO0lBT2hCLE9BQU87UUFDTEEsY0FBYztJQXFCaEI7SUFFQSxPQUFPQTtBQUNUIn0=