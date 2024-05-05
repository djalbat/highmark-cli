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
var persistentState = (0, _localStorage.getPersistentState)(), orientation = null, state = {
    orientation: orientation
};
if (persistentState !== null) {
    Object.assign(state, persistentState);
} else {
    var _obj, _obj1;
    var viewZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), menuDivZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), coloursInverted = false;
    Object.assign(state, {
        viewZoom: viewZoom,
        menuDivZoom: menuDivZoom,
        coloursInverted: coloursInverted
    });
}
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
function stateToPersistentState() {
    var viewZoom = state.viewZoom, menuDivZoom = state.menuDivZoom, coloursInverted = state.coloursInverted, persistentState = {
        viewZoom: viewZoom,
        menuDivZoom: menuDivZoom,
        coloursInverted: coloursInverted
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0UGVyc2lzdGVudFN0YXRlLCBzZXRQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IFBPUlRSQUlUX09SSUVOVEFUSU9OLCBMQU5EU0NBUEVfT1JJRU5UQVRJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgcGVyc2lzdGVudFN0YXRlID0gZ2V0UGVyc2lzdGVudFN0YXRlKCksXG4gICAgICBvcmllbnRhdGlvbiA9IG51bGwsXG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3JpZW50YXRpb25cbiAgICAgIH07XG5cbmlmIChwZXJzaXN0ZW50U3RhdGUgIT09IG51bGwpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGVyc2lzdGVudFN0YXRlKTtcbn0gZWxzZSB7XG4gIGNvbnN0IHZpZXdab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgbWVudURpdlpvb20gPSB7XG4gICAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgICB9LFxuICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgdmlld1pvb20sXG4gICAgbWVudURpdlpvb20sXG4gICAgY29sb3Vyc0ludmVydGVkXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld1pvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGxldCB2aWV3Wm9vbTtcblxuICAoeyB2aWV3Wm9vbSB9ID0gc3RhdGUpO1xuXG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlLFxuICAgICAgICBvcmllbnRlZFZpZXdab29tID0gdmlld1pvb21bb3JpZW50YXRpb25dOyAvLy9cblxuICB2aWV3Wm9vbSA9IG9yaWVudGVkVmlld1pvb207ICAvLy9cblxuICByZXR1cm4gdmlld1pvb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaWV3Wm9vbSh2aWV3Wm9vbSkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tOyAgLy8vXG5cbiAgKHsgdmlld1pvb20gfSA9IHN0YXRlKTtcblxuICBPYmplY3QuYXNzaWduKHZpZXdab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWRWaWV3Wm9vbVxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51RGl2Wm9vbSgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgbGV0IG1lbnVEaXZab29tO1xuXG4gICh7IG1lbnVEaXZab29tIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudURpdlpvb20gPSBtZW51RGl2Wm9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIG1lbnVEaXZab29tID0gb3JpZW50ZWRNZW51RGl2Wm9vbTsgIC8vL1xuXG4gIHJldHVybiBtZW51RGl2Wm9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1lbnVEaXZab29tKG1lbnVEaXZab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlLFxuICAgICAgICBvcmllbnRlZE1lbnVEaXZab29tID0gbWVudURpdlpvb207ICAvLy9cblxuICAoeyBtZW51RGl2Wm9vbSB9ID0gc3RhdGUpO1xuXG4gIE9iamVjdC5hc3NpZ24obWVudURpdlpvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZE1lbnVEaXZab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbG91cnNJbnZlcnRlZCgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBjb2xvdXJzSW52ZXJ0ZWQgfSA9IHN0YXRlO1xuXG4gIHJldHVybiBjb2xvdXJzSW52ZXJ0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBjb2xvdXJzSW52ZXJ0ZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCB7IHZpZXdab29tLCBtZW51RGl2Wm9vbSwgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZSxcbiAgICAgICAgcGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICAgIHZpZXdab29tLFxuICAgICAgICAgIG1lbnVEaXZab29tLFxuICAgICAgICAgIGNvbG91cnNJbnZlcnRlZFxuICAgICAgICB9O1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBlcnNpc3RlbnRTdGF0ZSk7XG59XG4iXSwibmFtZXMiOlsiYXJlQ29sb3Vyc0ludmVydGVkIiwiZ2V0TWVudURpdlpvb20iLCJnZXRWaWV3Wm9vbSIsInNldENvbG91cnNJbnZlcnRlZCIsInNldE1lbnVEaXZab29tIiwic2V0T3JpZW50YXRpb24iLCJzZXRWaWV3Wm9vbSIsInBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aWV3Wm9vbSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwibWVudURpdlpvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJvcmllbnRlZFZpZXdab29tIiwic3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSIsIm9yaWVudGVkTWVudURpdlpvb20iLCJzZXRQZXJzaXN0ZW50U3RhdGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFpR2dCQSxrQkFBa0I7ZUFBbEJBOztJQXBDQUMsY0FBYztlQUFkQTs7SUE5QkFDLFdBQVc7ZUFBWEE7O0lBMEVBQyxrQkFBa0I7ZUFBbEJBOztJQTdCQUMsY0FBYztlQUFkQTs7SUFlQUMsY0FBYztlQUFkQTs7SUE3Q0FDLFdBQVc7ZUFBWEE7Ozs0QkE1Q3VDO3lCQUNLOzs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNQyxrQkFBa0JDLElBQUFBLGdDQUFrQixLQUNwQ0MsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFTixJQUFJRixvQkFBb0IsTUFBTTtJQUM1QkksT0FBT0MsTUFBTSxDQUFDRixPQUFPSDtBQUN2QixPQUFPO1FBQ1ksTUFJRztJQUpwQixJQUFNTSxZQUFXLFdBQ1QsaUJBRFMsTUFDUkMsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRlMsTUFFUkMsZ0NBQXFCLEVBQUcsSUFGaEIsT0FJWEMsZUFBYyxZQUNaLGlCQURZLE9BQ1hGLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZZLE9BRVhDLGdDQUFxQixFQUFHLElBRmIsUUFJZEUsa0JBQWtCO0lBRXhCTixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJHLFVBQUFBO1FBQ0FHLGFBQUFBO1FBQ0FDLGlCQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTZjtJQUNkZ0I7SUFFQSxJQUFJTDtJQUVEQSxXQUFhSCxNQUFiRztJQUVILElBQU0sQUFBRUosY0FBZ0JDLE1BQWhCRCxhQUNGVSxtQkFBbUJOLFFBQVEsQ0FBQ0osWUFBWSxFQUFFLEdBQUc7SUFFbkRJLFdBQVdNLGtCQUFtQixHQUFHO0lBRWpDLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTUCxZQUFZTyxRQUFRO0lBQ2xDSztJQUVBLElBQU0sQUFBRVQsY0FBZ0JDLE1BQWhCRCxhQUNGVSxtQkFBbUJOLFVBQVcsR0FBRztJQUVwQ0EsV0FBYUgsTUFBYkc7SUFFSEYsT0FBT0MsTUFBTSxDQUFDQyxVQUNaLHFCQUFDSixhQUFjVTtJQUdqQkM7QUFDRjtBQUVPLFNBQVNuQjtJQUNkaUI7SUFFQSxJQUFJRjtJQUVEQSxjQUFnQk4sTUFBaEJNO0lBRUgsSUFBTSxBQUFFUCxjQUFnQkMsTUFBaEJELGFBQ0ZZLHNCQUFzQkwsV0FBVyxDQUFDUCxZQUFZLEVBQUUsR0FBRztJQUV6RE8sY0FBY0sscUJBQXNCLEdBQUc7SUFFdkMsT0FBT0w7QUFDVDtBQUVPLFNBQVNaLGVBQWVZLFdBQVc7SUFDeENFO0lBRUEsSUFBTSxBQUFFVCxjQUFnQkMsTUFBaEJELGFBQ0ZZLHNCQUFzQkwsYUFBYyxHQUFHO0lBRTFDQSxjQUFnQk4sTUFBaEJNO0lBRUhMLE9BQU9DLE1BQU0sQ0FBQ0ksYUFDWixxQkFBQ1AsYUFBY1k7SUFHakJEO0FBQ0Y7QUFFTyxTQUFTZixlQUFlSSxXQUFXO0lBQ3hDRSxPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJELGFBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNUO0lBQ2RrQjtJQUVBLElBQU0sQUFBRUQsa0JBQW9CUCxNQUFwQk87SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU2QsbUJBQW1CYyxlQUFlO0lBQ2hEQztJQUVBUCxPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJPLGlCQUFBQTtJQUNGO0lBRUFHO0FBQ0Y7QUFFQSxTQUFTQTtJQUNQLElBQVFQLFdBQTJDSCxNQUEzQ0csVUFBVUcsY0FBaUNOLE1BQWpDTSxhQUFhQyxrQkFBb0JQLE1BQXBCTyxpQkFDekJWLGtCQUFrQjtRQUNoQk0sVUFBQUE7UUFDQUcsYUFBQUE7UUFDQUMsaUJBQUFBO0lBQ0Y7SUFFTkssSUFBQUEsZ0NBQWtCLEVBQUNmO0FBQ3JCO0FBRUEsU0FBU1c7SUFDUCxJQUFNWCxrQkFBa0JDLElBQUFBLGdDQUFrQjtJQUUxQ0csT0FBT0MsTUFBTSxDQUFDRixPQUFPSDtBQUN2QiJ9