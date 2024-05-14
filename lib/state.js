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
    var version = state.version, menuZoom = state.menuZoom, overlayZoom = state.overlayZoom, fullScreenOverlayZoom = state.fullScreenOverlayZoom, nativeGesturesRestored = state.nativeGesturesRestored, coloursInverted = state.coloursInverted, persistentState = {
        version: version,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZnVsbFNjcmVlblV0aWxpdGllcyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgeyBnZXRQZXJzaXN0ZW50U3RhdGUsIHNldFBlcnNpc3RlbnRTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCB7IGlzRnVsbFNjcmVlbiB9ID0gZnVsbFNjcmVlblV0aWxpdGllcztcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3ZlcmxheVpvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCBvdmVybGF5Wm9vbTtcblxuICBpZiAoZnVsbFNjcmVlbikge1xuICAgICh7IGZ1bGxTY3JlZW5PdmVybGF5Wm9vbTogb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyBvdmVybGF5Wm9vbSB9ID0gc3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgb3JpZW50ZWRPdmVybGF5Wm9vbSA9IG92ZXJsYXlab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgb3ZlcmxheVpvb20gPSBvcmllbnRlZE92ZXJsYXlab29tOyAgLy8vXG5cbiAgcmV0dXJuIG92ZXJsYXlab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3ZlcmxheVpvb20ob3ZlcmxheVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgY29uc3Qgb3JpZW50ZWRPdmVybGF5Wm9vbSA9IG92ZXJsYXlab29tOyAgLy8vXG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuT3ZlcmxheVpvb206IG92ZXJsYXlab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgb3ZlcmxheVpvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24ob3ZlcmxheVpvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZE92ZXJsYXlab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29sb3Vyc0ludmVydGVkKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIGNvbG91cnNJbnZlcnRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIGNvbG91cnNJbnZlcnRlZFxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHsgdmVyc2lvbiwgbWVudVpvb20sIG92ZXJsYXlab29tLCBmdWxsU2NyZWVuT3ZlcmxheVpvb20sIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQsIGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIG92ZXJsYXlab29tLFxuICAgICAgICAgIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSxcbiAgICAgICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkLFxuICAgICAgICAgIGNvbG91cnNJbnZlcnRlZFxuICAgICAgICB9O1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBlcnNpc3RlbnRTdGF0ZSk7XG59XG4iXSwibmFtZXMiOlsiYXJlQ29sb3Vyc0ludmVydGVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImdldE1lbnVab29tIiwiZ2V0T3JpZW50YXRpb24iLCJnZXRPdmVybGF5Wm9vbSIsInNldENvbG91cnNJbnZlcnRlZCIsInNldE1lbnVab29tIiwic2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInNldE9yaWVudGF0aW9uIiwic2V0T3ZlcmxheVpvb20iLCJpc0Z1bGxTY3JlZW4iLCJmdWxsU2NyZWVuVXRpbGl0aWVzIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSIsIm1lbnVab29tIiwib3JpZW50ZWRNZW51Wm9vbSIsInN0YXRlVG9QZXJzaXN0ZW50U3RhdGUiLCJmdWxsU2NyZWVuIiwib3ZlcmxheVpvb20iLCJmdWxsU2NyZWVuT3ZlcmxheVpvb20iLCJvcmllbnRlZE92ZXJsYXlab29tIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImNvbG91cnNJbnZlcnRlZCIsInZlcnNpb24iLCJwZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJnZXRQZXJzaXN0ZW50U3RhdGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtSGdCQSxrQkFBa0I7ZUFBbEJBOztJQWxCQUMseUJBQXlCO2VBQXpCQTs7SUF4RUFDLFdBQVc7ZUFBWEE7O0lBWkFDLGNBQWM7ZUFBZEE7O0lBMENBQyxjQUFjO2VBQWRBOztJQW9FQUMsa0JBQWtCO2VBQWxCQTs7SUFuRkFDLFdBQVc7ZUFBWEE7O0lBaUVBQyx5QkFBeUI7ZUFBekJBOztJQXRGQUMsY0FBYztlQUFkQTs7SUF5REFDLGNBQWM7ZUFBZEE7OzswQkExRW9COzRCQUVtQjs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTSxBQUFFQyxlQUFpQkMsK0JBQW1CLENBQXBDRDtBQUVSLElBQU1FLGNBQWMsTUFDZEMsUUFBUTtJQUNORCxhQUFBQTtBQUNGO0FBRUMsU0FBU1Q7SUFDZCxJQUFNLEFBQUVTLGNBQWdCQyxNQUFoQkQ7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU0osZUFBZUksV0FBVztJQUN4Q0UsT0FBT0MsTUFBTSxDQUFDRixPQUFPO1FBQ25CRCxhQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTVjtJQUNkYztJQUVBLElBQUlDO0lBRURBLFdBQWFKLE1BQWJJO0lBRUgsSUFBTSxBQUFFTCxjQUFnQkMsTUFBaEJELGFBQ0ZNLG1CQUFtQkQsUUFBUSxDQUFDTCxZQUFZLEVBQUUsR0FBRztJQUVuREssV0FBV0Msa0JBQW1CLEdBQUc7SUFFakMsT0FBT0Q7QUFDVDtBQUVPLFNBQVNYLFlBQVlXLFFBQVE7SUFDbENEO0lBRUEsSUFBTSxBQUFFSixjQUFnQkMsTUFBaEJELGFBQ0ZNLG1CQUFtQkQsVUFBVyxHQUFHO0lBRXBDQSxXQUFhSixNQUFiSTtJQUVISCxPQUFPQyxNQUFNLENBQUNFLFVBQ1oscUJBQUNMLGFBQWNNO0lBR2pCQztBQUNGO0FBRU8sU0FBU2Y7SUFDZFk7SUFFQSxJQUFNSSxhQUFhVixnQkFDYkUsY0FBY1Q7SUFFcEIsSUFBSWtCO0lBRUosSUFBSUQsWUFBWTs7Y0FDNEJQLE9BQWhCUSxrQkFBdkJDO0lBQ0wsT0FBTztRQUNGRCxjQUFnQlIsTUFBaEJRO0lBQ0w7SUFFQSxJQUFNRSxzQkFBc0JGLFdBQVcsQ0FBQ1QsWUFBWSxFQUFFLEdBQUc7SUFFekRTLGNBQWNFLHFCQUFzQixHQUFHO0lBRXZDLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTWixlQUFlWSxXQUFXO0lBQ3hDTDtJQUVBLElBQU1JLGFBQWFWLGdCQUNiRSxjQUFjVDtJQUVwQixJQUFNb0Isc0JBQXNCRixhQUFjLEdBQUc7SUFFN0MsSUFBSUQsWUFBWTs7Y0FDNEJQLE9BQWhCUSxrQkFBdkJDO0lBQ0wsT0FBTztRQUNGRCxjQUFnQlIsTUFBaEJRO0lBQ0w7SUFFQVAsT0FBT0MsTUFBTSxDQUFDTSxhQUNaLHFCQUFDVCxhQUFjVztJQUdqQko7QUFDRjtBQUVPLFNBQVNsQjtJQUNkZTtJQUVBLElBQU0sQUFBRVEseUJBQTJCWCxNQUEzQlc7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU2pCLDBCQUEwQmlCLHNCQUFzQjtJQUM5RFI7SUFFQUYsT0FBT0MsTUFBTSxDQUFDRixPQUFPO1FBQ25CVyx3QkFBQUE7SUFDRjtJQUVBTDtBQUNGO0FBRU8sU0FBU25CO0lBQ2RnQjtJQUVBLElBQU0sQUFBRVMsa0JBQW9CWixNQUFwQlk7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU3BCLG1CQUFtQm9CLGVBQWU7SUFDaERUO0lBRUFGLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBTztRQUNuQlksaUJBQUFBO0lBQ0Y7SUFFQU47QUFDRjtBQUVBLFNBQVNBO0lBQ1AsSUFBUU8sVUFBbUdiLE1BQW5HYSxTQUFTVCxXQUEwRkosTUFBMUZJLFVBQVVJLGNBQWdGUixNQUFoRlEsYUFBYUMsd0JBQW1FVCxNQUFuRVMsdUJBQXVCRSx5QkFBNENYLE1BQTVDVyx3QkFBd0JDLGtCQUFvQlosTUFBcEJZLGlCQUNqRkUsa0JBQWtCO1FBQ2hCRCxTQUFBQTtRQUNBVCxVQUFBQTtRQUNBSSxhQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUUsd0JBQUFBO1FBQ0FDLGlCQUFBQTtJQUNGO0lBRU5HLElBQUFBLGdDQUFrQixFQUFDRDtBQUNyQjtBQUVBLFNBQVNYO0lBQ1AsSUFBTVcsa0JBQWtCRSxJQUFBQSxnQ0FBa0I7SUFFMUNmLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBT2M7QUFDdkIifQ==