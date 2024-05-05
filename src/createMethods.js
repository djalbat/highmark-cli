"use strict";

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
    view.invertColours();
  }

  function revertColours() {
    view.revertColours();
  }

  function enterFullScreen() {
    view.enterFullScreen();
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
    enterFullScreen,
    restoreNativeGestures,
    suppressNativeGestures,
    checkRestoreNativeGesturesCheckbox
  });
}
