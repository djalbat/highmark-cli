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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNGdWxsU2NyZWVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IGdldFBlcnNpc3RlbnRTdGF0ZSwgc2V0UGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0gbnVsbCxcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCksXG4gICAgICAgIG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcblxuICBsZXQgdmlld1pvb207XG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuVmlld1pvb206IHZpZXdab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdmlld1pvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IG9yaWVudGVkVmlld1pvb20gPSB2aWV3Wm9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIHZpZXdab29tID0gb3JpZW50ZWRWaWV3Wm9vbTsgIC8vL1xuXG4gIHJldHVybiB2aWV3Wm9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpZXdab29tKHZpZXdab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGNvbnN0IG9yaWVudGVkVmlld1pvb20gPSB2aWV3Wm9vbTsgIC8vL1xuXG4gIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgKHsgZnVsbFNjcmVlblZpZXdab29tOiB2aWV3Wm9vbSB9ID0gc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgICh7IHZpZXdab29tIH0gPSBzdGF0ZSk7XG4gIH1cblxuICBPYmplY3QuYXNzaWduKHZpZXdab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWRWaWV3Wm9vbVxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51RGl2Wm9vbSgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgbGV0IG1lbnVEaXZab29tO1xuXG4gICh7IG1lbnVEaXZab29tIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudURpdlpvb20gPSBtZW51RGl2Wm9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIG1lbnVEaXZab29tID0gb3JpZW50ZWRNZW51RGl2Wm9vbTsgIC8vL1xuXG4gIHJldHVybiBtZW51RGl2Wm9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVEaXZab29tKG1lbnVEaXZab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlLFxuICAgICAgICBvcmllbnRlZE1lbnVEaXZab29tID0gbWVudURpdlpvb207ICAvLy9cblxuICAoeyBtZW51RGl2Wm9vbSB9ID0gc3RhdGUpO1xuXG4gIE9iamVjdC5hc3NpZ24obWVudURpdlpvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZE1lbnVEaXZab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yaWVudGF0aW9uKCkge1xuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gb3JpZW50YXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgb3JpZW50YXRpb25cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb2xvdXJzSW52ZXJ0ZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gY29sb3Vyc0ludmVydGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgY29sb3Vyc0ludmVydGVkXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyB2aWV3Wm9vbSwgbWVudURpdlpvb20sIGZ1bGxTY3JlZW5WaWV3Wm9vbSwgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZSxcbiAgICAgICAgcGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICAgIHZpZXdab29tLFxuICAgICAgICAgIG1lbnVEaXZab29tLFxuICAgICAgICAgIGZ1bGxTY3JlZW5WaWV3Wm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgICAgICAgfTtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGUgPSBnZXRQZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCBwZXJzaXN0ZW50U3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbImFyZUNvbG91cnNJbnZlcnRlZCIsImdldE1lbnVEaXZab29tIiwiZ2V0T3JpZW50YXRpb24iLCJnZXRWaWV3Wm9vbSIsInNldENvbG91cnNJbnZlcnRlZCIsInNldE1lbnVEaXZab29tIiwic2V0T3JpZW50YXRpb24iLCJzZXRWaWV3Wm9vbSIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwidmlld1pvb20iLCJmdWxsU2NyZWVuVmlld1pvb20iLCJvcmllbnRlZFZpZXdab29tIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSIsIm1lbnVEaXZab29tIiwib3JpZW50ZWRNZW51RGl2Wm9vbSIsImNvbG91cnNJbnZlcnRlZCIsInBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThGZ0JBLGtCQUFrQjtlQUFsQkE7O0lBMUNBQyxjQUFjO2VBQWRBOztJQThCQUMsY0FBYztlQUFkQTs7SUF4RUFDLFdBQVc7ZUFBWEE7O0lBNEZBQyxrQkFBa0I7ZUFBbEJBOztJQW5DQUMsY0FBYztlQUFkQTs7SUFxQkFDLGNBQWM7ZUFBZEE7O0lBekRBQyxXQUFXO2VBQVhBOzs7MEJBN0JhOzRCQUMwQjs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFQyxTQUFTTDtJQUNkTztJQUVBLElBQU1DLGFBQWFDLElBQUFBLHdCQUFZLEtBQ3pCSixjQUFjTjtJQUVwQixJQUFJVztJQUVKLElBQUlGLFlBQVk7O2NBQ3NCRixPQUFiSSxlQUFwQkM7SUFDTCxPQUFPO1FBQ0ZELFdBQWFKLE1BQWJJO0lBQ0w7SUFFQSxJQUFNRSxtQkFBbUJGLFFBQVEsQ0FBQ0wsWUFBWSxFQUFFLEdBQUc7SUFFbkRLLFdBQVdFLGtCQUFtQixHQUFHO0lBRWpDLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTTixZQUFZTSxRQUFRO0lBQ2xDSDtJQUVBLElBQU1DLGFBQWFDLElBQUFBLHdCQUFZLEtBQ3pCSixjQUFjTjtJQUVwQixJQUFNYSxtQkFBbUJGLFVBQVcsR0FBRztJQUV2QyxJQUFJRixZQUFZOztjQUNzQkYsT0FBYkksZUFBcEJDO0lBQ0wsT0FBTztRQUNGRCxXQUFhSixNQUFiSTtJQUNMO0lBRUFHLE9BQU9DLE1BQU0sQ0FBQ0osVUFDWixxQkFBQ0wsYUFBY087SUFHakJHO0FBQ0Y7QUFFTyxTQUFTakI7SUFDZFM7SUFFQSxJQUFJUztJQUVEQSxjQUFnQlYsTUFBaEJVO0lBRUgsSUFBTSxBQUFFWCxjQUFnQkMsTUFBaEJELGFBQ0ZZLHNCQUFzQkQsV0FBVyxDQUFDWCxZQUFZLEVBQUUsR0FBRztJQUV6RFcsY0FBY0MscUJBQXNCLEdBQUc7SUFFdkMsT0FBT0Q7QUFDVDtBQUVPLFNBQVNkLGVBQWVjLFdBQVc7SUFDeENUO0lBRUEsSUFBTSxBQUFFRixjQUFnQkMsTUFBaEJELGFBQ0ZZLHNCQUFzQkQsYUFBYyxHQUFHO0lBRTFDQSxjQUFnQlYsTUFBaEJVO0lBRUhILE9BQU9DLE1BQU0sQ0FBQ0UsYUFDWixxQkFBQ1gsYUFBY1k7SUFHakJGO0FBQ0Y7QUFFTyxTQUFTaEI7SUFDZCxJQUFNLEFBQUVNLGNBQWdCQyxNQUFoQkQ7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU0YsZUFBZUUsV0FBVztJQUN4Q1EsT0FBT0MsTUFBTSxDQUFDUixPQUFPO1FBQ25CRCxhQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTUjtJQUNkVTtJQUVBLElBQU0sQUFBRVcsa0JBQW9CWixNQUFwQlk7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU2pCLG1CQUFtQmlCLGVBQWU7SUFDaERYO0lBRUFNLE9BQU9DLE1BQU0sQ0FBQ1IsT0FBTztRQUNuQlksaUJBQUFBO0lBQ0Y7SUFFQUg7QUFDRjtBQUVBLFNBQVNBO0lBQ1AsSUFBUUwsV0FBK0RKLE1BQS9ESSxVQUFVTSxjQUFxRFYsTUFBckRVLGFBQWFMLHFCQUF3Q0wsTUFBeENLLG9CQUFvQk8sa0JBQW9CWixNQUFwQlksaUJBQzdDQyxrQkFBa0I7UUFDaEJULFVBQUFBO1FBQ0FNLGFBQUFBO1FBQ0FMLG9CQUFBQTtRQUNBTyxpQkFBQUE7SUFDRjtJQUVORSxJQUFBQSxnQ0FBa0IsRUFBQ0Q7QUFDckI7QUFFQSxTQUFTWjtJQUNQLElBQU1ZLGtCQUFrQkUsSUFBQUEsZ0NBQWtCO0lBRTFDUixPQUFPQyxNQUFNLENBQUNSLE9BQU9hO0FBQ3ZCIn0=