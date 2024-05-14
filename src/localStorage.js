"use strict";

import { STATE_KEY } from "./constants";
import { createState } from "./state/version_1";
import { migrateState } from "./migrate";

const state = createState(),
      defaultState = state; ///

export function getPersistentState() {
  let persistentState,
      state;

  const key = STATE_KEY,
        value = localStorage.getItem(key);

  if (value === null) {
    state = defaultState; ///
  } else {
    const jsonString = value,  ///
          json = JSON.parse(jsonString);

    state = json; ///

    state = migrateState(state);
  }

  persistentState = state;  ///

  return persistentState;
}

export function setPersistentState(persistentState) {
  const json = persistentState, ///
        jsonString = JSON.stringify(json),
        key = STATE_KEY,
        value = jsonString;  ///

  localStorage.setItem(key, value);
}
