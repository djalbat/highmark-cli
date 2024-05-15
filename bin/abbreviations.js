"use strict";

const options = require("./options");

const { HELP_OPTION,
        PORT_OPTION,
        WATCH_OPTION,
        SERVER_OPTION,
        VERSION_OPTION,
        QUIETLY_OPTION,
        COPY_FONTS_OPTION,
        INPUT_FILE_PATH_OPTION,
        COPY_CLIENT_FILES_OPTION,
        OUTPUT_DIRECTORY_PATH_OPTION } = options;

const h = HELP_OPTION,
      p = PORT_OPTION,
      w = WATCH_OPTION,
      s = SERVER_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      f = COPY_FONTS_OPTION,
      i = INPUT_FILE_PATH_OPTION,
      c = COPY_CLIENT_FILES_OPTION,
      o = OUTPUT_DIRECTORY_PATH_OPTION;

module.exports = {
  h,
  p,
  w,
  s,
  v,
  q,
  f,
  i,
  c,
  o
};
