"use strict";

export default function createDocumentCSS(client) {
  let documentCSS;

  if (client) {
    documentCSS = `body {
  background-color: #d5d1d1;
}
    
body > div.document {
  display: none;
}`;
  } else {
    documentCSS = `body {
  background-color: #d5d1d1;
}
    
body > div.document {
  width: fit-content;
  margin: auto;
  display: flex;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
 
body > div.document > div {
  border-bottom: 1px solid #0c0d0f;
}

body > div.document > div:last-of-type {
  border-bottom: none;
}`;
  }

  return documentCSS;
}
