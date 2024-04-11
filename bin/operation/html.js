"use strict";

const { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { EMPTY_STRING } = require("../constants"),
      { writeFile, parseTemplateFile } = require("../utilities/fileSystem");

function htmlOperation(proceed, abort, context) {
  const { title, markdownHTML, outputFilePath, markdownStylesCSS, templateFilePath } = context,
        titleHTML = titleHTMLFromTitle(title),
        args = {
          titleHTML,
          markdownHTML,
          markdownStylesCSS,
          computerModernStyleCSS
        },
        content = parseTemplateFile(templateFilePath, args);

  writeFile(outputFilePath, content);

  proceed();
}

module.exports = htmlOperation;

function titleHTMLFromTitle(title) {
  const titleHTML = (title === null) ?
                      EMPTY_STRING :
                        `<title>${title}</title>`;

  return titleHTML;
}
