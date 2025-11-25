"use strict";

import { pathUtilities } from "necessary";
import { grammarUtilities } from "highmark-markdown";

import { readFile } from "./utilities/fileSystem";
import { classNameFromFilePath } from "./utilities/division";

const { concatenatePaths } = pathUtilities,
      { tokensFromMarkdown, documentMarkdownNodeFromTokens } = grammarUtilities;

export default function importer(filePath, context) {
  const { projectDirectoryName } = context;

  filePath = concatenatePaths(projectDirectoryName, filePath);  ///

  const content = readFile(filePath);

  if (content !== null) {
    const markdown = content, ///
          tokens = tokensFromMarkdown(markdown),
          documentMarkdownNode = documentMarkdownNodeFromTokens(tokens);


    if (documentMarkdownNode !== null) {
      const className = classNameFromFilePath(filePath),
            importedNode = documentMarkdownNode,  ///
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
