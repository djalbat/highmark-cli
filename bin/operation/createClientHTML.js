"use strict";

const { pathUtilities } = require("necessary"),
      { constants, createHTML } = require("highmark-client");

const { writeFile } = require("../utilities/fileSystem");

const { concatenatePaths } = pathUtilities,
      { INDEX_HTML_FILE_NAME } = constants;

function createClientHTMLOperation(proceed, abort, context) {
  const { markdownHTML, markdownStylesCSS, projectDirectoryName } = context,
        html = createHTML(markdownHTML, markdownStylesCSS),
        content = html, ///
        filePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME);

  writeFile(filePath, content);

  proceed();
}

module.exports = createClientHTMLOperation;
