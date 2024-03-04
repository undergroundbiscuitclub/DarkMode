chrome.browserAction.onClicked.addListener((details) => {
    chrome.storage.local.get(["darkmode"], function(result) {
        if (result.darkmode) {
            chrome.storage.local.remove(["darkmode"], function() {
                console.log("Disabling darkmode...");
            });
            chrome.tabs.executeScript(details.tabId, {
                code: 'var q = document.querySelectorAll("#darkmode");if(q.length) {q[0].parentNode.removeChild(q[0]);}'
            });
        }else{
            chrome.storage.local.set({ "darkmode": true }, function() {
                console.log("Enabling darkmode...");
            });
            chrome.tabs.executeScript(details.tabId, {
                file: "darkmode.js"
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
