"use strict";

import { fontStyle } from "highmark-markdown";
import { pathUtilities, templateUtilities } from "necessary";
import { indexHTML, clientHTML, loadingHTML, loadingCSS } from "highmark-client"

import { writeFile } from "../utilities/fileSystem";
import { INDEX_HTML_FILE_NAME } from "../constants";

const { parseContent } = templateUtilities,
      { concatenatePaths } = pathUtilities;

export default function createIndexHTMLOperation(proceed, abort, context) {
  const { client, highmarkCSS, highmarkHTML, projectDirectoryName } = context,
        fontCSS = fontStyle,  ///
        args = {
          fontCSS,
          highmarkCSS,
          highmarkHTML
        };

  if (client) {
    Object.assign(args, {
      clientHTML,
      loadingCSS,
      loadingHTML
    });
  }

  let content;

  content = indexHTML;  ///

  const regularExpression = /{(.+?)}/g,
        parsedContent = parseContent(content, args, regularExpression);

  content = parsedContent;  ///

  const filePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME);

  writeFile(filePath, content);

  proceed();
}
