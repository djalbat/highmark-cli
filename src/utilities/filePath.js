"use strict";

const markdownStyleFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.mds$",
      defaultMarkdownStyleFilePathPattern = "^[^\\/]+\\/default\\.mds$";

const markdownStyleFilePathRegularExpression = new RegExp(markdownStyleFilePathPattern),
      defaultMarkdownStyleFilePathRegularExpression = new RegExp(defaultMarkdownStyleFilePathPattern);

export function isFilePathMarkdownStyleFilePath(filePath) { return markdownStyleFilePathRegularExpression.test(filePath); }

export function isFilePathDefaultMarkdownStyleFilePath(filePath) { return defaultMarkdownStyleFilePathRegularExpression.test(filePath); }
