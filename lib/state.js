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
var _easymobile = require("easy-mobile");
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen;
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
    var fullScreen = isFullScreen(), orientation = getOrientation();
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
    var fullScreen = isFullScreen(), orientation = getOrientation();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZnVsbFNjcmVlblV0aWxpdGllcyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgeyBnZXRQZXJzaXN0ZW50U3RhdGUsIHNldFBlcnNpc3RlbnRTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCB7IGlzRnVsbFNjcmVlbiB9ID0gZnVsbFNjcmVlblV0aWxpdGllcztcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3ZlcmxheVpvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCBvdmVybGF5Wm9vbTtcblxuICBpZiAoZnVsbFNjcmVlbikge1xuICAgICh7IGZ1bGxTY3JlZW5PdmVybGF5Wm9vbTogb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyBvdmVybGF5Wm9vbSB9ID0gc3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgb3JpZW50ZWRPdmVybGF5Wm9vbSA9IG92ZXJsYXlab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgb3ZlcmxheVpvb20gPSBvcmllbnRlZE92ZXJsYXlab29tOyAgLy8vXG5cbiAgcmV0dXJuIG92ZXJsYXlab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3ZlcmxheVpvb20ob3ZlcmxheVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgY29uc3Qgb3JpZW50ZWRPdmVybGF5Wm9vbSA9IG92ZXJsYXlab29tOyAgLy8vXG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuT3ZlcmxheVpvb206IG92ZXJsYXlab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24ob3ZlcmxheVpvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZE92ZXJsYXlab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29sb3Vyc0ludmVydGVkKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIGNvbG91cnNJbnZlcnRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIGNvbG91cnNJbnZlcnRlZFxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHsgbWVudVpvb20sIG92ZXJsYXlab29tLCBmdWxsU2NyZWVuT3ZlcmxheVpvb20sIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQsIGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICBtZW51Wm9vbSxcbiAgICAgICAgICBvdmVybGF5Wm9vbSxcbiAgICAgICAgICBmdWxsU2NyZWVuT3ZlcmxheVpvb20sXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgICAgICAgfTtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGUgPSBnZXRQZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCBwZXJzaXN0ZW50U3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbImFyZUNvbG91cnNJbnZlcnRlZCIsImFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJnZXRNZW51Wm9vbSIsImdldE9yaWVudGF0aW9uIiwiZ2V0T3ZlcmxheVpvb20iLCJzZXRDb2xvdXJzSW52ZXJ0ZWQiLCJzZXRNZW51Wm9vbSIsInNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzZXRPcmllbnRhdGlvbiIsInNldE92ZXJsYXlab29tIiwiaXNGdWxsU2NyZWVuIiwiZnVsbFNjcmVlblV0aWxpdGllcyIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJtZW51Wm9vbSIsIm9yaWVudGVkTWVudVpvb20iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwiZnVsbFNjcmVlbiIsIm92ZXJsYXlab29tIiwiZnVsbFNjcmVlbk92ZXJsYXlab29tIiwib3JpZW50ZWRPdmVybGF5Wm9vbSIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJwZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJnZXRQZXJzaXN0ZW50U3RhdGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1IZ0JBLGtCQUFrQjtlQUFsQkE7O0lBbEJBQyx5QkFBeUI7ZUFBekJBOztJQXhFQUMsV0FBVztlQUFYQTs7SUFaQUMsY0FBYztlQUFkQTs7SUEwQ0FDLGNBQWM7ZUFBZEE7O0lBb0VBQyxrQkFBa0I7ZUFBbEJBOztJQW5GQUMsV0FBVztlQUFYQTs7SUFpRUFDLHlCQUF5QjtlQUF6QkE7O0lBdEZBQyxjQUFjO2VBQWRBOztJQXlEQUMsY0FBYztlQUFkQTs7OzBCQTFFb0I7NEJBRW1COzs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLGVBQWlCQywrQkFBbUIsQ0FBcENEO0FBRVIsSUFBTUUsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFQyxTQUFTVDtJQUNkLElBQU0sQUFBRVMsY0FBZ0JDLE1BQWhCRDtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSixlQUFlSSxXQUFXO0lBQ3hDRSxPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJELGFBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNWO0lBQ2RjO0lBRUEsSUFBSUM7SUFFREEsV0FBYUosTUFBYkk7SUFFSCxJQUFNLEFBQUVMLGNBQWdCQyxNQUFoQkQsYUFDRk0sbUJBQW1CRCxRQUFRLENBQUNMLFlBQVksRUFBRSxHQUFHO0lBRW5ESyxXQUFXQyxrQkFBbUIsR0FBRztJQUVqQyxPQUFPRDtBQUNUO0FBRU8sU0FBU1gsWUFBWVcsUUFBUTtJQUNsQ0Q7SUFFQSxJQUFNLEFBQUVKLGNBQWdCQyxNQUFoQkQsYUFDRk0sbUJBQW1CRCxVQUFXLEdBQUc7SUFFcENBLFdBQWFKLE1BQWJJO0lBRUhILE9BQU9DLE1BQU0sQ0FBQ0UsVUFDWixxQkFBQ0wsYUFBY007SUFHakJDO0FBQ0Y7QUFFTyxTQUFTZjtJQUNkWTtJQUVBLElBQU1JLGFBQWFWLGdCQUNiRSxjQUFjVDtJQUVwQixJQUFJa0I7SUFFSixJQUFJRCxZQUFZOztjQUM0QlAsT0FBaEJRLGtCQUF2QkM7SUFDTCxPQUFPO1FBQ0ZELGNBQWdCUixNQUFoQlE7SUFDTDtJQUVBLElBQU1FLHNCQUFzQkYsV0FBVyxDQUFDVCxZQUFZLEVBQUUsR0FBRztJQUV6RFMsY0FBY0UscUJBQXNCLEdBQUc7SUFFdkMsT0FBT0Y7QUFDVDtBQUVPLFNBQVNaLGVBQWVZLFdBQVc7SUFDeENMO0lBRUEsSUFBTUksYUFBYVYsZ0JBQ2JFLGNBQWNUO0lBRXBCLElBQU1vQixzQkFBc0JGLGFBQWMsR0FBRztJQUU3QyxJQUFJRCxZQUFZOztjQUM0QlAsT0FBaEJRLGtCQUF2QkM7SUFDTCxPQUFPO1FBQ0ZELGNBQWdCUixNQUFoQlE7SUFDTDtJQUVBUCxPQUFPQyxNQUFNLENBQUNNLGFBQ1oscUJBQUNULGFBQWNXO0lBR2pCSjtBQUNGO0FBRU8sU0FBU2xCO0lBQ2RlO0lBRUEsSUFBTSxBQUFFUSx5QkFBMkJYLE1BQTNCVztJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTakIsMEJBQTBCaUIsc0JBQXNCO0lBQzlEUjtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJXLHdCQUFBQTtJQUNGO0lBRUFMO0FBQ0Y7QUFFTyxTQUFTbkI7SUFDZGdCO0lBRUEsSUFBTSxBQUFFUyxrQkFBb0JaLE1BQXBCWTtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTcEIsbUJBQW1Cb0IsZUFBZTtJQUNoRFQ7SUFFQUYsT0FBT0MsTUFBTSxDQUFDRixPQUFPO1FBQ25CWSxpQkFBQUE7SUFDRjtJQUVBTjtBQUNGO0FBRUEsU0FBU0E7SUFDUCxJQUFRRixXQUEwRkosTUFBMUZJLFVBQVVJLGNBQWdGUixNQUFoRlEsYUFBYUMsd0JBQW1FVCxNQUFuRVMsdUJBQXVCRSx5QkFBNENYLE1BQTVDVyx3QkFBd0JDLGtCQUFvQlosTUFBcEJZLGlCQUN4RUMsa0JBQWtCO1FBQ2hCVCxVQUFBQTtRQUNBSSxhQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUUsd0JBQUFBO1FBQ0FDLGlCQUFBQTtJQUNGO0lBRU5FLElBQUFBLGdDQUFrQixFQUFDRDtBQUNyQjtBQUVBLFNBQVNWO0lBQ1AsSUFBTVUsa0JBQWtCRSxJQUFBQSxnQ0FBa0I7SUFFMUNkLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBT2E7QUFDdkIifQ==