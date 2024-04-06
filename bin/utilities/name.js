"use strict";

function isEntryNameHiddenName(entryName) {
  const nameHiddenName = /^\..+/.test(entryName);

  return nameHiddenName;
}

module.exports = {
  isEntryNameHiddenName
};
