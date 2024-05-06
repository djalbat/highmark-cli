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

  function exitFullScreen() {
    view.exitFullScreen();
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

  function uncheckRestoreNativeGesturesCheckbox(checked) {
    view.uncheckRestoreNativeGesturesCheckbox(checked);
  }

  return ({
    openMenu,
    closeMenu,
    zoomMenuIn,
    zoomMenuOut,
    invertColours,
    revertColours,
    exitFullScreen,
    enterFullScreen,
    restoreNativeGestures,
    suppressNativeGestures,
    checkRestoreNativeGesturesCheckbox,
    uncheckRestoreNativeGesturesCheckbox
  });
}
