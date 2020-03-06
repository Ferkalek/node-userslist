const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// end import routes

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// using routes
app.use(shopRoutes);
app.use('/admin', adminRoutes.router);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404', {
        docTitle: 'Error Page'
    })
});

app.listen(3003);