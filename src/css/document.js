"use strict";

export default function createDocumentCSS(client) {
  let documentCSS;

  if (client) {
    documentCSS = `body > div.document {
  display: none;
}`;
  } else {
    documentCSS = `body {
  background-color: #d5d1d1;
}
    
body > div.document {
  width: fit-content;
  display: flex;
  row-gap: 40px;
  padding: 80px;
  min-height: 100%;
  overflow-x: none;
  padding-top: 40px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
} `;
  }

  return documentCSS;
}
