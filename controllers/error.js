exports.get404 = (req, res, next) => {
    res.render('404', {
        docTitle: 'Error 404',
        path: '/404'
    });
}