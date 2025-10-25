"use strict";

import { VERSION_1_1 } from "../versions";

import { DEFAULT_CONTENTS_DEPTH } from "../defaults";

export function migrateToVersion1_1(json) {
  const version = VERSION_1_1,
        contentsDepth = DEFAULT_CONTENTS_DEPTH;

  json = Object.assign({}, json, {
    version,
    contentsDepth
  });

  return json;
}