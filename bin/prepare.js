"use strict";

const changeDirectory = require("./changeDirectory");

const { DEFAULT_HELP, DEFAULT_VERSION, DEFAULT_SERVER } = require("./defaults"),
      { HELP_COMMAND,
        SERVER_COMMAND,
        VERSION_COMMAND,
        PUBLISH_COMMAND,
        INITIALISE_COMMAND,
        SET_OPTIONS_COMMAND } = require("./commands");

function prepare(command, argument, options, main) {
  const { help = DEFAULT_HELP, version = DEFAULT_VERSION } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  }

  if ((command === HELP_COMMAND) ||
      (command === VERSION_COMMAND) ||
      (command === INITIALISE_COMMAND)) {

    main(command, argument, options);

    return;
  }

  const { server = DEFAULT_SERVER } = options;

  if (server) {
    command = SERVER_COMMAND;
  }

  const directoryName = changeDirectory();

  if (directoryName !== null) {
    argument = directoryName; ///
  }

  if (argument === null) {
    if (command !== SET_OPTIONS_COMMAND) {
      argument = command; ///

      command = PUBLISH_COMMAND;
    }
  }

  if (command === null) {
    command = PUBLISH_COMMAND;
  }

  main(command, argument, options);
}

module.exports = prepare;
