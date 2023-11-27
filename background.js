defaultFilters = ["https://*.zedo.com/*", "https://*.doubleclick.net/*"];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("Blocking request:", details.url);
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
