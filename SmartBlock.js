chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://*.doubleclick.net/*", "*://www.googleadservices.com/*", "*://*.taboola.com/*", "*://*.adzerk.net/*"]
    },
    ["blocking"]
);

//This script was specially created for the Chrome browser. It will not work if loaded into any
//other browser (eg. Firefox).
