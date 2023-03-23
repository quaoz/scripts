// ==UserScript==
// @name        File counter
// @match       https://myrient.erista.me/files/*
// @grant       none
// @version     1.0
// @author      quaoz
// @description Displays the number of files
// @run-at      document-end
// ==/UserScript==

document.getElementsByTagName("h1")[0].append(" - " + document.getElementsByTagName('tr').length + " files.");
