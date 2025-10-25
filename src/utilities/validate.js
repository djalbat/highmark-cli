"use strict";

export function validateLinesPerPage(linesPerPage) { return /^\d*$/.test(linesPerPage); }

export function validateContentsDepth(contentsDepth) { return /^1|2|3|4$/.test(contentsDepth); }

export function validateCharactersPerLine(charactersPerLine) { return /^\d+$/.test(charactersPerLine); }
