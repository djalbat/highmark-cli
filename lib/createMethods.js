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
var _constants = require("./constants");
var _state = require("./state");
function createMethods(scheduler, model, view) {
    function openMenu() {
        view.openMenu();
    }
    function closeMenu() {
        view.closeMenu();
    }
    function zoomMenuIn() {
        var menuZoom = (0, _state.getMenuZoom)();
        menuZoom *= _constants.MENU_ZOOM_RATIO;
        (0, _state.setMenuZoom)(menuZoom);
        view.updateMenuZoom();
    }
    function zoomMenuOut() {
        var menuZoom = (0, _state.getMenuZoom)();
        menuZoom /= _constants.MENU_ZOOM_RATIO;
        (0, _state.setMenuZoom)(menuZoom);
        view.updateMenuZoom();
    }
    function zoomOverlay(overlayZoom) {
        (0, _state.setOverlayZoom)(overlayZoom);
        view.updateOverlayZoom();
    }
    function invertColours() {
        var coloursInverted = true;
        (0, _state.setColoursInverted)(coloursInverted);
        view.updateOverlayColours();
    }
    function revertColours() {
        var coloursInverted = false;
        (0, _state.setColoursInverted)(coloursInverted);
        view.updateOverlayColours();
    }
    function exitFullScreen() {
        view.exitFullScreen();
        view.uncheckFullScreenCheckbox();
    }
    function enterFullScreen() {
        view.enterFullScreen();
        view.checkFullScreenCheckbox();
    }
    function restoreNativeGestures() {
        view.restoreNativeGestures();
        view.checkNativeGesturesCheckbox();
    }
    function suppressNativeGestures() {
        view.suppressNativeGestures();
        view.uncheckNativeGesturesCheckbox();
    }
    return {
        openMenu: openMenu,
        closeMenu: closeMenu,
        zoomMenuIn: zoomMenuIn,
        zoomMenuOut: zoomMenuOut,
        zoomOverlay: zoomOverlay,
        invertColours: invertColours,
        revertColours: revertColours,
        exitFullScreen: exitFullScreen,
        enterFullScreen: enterFullScreen,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRU5VX1pPT01fUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVab29tLCBzZXRNZW51Wm9vbSwgc2V0T3ZlcmxheVpvb20sIHNldENvbG91cnNJbnZlcnRlZCB9IGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGVyLCBtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgICB2aWV3Lm9wZW5NZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgdmlldy5jbG9zZU1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21NZW51SW4oKSB7XG4gICAgbGV0IG1lbnVab29tID0gZ2V0TWVudVpvb20oKTtcblxuICAgIG1lbnVab29tICo9IE1FTlVfWk9PTV9SQVRJTztcblxuICAgIHNldE1lbnVab29tKG1lbnVab29tKTtcblxuICAgIHZpZXcudXBkYXRlTWVudVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21NZW51T3V0KCkge1xuICAgIGxldCBtZW51Wm9vbSA9IGdldE1lbnVab29tKCk7XG5cbiAgICBtZW51Wm9vbSAvPSBNRU5VX1pPT01fUkFUSU87XG5cbiAgICBzZXRNZW51Wm9vbShtZW51Wm9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZU1lbnVab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tT3ZlcmxheShvdmVybGF5Wm9vbSkge1xuICAgIHNldE92ZXJsYXlab29tKG92ZXJsYXlab29tKTtcblxuICAgIHZpZXcudXBkYXRlT3ZlcmxheVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gdHJ1ZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVPdmVybGF5Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVPdmVybGF5Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgdmlldy51bmNoZWNrRnVsbFNjcmVlbkNoZWNrYm94KCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5lbnRlckZ1bGxTY3JlZW4oKTtcblxuICAgIHZpZXcuY2hlY2tGdWxsU2NyZWVuQ2hlY2tib3goKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICB2aWV3LnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdmlldy5jaGVja05hdGl2ZUdlc3R1cmVzQ2hlY2tib3goKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdmlldy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB2aWV3LnVuY2hlY2tOYXRpdmVHZXN0dXJlc0NoZWNrYm94KCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBvcGVuTWVudSxcbiAgICBjbG9zZU1lbnUsXG4gICAgem9vbU1lbnVJbixcbiAgICB6b29tTWVudU91dCxcbiAgICB6b29tT3ZlcmxheSxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU1ldGhvZHMiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJvcGVuTWVudSIsImNsb3NlTWVudSIsInpvb21NZW51SW4iLCJtZW51Wm9vbSIsImdldE1lbnVab29tIiwiTUVOVV9aT09NX1JBVElPIiwic2V0TWVudVpvb20iLCJ1cGRhdGVNZW51Wm9vbSIsInpvb21NZW51T3V0Iiwiem9vbU92ZXJsYXkiLCJvdmVybGF5Wm9vbSIsInNldE92ZXJsYXlab29tIiwidXBkYXRlT3ZlcmxheVpvb20iLCJpbnZlcnRDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwic2V0Q29sb3Vyc0ludmVydGVkIiwidXBkYXRlT3ZlcmxheUNvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZXhpdEZ1bGxTY3JlZW4iLCJ1bmNoZWNrRnVsbFNjcmVlbkNoZWNrYm94IiwiZW50ZXJGdWxsU2NyZWVuIiwiY2hlY2tGdWxsU2NyZWVuQ2hlY2tib3giLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJjaGVja05hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwidW5jaGVja05hdGl2ZUdlc3R1cmVzQ2hlY2tib3giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7eUJBSFE7cUJBQzZDO0FBRTlELFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQLElBQUlDLFdBQVdDLElBQUFBLGtCQUFXO1FBRTFCRCxZQUFZRSwwQkFBZTtRQUUzQkMsSUFBQUEsa0JBQVcsRUFBQ0g7UUFFWkosS0FBS1EsY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1AsSUFBSUwsV0FBV0MsSUFBQUEsa0JBQVc7UUFFMUJELFlBQVlFLDBCQUFlO1FBRTNCQyxJQUFBQSxrQkFBVyxFQUFDSDtRQUVaSixLQUFLUSxjQUFjO0lBQ3JCO0lBRUEsU0FBU0UsWUFBWUMsV0FBVztRQUM5QkMsSUFBQUEscUJBQWMsRUFBQ0Q7UUFFZlgsS0FBS2EsaUJBQWlCO0lBQ3hCO0lBRUEsU0FBU0M7UUFDUCxJQUFNQyxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQmYsS0FBS2lCLG9CQUFvQjtJQUMzQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUgsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJmLEtBQUtpQixvQkFBb0I7SUFDM0I7SUFFQSxTQUFTRTtRQUNQbkIsS0FBS21CLGNBQWM7UUFFbkJuQixLQUFLb0IseUJBQXlCO0lBQ2hDO0lBRUEsU0FBU0M7UUFDUHJCLEtBQUtxQixlQUFlO1FBRXBCckIsS0FBS3NCLHVCQUF1QjtJQUM5QjtJQUVBLFNBQVNDO1FBQ1B2QixLQUFLdUIscUJBQXFCO1FBRTFCdkIsS0FBS3dCLDJCQUEyQjtJQUNsQztJQUVBLFNBQVNDO1FBQ1B6QixLQUFLeUIsc0JBQXNCO1FBRTNCekIsS0FBSzBCLDZCQUE2QjtJQUNwQztJQUVBLE9BQVE7UUFDTnpCLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FNLGFBQUFBO1FBQ0FDLGFBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBRSxpQkFBQUE7UUFDQUUsdUJBQUFBO1FBQ0FFLHdCQUFBQTtJQUNGO0FBQ0YifQ==