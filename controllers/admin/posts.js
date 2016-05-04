var postModel = require('../../models/post');

var Post = {

    index: function (req, res, next) {
        postModel.getAll(function (retPosts) {
            //req.breadcrumbs('SignUp', '');
            res.render('admin/posts', {
                posts: retPosts,
                breadcrumbs: req.breadcrumbs()
            });
        });
    }

};

module.exports = Post;

