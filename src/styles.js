"use strict";

import { WIGGLE_DURATION, WIGGLE_FREQUENCY } from "./constants";

export const wiggleCount = WIGGLE_DURATION * WIGGLE_FREQUENCY;
export const wiggleDuration = `${WIGGLE_DURATION / WIGGLE_FREQUENCY}s`;
