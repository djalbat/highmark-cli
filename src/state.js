"use strict";

import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "./constants";

const viewZoom = {
        [PORTRAIT_ORIENTATION]: 1,
        [LANDSCAPE_ORIENTATION]: 1
      },
      menuDivZoom = {
        [PORTRAIT_ORIENTATION]: 1,
        [LANDSCAPE_ORIENTATION]: 1
      },
      orientation = null,
      state = {
        viewZoom,
        menuDivZoom,
        orientation
      };

export function getViewZoom() {
  let viewZoom;

  ({ viewZoom } = state);

  const { orientation } = state,
        orientedViewZoom = viewZoom[orientation]; ///

  viewZoom = orientedViewZoom;  ///

  return viewZoom;
}

export function setViewZoom(viewZoom) {
  const { orientation } = state,
        orientedViewZoom = viewZoom;  ///

  ({ viewZoom } = state);

  Object.assign(viewZoom, {
    [orientation]: orientedViewZoom
  });
}

export function getMenuDivZoom() {
  let menuDivZoom;

  ({ menuDivZoom } = state);

  const { orientation } = state,
    orientedMenuDivZoom = menuDivZoom[orientation]; ///

  menuDivZoom = orientedMenuDivZoom;  ///

  return menuDivZoom;
}

export function setMenuDivZoom(menuDivZoom) {
  const { orientation } = state,
    orientedMenuDivZoom = menuDivZoom;  ///

  ({ menuDivZoom } = state);

  Object.assign(menuDivZoom, {
    [orientation]: orientedMenuDivZoom
  });
}

export function setOrientation(orientation) {
  Object.assign(state, {
    orientation
  });
}
