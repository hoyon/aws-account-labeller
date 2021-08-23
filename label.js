(function() {
    'use strict';

    const roleLabelClass = 'ThRjn7o-KwO0459UzmvoU';
    const roleLabel = document.getElementsByClassName(roleLabelClass)[0];

    const accountAliases = window.aws_account_aliases || {};

    const str = roleLabel.title;
    let re = /\w+_(\w+)_(\w+)\/(.*)\s+@\s+(.+)/;
    let results = re.exec(str);
    let role = results[1];
    let username = results[3].replace(/@.*$/, "");

    let accountId = document.querySelector('[data-testid=aws-my-account-details]').innerText;

    let alias = accountAliases[accountId]; 

    let accountDisplay = accountId;
    if (alias) {
        accountDisplay = alias;
    }
 
    roleLabel.innerHTML = `${accountDisplay} / ${role} / ${username}`;
})();
