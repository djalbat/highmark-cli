"use strict";

import { STATE_KEY } from "./constants";

export function getPersistentState() {
  let persistentState;

  const key = STATE_KEY,
        value = localStorage.getItem(key);

  if (value === null) {
    persistentState = null;
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
