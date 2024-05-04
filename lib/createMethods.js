"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createMethods;
    }
});
function createMethods(scheduler, model, view) {
    function openMenu() {
        view.openMenu();
    }
    function closeMenu() {
        view.closeMenu();
    }
    function invertColours() {
        view.invertColours();
    }
    function revertColours() {
        view.revertColours();
    }
    function increaseFondSize() {
        view.increaseFontSize();
    }
    function decreaseFontSize() {
        view.decreaseFontSize();
    }
    function restoreNativeGestures() {
        view.restoreNativeGestures();
    }
    function suppressNativeGestures() {
        view.suppressNativeGestures();
    }
    return {
        openMenu: openMenu,
        closeMenu: closeMenu,
        invertColours: invertColours,
        revertColours: revertColours,
        increaseFondSize: increaseFondSize,
        decreaseFontSize: decreaseFontSize,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZlcnRDb2xvdXJzKCkge1xuICAgIHZpZXcuaW52ZXJ0Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICB2aWV3LnJldmVydENvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlYXNlRm9uZFNpemUoKSB7XG4gICAgdmlldy5pbmNyZWFzZUZvbnRTaXplKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNyZWFzZUZvbnRTaXplKCkge1xuICAgIHZpZXcuZGVjcmVhc2VGb250U2l6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHZpZXcucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHZpZXcuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51LFxuICAgIGludmVydENvbG91cnMsXG4gICAgcmV2ZXJ0Q29sb3VycyxcbiAgICBpbmNyZWFzZUZvbmRTaXplLFxuICAgIGRlY3JlYXNlRm9udFNpemUsXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXNcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwiaW52ZXJ0Q29sb3VycyIsInJldmVydENvbG91cnMiLCJpbmNyZWFzZUZvbmRTaXplIiwiaW5jcmVhc2VGb250U2l6ZSIsImRlY3JlYXNlRm9udFNpemUiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQSCxLQUFLRyxhQUFhO0lBQ3BCO0lBRUEsU0FBU0M7UUFDUEosS0FBS0ksYUFBYTtJQUNwQjtJQUVBLFNBQVNDO1FBQ1BMLEtBQUtNLGdCQUFnQjtJQUN2QjtJQUVBLFNBQVNDO1FBQ1BQLEtBQUtPLGdCQUFnQjtJQUN2QjtJQUVBLFNBQVNDO1FBQ1BSLEtBQUtRLHFCQUFxQjtJQUM1QjtJQUVBLFNBQVNDO1FBQ1BULEtBQUtTLHNCQUFzQjtJQUM3QjtJQUVBLE9BQVE7UUFDTlIsVUFBQUE7UUFDQUMsV0FBQUE7UUFDQUMsZUFBQUE7UUFDQUMsZUFBQUE7UUFDQUMsa0JBQUFBO1FBQ0FFLGtCQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUMsd0JBQUFBO0lBQ0Y7QUFDRiJ9