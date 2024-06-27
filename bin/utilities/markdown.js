"use strict";

const { MarkdownLexer, MarkdownParser } = require("highmark-markdown");

const { UNABLE_TO_PARSE_MARKDOWN_FILE_MESSAGE } = require("../messages");

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

function tokensFromContent(content) {
  const tokens = markdownLexer.tokenise(content);

  return tokens;
}

function nodeFromTokens(tokens, startRuleName = null) {
  const ruleMap = markdownParser.getRuleMap(),
        startRule = (startRuleName !== null) ?
                      ruleMap[startRuleName] :
                        markdownParser.getStartRule(),
        startOfContent = true,
        node = markdownParser.parse(tokens, startRule, startOfContent);

  if (node === null) {
    const message = UNABLE_TO_PARSE_MARKDOWN_FILE_MESSAGE;

    console.log(message);
  }

  return node;
}

module.exports = {
  tokensFromContent,
  nodeFromTokens
};
