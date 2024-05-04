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
var _state = require("./state");
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
        var coloursInverted = true;
        (0, _state.setColoursInverted)(coloursInverted);
        view.updateColours();
    }
    function revertColours() {
        var coloursInverted = false;
        (0, _state.setColoursInverted)(coloursInverted);
        view.updateColours();
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
        enterFullScreen: enterFullScreen,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures,
        enablePersistentState: _state.enablePersistentState,
        disablePersistentState: _state.disablePersistentState,
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZXRDb2xvdXJzSW52ZXJ0ZWQsIGVuYWJsZVBlcnNpc3RlbnRTdGF0ZSwgZGlzYWJsZVBlcnNpc3RlbnRTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGVyLCBtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgICB2aWV3Lm9wZW5NZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgdmlldy5jbG9zZU1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21NZW51SW4oKSB7XG4gICAgdmlldy56b29tTWVudUluKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudU91dCgpIHtcbiAgICB2aWV3Lnpvb21NZW51T3V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHZpZXcudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5lbnRlckZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCkge1xuICAgIHZpZXcuY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKTtcbiAgfVxuXG4gIHJldHVybiAoe1xuICAgIG9wZW5NZW51LFxuICAgIGNsb3NlTWVudSxcbiAgICB6b29tTWVudUluLFxuICAgIHpvb21NZW51T3V0LFxuICAgIGludmVydENvbG91cnMsXG4gICAgcmV2ZXJ0Q29sb3VycyxcbiAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMsXG4gICAgZW5hYmxlUGVyc2lzdGVudFN0YXRlLFxuICAgIGRpc2FibGVQZXJzaXN0ZW50U3RhdGUsXG4gICAgY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJ6b29tTWVudUluIiwiem9vbU1lbnVPdXQiLCJpbnZlcnRDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwic2V0Q29sb3Vyc0ludmVydGVkIiwidXBkYXRlQ29sb3VycyIsInJldmVydENvbG91cnMiLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsImNoZWNrZWQiLCJlbmFibGVQZXJzaXN0ZW50U3RhdGUiLCJkaXNhYmxlUGVyc2lzdGVudFN0YXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OztxQkFGMEQ7QUFFbkUsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsUUFBUTtJQUNmO0lBRUEsU0FBU0M7UUFDUEYsS0FBS0UsU0FBUztJQUNoQjtJQUVBLFNBQVNDO1FBQ1BILEtBQUtHLFVBQVU7SUFDakI7SUFFQSxTQUFTQztRQUNQSixLQUFLSSxXQUFXO0lBQ2xCO0lBRUEsU0FBU0M7UUFDUCxJQUFNQyxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQk4sS0FBS1EsYUFBYTtJQUNwQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUgsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJOLEtBQUtRLGFBQWE7SUFDcEI7SUFFQSxTQUFTRTtRQUNQVixLQUFLVSxlQUFlO0lBQ3RCO0lBRUEsU0FBU0M7UUFDUFgsS0FBS1cscUJBQXFCO0lBQzVCO0lBRUEsU0FBU0M7UUFDUFosS0FBS1ksc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0MsbUNBQW1DQyxPQUFPO1FBQ2pEZCxLQUFLYSxrQ0FBa0MsQ0FBQ0M7SUFDMUM7SUFFQSxPQUFRO1FBQ05iLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FDLGFBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGlCQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUMsd0JBQUFBO1FBQ0FHLHVCQUFBQSw0QkFBcUI7UUFDckJDLHdCQUFBQSw2QkFBc0I7UUFDdEJILG9DQUFBQTtJQUNGO0FBQ0YifQ==