browser.runtime.onMessage.addListener(({aliases}) => {
  const roleLabel = document.querySelector('[data-testid=awsc-nav-account-menu-button] > span:first-child');

  const accountAliases = new Map(JSON.parse(aliases).map(a => [a.account_id, a.alias]));

  const str = roleLabel.title;
  let re = /\w+_(\w+)_(\w+)\/(.*)\s+@\s+(.+)/;
  let results = re.exec(str);
  let role = results[1];
  let username = results[3].replace(/@.*$/, "");

  const details = document.querySelector('[data-testid=account-detail-menu]').innerText;
  const accountId = details.match(/\d\d\d\d-\d\d\d\d-\d\d\d\d/)[0].replaceAll('-', '');

  let alias = accountAliases.get(accountId); 

  let accountDisplay = accountId;
  if (alias) {
    accountDisplay = alias;
  }
  
  roleLabel.innerText = `${accountDisplay} / ${role} / ${username}`;
});
