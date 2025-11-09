"use strict";

import { pathUtilities } from "necessary";
import { grammarUtilities } from "highmark-markdown";

import { readFile } from "./utilities/fileSystem";
import { classNameFromFilePath } from "./utilities/division";

const { concatenatePaths } = pathUtilities,
      { tokensFromMarkdown, markdownNodeFromTokens } = grammarUtilities;

export default function importer(filePath, context) {
  const { projectDirectoryName } = context;

  filePath = concatenatePaths(projectDirectoryName, filePath);  ///

  const content = readFile(filePath);

  if (content !== null) {
    const markdown = content, ///
          tokens = tokensFromMarkdown(markdown),
          markdownNode = markdownNodeFromTokens(tokens);


    if (markdownNode !== null) {
      const className = classNameFromFilePath(filePath),
            importedNode = markdownNode,  ///
            importedTokens = tokens,  ///
            importedClassName = className;  ///

      Object.assign(context, {
        importedNode,
        importedTokens,
        importedClassName
      });
    }
  }
}
