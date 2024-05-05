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
    function requestFullScreen() {
        view.requestFullScreen();
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
        requestFullScreen: requestFullScreen,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures,
        checkRestoreNativeGesturesCheckbox: checkRestoreNativeGesturesCheckbox
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZXRDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIHZpZXcuem9vbU1lbnVJbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgdmlldy56b29tTWVudU91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSB0cnVlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZUNvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gZmFsc2U7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHZpZXcudXBkYXRlQ29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdEZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHZpZXcucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIHZpZXcuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveChjaGVja2VkKSB7XG4gICAgdmlldy5jaGVja1Jlc3RvcmVOYXRpdmVHZXN0dXJlc0NoZWNrYm94KGNoZWNrZWQpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51LFxuICAgIHpvb21NZW51SW4sXG4gICAgem9vbU1lbnVPdXQsXG4gICAgaW52ZXJ0Q29sb3VycyxcbiAgICByZXZlcnRDb2xvdXJzLFxuICAgIHJlcXVlc3RGdWxsU2NyZWVuLFxuICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzLFxuICAgIGNoZWNrUmVzdG9yZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwiem9vbU1lbnVJbiIsInpvb21NZW51T3V0IiwiaW52ZXJ0Q29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsInNldENvbG91cnNJbnZlcnRlZCIsInVwZGF0ZUNvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwiY2hlY2tSZXN0b3JlTmF0aXZlR2VzdHVyZXNDaGVja2JveCIsImNoZWNrZWQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OztxQkFGVztBQUVwQixTQUFTQSxjQUFjQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsSUFBSTtJQUMxRCxTQUFTQztRQUNQRCxLQUFLQyxRQUFRO0lBQ2Y7SUFFQSxTQUFTQztRQUNQRixLQUFLRSxTQUFTO0lBQ2hCO0lBRUEsU0FBU0M7UUFDUEgsS0FBS0csVUFBVTtJQUNqQjtJQUVBLFNBQVNDO1FBQ1BKLEtBQUtJLFdBQVc7SUFDbEI7SUFFQSxTQUFTQztRQUNQLElBQU1DLGtCQUFrQjtRQUV4QkMsSUFBQUEseUJBQWtCLEVBQUNEO1FBRW5CTixLQUFLUSxhQUFhO0lBQ3BCO0lBRUEsU0FBU0M7UUFDUCxJQUFNSCxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQk4sS0FBS1EsYUFBYTtJQUNwQjtJQUVBLFNBQVNFO1FBQ1BWLEtBQUtVLGlCQUFpQjtJQUN4QjtJQUVBLFNBQVNDO1FBQ1BYLEtBQUtXLHFCQUFxQjtJQUM1QjtJQUVBLFNBQVNDO1FBQ1BaLEtBQUtZLHNCQUFzQjtJQUM3QjtJQUVBLFNBQVNDLG1DQUFtQ0MsT0FBTztRQUNqRGQsS0FBS2Esa0NBQWtDLENBQUNDO0lBQzFDO0lBRUEsT0FBUTtRQUNOYixVQUFBQTtRQUNBQyxXQUFBQTtRQUNBQyxZQUFBQTtRQUNBQyxhQUFBQTtRQUNBQyxlQUFBQTtRQUNBSSxlQUFBQTtRQUNBQyxtQkFBQUE7UUFDQUMsdUJBQUFBO1FBQ0FDLHdCQUFBQTtRQUNBQyxvQ0FBQUE7SUFDRjtBQUNGIn0=