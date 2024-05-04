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
    function zoomMenuIn() {
        view.zoomMenuIn();
    }
    function zoomMenuOut() {
        view.zoomMenuOut();
    }
    function invertColours() {
        view.invertColours();
    }
    function revertColours() {
        view.revertColours();
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
        zoomMenuIn: zoomMenuIn,
        zoomMenuOut: zoomMenuOut,
        invertColours: invertColours,
        revertColours: revertColours,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures,
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIHZpZXcuem9vbU1lbnVJbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgdmlldy56b29tTWVudU91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52ZXJ0Q29sb3VycygpIHtcbiAgICB2aWV3LmludmVydENvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENvbG91cnMoKSB7XG4gICAgdmlldy5yZXZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdmlldy5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdmlldy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KGNoZWNrZWQpIHtcbiAgICB2aWV3LmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBvcGVuTWVudSxcbiAgICBjbG9zZU1lbnUsXG4gICAgem9vbU1lbnVJbixcbiAgICB6b29tTWVudU91dCxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMsXG4gICAgY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJ6b29tTWVudUluIiwiem9vbU1lbnVPdXQiLCJpbnZlcnRDb2xvdXJzIiwicmV2ZXJ0Q29sb3VycyIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94IiwiY2hlY2tlZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsUUFBUTtJQUNmO0lBRUEsU0FBU0M7UUFDUEYsS0FBS0UsU0FBUztJQUNoQjtJQUVBLFNBQVNDO1FBQ1BILEtBQUtHLFVBQVU7SUFDakI7SUFFQSxTQUFTQztRQUNQSixLQUFLSSxXQUFXO0lBQ2xCO0lBRUEsU0FBU0M7UUFDUEwsS0FBS0ssYUFBYTtJQUNwQjtJQUVBLFNBQVNDO1FBQ1BOLEtBQUtNLGFBQWE7SUFDcEI7SUFFQSxTQUFTQztRQUNQUCxLQUFLTyxxQkFBcUI7SUFDNUI7SUFFQSxTQUFTQztRQUNQUixLQUFLUSxzQkFBc0I7SUFDN0I7SUFFQSxTQUFTQyxtQ0FBbUNDLE9BQU87UUFDakRWLEtBQUtTLGtDQUFrQyxDQUFDQztJQUMxQztJQUVBLE9BQVE7UUFDTlQsVUFBQUE7UUFDQUMsV0FBQUE7UUFDQUMsWUFBQUE7UUFDQUMsYUFBQUE7UUFDQUMsZUFBQUE7UUFDQUMsZUFBQUE7UUFDQUMsdUJBQUFBO1FBQ0FDLHdCQUFBQTtRQUNBQyxvQ0FBQUE7SUFDRjtBQUNGIn0=