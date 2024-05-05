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
    isOrientationPortrait: function() {
        return isOrientationPortrait;
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
function isOrientationPortrait() {
    var orientation = getOrientation(), portrait = orientation === _constants.PORTRAIT_ORIENTATION; ///
    return portrait;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaXNGdWxsU2NyZWVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCB7IGdldFBlcnNpc3RlbnRTdGF0ZSwgc2V0UGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge1BPUlRSQUlUX09SSUVOVEFUSU9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld1pvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCB2aWV3Wm9vbTtcblxuICBpZiAoZnVsbFNjcmVlbikge1xuICAgICh7IGZ1bGxTY3JlZW5WaWV3Wm9vbTogdmlld1pvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyB2aWV3Wm9vbSB9ID0gc3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgdmlld1pvb20gPSBvcmllbnRlZFZpZXdab29tOyAgLy8vXG5cbiAgcmV0dXJuIHZpZXdab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Vmlld1pvb20odmlld1pvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgY29uc3Qgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tOyAgLy8vXG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuVmlld1pvb206IHZpZXdab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgdmlld1pvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24odmlld1pvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZFZpZXdab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVEaXZab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudURpdlpvb207XG5cbiAgKHsgbWVudURpdlpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51RGl2Wm9vbSA9IG1lbnVEaXZab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudURpdlpvb20gPSBvcmllbnRlZE1lbnVEaXZab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVEaXZab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudURpdlpvb20obWVudURpdlpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudURpdlpvb20gPSBtZW51RGl2Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVEaXZab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51RGl2Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudURpdlpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbG91cnNJbnZlcnRlZCgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBjb2xvdXJzSW52ZXJ0ZWQgfSA9IHN0YXRlO1xuXG4gIHJldHVybiBjb2xvdXJzSW52ZXJ0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPcmllbnRhdGlvblBvcnRyYWl0KCkge1xuICBjb25zdCBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCksXG4gICAgICAgIHBvcnRyYWl0ID0gKG9yaWVudGF0aW9uID09PSBQT1JUUkFJVF9PUklFTlRBVElPTik7ICAvLy9cblxuICByZXR1cm4gcG9ydHJhaXQ7XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHsgdmlld1pvb20sIG1lbnVEaXZab29tLCBmdWxsU2NyZWVuVmlld1pvb20sIGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICB2aWV3Wm9vbSxcbiAgICAgICAgICBtZW51RGl2Wm9vbSxcbiAgICAgICAgICBmdWxsU2NyZWVuVmlld1pvb20sXG4gICAgICAgICAgY29sb3Vyc0ludmVydGVkXG4gICAgICAgIH07XG5cbiAgc2V0UGVyc2lzdGVudFN0YXRlKHBlcnNpc3RlbnRTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlID0gZ2V0UGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGVyc2lzdGVudFN0YXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJnZXRNZW51RGl2Wm9vbSIsImdldE9yaWVudGF0aW9uIiwiZ2V0Vmlld1pvb20iLCJpc09yaWVudGF0aW9uUG9ydHJhaXQiLCJzZXRDb2xvdXJzSW52ZXJ0ZWQiLCJzZXRNZW51RGl2Wm9vbSIsInNldE9yaWVudGF0aW9uIiwic2V0Vmlld1pvb20iLCJvcmllbnRhdGlvbiIsInN0YXRlIiwic3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsInZpZXdab29tIiwiZnVsbFNjcmVlblZpZXdab29tIiwib3JpZW50ZWRWaWV3Wm9vbSIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlVG9QZXJzaXN0ZW50U3RhdGUiLCJtZW51RGl2Wm9vbSIsIm9yaWVudGVkTWVudURpdlpvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJwb3J0cmFpdCIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwicGVyc2lzdGVudFN0YXRlIiwic2V0UGVyc2lzdGVudFN0YXRlIiwiZ2V0UGVyc2lzdGVudFN0YXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7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