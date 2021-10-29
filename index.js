function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}

browser.tabs.onUpdated.addListener(
    function ( tabId, changeInfo, tab ) { 
        if (changeInfo.status === "complete") {
          browser.tabs.executeScript(tabId, {file: 'label.js'}).then(() => {
              browser.storage.sync.get('aliases').then((aliases) => {
                browser.tabs.sendMessage(tabId, aliases)
              }).catch(() => {
                browser.tabs.sendMessage(tabId, "[]")
              });
            }
          );

        }
    }, {urls: ['*://*.console.aws.amazon.com/*']});

