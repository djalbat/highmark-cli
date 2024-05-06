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
    function uncheckRestoreNativeGesturesCheckbox(checked) {
        view.uncheckRestoreNativeGesturesCheckbox(checked);
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
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox,
        uncheckRestoreNativeGesturesCheckbox: uncheckRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIHZpZXcuem9vbU1lbnVJbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgdmlldy56b29tTWVudU91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52ZXJ0Q29sb3VycygpIHtcbiAgICB2aWV3LmludmVydENvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENvbG91cnMoKSB7XG4gICAgdmlldy5yZXZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmV4aXRGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5lbnRlckZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCkge1xuICAgIHZpZXcuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKSB7XG4gICAgdmlldy51bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBvcGVuTWVudSxcbiAgICBjbG9zZU1lbnUsXG4gICAgem9vbU1lbnVJbixcbiAgICB6b29tTWVudU91dCxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzLFxuICAgIGNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3gsXG4gICAgdW5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU1ldGhvZHMiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJvcGVuTWVudSIsImNsb3NlTWVudSIsInpvb21NZW51SW4iLCJ6b29tTWVudU91dCIsImludmVydENvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZXhpdEZ1bGxTY3JlZW4iLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsImNoZWNrZWQiLCJ1bmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQSCxLQUFLRyxVQUFVO0lBQ2pCO0lBRUEsU0FBU0M7UUFDUEosS0FBS0ksV0FBVztJQUNsQjtJQUVBLFNBQVNDO1FBQ1BMLEtBQUtLLGFBQWE7SUFDcEI7SUFFQSxTQUFTQztRQUNQTixLQUFLTSxhQUFhO0lBQ3BCO0lBRUEsU0FBU0M7UUFDUFAsS0FBS08sY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1BSLEtBQUtRLGVBQWU7SUFDdEI7SUFFQSxTQUFTQztRQUNQVCxLQUFLUyxxQkFBcUI7SUFDNUI7SUFFQSxTQUFTQztRQUNQVixLQUFLVSxzQkFBc0I7SUFDN0I7SUFFQSxTQUFTQyxtQ0FBbUNDLE9BQU87UUFDakRaLEtBQUtXLGtDQUFrQyxDQUFDQztJQUMxQztJQUVBLFNBQVNDLHFDQUFxQ0QsT0FBTztRQUNuRFosS0FBS2Esb0NBQW9DLENBQUNEO0lBQzVDO0lBRUEsT0FBUTtRQUNOWCxVQUFBQTtRQUNBQyxXQUFBQTtRQUNBQyxZQUFBQTtRQUNBQyxhQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxnQkFBQUE7UUFDQUMsaUJBQUFBO1FBQ0FDLHVCQUFBQTtRQUNBQyx3QkFBQUE7UUFDQUMsb0NBQUFBO1FBQ0FFLHNDQUFBQTtJQUNGO0FBQ0YifQ==