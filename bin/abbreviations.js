"use strict";

const options = require("./options");

const { HELP_OPTION,
        PORT_OPTION,
        WATCH_OPTION,
        SERVER_OPTION,
        VERSION_OPTION,
        QUIETLY_OPTION,
        COPY_FONTS_OPTION,
        INPUT_FILE_NAME_OPTION,
        COPY_CLIENT_FILES_OPTION } = options;

const h = HELP_OPTION,
      p = PORT_OPTION,
      w = WATCH_OPTION,
      s = SERVER_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      f = COPY_FONTS_OPTION,
      i = INPUT_FILE_NAME_OPTION,
      c = COPY_CLIENT_FILES_OPTION;

module.exports = {
  h,
  p,
  w,
  v,
  q,
  f,
  s,
  i,
  c
};
