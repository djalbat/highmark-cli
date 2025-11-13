"use strict";

export default function helpAction() {
  console.log(`Usage: 
  
  highmark [<options>] [<command>] [<argument>]

Commands:

  help                                       Show this help
  
  version                                    Show the version
  
  [publish] <project-directory-name>         Publish the given project

  server                                     Run a server to view the output file

  initialise                                 Create a configuration file

  set-options                                Set options 

Options:

  --help|-h                                  Show this help
  
  --version|-v                               Show the version

  --port|-p                                  The server port, the default being 8888

  --fonts|-f                                 Copy CMU fonts to a font folder next to the output file

  --watch|-w                                 Watch for changes to the client file and in the output directory 

  --client|-c                                Copy the bundled client and supporting files next to the output file

  --quietly|-q                               Run with almost no console logging

  --input-file-name|-i                       The input file name, the default being 'default.md'

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/highmark-cli
`);
}
