function saveOptions(e) {
    browser.storage.sync.set({
        aliases: document.querySelector('#aliases').value,
    });
    e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get('aliases');
  gettingItem.then((res) => {
    document.querySelector("#aliases").value = res.aliases || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
