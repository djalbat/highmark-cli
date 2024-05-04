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
    getMenuDivZoom: function() {
        return getMenuDivZoom;
    },
    getViewZoom: function() {
        return getViewZoom;
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
var viewZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), menuDivZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), orientation = null, state = {
    viewZoom: viewZoom,
    menuDivZoom: menuDivZoom,
    orientation: orientation
};
function getViewZoom() {
    var viewZoom;
    viewZoom = state.viewZoom;
    var orientation = state.orientation, orientedViewZoom = viewZoom[orientation]; ///
    viewZoom = orientedViewZoom; ///
    return viewZoom;
}
function setViewZoom(viewZoom) {
    var orientation = state.orientation, orientedViewZoom = viewZoom; ///
    viewZoom = state.viewZoom;
    Object.assign(viewZoom, _define_property({}, orientation, orientedViewZoom));
}
function getMenuDivZoom() {
    var menuDivZoom;
    menuDivZoom = state.menuDivZoom;
    var orientation = state.orientation, orientedMenuDivZoom = menuDivZoom[orientation]; ///
    menuDivZoom = orientedMenuDivZoom; ///
    return menuDivZoom;
}
function setMenuDivZoom(menuDivZoom) {
    var orientation = state.orientation, orientedMenuDivZoom = menuDivZoom; ///
    menuDivZoom = state.menuDivZoom;
    Object.assign(menuDivZoom, _define_property({}, orientation, orientedMenuDivZoom));
}
function setOrientation(orientation) {
    Object.assign(state, {
        orientation: orientation
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUE9SVFJBSVRfT1JJRU5UQVRJT04sIExBTkRTQ0FQRV9PUklFTlRBVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB2aWV3Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBtZW51RGl2Wm9vbSA9IHtcbiAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgIH0sXG4gICAgICBvcmllbnRhdGlvbiA9IG51bGwsXG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmlld1pvb20sXG4gICAgICAgIG1lbnVEaXZab29tLFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdab29tKCkge1xuICBsZXQgdmlld1pvb207XG5cbiAgKHsgdmlld1pvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRWaWV3Wm9vbSA9IHZpZXdab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgdmlld1pvb20gPSBvcmllbnRlZFZpZXdab29tOyAgLy8vXG5cbiAgcmV0dXJuIHZpZXdab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Vmlld1pvb20odmlld1pvb20pIHtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkVmlld1pvb20gPSB2aWV3Wm9vbTsgIC8vL1xuXG4gICh7IHZpZXdab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbih2aWV3Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkVmlld1pvb21cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51RGl2Wm9vbSgpIHtcbiAgbGV0IG1lbnVEaXZab29tO1xuXG4gICh7IG1lbnVEaXZab29tIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgb3JpZW50ZWRNZW51RGl2Wm9vbSA9IG1lbnVEaXZab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudURpdlpvb20gPSBvcmllbnRlZE1lbnVEaXZab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVEaXZab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudURpdlpvb20obWVudURpdlpvb20pIHtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgb3JpZW50ZWRNZW51RGl2Wm9vbSA9IG1lbnVEaXZab29tOyAgLy8vXG5cbiAgKHsgbWVudURpdlpvb20gfSA9IHN0YXRlKTtcblxuICBPYmplY3QuYXNzaWduKG1lbnVEaXZab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWRNZW51RGl2Wm9vbVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRNZW51RGl2Wm9vbSIsImdldFZpZXdab29tIiwic2V0TWVudURpdlpvb20iLCJzZXRPcmllbnRhdGlvbiIsInNldFZpZXdab29tIiwidmlld1pvb20iLCJQT1JUUkFJVF9PUklFTlRBVElPTiIsIkxBTkRTQ0FQRV9PUklFTlRBVElPTiIsIm1lbnVEaXZab29tIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsIm9yaWVudGVkVmlld1pvb20iLCJPYmplY3QiLCJhc3NpZ24iLCJvcmllbnRlZE1lbnVEaXZab29tIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMkNnQkEsY0FBYztlQUFkQTs7SUF4QkFDLFdBQVc7ZUFBWEE7O0lBcUNBQyxjQUFjO2VBQWRBOztJQVdBQyxjQUFjO2VBQWRBOztJQW5DQUMsV0FBVztlQUFYQTs7O3lCQTlCNEM7Ozs7Ozs7Ozs7Ozs7O0lBRTNDLE1BSUc7QUFKcEIsSUFBTUMsWUFBVyxXQUNULGlCQURTLE1BQ1JDLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZTLE1BRVJDLGdDQUFxQixFQUFHLElBRmhCLE9BSVhDLGVBQWMsWUFDWixpQkFEWSxPQUNYRiwrQkFBb0IsRUFBRyxJQUN4QixpQkFGWSxPQUVYQyxnQ0FBcUIsRUFBRyxJQUZiLFFBSWRFLGNBQWMsTUFDZEMsUUFBUTtJQUNOTCxVQUFBQTtJQUNBRyxhQUFBQTtJQUNBQyxhQUFBQTtBQUNGO0FBRUMsU0FBU1I7SUFDZCxJQUFJSTtJQUVEQSxXQUFhSyxNQUFiTDtJQUVILElBQU0sQUFBRUksY0FBZ0JDLE1BQWhCRCxhQUNGRSxtQkFBbUJOLFFBQVEsQ0FBQ0ksWUFBWSxFQUFFLEdBQUc7SUFFbkRKLFdBQVdNLGtCQUFtQixHQUFHO0lBRWpDLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTRCxZQUFZQyxRQUFRO0lBQ2xDLElBQU0sQUFBRUksY0FBZ0JDLE1BQWhCRCxhQUNGRSxtQkFBbUJOLFVBQVcsR0FBRztJQUVwQ0EsV0FBYUssTUFBYkw7SUFFSE8sT0FBT0MsTUFBTSxDQUFDUixVQUNaLHFCQUFDSSxhQUFjRTtBQUVuQjtBQUVPLFNBQVNYO0lBQ2QsSUFBSVE7SUFFREEsY0FBZ0JFLE1BQWhCRjtJQUVILElBQU0sQUFBRUMsY0FBZ0JDLE1BQWhCRCxhQUNOSyxzQkFBc0JOLFdBQVcsQ0FBQ0MsWUFBWSxFQUFFLEdBQUc7SUFFckRELGNBQWNNLHFCQUFzQixHQUFHO0lBRXZDLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTTixlQUFlTSxXQUFXO0lBQ3hDLElBQU0sQUFBRUMsY0FBZ0JDLE1BQWhCRCxhQUNOSyxzQkFBc0JOLGFBQWMsR0FBRztJQUV0Q0EsY0FBZ0JFLE1BQWhCRjtJQUVISSxPQUFPQyxNQUFNLENBQUNMLGFBQ1oscUJBQUNDLGFBQWNLO0FBRW5CO0FBRU8sU0FBU1gsZUFBZU0sV0FBVztJQUN4Q0csT0FBT0MsTUFBTSxDQUFDSCxPQUFPO1FBQ25CRCxhQUFBQTtJQUNGO0FBQ0YifQ==