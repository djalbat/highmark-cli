"use strict";

const { packageUtilities } = require("necessary");

const { HIGHMARK_CLI } = require("../constants");

const { getVersion } = packageUtilities;

function versionAction() {
  const version = getVersion(); ///

  console.log(`${HIGHMARK_CLI} version ${version}`);
}

module.exports = versionAction;
