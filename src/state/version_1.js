"use strict";

import { VERSION_1 } from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function createState() {
  const version = VERSION_1,
        menuZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 0.5
        },
        overlayZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        fullScreenOverlayZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        coloursInverted = false,
        nativeGesturesRestored = false,
        state = {
          version,
          menuZoom,
          overlayZoom,
          fullScreenOverlayZoom,
          nativeGesturesRestored,
          coloursInverted
        };

  return state;
}
