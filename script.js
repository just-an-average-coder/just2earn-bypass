// ==UserScript==
// @name         Just2earn Bypass
// @namespace    http://tampermonkey.net/
// @version      2025-04-02
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to override the setInterval behavior


    function modifyTimer() {

        if (typeof window.getlink === 'function') {
            const originalGetlink = window.getlink.toString();
            const modifiedGetlink = originalGetlink.replace(/var\s+a\s*=\s*\d+\s*;?/, 'var a=0;');
            window.getlink = eval('(' + modifiedGetlink + ')');
        }


        const gads = document.getElementById("gads");
        const overlay = document.getElementById("overlay");

        if (gads) {
            gads.style.display = 'none';
        }

        if (overlay) {
            overlay.style.display = 'none';
        }

        console.log('Modifying the count variable...');
        window.count = 0;
        if (window.a) {
            window.a = 0;
            console.log('Changing please wait time...');
        }
        console.log(window.count);
    }

    // Wait until the page has fully loaded
    window.addEventListener('load', modifyTimer);
})();

