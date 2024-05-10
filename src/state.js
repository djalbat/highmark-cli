"use strict";

import { isFullScreen } from "./utilities/fullScreen";
import { getPersistentState, setPersistentState } from "./localStorage";

const orientation = null,
      state = {
        orientation
      };

export function getMenuZoom() {
  stateFromPersistentState();

  let menuZoom;

  ({ menuZoom } = state);

  const { orientation } = state,
        orientedMenuZoom = menuZoom[orientation]; ///

  menuZoom = orientedMenuZoom;  ///

  return menuZoom;
}

export function setMenuZoom(menuZoom) {
  stateFromPersistentState();

  const { orientation } = state,
        orientedMenuZoom = menuZoom;  ///

  ({ menuZoom } = state);

  Object.assign(menuZoom, {
    [orientation]: orientedMenuZoom
  });

  stateToPersistentState();
}

export function getOverlayZoom() {
  stateFromPersistentState();

  const fullScreen = isFullScreen(),
        orientation = getOrientation();

  let overlayZoom;

  if (fullScreen) {
    ({ fullScreenOverlayZoom: overlayZoom } = state);
  } else {
    ({ overlayZoom } = state);
  }

  const orientedOverlayZoom = overlayZoom[orientation]; ///

  overlayZoom = orientedOverlayZoom;  ///

  return overlayZoom;
}

export function setOverlayZoom(overlayZoom) {
  stateFromPersistentState();

  const fullScreen = isFullScreen(),
        orientation = getOrientation();

  const orientedOverlayZoom = overlayZoom;  ///

  if (fullScreen) {
    ({ fullScreenOverlayZoom: overlayZoom } = state);
  } else {
    ({ overlayZoom } = state);
  }

  Object.assign(overlayZoom, {
    [orientation]: orientedOverlayZoom
  });

  stateToPersistentState();
}

export function getOrientation() {
  const { orientation } = state;

  return orientation;
}

export function setOrientation(orientation) {
  Object.assign(state, {
    orientation
  });
}

export function areColoursInverted() {
  stateFromPersistentState();

  const { coloursInverted } = state;

  return coloursInverted;
}

export function setColoursInverted(coloursInverted) {
  stateFromPersistentState();

  Object.assign(state, {
    coloursInverted
  });

  stateToPersistentState();
}

function stateToPersistentState() {
  const { overlayZoom, menuZoom, fullScreenOverlayZoom, coloursInverted } = state,
        persistentState = {
          overlayZoom,
          menuZoom,
          fullScreenOverlayZoom,
          coloursInverted
        };

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}
