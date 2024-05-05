"use strict";

import { setColoursInverted } from "./state";

export default function createMethods(scheduler, model, view) {
  function openMenu() {
    view.openMenu();
  }

  function closeMenu() {
    view.closeMenu();
  }

  function zoomMenuIn() {
    view.zoomMenuIn();
  }

  function zoomMenuOut() {
    view.zoomMenuOut();
  }

  function invertColours() {
    const coloursInverted = true;

    setColoursInverted(coloursInverted);

    view.updateColours();
  }

  function revertColours() {
    const coloursInverted = false;

    setColoursInverted(coloursInverted);

    view.updateColours();
  }

  function requestFullScreen() {
    view.requestFullScreen();
  }

  function restoreNativeGestures() {
    view.restoreNativeGestures();
  }

  function suppressNativeGestures() {
    view.suppressNativeGestures();
  }

  function checkRestoreNativeGesturesCheckbox(checked) {
    view.checkRestoreNativeGesturesCheckbox(checked);
  }

  return ({
    openMenu,
    closeMenu,
    zoomMenuIn,
    zoomMenuOut,
    invertColours,
    revertColours,
    requestFullScreen,
    restoreNativeGestures,
    suppressNativeGestures,
    checkRestoreNativeGesturesCheckbox
  });
}
