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
    let documentCSS;
    if (client) {
        documentCSS = `body > div.document {
  display: none;
}`;
    } else {
        documentCSS = `body {
  background-color: #d5d1d1;
}
    
body > div.document {
  width: fit-content;
  margin: auto;
  display: flex;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
 
body > div.document > div {
  border-bottom: 1px solid #0c0d0f;
}

body > div.document > div:last-of-type {
  border-bottom: none;
}`;
    }
    return documentCSS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50Q1NTKGNsaWVudCkge1xuICBsZXQgZG9jdW1lbnRDU1M7XG5cbiAgaWYgKGNsaWVudCkge1xuICAgIGRvY3VtZW50Q1NTID0gYGJvZHkgPiBkaXYuZG9jdW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufWA7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnRDU1MgPSBgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQxZDE7XG59XG4gICAgXG5ib2R5ID4gZGl2LmRvY3VtZW50IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbiBcbmJvZHkgPiBkaXYuZG9jdW1lbnQgPiBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBjMGQwZjtcbn1cblxuYm9keSA+IGRpdi5kb2N1bWVudCA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufWA7XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnRDU1M7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRG9jdW1lbnRDU1MiLCJjbGllbnQiLCJkb2N1bWVudENTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGtCQUFrQkMsTUFBTTtJQUM5QyxJQUFJQztJQUVKLElBQUlELFFBQVE7UUFDVkMsY0FBYyxDQUFDOztDQUVsQixDQUFDO0lBQ0EsT0FBTztRQUNMQSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JsQixDQUFDO0lBQ0E7SUFFQSxPQUFPQTtBQUNUIn0=