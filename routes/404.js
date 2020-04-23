const error404 = (req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html')); // when we work without templater
    res.status(404).render('404', {
        pageTitle: 'Error page - 404!',
        mainText: 'Ops, page not found!',
        path: ''
    });
}

module.exports = error404;