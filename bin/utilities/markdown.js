"use strict";

const { MarkdownLexer, MarkdownParser } = require("highmark-markdown");

const { UNABLE_TO_PARSE_INPUT_FILE_MESSAGE } = require("../messages");

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

function nodeFromContent(content) {
  const tokens = markdownLexer.tokenise(content),
        node = markdownParser.parse(tokens);

  if (node === null) {
    const message = UNABLE_TO_PARSE_INPUT_FILE_MESSAGE;

    console.log(message);
  }

  return node;
}

module.exports = {
  nodeFromContent
};
