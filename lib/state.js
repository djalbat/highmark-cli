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
    getMenuDivZoom: function() {
        return getMenuDivZoom;
    },
    getOrientation: function() {
        return getOrientation;
    },
    getViewZoom: function() {
        return getViewZoom;
    },
    setColoursInverted: function() {
        return setColoursInverted;
    },
    setMenuDivZoom: function() {
        return setMenuDivZoom;
    },
    setOrientation: function() {
        return setOrientation;
    },
    setViewZoom: function() {
        return setViewZoom;
    }
});
var _fullScreen = require("./utilities/fullScreen");
var _localStorage = require("./localStorage");
var _constants = require("./constants");
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
function getViewZoom() {
    stateFromPersistentState();
    var fullScreen = (0, _fullScreen.isFullScreen)(), orientation = getOrientation();
    var viewZoom;
    if (fullScreen) {
        var ref;
        ref = state, viewZoom = ref.fullScreenViewZoom, ref;
    } else {
        viewZoom = state.viewZoom;
    }
    var orientedViewZoom = viewZoom[orientation]; ///
    viewZoom = orientedViewZoom; ///
    return viewZoom;
}
function setViewZoom(viewZoom) {
    stateFromPersistentState();
    var fullScreen = (0, _fullScreen.isFullScreen)(), orientation = getOrientation();
    var orientedViewZoom = viewZoom; ///
    if (fullScreen) {
        var ref;
        ref = state, viewZoom = ref.fullScreenViewZoom, ref;
    } else {
        viewZoom = state.viewZoom;
    }
    Object.assign(viewZoom, _define_property({}, orientation, orientedViewZoom));
    stateToPersistentState();
}
function getMenuDivZoom() {
    stateFromPersistentState();
    var menuDivZoom;
    menuDivZoom = state.menuDivZoom;
    var orientation = state.orientation, orientedMenuDivZoom = menuDivZoom[orientation]; ///
    menuDivZoom = orientedMenuDivZoom; ///
    return menuDivZoom;
}
function setMenuDivZoom(menuDivZoom) {
    stateFromPersistentState();
    var orientation = state.orientation, orientedMenuDivZoom = menuDivZoom; ///
    menuDivZoom = state.menuDivZoom;
    Object.assign(menuDivZoom, _define_property({}, orientation, orientedMenuDivZoom));
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
    var viewZoom = state.viewZoom, menuDivZoom = state.menuDivZoom, fullScreenViewZoom = state.fullScreenViewZoom, coloursInverted = state.coloursInverted, persistentState = {
        viewZoom: viewZoom,
        menuDivZoom: menuDivZoom,
        fullScreenViewZoom: fullScreenViewZoom,
        coloursInverted: coloursInverted
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNGdWxsU2NyZWVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IGdldFBlcnNpc3RlbnRTdGF0ZSwgc2V0UGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge1BPUlRSQUlUX09SSUVOVEFUSU9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld1pvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCB2aWV3Wm9vbTtcblxuICBpZiAoZnVsbFNjcmVlbikge1xuICAgICh7IGZ1bGxTY3JlZW5WaWV3Wm9vbTogdmlld1pvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyB2aWV3Wm9vbSB9ID0gc3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgdmlld1pvb20gPSBvcmllbnRlZFZpZXdab29tOyAgLy8vXG5cbiAgcmV0dXJuIHZpZXdab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Vmlld1pvb20odmlld1pvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgY29uc3Qgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tOyAgLy8vXG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuVmlld1pvb206IHZpZXdab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdmlld1pvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24odmlld1pvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZFZpZXdab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVEaXZab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudURpdlpvb207XG5cbiAgKHsgbWVudURpdlpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51RGl2Wm9vbSA9IG1lbnVEaXZab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudURpdlpvb20gPSBvcmllbnRlZE1lbnVEaXZab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVEaXZab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudURpdlpvb20obWVudURpdlpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudURpdlpvb20gPSBtZW51RGl2Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVEaXZab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51RGl2Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudURpdlpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbG91cnNJbnZlcnRlZCgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBjb2xvdXJzSW52ZXJ0ZWQgfSA9IHN0YXRlO1xuXG4gIHJldHVybiBjb2xvdXJzSW52ZXJ0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCB7IHZpZXdab29tLCBtZW51RGl2Wm9vbSwgZnVsbFNjcmVlblZpZXdab29tLCBjb2xvdXJzSW52ZXJ0ZWQgfSA9IHN0YXRlLFxuICAgICAgICBwZXJzaXN0ZW50U3RhdGUgPSB7XG4gICAgICAgICAgdmlld1pvb20sXG4gICAgICAgICAgbWVudURpdlpvb20sXG4gICAgICAgICAgZnVsbFNjcmVlblZpZXdab29tLFxuICAgICAgICAgIGNvbG91cnNJbnZlcnRlZFxuICAgICAgICB9O1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBlcnNpc3RlbnRTdGF0ZSk7XG59XG4iXSwibmFtZXMiOlsiYXJlQ29sb3Vyc0ludmVydGVkIiwiZ2V0TWVudURpdlpvb20iLCJnZXRPcmllbnRhdGlvbiIsImdldFZpZXdab29tIiwic2V0Q29sb3Vyc0ludmVydGVkIiwic2V0TWVudURpdlpvb20iLCJzZXRPcmllbnRhdGlvbiIsInNldFZpZXdab29tIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsInN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJ2aWV3Wm9vbSIsImZ1bGxTY3JlZW5WaWV3Wm9vbSIsIm9yaWVudGVkVmlld1pvb20iLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwibWVudURpdlpvb20iLCJvcmllbnRlZE1lbnVEaXZab29tIiwiY29sb3Vyc0ludmVydGVkIiwicGVyc2lzdGVudFN0YXRlIiwic2V0UGVyc2lzdGVudFN0YXRlIiwiZ2V0UGVyc2lzdGVudFN0YXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQStGZ0JBLGtCQUFrQjtlQUFsQkE7O0lBMUNBQyxjQUFjO2VBQWRBOztJQThCQUMsY0FBYztlQUFkQTs7SUF4RUFDLFdBQVc7ZUFBWEE7O0lBNEZBQyxrQkFBa0I7ZUFBbEJBOztJQW5DQUMsY0FBYztlQUFkQTs7SUFxQkFDLGNBQWM7ZUFBZEE7O0lBekRBQyxXQUFXO2VBQVhBOzs7MEJBOUJhOzRCQUMwQjt5QkFDcEI7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU1DLGNBQWMsTUFDZEMsUUFBUTtJQUNORCxhQUFBQTtBQUNGO0FBRUMsU0FBU0w7SUFDZE87SUFFQSxJQUFNQyxhQUFhQyxJQUFBQSx3QkFBWSxLQUN6QkosY0FBY047SUFFcEIsSUFBSVc7SUFFSixJQUFJRixZQUFZOztjQUNzQkYsT0FBYkksZUFBcEJDO0lBQ0wsT0FBTztRQUNGRCxXQUFhSixNQUFiSTtJQUNMO0lBRUEsSUFBTUUsbUJBQW1CRixRQUFRLENBQUNMLFlBQVksRUFBRSxHQUFHO0lBRW5ESyxXQUFXRSxrQkFBbUIsR0FBRztJQUVqQyxPQUFPRjtBQUNUO0FBRU8sU0FBU04sWUFBWU0sUUFBUTtJQUNsQ0g7SUFFQSxJQUFNQyxhQUFhQyxJQUFBQSx3QkFBWSxLQUN6QkosY0FBY047SUFFcEIsSUFBTWEsbUJBQW1CRixVQUFXLEdBQUc7SUFFdkMsSUFBSUYsWUFBWTs7Y0FDc0JGLE9BQWJJLGVBQXBCQztJQUNMLE9BQU87UUFDRkQsV0FBYUosTUFBYkk7SUFDTDtJQUVBRyxPQUFPQyxNQUFNLENBQUNKLFVBQ1oscUJBQUNMLGFBQWNPO0lBR2pCRztBQUNGO0FBRU8sU0FBU2pCO0lBQ2RTO0lBRUEsSUFBSVM7SUFFREEsY0FBZ0JWLE1BQWhCVTtJQUVILElBQU0sQUFBRVgsY0FBZ0JDLE1BQWhCRCxhQUNGWSxzQkFBc0JELFdBQVcsQ0FBQ1gsWUFBWSxFQUFFLEdBQUc7SUFFekRXLGNBQWNDLHFCQUFzQixHQUFHO0lBRXZDLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTZCxlQUFlYyxXQUFXO0lBQ3hDVDtJQUVBLElBQU0sQUFBRUYsY0FBZ0JDLE1BQWhCRCxhQUNGWSxzQkFBc0JELGFBQWMsR0FBRztJQUUxQ0EsY0FBZ0JWLE1BQWhCVTtJQUVISCxPQUFPQyxNQUFNLENBQUNFLGFBQ1oscUJBQUNYLGFBQWNZO0lBR2pCRjtBQUNGO0FBRU8sU0FBU2hCO0lBQ2QsSUFBTSxBQUFFTSxjQUFnQkMsTUFBaEJEO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNGLGVBQWVFLFdBQVc7SUFDeENRLE9BQU9DLE1BQU0sQ0FBQ1IsT0FBTztRQUNuQkQsYUFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU1I7SUFDZFU7SUFFQSxJQUFNLEFBQUVXLGtCQUFvQlosTUFBcEJZO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNqQixtQkFBbUJpQixlQUFlO0lBQ2hEWDtJQUVBTSxPQUFPQyxNQUFNLENBQUNSLE9BQU87UUFDbkJZLGlCQUFBQTtJQUNGO0lBRUFIO0FBQ0Y7QUFFQSxTQUFTQTtJQUNQLElBQVFMLFdBQStESixNQUEvREksVUFBVU0sY0FBcURWLE1BQXJEVSxhQUFhTCxxQkFBd0NMLE1BQXhDSyxvQkFBb0JPLGtCQUFvQlosTUFBcEJZLGlCQUM3Q0Msa0JBQWtCO1FBQ2hCVCxVQUFBQTtRQUNBTSxhQUFBQTtRQUNBTCxvQkFBQUE7UUFDQU8saUJBQUFBO0lBQ0Y7SUFFTkUsSUFBQUEsZ0NBQWtCLEVBQUNEO0FBQ3JCO0FBRUEsU0FBU1o7SUFDUCxJQUFNWSxrQkFBa0JFLElBQUFBLGdDQUFrQjtJQUUxQ1IsT0FBT0MsTUFBTSxDQUFDUixPQUFPYTtBQUN2QiJ9