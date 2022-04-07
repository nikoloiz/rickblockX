var host = "https://google.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "https://www.youtube.com/watch?v=iik25wqIuFo",
            "https://www.youtube.com/watch?v=xvFZjo5PgG0"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);