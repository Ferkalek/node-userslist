const express = require('express');

const app = express();

app.use('/list', (req, res, next) => {
    res.send('<h1>List</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Simple version</h1>');
});

app.listen(3002);