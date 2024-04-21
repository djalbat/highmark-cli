"use strict";

function helpAction() {
  console.log(`Usage: 
  
  highmark [<command>] [<argument>]          

Commands:

  help                                       Show this help
  
  version                                    Show the version
  
  [publish]                                  Publish the input Markdown file to the output HTML file

Options:

  --help|-h                                  Show this help
  
  --version|-v                               Show the version

  --port|-p                                  The server port, the default being 8888

  --watch|-w                                 Watch for changes to the client file and in the output directory 

  --server|-s                                Start a server to view the output file

  --copy-fonts|-f                            Copy the fonts to a fonts folder next to the output file

  --copy-client|-c                           Copy the bundled client file next to the output file

  --input-file-path|-i                       The input file path, the default being 'default.md'

  --output-file-path|-o                      The output file path, the default being 'index.html'

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/highmark-cli
`);
}

module.exports = helpAction;
