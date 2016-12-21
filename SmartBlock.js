chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://*.doubleclick.net/*", "*://www.googleadservices.com/*", "*://*.taboola.com/*"]
    },
    ["blocking"]
);

