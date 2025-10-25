"use strict";

import { MarkdownLexer, MarkdownParser } from "highmark-markdown";

import { UNABLE_TO_PARSE_MARKDOWN_FILE_MESSAGE } from "../messages";

const markdownLexer = MarkdownLexer.fromNothing(),
      markdownParser = MarkdownParser.fromNothing();

export function tokensFromContent(content) {
  const tokens = markdownLexer.tokenise(content);

  return tokens;
}

export function nodeFromTokens(tokens, startRuleName = null) {
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
