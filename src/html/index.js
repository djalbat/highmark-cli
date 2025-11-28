"use strict";

const indexHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Highmark</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=0.1, user-scalable=yes">

    <link rel="preload" href="font/STIXTwoMath-Regular.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-Regular.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-Bold.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-Italic.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/STIXTwoText-BoldItalic.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/Inconsolata-Regular.woff2" as="font" type="font/woff2" crossorigin >
    <link rel="preload" href="font/Inconsolata-Bold.woff2" as="font" type="font/woff2" crossorigin >

    <style>

        *,
        *::after,
        *::before {
          border: 0;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          -webkit-text-size-adjust: none;
          -moz-text-size-adjust: none;
          -ms-text-size-adjust: none;
          text-size-adjust: none;
        }

    </style>
    <style>

      html,
      body {
        width: 100%;
        height: 100%;
      }

    </style>
    <style>

{fontCSS}

    </style>
    <style>

{documentCSS}

    </style>
    <style>

{loadingCSS}

    </style>
    <style>

{highmarkCSS}

    </style>

  </head>
  <body>
  
{loadingHTML}

  <div class="document">

{highmarkHTML}

  </div>

{clientHTML}

{liveReloadHTML}

  </body>
</html>`;

export default indexHTML;
