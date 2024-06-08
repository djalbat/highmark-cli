"use strict";

function helpAction() {
  console.log(`Usage: 
  
  highmark [<options>] [<command>] [<argument>]

Commands:

  help                                       Show this help
  
  version                                    Show the version
  
  server                                     Run a server to view the output file

  initialise                                 Create a configuration file

  [publish]                                  Publish the input Markdown file to the output HTML file

Options:

  --help|-h                                  Show this help
  
  --version|-v                               Show the version

  --port|-p                                  The server port, the default being 8888

  --watch|-w                                 Watch for changes to the client file and in the output directory 

  --server|-s                                Run a server to view the output file

  --quietly|-q                               Run with almost no console logging

  --copy-fonts|-f                            Copy the fonts to a fonts folder next to the output file

  --input-file-name|-i                       The input file name, the default being 'default.md'

  --copy-client-files|-c                     Copy the bundled client files next to the output file

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/highmark-cli
`);
}

module.exports = helpAction;
