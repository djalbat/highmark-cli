"use strict";

const { VERSION_1_2 } = require("../versions");

const { DEFAULT_CONTENTS_DEPTH, DEFAULT_LINES_PER_PAGE, DEFAULT_CHARACTERS_PER_LINE } = require("../defaults");

function createConfiguration() {
  const version = VERSION_1_2,
        linesPerPage = DEFAULT_LINES_PER_PAGE,
        contentsDepth = DEFAULT_CONTENTS_DEPTH,
        charactersPerLine = DEFAULT_CHARACTERS_PER_LINE,
        configuration = {
          version,
          linesPerPage,
          contentsDepth,
          charactersPerLine
        };

  return configuration;
}

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
  createConfiguration,
  migrateToVersion1_2
};
