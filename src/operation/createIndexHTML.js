"use strict";

import { fontStyle } from "highmark-markdown";
import { liveReloadSnippet } from "lively-cli";
import { pathUtilities, templateUtilities } from "necessary";
import { indexHTML, clientHTML, loadingHTML, loadingCSS, documentCSS } from "highmark-client"

import { writeFile } from "../utilities/fileSystem";
import { INDEX_HTML_FILE_NAME } from "../constants";

const { parseContent } = templateUtilities,
      { concatenatePaths } = pathUtilities;

export default function createIndexHTMLOperation(proceed, abort, context) {
  const { client, highmarkCSS, highmarkHTML, projectDirectoryName } = context,
        liveReloadHTML = liveReloadSnippet, ///
        fontCSS = fontStyle,  ///
        args = {
          fontCSS,
          highmarkCSS,
          highmarkHTML,
          liveReloadHTML
        };

  if (client) {
    Object.assign(args, {
      clientHTML,
      loadingCSS,
      loadingHTML,
      documentCSS
    });
  } else {
    const documentCSS = `body {
  background-color: #d5d1d1;
}
    
body > div.document {
  width: 100%;
  display: flex;
  row-gap: 40px;
  padding: 40px;
  min-height: 100%;
  align-items: center;
  padding-bottom: 80px;
  flex-direction: column;
  justify-content: flex-start;
} `;

    Object.assign(args, {
      documentCSS
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
