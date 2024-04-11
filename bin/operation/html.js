"use strict";

const { pathUtilities, packageUtilities } = require("necessary"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { directoryPathFromFilePath } = require("../utilities/path"),
      { writeFile, parseTemplateFile } = require("../utilities/fileSystem"),
      { EMPTY_STRING, TEMPLATE_FILE_PATH } = require("../constants");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function htmlOperation(proceed, abort, context) {
  const { title, markdownHTML, outputFilePath, markdownStylesCSS } = context,
        titleHTML = titleHTMLFromTitle(title),
        templateFilePath = getTemplateFilePath(context),
        args = {
          titleHTML,
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
    const packagePath = getPackagePath();

    templateFilePath = concatenatePaths(packagePath, TEMPLATE_FILE_PATH);
  } else {
    const { inputFilePath } = context,
      inputDirectoryPath = directoryPathFromFilePath(inputFilePath);

    templateFilePath = concatenatePaths(inputDirectoryPath, templateFilePath);  ///
  }

  return templateFilePath;
}

function titleHTMLFromTitle(title) {
  const titleHTML = (title === null) ?
                      EMPTY_STRING :
                        `<title>${title}</title>`;

  return titleHTML;
}
