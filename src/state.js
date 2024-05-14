"use strict";

import { fullScreenUtilities } from "easy-mobile";

import { getPersistentState, setPersistentState } from "./localStorage";

const { isFullScreen } = fullScreenUtilities;

const orientation = null,
      state = {
        orientation
      };

export function getOrientation() {
  const { orientation } = state;

  return orientation;
}

export function setOrientation(orientation) {
  Object.assign(state, {
    orientation
  });
}

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

export function areNativeGesturesRestored() {
  stateFromPersistentState();

  const { nativeGesturesRestored } = state;

  return nativeGesturesRestored;
}

export function setNativeGesturesRestored(nativeGesturesRestored) {
  stateFromPersistentState();

  Object.assign(state, {
    nativeGesturesRestored
  });

  stateToPersistentState();
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
  const { version, menuZoom, overlayZoom, fullScreenOverlayZoom, nativeGesturesRestored, coloursInverted } = state,
        persistentState = {
          version,
          menuZoom,
          overlayZoom,
          fullScreenOverlayZoom,
          nativeGesturesRestored,
          coloursInverted
        };

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}
