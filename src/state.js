"use strict";

import { getPersistentState, setPersistentState } from "./localStorage";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "./constants";

const orientation = null,
      viewZoom = {
        [PORTRAIT_ORIENTATION]: 1,
        [LANDSCAPE_ORIENTATION]: 1
      },
      menuDivZoom = {
        [PORTRAIT_ORIENTATION]: 1,
        [LANDSCAPE_ORIENTATION]: 1
      },
      coloursInverted = false,
      state = {
        orientation,
        viewZoom,
        menuDivZoom,
        coloursInverted,
      };

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

export function enablePersistentState() {
  updatePersistentState();
}

export function disablePersistentState() {
  nullifyPersistentState();
}

export function isPersistentStateEnabled() {
  const persistentState = getPersistentState(),
        persistentStateEnabled = (persistentState !== null);

  return persistentStateEnabled;
}

function updatePersistentState() {
  const { viewZoom, menuDivZoom, coloursInverted } = state,
        persistentState = {
          viewZoom,
          menuDivZoom,
          coloursInverted
        };

  setPersistentState(persistentState);
}

function nullifyPersistentState() {
  const persistentState = null;

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentStateEnabled = isPersistentStateEnabled();

  if (!persistentStateEnabled) {
    return;
  }

  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}

function stateToPersistentState() {
  const persistentStateEnabled = isPersistentStateEnabled();

  if (!persistentStateEnabled) {
    return;
  }

  updatePersistentState();
}
