const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// these 2 line need for templating
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const err404Router = require('./routes/404');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // add public path

app.use(adminRouter.router);
app.use(shopRouter);
app.use(err404Router);

app.listen(3002);