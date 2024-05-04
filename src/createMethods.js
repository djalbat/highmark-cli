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
    restoreNativeGestures,
    suppressNativeGestures,
    checkRestoreNativeGesturesCheckbox
  });
}
