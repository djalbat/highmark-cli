"use strict";

import { STATE_KEY } from "./constants";

export function getPersistentState() {
  let persistentState = null;

  const key = STATE_KEY,
        value = localStorage.getItem(key);

  if (value !== null) {
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
