chrome.browserAction.onClicked.addListener((details) => {
    chrome.storage.local.get(["darkmode"], function(result) {
        if (!result.darkmode) {
            chrome.storage.local.set({ "darkmode": true }, function() {
                console.log("darkmode set to true");
            });
            chrome.tabs.executeScript(details.tabId, {
                file: "darkmode.js"
            });
        }else{
            chrome.storage.local.set({ "darkmode": false }, function() {
                console.log("darkmode set to false");
            });
            chrome.tabs.executeScript(details.tabId, {
                code: 'let q = document.querySelectorAll("#darkmode");if(q.length) {q[0].parentNode.removeChild(q[0]);}'
            });
        }
        let iconPath = result.darkmode ? 'sun.png' : 'moon.png';
        chrome.browserAction.setIcon({path: iconPath});
    });
});

chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.storage.local.get(["darkmode"], function(result) {
        if (result.darkmode) {
            chrome.tabs.executeScript(details.tabId, {
                 file: "darkmode.js"
            });
        }
    });
});
