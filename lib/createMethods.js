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
        view.updateFullScreenCheckboxDiv();
    }
    function enterFullScreen() {
        view.enterFullScreen(function() {
            view.updateFullScreenCheckboxDiv();
        });
    }
    function restoreNativeGestures() {
        var nativeGesturesRestored = true;
        (0, _state.setNativeGesturesRestored)(nativeGesturesRestored);
        view.updateNativeGestures();
        view.updateNativeGesturesCheckboxDiv();
    }
    function suppressNativeGestures() {
        var nativeGesturesRestored = false;
        (0, _state.setNativeGesturesRestored)(nativeGesturesRestored);
        view.updateNativeGestures();
        view.updateNativeGesturesCheckboxDiv();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRU5VX1pPT01fUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVab29tLCBzZXRNZW51Wm9vbSwgc2V0T3ZlcmxheVpvb20sIHNldENvbG91cnNJbnZlcnRlZCwgc2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9IGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZHMoc2NoZWR1bGVyLCBtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgICB2aWV3Lm9wZW5NZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgdmlldy5jbG9zZU1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21NZW51SW4oKSB7XG4gICAgbGV0IG1lbnVab29tID0gZ2V0TWVudVpvb20oKTtcblxuICAgIG1lbnVab29tICo9IE1FTlVfWk9PTV9SQVRJTztcblxuICAgIHNldE1lbnVab29tKG1lbnVab29tKTtcblxuICAgIHZpZXcudXBkYXRlTWVudVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21NZW51T3V0KCkge1xuICAgIGxldCBtZW51Wm9vbSA9IGdldE1lbnVab29tKCk7XG5cbiAgICBtZW51Wm9vbSAvPSBNRU5VX1pPT01fUkFUSU87XG5cbiAgICBzZXRNZW51Wm9vbShtZW51Wm9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZU1lbnVab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tT3ZlcmxheShvdmVybGF5Wm9vbSkge1xuICAgIHNldE92ZXJsYXlab29tKG92ZXJsYXlab29tKTtcblxuICAgIHZpZXcudXBkYXRlT3ZlcmxheVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gdHJ1ZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVPdmVybGF5Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVPdmVybGF5Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgdmlldy51cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmVudGVyRnVsbFNjcmVlbigoKSA9PiB7XG4gICAgICB2aWV3LnVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSB0cnVlO1xuXG4gICAgc2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZChuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gZmFsc2U7XG5cbiAgICBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBvcGVuTWVudSxcbiAgICBjbG9zZU1lbnUsXG4gICAgem9vbU1lbnVJbixcbiAgICB6b29tTWVudU91dCxcbiAgICB6b29tT3ZlcmxheSxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU1ldGhvZHMiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJvcGVuTWVudSIsImNsb3NlTWVudSIsInpvb21NZW51SW4iLCJtZW51Wm9vbSIsImdldE1lbnVab29tIiwiTUVOVV9aT09NX1JBVElPIiwic2V0TWVudVpvb20iLCJ1cGRhdGVNZW51Wm9vbSIsInpvb21NZW51T3V0Iiwiem9vbU92ZXJsYXkiLCJvdmVybGF5Wm9vbSIsInNldE92ZXJsYXlab29tIiwidXBkYXRlT3ZlcmxheVpvb20iLCJpbnZlcnRDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwic2V0Q29sb3Vyc0ludmVydGVkIiwidXBkYXRlT3ZlcmxheUNvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZXhpdEZ1bGxTY3JlZW4iLCJ1cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwidXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt5QkFIUTtxQkFDd0U7QUFFekYsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsUUFBUTtJQUNmO0lBRUEsU0FBU0M7UUFDUEYsS0FBS0UsU0FBUztJQUNoQjtJQUVBLFNBQVNDO1FBQ1AsSUFBSUMsV0FBV0MsSUFBQUEsa0JBQVc7UUFFMUJELFlBQVlFLDBCQUFlO1FBRTNCQyxJQUFBQSxrQkFBVyxFQUFDSDtRQUVaSixLQUFLUSxjQUFjO0lBQ3JCO0lBRUEsU0FBU0M7UUFDUCxJQUFJTCxXQUFXQyxJQUFBQSxrQkFBVztRQUUxQkQsWUFBWUUsMEJBQWU7UUFFM0JDLElBQUFBLGtCQUFXLEVBQUNIO1FBRVpKLEtBQUtRLGNBQWM7SUFDckI7SUFFQSxTQUFTRSxZQUFZQyxXQUFXO1FBQzlCQyxJQUFBQSxxQkFBYyxFQUFDRDtRQUVmWCxLQUFLYSxpQkFBaUI7SUFDeEI7SUFFQSxTQUFTQztRQUNQLElBQU1DLGtCQUFrQjtRQUV4QkMsSUFBQUEseUJBQWtCLEVBQUNEO1FBRW5CZixLQUFLaUIsb0JBQW9CO0lBQzNCO0lBRUEsU0FBU0M7UUFDUCxJQUFNSCxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQmYsS0FBS2lCLG9CQUFvQjtJQUMzQjtJQUVBLFNBQVNFO1FBQ1BuQixLQUFLbUIsY0FBYztRQUVuQm5CLEtBQUtvQiwyQkFBMkI7SUFDbEM7SUFFQSxTQUFTQztRQUNQckIsS0FBS3FCLGVBQWUsQ0FBQztZQUNuQnJCLEtBQUtvQiwyQkFBMkI7UUFDbEM7SUFDRjtJQUVBLFNBQVNFO1FBQ1AsSUFBTUMseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJ2QixLQUFLeUIsb0JBQW9CO1FBRXpCekIsS0FBSzBCLCtCQUErQjtJQUN0QztJQUVBLFNBQVNDO1FBQ1AsSUFBTUoseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJ2QixLQUFLeUIsb0JBQW9CO1FBRXpCekIsS0FBSzBCLCtCQUErQjtJQUN0QztJQUVBLE9BQVE7UUFDTnpCLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FNLGFBQUFBO1FBQ0FDLGFBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBRSxpQkFBQUE7UUFDQUMsdUJBQUFBO1FBQ0FLLHdCQUFBQTtJQUNGO0FBQ0YifQ==