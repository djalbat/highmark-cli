"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createState", {
    enumerable: true,
    get: function() {
        return createState;
    }
});
var _versions = require("../versions");
var _constants = require("../constants");
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
function createState() {
    var _obj, _obj1, _obj2;
    var version = _versions.VERSION_1, menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 0.5), _obj), overlayZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenOverlayZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), coloursInverted = false, nativeGesturesRestored = false, state = {
        version: version,
        menuZoom: menuZoom,
        overlayZoom: overlayZoom,
        fullScreenOverlayZoom: fullScreenOverlayZoom,
        nativeGesturesRestored: nativeGesturesRestored,
        coloursInverted: coloursInverted
    };
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uXzEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlNJT05fMSB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuaW1wb3J0IHsgUE9SVFJBSVRfT1JJRU5UQVRJT04sIExBTkRTQ0FQRV9PUklFTlRBVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlKCkge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl8xLFxuICAgICAgICBtZW51Wm9vbSA9IHtcbiAgICAgICAgICBbUE9SVFJBSVRfT1JJRU5UQVRJT05dOiAxLFxuICAgICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAwLjVcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheVpvb20gPSB7XG4gICAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgICB9LFxuICAgICAgICBmdWxsU2NyZWVuT3ZlcmxheVpvb20gPSB7XG4gICAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgICB9LFxuICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZSxcbiAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIG92ZXJsYXlab29tLFxuICAgICAgICAgIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSxcbiAgICAgICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkLFxuICAgICAgICAgIGNvbG91cnNJbnZlcnRlZFxuICAgICAgICB9O1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVTdGF0ZSIsInZlcnNpb24iLCJWRVJTSU9OXzEiLCJtZW51Wm9vbSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwib3ZlcmxheVpvb20iLCJmdWxsU2NyZWVuT3ZlcmxheVpvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic3RhdGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLZ0JBOzs7ZUFBQUE7Ozt3QkFIVTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7O0FBRXJELFNBQVNBO1FBRUcsTUFJRyxPQUlVO0lBVDlCLElBQU1DLFVBQVVDLG1CQUFTLEVBQ25CQyxZQUFXLFdBQ1QsaUJBRFMsTUFDUkMsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRlMsTUFFUkMsZ0NBQXFCLEVBQUcsTUFGaEIsT0FJWEMsZUFBYyxZQUNaLGlCQURZLE9BQ1hGLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZZLE9BRVhDLGdDQUFxQixFQUFHLElBRmIsUUFJZEUseUJBQXdCLFlBQ3RCLGlCQURzQixPQUNyQkgsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRnNCLE9BRXJCQyxnQ0FBcUIsRUFBRyxJQUZILFFBSXhCRyxrQkFBa0IsT0FDbEJDLHlCQUF5QixPQUN6QkMsUUFBUTtRQUNOVCxTQUFBQTtRQUNBRSxVQUFBQTtRQUNBRyxhQUFBQTtRQUNBQyx1QkFBQUE7UUFDQUUsd0JBQUFBO1FBQ0FELGlCQUFBQTtJQUNGO0lBRU4sT0FBT0U7QUFDVCJ9