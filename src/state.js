"use strict";

import { isFullScreen } from "./utilities/fullScreen";
import { getPersistentState, setPersistentState } from "./localStorage";

const orientation = null,
      state = {
        orientation
      };

export function getViewZoom() {
  stateFromPersistentState();

  const fullScreen = isFullScreen(),
        orientation = getOrientation();

  let viewZoom;

  if (fullScreen) {
    ({ fullScreenViewZoom: viewZoom } = state);
  } else {
    ({ viewZoom } = state);
  }

  const orientedViewZoom = viewZoom[orientation]; ///

  viewZoom = orientedViewZoom;  ///

  return viewZoom;
}

export function setViewZoom(viewZoom) {
  stateFromPersistentState();

  const fullScreen = isFullScreen(),
        orientation = getOrientation();

  const orientedViewZoom = viewZoom;  ///

  if (fullScreen) {
    ({ fullScreenViewZoom: viewZoom } = state);
  } else {
    ({ viewZoom } = state);
  }

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
  const { viewZoom, menuDivZoom, fullScreenViewZoom, coloursInverted } = state,
        persistentState = {
          viewZoom,
          menuDivZoom,
          fullScreenViewZoom,
          coloursInverted
        };

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}
