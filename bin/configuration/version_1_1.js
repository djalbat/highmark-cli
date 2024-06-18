"use strict";

const { VERSION_1_1 } = require("../versions");

const { DEFAULT_CONTENTS_DEPTH } = require("../defaults");

function migrateToVersion1_1(json) {
  const version = VERSION_1_1,
        contentsDepth = DEFAULT_CONTENTS_DEPTH;

  json = Object.assign({}, json, {
    version,
    contentsDepth
  });

  return json;
}
module.exports = {
  migrateToVersion1_1
};
