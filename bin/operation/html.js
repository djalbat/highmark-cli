"use strict";

const { liveReloadSnippet } = require("lively-cli"),
      { pathUtilities, packageUtilities } = require("necessary"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { readFile } = require("../utilities/fileSystem"),
      { directoryPathFromFilePath } = require("../utilities/path"),
      { writeFile, parseTemplateFile } = require("../utilities/fileSystem"),
      { EMPTY_STRING, LOADING_CSS_FILE_PATH, CLIENT_TEMPLATE_FILE_PATH, DEFAULT_TEMPLATE_FILE_PATH, LOADING_TEMPLATE_FILE_PATH } = require("../constants");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function htmlOperation(proceed, abort, context) {
  const { markdownHTML, outputFilePath, markdownStylesCSS } = context,
        clientHTML = getClientHTML(context),
        loadingCSS = getLoadingCSS(context),
        loadingHTML = getLoadingHTML(context),
        templateFilePath = getTemplateFilePath(context),
        args = {
          clientHTML,
          loadingCSS,
          loadingHTML,
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
          templateFilePath = concatenatePaths(packagePath, CLIENT_TEMPLATE_FILE_PATH),
          args = {
            liveReloadSnippet
          },
          content = parseTemplateFile(templateFilePath, args);

    clientHTML = content; ///
  } else {
    clientHTML = EMPTY_STRING;
  }

  return clientHTML;
}

function getLoadingCSS(context) {
  let loadingCSS;

  const { copyClient } = context;

  if (copyClient) {
    const packagePath = getPackagePath(),
          filePath = concatenatePaths(packagePath, LOADING_CSS_FILE_PATH),
          content = readFile(filePath);

    loadingCSS = content; ///
  } else {
    loadingCSS = EMPTY_STRING;
  }

  return loadingCSS;
}

function getLoadingHTML(context) {
  let loadingHTML;

  const { copyClient } = context;

  if (copyClient) {
    const packagePath = getPackagePath(),
          templateFilePath = concatenatePaths(packagePath, LOADING_TEMPLATE_FILE_PATH),
          args = {},
          content = parseTemplateFile(templateFilePath, args);

    loadingHTML = content; ///
  } else {
    loadingHTML = EMPTY_STRING;
  }

  return loadingHTML;
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
