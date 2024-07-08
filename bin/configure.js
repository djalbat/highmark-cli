"use strict";

const { pathUtilities } = require("necessary");

const { DOUBLE_DOTS } = require("./constants"),
      { DEFAULT_HELP, DEFAULT_VERSION, DEFAULT_SERVER } = require("./defaults"),
      { migrateConfigurationFile, checkConfigurationFileExists } = require("./configuration"),
      { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND, SERVER_COMMAND, INITIALISE_COMMAND } = require("./commands");

const { bottommostNameFromPath } = pathUtilities;

function configure(command, argument, options, main) {
  let configurationFileExists;

  const { help = DEFAULT_HELP, version = DEFAULT_VERSION, server = DEFAULT_SERVER } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  }else if (server) {
    argument = command;

    command = SERVER_COMMAND;
  }

  if ((command === HELP_COMMAND) || (command === VERSION_COMMAND)) {
    main(command, argument, options);

    return;
  }

  configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    const currentWorkingDirectoryPath = process.cwd(); ///

    process.chdir(DOUBLE_DOTS);

    const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath; ///

    configurationFileExists = checkConfigurationFileExists();

    if (configurationFileExists) {
      const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

      argument = bottommostOldCurrentWorkingDirectoryName; ///

      if (command === null) {
        command = PUBLISH_COMMAND;  ///
      }
    } else {
      process.chdir(oldCurrentWorkingDirectoryPath);
    }
  }

  if (command !== INITIALISE_COMMAND) {
    migrateConfigurationFile();
  }

  main(command, argument, options);
}

module.exports = configure;
