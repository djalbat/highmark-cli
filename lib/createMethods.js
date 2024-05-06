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
    function exitFullScreen() {
        view.exitFullScreen();
    }
    function enterFullScreen() {
        view.enterFullScreen();
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
        exitFullScreen: exitFullScreen,
        enterFullScreen: enterFullScreen,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures,
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIHZpZXcuem9vbU1lbnVJbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgdmlldy56b29tTWVudU91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52ZXJ0Q29sb3VycygpIHtcbiAgICB2aWV3LmludmVydENvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENvbG91cnMoKSB7XG4gICAgdmlldy5yZXZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmV4aXRGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5lbnRlckZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCkge1xuICAgIHZpZXcuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIHJldHVybiAoe1xuICAgIG9wZW5NZW51LFxuICAgIGNsb3NlTWVudSxcbiAgICB6b29tTWVudUluLFxuICAgIHpvb21NZW51T3V0LFxuICAgIGludmVydENvbG91cnMsXG4gICAgcmV2ZXJ0Q29sb3VycyxcbiAgICBleGl0RnVsbFNjcmVlbixcbiAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMsXG4gICAgY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJ6b29tTWVudUluIiwiem9vbU1lbnVPdXQiLCJpbnZlcnRDb2xvdXJzIiwicmV2ZXJ0Q29sb3VycyIsImV4aXRGdWxsU2NyZWVuIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsImNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJjaGVja2VkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQSCxLQUFLRyxVQUFVO0lBQ2pCO0lBRUEsU0FBU0M7UUFDUEosS0FBS0ksV0FBVztJQUNsQjtJQUVBLFNBQVNDO1FBQ1BMLEtBQUtLLGFBQWE7SUFDcEI7SUFFQSxTQUFTQztRQUNQTixLQUFLTSxhQUFhO0lBQ3BCO0lBRUEsU0FBU0M7UUFDUFAsS0FBS08sY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1BSLEtBQUtRLGVBQWU7SUFDdEI7SUFFQSxTQUFTQztRQUNQVCxLQUFLUyxxQkFBcUI7SUFDNUI7SUFFQSxTQUFTQztRQUNQVixLQUFLVSxzQkFBc0I7SUFDN0I7SUFFQSxTQUFTQyxtQ0FBbUNDLE9BQU87UUFDakRaLEtBQUtXLGtDQUFrQyxDQUFDQztJQUMxQztJQUVBLE9BQVE7UUFDTlgsVUFBQUE7UUFDQUMsV0FBQUE7UUFDQUMsWUFBQUE7UUFDQUMsYUFBQUE7UUFDQUMsZUFBQUE7UUFDQUMsZUFBQUE7UUFDQUMsZ0JBQUFBO1FBQ0FDLGlCQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUMsd0JBQUFBO1FBQ0FDLG9DQUFBQTtJQUNGO0FBQ0YifQ==