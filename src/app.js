const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
// app.set assigns the setting name, 'views' (a special name),
// to the value 'path.join(xxx)  https://expressjs.com/en/api.html#app.set
// 'views' is A directory or an array of directories for the application's views.
// this specific command tells the express app that 'views' = [directory file is in]/views

app.set('view engine', 'ejs');
// assigning the setting name 'view engine' to the value 'ejs'
// the engine is built into the express app
//  https://expressjs.com/en/guide/using-template-engines.html

app.use(express.static(path.join(__dirname, 'public')));
// mounts the specified middleware function(s)
//  https://expressjs.com/en/api.html#app.use
// express.static() is built-in middleware that serves static files
//  https://expressjs.com/en/api.html#express.static
// path.join() concatenates the current directory with 'public'

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


app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts}));
// routes HTTP GET requests of '/' to the thing after '=>'
// in this instance the app will respond ('res') with rendering 'index'
// res.render will render a 'view' (a special name we defined above)
// res.render is also passing a local variable 'title'
// the 'view engine' will use that variable, and the app will use ejs
// to render the view

app.get('/savings', (req, res) => {
  res.render('account', { account: accounts.savings });
});

app.get('/checking', (req, res) => {
  res.render('account', { account: accounts.checking });
});

app.get('/credit', (req, res) => {
  res.render('account', { account: accounts.credit });
});

app.get('/profile', (req, res) => {
  res.render('profile', { user: users[0] });
});

app.listen(3000, () => console.log('PS Project running on port 3000!'));