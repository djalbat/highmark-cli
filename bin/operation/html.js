"use strict";

const { pathUtilities, packageUtilities } = require("necessary"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { directoryPathFromFilePath } = require("../utilities/path"),
      { writeFile, parseTemplateFile } = require("../utilities/fileSystem"),
      { INDEX_TEMPLATE_FILE_PATH } = require("../constants");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function htmlOperation(proceed, abort, context) {
  const { markdownHTML, outputFilePath, markdownStylesCSS } = context,
        templateFilePath = getTemplateFilePath(context),
        args = {
          markdownHTML,
          markdownStylesCSS,
          computerModernStyleCSS
        },
        content = parseTemplateFile(templateFilePath, args);

  writeFile(outputFilePath, content);

  proceed();
}

module.exports = htmlOperation;

function getTemplateFilePath(context) {
  let templateFilePath;

  ({templateFilePath} = context);

  if (templateFilePath === null) {
    const packagePath = getPackagePath(),
          indexTemplateFilePath = concatenatePaths(packagePath, INDEX_TEMPLATE_FILE_PATH);

    templateFilePath = indexTemplateFilePath; ///
  } else {
    const { inputFilePath } = context,
          inputDirectoryPath = directoryPathFromFilePath(inputFilePath);

    templateFilePath = concatenatePaths(inputDirectoryPath, templateFilePath);  ///
  }

  return templateFilePath;
}
