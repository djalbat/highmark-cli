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
    function checkRestoreNativeGesturesCheckbox(checked) {
        view.checkRestoreNativeGesturesCheckbox(checked);
    }
    return {
        openMenu: openMenu,
        closeMenu: closeMenu,
        invertColours: invertColours,
        revertColours: revertColours,
        increaseFondSize: increaseFondSize,
        decreaseFontSize: decreaseFontSize,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures,
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZlcnRDb2xvdXJzKCkge1xuICAgIHZpZXcuaW52ZXJ0Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICB2aWV3LnJldmVydENvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlYXNlRm9uZFNpemUoKSB7XG4gICAgdmlldy5pbmNyZWFzZUZvbnRTaXplKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNyZWFzZUZvbnRTaXplKCkge1xuICAgIHZpZXcuZGVjcmVhc2VGb250U2l6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHZpZXcucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHZpZXcuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKSB7XG4gICAgdmlldy5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KGNoZWNrZWQpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51LFxuICAgIGludmVydENvbG91cnMsXG4gICAgcmV2ZXJ0Q29sb3VycyxcbiAgICBpbmNyZWFzZUZvbmRTaXplLFxuICAgIGRlY3JlYXNlRm9udFNpemUsXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMsXG4gICAgY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJpbnZlcnRDb2xvdXJzIiwicmV2ZXJ0Q29sb3VycyIsImluY3JlYXNlRm9uZFNpemUiLCJpbmNyZWFzZUZvbnRTaXplIiwiZGVjcmVhc2VGb250U2l6ZSIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwiY2hlY2tlZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsUUFBUTtJQUNmO0lBRUEsU0FBU0M7UUFDUEYsS0FBS0UsU0FBUztJQUNoQjtJQUVBLFNBQVNDO1FBQ1BILEtBQUtHLGFBQWE7SUFDcEI7SUFFQSxTQUFTQztRQUNQSixLQUFLSSxhQUFhO0lBQ3BCO0lBRUEsU0FBU0M7UUFDUEwsS0FBS00sZ0JBQWdCO0lBQ3ZCO0lBRUEsU0FBU0M7UUFDUFAsS0FBS08sZ0JBQWdCO0lBQ3ZCO0lBRUEsU0FBU0M7UUFDUFIsS0FBS1EscUJBQXFCO0lBQzVCO0lBRUEsU0FBU0M7UUFDUFQsS0FBS1Msc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0MsbUNBQW1DQyxPQUFPO1FBQ2pEWCxLQUFLVSxrQ0FBa0MsQ0FBQ0M7SUFDMUM7SUFFQSxPQUFRO1FBQ05WLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FDLGtCQUFBQTtRQUNBRSxrQkFBQUE7UUFDQUMsdUJBQUFBO1FBQ0FDLHdCQUFBQTtRQUNBQyxvQ0FBQUE7SUFDRjtBQUNGIn0=