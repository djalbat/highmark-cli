"use strict";

export function isEntryNameHiddenName(entryName) {
  const nameHiddenName = /^\..+/.test(entryName);

  return nameHiddenName;
}
