"use strict";

import { getPersistentState, setPersistentState } from "./localStorage";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "./constants";

const persistentState = getPersistentState(),
      orientation = null,
      state = {
        orientation
      };

if (persistentState !== null) {
  Object.assign(state, persistentState);
} else {
  const viewZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        menuDivZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        coloursInverted = false;

  Object.assign(state, {
    viewZoom,
    menuDivZoom,
    coloursInverted
  });
}

export function getViewZoom() {
  stateFromPersistentState();

  let viewZoom;

  ({ viewZoom } = state);

  const { orientation } = state,
        orientedViewZoom = viewZoom[orientation]; ///

  viewZoom = orientedViewZoom;  ///

  return viewZoom;
}

export function setViewZoom(viewZoom) {
  stateFromPersistentState();

  const { orientation } = state,
        orientedViewZoom = viewZoom;  ///

  ({ viewZoom } = state);

  Object.assign(viewZoom, {
    [orientation]: orientedViewZoom
  });

  stateToPersistentState();
}

export function getMenuDivZoom() {
  stateFromPersistentState();

  let menuDivZoom;

  ({ menuDivZoom } = state);

  const { orientation } = state,
        orientedMenuDivZoom = menuDivZoom[orientation]; ///

  menuDivZoom = orientedMenuDivZoom;  ///

  return menuDivZoom;
}

export function setMenuDivZoom(menuDivZoom) {
  stateFromPersistentState();

  const { orientation } = state,
        orientedMenuDivZoom = menuDivZoom;  ///

  ({ menuDivZoom } = state);

  Object.assign(menuDivZoom, {
    [orientation]: orientedMenuDivZoom
  });

  stateToPersistentState();
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
  const { viewZoom, menuDivZoom, coloursInverted } = state,
        persistentState = {
          viewZoom,
          menuDivZoom,
          coloursInverted
        };

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}
