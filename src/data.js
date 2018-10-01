const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(
  path.join(__dirname, 'json', 'accounts.json'), 'utf8'
);
// readFileSync returns the contents of the path (first input).
// this will return a Buffer unless the encoding is specified.
// in which case it will return a string

const accounts = JSON.parse(accountData);
// accounts is a javascript object now

const userData = fs.readFileSync(
  path.join(__dirname, 'json', 'users.json'), 'utf8'
);

const users = JSON.parse(userData);

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8');
};

module.exports = { accounts, users, writeJSON };