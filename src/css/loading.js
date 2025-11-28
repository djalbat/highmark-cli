"use strict";

const loadingCSS = `body > div.loading {
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: white;
}

div.spinner {
  width: 80px;
  height: 80px;
  display: inline-block;
  position: relative;
  background: transparent;
}

div.spinner div {
  padding: 0;
  animation: spinner 1.2s linear infinite;
  transform-origin: 40px 40px;
}

div.spinner div:after {
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  content: " ";
  display: block;
  position: absolute;
  background: #606060;
}

div.spinner div:nth-child(1) { transform: rotate(0deg); animation-delay: -1.1s; }
div.spinner div:nth-child(2) { transform: rotate(30deg); animation-delay: -1s; }
div.spinner div:nth-child(3) { transform: rotate(60deg); animation-delay: -0.9s; }
div.spinner div:nth-child(4) { transform: rotate(90deg); animation-delay: -0.8s; }
div.spinner div:nth-child(5) { transform: rotate(120deg); animation-delay: -0.7s; }
div.spinner div:nth-child(6) { transform: rotate(150deg); animation-delay: -0.6s; }
div.spinner div:nth-child(7) { transform: rotate(180deg); animation-delay: -0.5s; }
div.spinner div:nth-child(8) { transform: rotate(210deg); animation-delay: -0.4s; }
div.spinner div:nth-child(9) { transform: rotate(240deg); animation-delay: -0.3s; }
div.spinner div:nth-child(10) { transform: rotate(270deg); animation-delay: -0.2s; }
div.spinner div:nth-child(11) { transform: rotate(300deg); animation-delay: -0.1s; }
div.spinner div:nth-child(12) { transform: rotate(330deg); animation-delay: 0s; }

@keyframes spinner {
  0% { opacity: 1; }
  100% { opacity: 0; }
}`;

export default loadingCSS;
