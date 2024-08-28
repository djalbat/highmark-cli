"use strict";

const markdownStyleFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.mds$",
      defaultMarkdownStyleFilePathPattern = "^[^\\/]+\\/default\\.mds$";

const markdownStyleFilePathRegularExpression = new RegExp(markdownStyleFilePathPattern),
      defaultMarkdownStyleFilePathRegularExpression = new RegExp(defaultMarkdownStyleFilePathPattern);

function isFilePathMarkdownStyleFilePath(filePath) { return markdownStyleFilePathRegularExpression.test(filePath); }

function isFilePathDefaultMarkdownStyleFilePath(filePath) { return defaultMarkdownStyleFilePathRegularExpression.test(filePath); }

module.exports = {
  isFilePathMarkdownStyleFilePath,
  isFilePathDefaultMarkdownStyleFilePath
};
