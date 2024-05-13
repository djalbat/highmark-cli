"use strict";

import { STATE_KEY, LANDSCAPE_ORIENTATION, PORTRAIT_ORIENTATION } from "./constants";

const menuZoom = {
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
      defaultPersistentState = {
        menuZoom,
        overlayZoom,
        fullScreenOverlayZoom,
        nativeGesturesRestored,
        coloursInverted
      };

export function getPersistentState() {
  let persistentState;

  const key = STATE_KEY,
        value = localStorage.getItem(key);

  if (value === null) {
    persistentState = defaultPersistentState; ///
  } else {
    const persistentStateString = value;  ///

    persistentState = JSON.parse(persistentStateString);
  }

  return persistentState;
}

export function setPersistentState(persistentState) {
  const persistentStateString = JSON.stringify(persistentState),
        key = STATE_KEY,
        value = persistentStateString;  ///

  localStorage.setItem(key, value);
}

