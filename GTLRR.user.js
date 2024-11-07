// ==UserScript==
// @name         Greenhorn TLs Rejection Reasons
// @namespace    Charlie's
// @version      v082024
// @description  Expand text abbreviations link to the official specific rejection reasons for Test IO Greenhorn tests.
// @icon         https://test.io/content/dam/test-io/test_io_logo1.svg
// @match        https://teamleader.test.io/test_cycles/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to inject the script into the page
    function injectScript(scriptText) {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
    }

    // Retrieve the script from GitHub raw file
    fetch('https://raw.githubusercontent.com/CharlieMrFox/TestIO_GreenTLsRRS/main/v082024.1')
        .then(response => response.text())
        .then(script => {
            injectScript(script);
        });

})();
