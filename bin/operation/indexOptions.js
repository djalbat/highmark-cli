"use strict";

const { pathUtilities } = require("necessary");

const defaultIndexOptions = require("../defaultIndexOptions");

const { readFile, writeFile } = require("../utilities/fileSystem"),
      { DOUBLE_SPACE, INDEX_JSON_FILE_NAME } = require("../constants");

const { concatenatePaths } = pathUtilities;

function indexOptionsOperation(proceed, abort, context) {
  const { projectDirectoryName } = context;

  let content,
      indexOptions;

  const indexJSONFilePath = concatenatePaths(projectDirectoryName, INDEX_JSON_FILE_NAME),
        filePath = indexJSONFilePath;

  content = readFile(filePath);

  if (content === null) {
    indexOptions = defaultIndexOptions; ///
  } else {
    let json,
        jsonString;

    jsonString = content;  ///

    json = JSON.parse(jsonString);

    const { phrases = [],
            plurals = [],
            acronyms = [],
            properNouns = [],
            ignoredWords = [] } = json;

    phrases.sort();
    plurals.sort();
    acronyms.sort();
    properNouns.sort();
    ignoredWords.sort();

    json = {
      phrases,
      plurals,
      acronyms,
      properNouns,
      ignoredWords
    };

    jsonString = JSON.stringify(json, null, DOUBLE_SPACE);

    content = jsonString;  ///

    writeFile(indexJSONFilePath, content);

    indexOptions = json;  ///
  }

  Object.assign(context, {
    indexOptions
  });

  proceed();
}

module.exports = indexOptionsOperation;
