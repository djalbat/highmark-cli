"use strict";

export default function createMethods(scheduler, model, view) {
  function openMenu() {
    view.openMenu();
  }

  function closeMenu() {
    view.closeMenu();
  }

  function invertColours() {
    view.invertColours();
  }

  function revertColours() {
    view.revertColours();
  }

  function increaseFondSize() {
    view.increaseFontSize();
  }

  function decreaseFontSize() {
    view.decreaseFontSize();
  }

  function restoreNativeGestures() {
    view.restoreNativeGestures();
  }

  function suppressNativeGestures() {
    view.suppressNativeGestures();
  }

  return ({
    openMenu,
    closeMenu,
    invertColours,
    revertColours,
    increaseFondSize,
    decreaseFontSize,
    restoreNativeGestures,
    suppressNativeGestures
  });
}
