const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log('Users app');
    next();
});

app.use(homeRouter);
app.use(usersRouter);

app.listen(3002);