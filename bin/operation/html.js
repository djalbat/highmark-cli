"use strict";

const { liveReloadSnippet } = require("lively-cli"),
      { pathUtilities, packageUtilities } = require("necessary"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { directoryPathFromFilePath } = require("../utilities/path"),
      { writeFile, parseTemplateFile } = require("../utilities/fileSystem"),
      { CLIENT_TEMPLATE_FILE_PATH, DEFAULT_TEMPLATE_FILE_PATH, EMPTY_STRING } = require("../constants");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function htmlOperation(proceed, abort, context) {
  const { markdownHTML, outputFilePath, markdownStylesCSS } = context,
        clientHTML = getClientHTML(context),
        templateFilePath = getTemplateFilePath(context),
        args = {
          clientHTML,
          markdownHTML,
          markdownStylesCSS,
          computerModernStyleCSS
        },
        content = parseTemplateFile(templateFilePath, args);

  writeFile(outputFilePath, content);

  proceed();
}

module.exports = htmlOperation;

function getClientHTML(context) {
  let clientHTML;

  const { copyClient } = context;

  if (copyClient) {
    const packagePath = getPackagePath(),
          clientTemplateFilePath = concatenatePaths(packagePath, CLIENT_TEMPLATE_FILE_PATH),
          args = {
            liveReloadSnippet
          },
          clientContent = parseTemplateFile(clientTemplateFilePath, args);

    clientHTML = clientContent; ///
  } else {
    clientHTML = EMPTY_STRING;
  }

  return clientHTML;
}

function getTemplateFilePath(context) {
  let templateFilePath;

  ({templateFilePath} = context);

  if (templateFilePath === null) {
    const packagePath = getPackagePath(),
          defaultTemplateFilePath = templateFilePath = concatenatePaths(packagePath, DEFAULT_TEMPLATE_FILE_PATH);

    templateFilePath = defaultTemplateFilePath; ///
  } else {
    const { inputFilePath } = context,
          inputDirectoryPath = directoryPathFromFilePath(inputFilePath);

    templateFilePath = concatenatePaths(inputDirectoryPath, templateFilePath);  ///
  }

  return templateFilePath;
}
