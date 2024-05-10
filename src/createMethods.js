"use strict";

import { MENU_ZOOM_RATIO } from "./constants";
import { getMenuZoom, setMenuZoom, setOverlayZoom, setColoursInverted } from "./state";

export default function createMethods(scheduler, model, view) {
  function openMenu() {
    view.openMenu();
  }

  function closeMenu() {
    view.closeMenu();
  }

  function zoomMenuIn() {
    let menuZoom = getMenuZoom();

    menuZoom *= MENU_ZOOM_RATIO;

    setMenuZoom(menuZoom);

    view.updateMenuZoom();
  }

  function zoomMenuOut() {
    let menuZoom = getMenuZoom();

    menuZoom /= MENU_ZOOM_RATIO;

    setMenuZoom(menuZoom);

    view.updateMenuZoom();
  }

  function zoomOverlay(overlayZoom) {
    setOverlayZoom(overlayZoom);

    view.updateOverlayZoom();
  }

  function invertColours() {
    const coloursInverted = true;

    setColoursInverted(coloursInverted);

    view.updateOverlayColours();
  }

  function revertColours() {
    const coloursInverted = false;

    setColoursInverted(coloursInverted);

    view.updateOverlayColours();
  }

  function exitFullScreen() {
    view.exitFullScreen();

    view.uncheckFullScreenCheckbox();
  }

  function enterFullScreen() {
    view.enterFullScreen();

    view.checkFullScreenCheckbox();
  }

  function restoreNativeGestures() {
    view.restoreNativeGestures();

    view.checkNativeGesturesCheckbox();
  }

  function suppressNativeGestures() {
    view.suppressNativeGestures();

    view.uncheckNativeGesturesCheckbox();
  }

  return ({
    openMenu,
    closeMenu,
    zoomMenuIn,
    zoomMenuOut,
    zoomOverlay,
    invertColours,
    revertColours,
    exitFullScreen,
    enterFullScreen,
    restoreNativeGestures,
    suppressNativeGestures
  });
}
