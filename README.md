# Highmark-CLI

Highmark's CLI tool.

This tool enables the creation of HTML from Markdown and Markdown Style documents as well as providing a small server to view the HTML in a browser.
It can make use of Highmark's client in order to improve the reading experience, otherwise the HTML can be viewed directly.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Introduction

Highmark is a document preparation system inspired by [Markdown](https://en.wikipedia.org/wiki/Markdown) and [TeX](https://en.wikipedia.org/wiki/TeX).
There are several packages in the distribution.

- [Highmark-CLI](https://github.com/djalbat/highmark-cli) Highmark's CLI tool.
- [Highmark Yapp](https://github.com/djalbat/highmark-yapp) Highmark with Yapp listings.
- [Highmark Fonts](https://github.com/djalbat/highmark-fonts) Computer Modern fonts for Highmark.
- [Highmark Client](https://github.com/djalbat/highmark-client) Highmark's bundled client for viewing HTML.
- [Highmark Markdown](https://github.com/djalbat/highmark-markdown) Highmark's Markdown and Markdown Style languages.

Only the CLI tool is needed by end users.
All of the other packages are likely only of interest to prospective developers.

## Installation

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/highmark-cli.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

If you are not a developer and just want to install the package for immediate use then see the usage section immediately below.

## Usage

The tool should be installed globally:

```
npm install --global highmark-cli@latest
```

Depending on your setup you may need to prepend `sudo` to the above.

These are the commands and options:

```
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

  --fonts|-f                                 Copy CUM fonts to a font folder next to the output file

  --watch|-w                                 Watch for changes to the client file and in the output directory 

  --client|-c                                Copy the bundled client and supporting files next to the output file

  --server|-s                                Run a server to view the output file

  --quietly|-q                               Run with almost no console logging

  --input-file-name|-i                       The input file name, the default being 'default.md'
```

## Contact

* james.smith@djalbat.com

