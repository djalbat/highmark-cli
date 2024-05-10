"use strict";

import { MENU_ZOOM_RATIO } from "./constants";
import { getMenuZoom, setMenuZoom, setOverlayZoom, setColoursInverted, setNativeGesturesRestored } from "./state";

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
  }

  function enterFullScreen() {
    view.enterFullScreen();
  }

  function updateFullScreen() {
    view.closeMenu();

    view.updateFullScreenCheckboxDiv();
  }

  function restoreNativeGestures() {
    const nativeGesturesRestored = true;

    setNativeGesturesRestored(nativeGesturesRestored);

    view.updateNativeGestures();

    view.updateNativeGesturesCheckboxDiv();
  }

  function suppressNativeGestures() {
    const nativeGesturesRestored = false;

    setNativeGesturesRestored(nativeGesturesRestored);

    view.updateNativeGestures();

    view.updateNativeGesturesCheckboxDiv();
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
    updateFullScreen,
    restoreNativeGestures,
    suppressNativeGestures
  });
}
