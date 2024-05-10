"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    areColoursInverted: function() {
        return areColoursInverted;
    },
    areNativeGesturesRestored: function() {
        return areNativeGesturesRestored;
    },
    getMenuZoom: function() {
        return getMenuZoom;
    },
    getOrientation: function() {
        return getOrientation;
    },
    getOverlayZoom: function() {
        return getOverlayZoom;
    },
    setColoursInverted: function() {
        return setColoursInverted;
    },
    setMenuZoom: function() {
        return setMenuZoom;
    },
    setNativeGesturesRestored: function() {
        return setNativeGesturesRestored;
    },
    setOrientation: function() {
        return setOrientation;
    },
    setOverlayZoom: function() {
        return setOverlayZoom;
    }
});
var _fullScreen = require("./utilities/fullScreen");
var _localStorage = require("./localStorage");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var orientation = null, state = {
    orientation: orientation
};
function getOrientation() {
    var orientation = state.orientation;
    return orientation;
}
function setOrientation(orientation) {
    Object.assign(state, {
        orientation: orientation
    });
}
function getMenuZoom() {
    stateFromPersistentState();
    var menuZoom;
    menuZoom = state.menuZoom;
    var orientation = state.orientation, orientedMenuZoom = menuZoom[orientation]; ///
    menuZoom = orientedMenuZoom; ///
    return menuZoom;
}
function setMenuZoom(menuZoom) {
    stateFromPersistentState();
    var orientation = state.orientation, orientedMenuZoom = menuZoom; ///
    menuZoom = state.menuZoom;
    Object.assign(menuZoom, _define_property({}, orientation, orientedMenuZoom));
    stateToPersistentState();
}
function getOverlayZoom() {
    stateFromPersistentState();
    var fullScreen = (0, _fullScreen.isFullScreen)(), orientation = getOrientation();
    var overlayZoom;
    if (fullScreen) {
        var ref;
        ref = state, overlayZoom = ref.fullScreenOverlayZoom, ref;
    } else {
        overlayZoom = state.overlayZoom;
    }
    var orientedOverlayZoom = overlayZoom[orientation]; ///
    overlayZoom = orientedOverlayZoom; ///
    return overlayZoom;
}
function setOverlayZoom(overlayZoom) {
    stateFromPersistentState();
    var fullScreen = (0, _fullScreen.isFullScreen)(), orientation = getOrientation();
    var orientedOverlayZoom = overlayZoom; ///
    if (fullScreen) {
        var ref;
        ref = state, overlayZoom = ref.fullScreenOverlayZoom, ref;
    } else {
        overlayZoom = state.overlayZoom;
    }
    Object.assign(overlayZoom, _define_property({}, orientation, orientedOverlayZoom));
    stateToPersistentState();
}
function areNativeGesturesRestored() {
    stateFromPersistentState();
    var nativeGesturesRestored = state.nativeGesturesRestored;
    return nativeGesturesRestored;
}
function setNativeGesturesRestored(nativeGesturesRestored) {
    stateFromPersistentState();
    Object.assign(state, {
        nativeGesturesRestored: nativeGesturesRestored
    });
    stateToPersistentState();
}
function areColoursInverted() {
    stateFromPersistentState();
    var coloursInverted = state.coloursInverted;
    return coloursInverted;
}
function setColoursInverted(coloursInverted) {
    stateFromPersistentState();
    Object.assign(state, {
        coloursInverted: coloursInverted
    });
    stateToPersistentState();
}
function stateToPersistentState() {
    var menuZoom = state.menuZoom, overlayZoom = state.overlayZoom, fullScreenOverlayZoom = state.fullScreenOverlayZoom, nativeGesturesRestored = state.nativeGesturesRestored, coloursInverted = state.coloursInverted, persistentState = {
        menuZoom: menuZoom,
        overlayZoom: overlayZoom,
        fullScreenOverlayZoom: fullScreenOverlayZoom,
        nativeGesturesRestored: nativeGesturesRestored,
        coloursInverted: coloursInverted
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNGdWxsU2NyZWVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IGdldFBlcnNpc3RlbnRTdGF0ZSwgc2V0UGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gbnVsbCxcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yaWVudGF0aW9uKCkge1xuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gb3JpZW50YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgb3JpZW50YXRpb25cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51Wm9vbSgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgbGV0IG1lbnVab29tO1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIG1lbnVab29tID0gb3JpZW50ZWRNZW51Wm9vbTsgIC8vL1xuXG4gIHJldHVybiBtZW51Wm9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVab29tKG1lbnVab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlLFxuICAgICAgICBvcmllbnRlZE1lbnVab29tID0gbWVudVpvb207ICAvLy9cblxuICAoeyBtZW51Wm9vbSB9ID0gc3RhdGUpO1xuXG4gIE9iamVjdC5hc3NpZ24obWVudVpvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZE1lbnVab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE92ZXJsYXlab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCksXG4gICAgICAgIG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcblxuICBsZXQgb3ZlcmxheVpvb207XG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuT3ZlcmxheVpvb206IG92ZXJsYXlab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IG9yaWVudGVkT3ZlcmxheVpvb20gPSBvdmVybGF5Wm9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIG92ZXJsYXlab29tID0gb3JpZW50ZWRPdmVybGF5Wm9vbTsgIC8vL1xuXG4gIHJldHVybiBvdmVybGF5Wm9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE92ZXJsYXlab29tKG92ZXJsYXlab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGNvbnN0IG9yaWVudGVkT3ZlcmxheVpvb20gPSBvdmVybGF5Wm9vbTsgIC8vL1xuXG4gIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgKHsgZnVsbFNjcmVlbk92ZXJsYXlab29tOiBvdmVybGF5Wm9vbSB9ID0gc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgICh7IG92ZXJsYXlab29tIH0gPSBzdGF0ZSk7XG4gIH1cblxuICBPYmplY3QuYXNzaWduKG92ZXJsYXlab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWRPdmVybGF5Wm9vbVxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSA9IHN0YXRlO1xuXG4gIHJldHVybiBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZChuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbG91cnNJbnZlcnRlZCgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBjb2xvdXJzSW52ZXJ0ZWQgfSA9IHN0YXRlO1xuXG4gIHJldHVybiBjb2xvdXJzSW52ZXJ0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCB7IG1lbnVab29tLCBvdmVybGF5Wm9vbSwgZnVsbFNjcmVlbk92ZXJsYXlab29tLCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkLCBjb2xvdXJzSW52ZXJ0ZWQgfSA9IHN0YXRlLFxuICAgICAgICBwZXJzaXN0ZW50U3RhdGUgPSB7XG4gICAgICAgICAgbWVudVpvb20sXG4gICAgICAgICAgb3ZlcmxheVpvb20sXG4gICAgICAgICAgZnVsbFNjcmVlbk92ZXJsYXlab29tLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQsXG4gICAgICAgICAgY29sb3Vyc0ludmVydGVkXG4gICAgICAgIH07XG5cbiAgc2V0UGVyc2lzdGVudFN0YXRlKHBlcnNpc3RlbnRTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlID0gZ2V0UGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGVyc2lzdGVudFN0YXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiZ2V0TWVudVpvb20iLCJnZXRPcmllbnRhdGlvbiIsImdldE92ZXJsYXlab29tIiwic2V0Q29sb3Vyc0ludmVydGVkIiwic2V0TWVudVpvb20iLCJzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic2V0T3JpZW50YXRpb24iLCJzZXRPdmVybGF5Wm9vbSIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJtZW51Wm9vbSIsIm9yaWVudGVkTWVudVpvb20iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsIm92ZXJsYXlab29tIiwiZnVsbFNjcmVlbk92ZXJsYXlab29tIiwib3JpZW50ZWRPdmVybGF5Wm9vbSIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJwZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJnZXRQZXJzaXN0ZW50U3RhdGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0hnQkEsa0JBQWtCO2VBQWxCQTs7SUFsQkFDLHlCQUF5QjtlQUF6QkE7O0lBeEVBQyxXQUFXO2VBQVhBOztJQVpBQyxjQUFjO2VBQWRBOztJQTBDQUMsY0FBYztlQUFkQTs7SUFvRUFDLGtCQUFrQjtlQUFsQkE7O0lBbkZBQyxXQUFXO2VBQVhBOztJQWlFQUMseUJBQXlCO2VBQXpCQTs7SUF0RkFDLGNBQWM7ZUFBZEE7O0lBeURBQyxjQUFjO2VBQWRBOzs7MEJBdkVhOzRCQUMwQjs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFQyxTQUFTUDtJQUNkLElBQU0sQUFBRU8sY0FBZ0JDLE1BQWhCRDtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTRixlQUFlRSxXQUFXO0lBQ3hDRSxPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJELGFBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNSO0lBQ2RZO0lBRUEsSUFBSUM7SUFFREEsV0FBYUosTUFBYkk7SUFFSCxJQUFNLEFBQUVMLGNBQWdCQyxNQUFoQkQsYUFDRk0sbUJBQW1CRCxRQUFRLENBQUNMLFlBQVksRUFBRSxHQUFHO0lBRW5ESyxXQUFXQyxrQkFBbUIsR0FBRztJQUVqQyxPQUFPRDtBQUNUO0FBRU8sU0FBU1QsWUFBWVMsUUFBUTtJQUNsQ0Q7SUFFQSxJQUFNLEFBQUVKLGNBQWdCQyxNQUFoQkQsYUFDRk0sbUJBQW1CRCxVQUFXLEdBQUc7SUFFcENBLFdBQWFKLE1BQWJJO0lBRUhILE9BQU9DLE1BQU0sQ0FBQ0UsVUFDWixxQkFBQ0wsYUFBY007SUFHakJDO0FBQ0Y7QUFFTyxTQUFTYjtJQUNkVTtJQUVBLElBQU1JLGFBQWFDLElBQUFBLHdCQUFZLEtBQ3pCVCxjQUFjUDtJQUVwQixJQUFJaUI7SUFFSixJQUFJRixZQUFZOztjQUM0QlAsT0FBaEJTLGtCQUF2QkM7SUFDTCxPQUFPO1FBQ0ZELGNBQWdCVCxNQUFoQlM7SUFDTDtJQUVBLElBQU1FLHNCQUFzQkYsV0FBVyxDQUFDVixZQUFZLEVBQUUsR0FBRztJQUV6RFUsY0FBY0UscUJBQXNCLEdBQUc7SUFFdkMsT0FBT0Y7QUFDVDtBQUVPLFNBQVNYLGVBQWVXLFdBQVc7SUFDeENOO0lBRUEsSUFBTUksYUFBYUMsSUFBQUEsd0JBQVksS0FDekJULGNBQWNQO0lBRXBCLElBQU1tQixzQkFBc0JGLGFBQWMsR0FBRztJQUU3QyxJQUFJRixZQUFZOztjQUM0QlAsT0FBaEJTLGtCQUF2QkM7SUFDTCxPQUFPO1FBQ0ZELGNBQWdCVCxNQUFoQlM7SUFDTDtJQUVBUixPQUFPQyxNQUFNLENBQUNPLGFBQ1oscUJBQUNWLGFBQWNZO0lBR2pCTDtBQUNGO0FBRU8sU0FBU2hCO0lBQ2RhO0lBRUEsSUFBTSxBQUFFUyx5QkFBMkJaLE1BQTNCWTtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTaEIsMEJBQTBCZ0Isc0JBQXNCO0lBQzlEVDtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJZLHdCQUFBQTtJQUNGO0lBRUFOO0FBQ0Y7QUFFTyxTQUFTakI7SUFDZGM7SUFFQSxJQUFNLEFBQUVVLGtCQUFvQmIsTUFBcEJhO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNuQixtQkFBbUJtQixlQUFlO0lBQ2hEVjtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJhLGlCQUFBQTtJQUNGO0lBRUFQO0FBQ0Y7QUFFQSxTQUFTQTtJQUNQLElBQVFGLFdBQTBGSixNQUExRkksVUFBVUssY0FBZ0ZULE1BQWhGUyxhQUFhQyx3QkFBbUVWLE1BQW5FVSx1QkFBdUJFLHlCQUE0Q1osTUFBNUNZLHdCQUF3QkMsa0JBQW9CYixNQUFwQmEsaUJBQ3hFQyxrQkFBa0I7UUFDaEJWLFVBQUFBO1FBQ0FLLGFBQUFBO1FBQ0FDLHVCQUFBQTtRQUNBRSx3QkFBQUE7UUFDQUMsaUJBQUFBO0lBQ0Y7SUFFTkUsSUFBQUEsZ0NBQWtCLEVBQUNEO0FBQ3JCO0FBRUEsU0FBU1g7SUFDUCxJQUFNVyxrQkFBa0JFLElBQUFBLGdDQUFrQjtJQUUxQ2YsT0FBT0MsTUFBTSxDQUFDRixPQUFPYztBQUN2QiJ9