var postModel = require('../../models/post');

var Post = {

    createView: function (req, res, next) {
        req.breadcrumbs('Posts', '/admin/posts');
        res.render('admin/post/create', {
            breadcrumbs: req.breadcrumbs()
        });
    },

    create: function (req, res, next) {
        postModel.create(req.body, function (retPosts) {
            req.breadcrumbs('Posts', '/admin/posts');
            res.render('admin/post/create', {
                breadcrumbs: req.breadcrumbs()
            });
        });
    },

    updateView: function (req, res, next) {
        postModel.getByID(req.params.id, function (postOne) {
            req.breadcrumbs('Posts', '/admin/posts');
            res.render('admin/post/update', {
                post: postOne,
                breadcrumbs: req.breadcrumbs()
            });
        });
    },

    update: function (req, res, next) {
        postModel.update(req.params.id, req.body, function () {
            res.redirect('/admin/posts');
        });
    },

    delete: function (req, res, next) {
        postModel.delete(req.params.id, function () {
            res.redirect('/admin/posts');
        });
    },
    
};
 
module.exports = Post;

