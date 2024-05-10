"use strict";

import { HASH, EMPTY_STRING } from "../constants";

export function resetFragment() {
  let { href } = location;

  const index = href.indexOf(HASH);

  if (index === -1) {
    return;
  }

  const start = 0,
    end = index;  ///

  href = href.substring(start, end); ///

  history.replaceState({}, EMPTY_STRING, href);
}
