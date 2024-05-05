"use strict";

export function isFullScreen() {
  const { fullscreenElement } = document,
        fullScreen =(fullscreenElement !== null);

  return fullScreen;
}

export function exitFullScreen() {
  document.exitFullscreen();
}

export function requestFullScreen(element, callback) {
  const domElement = element.getDOMElement();

  domElement.requestFullscreen()
    .then(callback)
    .catch((error) => {
      alert(error);
    });
}
