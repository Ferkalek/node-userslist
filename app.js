const express = require('express'); // import express
const path = require('path');
const bodyParser = require('body-parser');
const errorCtrl = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// import routes
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');
// end import routes

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// using routes
app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use(errorCtrl.get404);

app.listen(3000);