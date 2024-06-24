"use strict";

function validateLinesPerPage(linesPerPage) { return /^\d*$/.test(linesPerPage); }

function validateContentsDepth(contentsDepth) { return /^1|2|3|4$/.test(contentsDepth); }

function validateCharactersPerLine(charactersPerLine) { return /^\d+$/.test(charactersPerLine); }

module.exports = {
  validateLinesPerPage,
  validateContentsDepth,
  validateCharactersPerLine
};
