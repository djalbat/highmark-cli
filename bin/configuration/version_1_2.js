"use strict";

const { VERSION_1_2 } = require("../versions");

const { DEFAULT_LINES_PER_PAGE, DEFAULT_CHARACTERS_PER_LINE } = require("../defaults");

function migrateToVersion1_2(json) {
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
module.exports = {
  migrateToVersion1_2
};
