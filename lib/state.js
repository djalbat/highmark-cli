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
function getOrientation() {
    var orientation = state.orientation;
    return orientation;
}
function setOrientation(orientation) {
    Object.assign(state, {
        orientation: orientation
    });
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
    var overlayZoom = state.overlayZoom, menuZoom = state.menuZoom, fullScreenOverlayZoom = state.fullScreenOverlayZoom, coloursInverted = state.coloursInverted, persistentState = {
        overlayZoom: overlayZoom,
        menuZoom: menuZoom,
        fullScreenOverlayZoom: fullScreenOverlayZoom,
        coloursInverted: coloursInverted
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNGdWxsU2NyZWVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IGdldFBlcnNpc3RlbnRTdGF0ZSwgc2V0UGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gbnVsbCxcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3ZlcmxheVpvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCBvdmVybGF5Wm9vbTtcblxuICBpZiAoZnVsbFNjcmVlbikge1xuICAgICh7IGZ1bGxTY3JlZW5PdmVybGF5Wm9vbTogb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyBvdmVybGF5Wm9vbSB9ID0gc3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgb3JpZW50ZWRPdmVybGF5Wm9vbSA9IG92ZXJsYXlab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgb3ZlcmxheVpvb20gPSBvcmllbnRlZE92ZXJsYXlab29tOyAgLy8vXG5cbiAgcmV0dXJuIG92ZXJsYXlab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3ZlcmxheVpvb20ob3ZlcmxheVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgY29uc3Qgb3JpZW50ZWRPdmVybGF5Wm9vbSA9IG92ZXJsYXlab29tOyAgLy8vXG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuT3ZlcmxheVpvb206IG92ZXJsYXlab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24ob3ZlcmxheVpvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZE92ZXJsYXlab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yaWVudGF0aW9uKCkge1xuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gb3JpZW50YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgb3JpZW50YXRpb25cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb2xvdXJzSW52ZXJ0ZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gY29sb3Vyc0ludmVydGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgY29sb3Vyc0ludmVydGVkXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyBvdmVybGF5Wm9vbSwgbWVudVpvb20sIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSwgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZSxcbiAgICAgICAgcGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICAgIG92ZXJsYXlab29tLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgICAgICAgfTtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGUgPSBnZXRQZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCBwZXJzaXN0ZW50U3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbImFyZUNvbG91cnNJbnZlcnRlZCIsImdldE1lbnVab29tIiwiZ2V0T3JpZW50YXRpb24iLCJnZXRPdmVybGF5Wm9vbSIsInNldENvbG91cnNJbnZlcnRlZCIsInNldE1lbnVab29tIiwic2V0T3JpZW50YXRpb24iLCJzZXRPdmVybGF5Wm9vbSIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJtZW51Wm9vbSIsIm9yaWVudGVkTWVudVpvb20iLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsIm92ZXJsYXlab29tIiwiZnVsbFNjcmVlbk92ZXJsYXlab29tIiwib3JpZW50ZWRPdmVybGF5Wm9vbSIsImNvbG91cnNJbnZlcnRlZCIsInBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThGZ0JBLGtCQUFrQjtlQUFsQkE7O0lBcEZBQyxXQUFXO2VBQVhBOztJQXdFQUMsY0FBYztlQUFkQTs7SUExQ0FDLGNBQWM7ZUFBZEE7O0lBOERBQyxrQkFBa0I7ZUFBbEJBOztJQTdFQUMsV0FBVztlQUFYQTs7SUErREFDLGNBQWM7ZUFBZEE7O0lBM0JBQyxjQUFjO2VBQWRBOzs7MEJBM0RhOzRCQUMwQjs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFQyxTQUFTUDtJQUNkUztJQUVBLElBQUlDO0lBRURBLFdBQWFGLE1BQWJFO0lBRUgsSUFBTSxBQUFFSCxjQUFnQkMsTUFBaEJELGFBQ0ZJLG1CQUFtQkQsUUFBUSxDQUFDSCxZQUFZLEVBQUUsR0FBRztJQUVuREcsV0FBV0Msa0JBQW1CLEdBQUc7SUFFakMsT0FBT0Q7QUFDVDtBQUVPLFNBQVNOLFlBQVlNLFFBQVE7SUFDbENEO0lBRUEsSUFBTSxBQUFFRixjQUFnQkMsTUFBaEJELGFBQ0ZJLG1CQUFtQkQsVUFBVyxHQUFHO0lBRXBDQSxXQUFhRixNQUFiRTtJQUVIRSxPQUFPQyxNQUFNLENBQUNILFVBQ1oscUJBQUNILGFBQWNJO0lBR2pCRztBQUNGO0FBRU8sU0FBU1o7SUFDZE87SUFFQSxJQUFNTSxhQUFhQyxJQUFBQSx3QkFBWSxLQUN6QlQsY0FBY047SUFFcEIsSUFBSWdCO0lBRUosSUFBSUYsWUFBWTs7Y0FDNEJQLE9BQWhCUyxrQkFBdkJDO0lBQ0wsT0FBTztRQUNGRCxjQUFnQlQsTUFBaEJTO0lBQ0w7SUFFQSxJQUFNRSxzQkFBc0JGLFdBQVcsQ0FBQ1YsWUFBWSxFQUFFLEdBQUc7SUFFekRVLGNBQWNFLHFCQUFzQixHQUFHO0lBRXZDLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTWCxlQUFlVyxXQUFXO0lBQ3hDUjtJQUVBLElBQU1NLGFBQWFDLElBQUFBLHdCQUFZLEtBQ3pCVCxjQUFjTjtJQUVwQixJQUFNa0Isc0JBQXNCRixhQUFjLEdBQUc7SUFFN0MsSUFBSUYsWUFBWTs7Y0FDNEJQLE9BQWhCUyxrQkFBdkJDO0lBQ0wsT0FBTztRQUNGRCxjQUFnQlQsTUFBaEJTO0lBQ0w7SUFFQUwsT0FBT0MsTUFBTSxDQUFDSSxhQUNaLHFCQUFDVixhQUFjWTtJQUdqQkw7QUFDRjtBQUVPLFNBQVNiO0lBQ2QsSUFBTSxBQUFFTSxjQUFnQkMsTUFBaEJEO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNGLGVBQWVFLFdBQVc7SUFDeENLLE9BQU9DLE1BQU0sQ0FBQ0wsT0FBTztRQUNuQkQsYUFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU1I7SUFDZFU7SUFFQSxJQUFNLEFBQUVXLGtCQUFvQlosTUFBcEJZO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNqQixtQkFBbUJpQixlQUFlO0lBQ2hEWDtJQUVBRyxPQUFPQyxNQUFNLENBQUNMLE9BQU87UUFDbkJZLGlCQUFBQTtJQUNGO0lBRUFOO0FBQ0Y7QUFFQSxTQUFTQTtJQUNQLElBQVFHLGNBQWtFVCxNQUFsRVMsYUFBYVAsV0FBcURGLE1BQXJERSxVQUFVUSx3QkFBMkNWLE1BQTNDVSx1QkFBdUJFLGtCQUFvQlosTUFBcEJZLGlCQUNoREMsa0JBQWtCO1FBQ2hCSixhQUFBQTtRQUNBUCxVQUFBQTtRQUNBUSx1QkFBQUE7UUFDQUUsaUJBQUFBO0lBQ0Y7SUFFTkUsSUFBQUEsZ0NBQWtCLEVBQUNEO0FBQ3JCO0FBRUEsU0FBU1o7SUFDUCxJQUFNWSxrQkFBa0JFLElBQUFBLGdDQUFrQjtJQUUxQ1gsT0FBT0MsTUFBTSxDQUFDTCxPQUFPYTtBQUN2QiJ9