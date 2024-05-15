"use strict";

const { liveReloadSnippet } = require("lively-cli"),
      { pathUtilities, packageUtilities, templateUtilities } = require("necessary"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { writeFile } = require("../utilities/fileSystem"),
      { INDEX_HTML_FILE_NAME, INDEX_TEMPLATE_FILE_PATH } = require("../constants");

const { parseFile } = templateUtilities,
      { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function indexHTMLOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    proceed();

    return;
  }

  const { outputDirectoryPath } = context,
        indexHTML = createIndexHTML(context),
        indexHTMLFilePath = concatenatePaths(outputDirectoryPath, INDEX_HTML_FILE_NAME),
        filePath = indexHTMLFilePath, ///
        content = indexHTML;  ///

  writeFile(filePath, content);

  proceed();
}

module.exports = indexHTMLOperation;

function createIndexHTML(context) {
  const { markdownHTML, markdownStylesCSS } = context,
        packagePath = getPackagePath(),
        indexTemplateFilePath = concatenatePaths(packagePath, INDEX_TEMPLATE_FILE_PATH),
        args = {
          markdownHTML,
          markdownStylesCSS,
          liveReloadSnippet,
          computerModernStyleCSS
        },
        indexHTML = parseFile(indexTemplateFilePath, args);

  return indexHTML;
}
