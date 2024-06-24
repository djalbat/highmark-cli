"use strict";

const { VERSION_1_3 } = require("../versions");

const { DEFAULT_CONTENTS_DEPTH, DEFAULT_LINES_PER_PAGE, DEFAULT_CHARACTERS_PER_LINE } = require("../defaults");

function createConfiguration() {
  const version = VERSION_1_3,
        linesPerPage = DEFAULT_LINES_PER_PAGE,
        contentsDepth = DEFAULT_CONTENTS_DEPTH,
        charactersPerLine = DEFAULT_CHARACTERS_PER_LINE,
        options = {
          linesPerPage,
          contentsDepth,
          charactersPerLine
        },
        configuration = {
          version,
          options
        };

  return configuration;
}

function migrateToVersion1_3(json) {
  const { linesPerPage,
          contentsDepth,
          charactersPerLine } = json,
        version = VERSION_1_3,
        options = {
          linesPerPage,
          contentsDepth,
          charactersPerLine
        };

  delete json.linesPerPage;
  delete json.contentsDepth;
  delete json.charactersPerLine;

  json = Object.assign({}, json, {
    version,
    options
  });

  return json;
}
module.exports = {
  createConfiguration,
  migrateToVersion1_3
};
