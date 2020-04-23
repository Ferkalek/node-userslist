const error404 = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Error page - 404!',
        mainText: 'Ops, page not found!',
        path: ''
    });
}

module.exports = error404;