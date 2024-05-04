"use strict";

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
