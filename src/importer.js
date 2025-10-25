"use strict";

import { pathUtilities } from "necessary";

import { readFile } from "./utilities/fileSystem";
import { classNameFromFilePath } from "./utilities/division";
import { nodeFromTokens, tokensFromContent } from "./utilities/markdown";

const { concatenatePaths } = pathUtilities;

export default function importer(filePath, context) {
  const { projectDirectoryName } = context;

  filePath = concatenatePaths(projectDirectoryName, filePath);  ///

  const content = readFile(filePath);

  if (content !== null) {
    const className = classNameFromFilePath(filePath),
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens),
          importedNode = node,  ///
          importedTokens = tokens,  ///
          importedClassName = className;  ///

    if (node !== null) {
      Object.assign(context, {
        importedNode,
        importedTokens,
        importedClassName
      });
    }
  }
}
