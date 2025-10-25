"use strict";

import { VERSION_1_2 } from "../versions";

import { DEFAULT_LINES_PER_PAGE, DEFAULT_CHARACTERS_PER_LINE } from "../defaults";

export function migrateToVersion1_2(json) {
  const version = VERSION_1_2,
        linesPerPage = DEFAULT_LINES_PER_PAGE,
        charactersPerLine = DEFAULT_CHARACTERS_PER_LINE;

  json = Object.assign({}, json, {
    version,
    linesPerPage,
    charactersPerLine
  });

  return json;
}
