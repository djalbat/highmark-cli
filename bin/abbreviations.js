"use strict";

const options = require("./options");

const { HELP_OPTION,
        PORT_OPTION,
        SERVER_OPTION,
        VERSION_OPTION,
        COPY_FONTS_OPTION,
        INPUT_FILE_PATH_OPTION,
        OUTPUT_FILE_PATH_OPTION } = options;

const h = HELP_OPTION,
      p = PORT_OPTION,
      s = SERVER_OPTION,
      v = VERSION_OPTION,
      f = COPY_FONTS_OPTION,
      i = INPUT_FILE_PATH_OPTION,
      o = OUTPUT_FILE_PATH_OPTION;

module.exports = {
  h,
  p,
  s,
  v,
  f,
  i,
  o
};
