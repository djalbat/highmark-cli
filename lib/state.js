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
    disablePersistentState: function() {
        return disablePersistentState;
    },
    enablePersistentState: function() {
        return enablePersistentState;
    },
    getMenuDivZoom: function() {
        return getMenuDivZoom;
    },
    getViewZoom: function() {
        return getViewZoom;
    },
    isPersistentStateEnabled: function() {
        return isPersistentStateEnabled;
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
var _obj, _obj1;
var orientation = null, viewZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), menuDivZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), coloursInverted = false, state = {
    orientation: orientation,
    viewZoom: viewZoom,
    menuDivZoom: menuDivZoom,
    coloursInverted: coloursInverted
};
function getViewZoom() {
    stateFromPersistentState();
    var viewZoom;
    viewZoom = state.viewZoom;
    var orientation = state.orientation, orientedViewZoom = viewZoom[orientation]; ///
    viewZoom = orientedViewZoom; ///
    return viewZoom;
}
function setViewZoom(viewZoom) {
    stateFromPersistentState();
    var orientation = state.orientation, orientedViewZoom = viewZoom; ///
    viewZoom = state.viewZoom;
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
function enablePersistentState() {
    updatePersistentState();
}
function disablePersistentState() {
    nullifyPersistentState();
}
function isPersistentStateEnabled() {
    var persistentState = (0, _localStorage.getPersistentState)(), persistentStateEnabled = persistentState !== null;
    return persistentStateEnabled;
}
function updatePersistentState() {
    var viewZoom = state.viewZoom, menuDivZoom = state.menuDivZoom, coloursInverted = state.coloursInverted, persistentState = {
        viewZoom: viewZoom,
        menuDivZoom: menuDivZoom,
        coloursInverted: coloursInverted
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function nullifyPersistentState() {
    var persistentState = null;
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentStateEnabled = isPersistentStateEnabled();
    if (!persistentStateEnabled) {
        return;
    }
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}
function stateToPersistentState() {
    var persistentStateEnabled = isPersistentStateEnabled();
    if (!persistentStateEnabled) {
        return;
    }
    updatePersistentState();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0UGVyc2lzdGVudFN0YXRlLCBzZXRQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IFBPUlRSQUlUX09SSUVOVEFUSU9OLCBMQU5EU0NBUEVfT1JJRU5UQVRJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgdmlld1pvb20gPSB7XG4gICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICB9LFxuICAgICAgbWVudURpdlpvb20gPSB7XG4gICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICB9LFxuICAgICAgY29sb3Vyc0ludmVydGVkID0gZmFsc2UsXG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgIHZpZXdab29tLFxuICAgICAgICBtZW51RGl2Wm9vbSxcbiAgICAgICAgY29sb3Vyc0ludmVydGVkLFxuICAgICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgdmlld1pvb207XG5cbiAgKHsgdmlld1pvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgdmlld1pvb20gPSBvcmllbnRlZFZpZXdab29tOyAgLy8vXG5cbiAgcmV0dXJuIHZpZXdab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Vmlld1pvb20odmlld1pvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkVmlld1pvb20gPSB2aWV3Wm9vbTsgIC8vL1xuXG4gICh7IHZpZXdab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbih2aWV3Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkVmlld1pvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVudURpdlpvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGxldCBtZW51RGl2Wm9vbTtcblxuICAoeyBtZW51RGl2Wm9vbSB9ID0gc3RhdGUpO1xuXG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlLFxuICAgICAgICBvcmllbnRlZE1lbnVEaXZab29tID0gbWVudURpdlpvb21bb3JpZW50YXRpb25dOyAvLy9cblxuICBtZW51RGl2Wm9vbSA9IG9yaWVudGVkTWVudURpdlpvb207ICAvLy9cblxuICByZXR1cm4gbWVudURpdlpvb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZW51RGl2Wm9vbShtZW51RGl2Wm9vbSkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51RGl2Wm9vbSA9IG1lbnVEaXZab29tOyAgLy8vXG5cbiAgKHsgbWVudURpdlpvb20gfSA9IHN0YXRlKTtcblxuICBPYmplY3QuYXNzaWduKG1lbnVEaXZab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWRNZW51RGl2Wm9vbVxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgb3JpZW50YXRpb25cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb2xvdXJzSW52ZXJ0ZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gY29sb3Vyc0ludmVydGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgY29sb3Vyc0ludmVydGVkXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVBlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgdXBkYXRlUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlUGVyc2lzdGVudFN0YXRlKCkge1xuICBudWxsaWZ5UGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BlcnNpc3RlbnRTdGF0ZUVuYWJsZWQoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpLFxuICAgICAgICBwZXJzaXN0ZW50U3RhdGVFbmFibGVkID0gKHBlcnNpc3RlbnRTdGF0ZSAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHBlcnNpc3RlbnRTdGF0ZUVuYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyB2aWV3Wm9vbSwgbWVudURpdlpvb20sIGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICB2aWV3Wm9vbSxcbiAgICAgICAgICBtZW51RGl2Wm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgICAgICAgfTtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gbnVsbGlmeVBlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlID0gbnVsbDtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGVFbmFibGVkID0gaXNQZXJzaXN0ZW50U3RhdGVFbmFibGVkKCk7XG5cbiAgaWYgKCFwZXJzaXN0ZW50U3RhdGVFbmFibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlID0gZ2V0UGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlRW5hYmxlZCA9IGlzUGVyc2lzdGVudFN0YXRlRW5hYmxlZCgpO1xuXG4gIGlmICghcGVyc2lzdGVudFN0YXRlRW5hYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZVBlcnNpc3RlbnRTdGF0ZSgpO1xufVxuIl0sIm5hbWVzIjpbImFyZUNvbG91cnNJbnZlcnRlZCIsImRpc2FibGVQZXJzaXN0ZW50U3RhdGUiLCJlbmFibGVQZXJzaXN0ZW50U3RhdGUiLCJnZXRNZW51RGl2Wm9vbSIsImdldFZpZXdab29tIiwiaXNQZXJzaXN0ZW50U3RhdGVFbmFibGVkIiwic2V0Q29sb3Vyc0ludmVydGVkIiwic2V0TWVudURpdlpvb20iLCJzZXRPcmllbnRhdGlvbiIsInNldFZpZXdab29tIiwib3JpZW50YXRpb24iLCJ2aWV3Wm9vbSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwibWVudURpdlpvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJzdGF0ZSIsInN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSIsIm9yaWVudGVkVmlld1pvb20iLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwib3JpZW50ZWRNZW51RGl2Wm9vbSIsInVwZGF0ZVBlcnNpc3RlbnRTdGF0ZSIsIm51bGxpZnlQZXJzaXN0ZW50U3RhdGUiLCJwZXJzaXN0ZW50U3RhdGUiLCJnZXRQZXJzaXN0ZW50U3RhdGUiLCJwZXJzaXN0ZW50U3RhdGVFbmFibGVkIiwic2V0UGVyc2lzdGVudFN0YXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0ZnQkEsa0JBQWtCO2VBQWxCQTs7SUFzQkFDLHNCQUFzQjtlQUF0QkE7O0lBSkFDLHFCQUFxQjtlQUFyQkE7O0lBdERBQyxjQUFjO2VBQWRBOztJQTlCQUMsV0FBVztlQUFYQTs7SUE0RkFDLHdCQUF3QjtlQUF4QkE7O0lBbEJBQyxrQkFBa0I7ZUFBbEJBOztJQTdCQUMsY0FBYztlQUFkQTs7SUFlQUMsY0FBYztlQUFkQTs7SUE3Q0FDLFdBQVc7ZUFBWEE7Ozs0QkFuQ3VDO3lCQUNLOzs7Ozs7Ozs7Ozs7OztJQUczQyxNQUlHO0FBTHBCLElBQU1DLGNBQWMsTUFDZEMsWUFBVyxXQUNULGlCQURTLE1BQ1JDLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZTLE1BRVJDLGdDQUFxQixFQUFHLElBRmhCLE9BSVhDLGVBQWMsWUFDWixpQkFEWSxPQUNY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