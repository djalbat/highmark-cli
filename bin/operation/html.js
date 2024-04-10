"use strict";

const { writeFile } = require("../utilities/fileSystem");

const { EMPTY_STRING } = require("../constants");

function htmlOperation(proceed, abort, context) {
  const { title, markdownHTML, outputFilePath, markdownStylesCSS } = context,
        titleHTML = titleHTMLFromTitle(title),
        filePath = outputFilePath,  ///
        content = `<!DOCTYPE html>
<html>
  <head>
  
    ${titleHTML}
    
    <meta charset="utf-8" />

    <link rel="preload" href="font/cmunbbx.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunbi.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunbmo.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunbmr.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunbx.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunbxo.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunit.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunobi.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunobx.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunorm.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunoti.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunrm.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunsi.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunso.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunss.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunsx.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmuntb.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmunti.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmuntt.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="font/cmuntx.woff2" as="font" type="font/woff2" crossorigin />

    <style>

      *,
      *::after,
      *::before {
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
    </style>
    <style>

${markdownStylesCSS}

    </style>
  </head>
  <body>

${markdownHTML}

  </body>
</html>
`;

  writeFile(filePath, content);

  proceed();
}

module.exports = htmlOperation;

function titleHTMLFromTitle(title) {
  const titleHTML = (title === null) ?
                      EMPTY_STRING :
                        `<title>${title}</title>`;

  return titleHTML;
}
