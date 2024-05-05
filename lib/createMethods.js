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
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZXRDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIHZpZXcuem9vbU1lbnVJbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgdmlldy56b29tTWVudU91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSB0cnVlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gZmFsc2U7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHZpZXcudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdmlldy5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgdmlldy5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KGNoZWNrZWQpIHtcbiAgICB2aWV3LmNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3goY2hlY2tlZCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBvcGVuTWVudSxcbiAgICBjbG9zZU1lbnUsXG4gICAgem9vbU1lbnVJbixcbiAgICB6b29tTWVudU91dCxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzLFxuICAgIGNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwiem9vbU1lbnVJbiIsInpvb21NZW51T3V0IiwiaW52ZXJ0Q29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsInNldENvbG91cnNJbnZlcnRlZCIsInVwZGF0ZUNvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsImNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3giLCJjaGVja2VkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7cUJBRlc7QUFFcEIsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsUUFBUTtJQUNmO0lBRUEsU0FBU0M7UUFDUEYsS0FBS0UsU0FBUztJQUNoQjtJQUVBLFNBQVNDO1FBQ1BILEtBQUtHLFVBQVU7SUFDakI7SUFFQSxTQUFTQztRQUNQSixLQUFLSSxXQUFXO0lBQ2xCO0lBRUEsU0FBU0M7UUFDUCxJQUFNQyxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQk4sS0FBS1EsYUFBYTtJQUNwQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUgsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJOLEtBQUtRLGFBQWE7SUFDcEI7SUFFQSxTQUFTRTtRQUNQVixLQUFLVSxlQUFlO0lBQ3RCO0lBRUEsU0FBU0M7UUFDUFgsS0FBS1cscUJBQXFCO0lBQzVCO0lBRUEsU0FBU0M7UUFDUFosS0FBS1ksc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0MsbUNBQW1DQyxPQUFPO1FBQ2pEZCxLQUFLYSxrQ0FBa0MsQ0FBQ0M7SUFDMUM7SUFFQSxPQUFRO1FBQ05iLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FDLGFBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGlCQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUMsd0JBQUFBO1FBQ0FDLG9DQUFBQTtJQUNGO0FBQ0YifQ==