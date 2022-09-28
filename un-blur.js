// ==UserScript==
// @name        un-blur
// @namespace   quaoz
// @match       https://*.google.com/*
// @grant       none
// @version     1.0
// @author      quaoz
// @description With privacy.resistFingerprinting enabled on firefox window.devicePixelRatio is spoofed to 1 which can make text look blury on HDPI displays
// ==/UserScript==

window.devicePixelRatio=2;
