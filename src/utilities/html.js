"use strict";

const { liveReloadSnippet } = require("lively-cli"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts"),
      { pathUtilities, templateUtilities, fileSystemUtilities } = require("necessary");

const { getSourceDirectoryPath } = require("./utilities/directory"),
      { LOADING_CSS_FILE_PATH, CLIENT_TEMPLATE_FILE_PATH, LOADING_TEMPLATE_FILE_PATH, INDEX_TEMPLATE_FILE_PATH } = require("./constants");

const { readFile } = fileSystemUtilities,
      { parseFile } = templateUtilities,
      { concatenatePaths } = pathUtilities;

function createIndexHTML(markdownHTML, markdownStylesCSS, client) {
  const sourceDirectoryPath = getSourceDirectoryPath(),
        indexTemplateFilePath = concatenatePaths(sourceDirectoryPath, INDEX_TEMPLATE_FILE_PATH),
        args = {
          markdownHTML,
          markdownStylesCSS,
          liveReloadSnippet,
          computerModernStyleCSS
        };

  if (client) {
    const clientHTML = createClientHTML(sourceDirectoryPath),
          loadingCSS = createLoadingCSS(sourceDirectoryPath),
          loadingHTML = createLoadingHTML(sourceDirectoryPath);

    Object.assign(args, {
      clientHTML,
      loadingCSS,
      loadingHTML
    });
  }

  const indexHTML = parseFile(indexTemplateFilePath, args);

  return indexHTML;
}

module.exports = createIndexHTML;

function createClientHTML(sourceDirectoryPath) {
  const filePath = concatenatePaths(sourceDirectoryPath, CLIENT_TEMPLATE_FILE_PATH),
        content = parseFile(filePath),
        clientHTML = content; ///

  return clientHTML;
}

function createLoadingCSS(sourceDirectoryPath) {
  const filePath = concatenatePaths(sourceDirectoryPath, LOADING_CSS_FILE_PATH),
        content = readFile(filePath),
        loadingCSS = content; ///

  return loadingCSS;
}

function createLoadingHTML(sourceDirectoryPath) {
  const filePath = concatenatePaths(sourceDirectoryPath, LOADING_TEMPLATE_FILE_PATH),
        content = readFile(filePath),
        loadingHTML = content; ///

  return loadingHTML;
}
