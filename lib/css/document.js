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
        documentCSS = "body > div.document {\n  display: none;\n}";
    } else {
        documentCSS = "body {\n  background-color: #d5d1d1;\n}\n    \nbody > div.document {\n  width: fit-content;\n  display: flex;\n  row-gap: 40px;\n  padding: 80px;\n  min-height: 100%;\n  overflow-x: none;\n  padding-top: 40px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n} ";
    }
    return documentCSS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50Q1NTKGNsaWVudCkge1xuICBsZXQgZG9jdW1lbnRDU1M7XG5cbiAgaWYgKGNsaWVudCkge1xuICAgIGRvY3VtZW50Q1NTID0gYGJvZHkgPiBkaXYuZG9jdW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufWA7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnRDU1MgPSBgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQxZDE7XG59XG4gICAgXG5ib2R5ID4gZGl2LmRvY3VtZW50IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICByb3ctZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiA4MHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBub25lO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufSBgO1xuICB9XG5cbiAgcmV0dXJuIGRvY3VtZW50Q1NTO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZURvY3VtZW50Q1NTIiwiY2xpZW50IiwiZG9jdW1lbnRDU1MiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSxrQkFBa0JDLE1BQU07SUFDOUMsSUFBSUM7SUFFSixJQUFJRCxRQUFRO1FBQ1ZDLGNBQWM7SUFHaEIsT0FBTztRQUNMQSxjQUFjO0lBZ0JoQjtJQUVBLE9BQU9BO0FBQ1QifQ==