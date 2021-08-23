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
            let gettingItem = browser.storage.sync.get('aliases');

            gettingItem.then((res) => {
                if (res.aliases && isJson(res.aliases)) {
                    let code = `window.aws_account_aliases = ${res.aliases};`;
                    browser.tabs.executeScript(tabId, {code: code});
                }

                browser.tabs.executeScript(tabId, {file: 'label.js'});
            });
        }
    }, {urls: ['*://*.console.aws.amazon.com/*']});

