var postModel = require('../../models/post');
//var async = require('async');

var Post =  {

    getAll: function (req, res,  next) {

        post.getAll(function (retPosts) {
            res.render('post/index', { posts: retPosts});
        });

        /*console.log('getAll');
        async.parallel(
            [
                function (callback) {
                    post.getAll(function (retPosts) {
                        console.log('All posts!');
                        callback(null, retPosts);
                    });
                },
                function (callback) {
                    post.getByID(1, function (postOne) {
                        console.log( 'getByID!');
                        callback(null, postOne);
                    });
                }
            ],
            function (err, results) {
                res.render('post/index', { posts: results[0]});
            }
        )*/
    },

    createView: function (req, res, next) {
        console.log('createView');
        res.render('admin/post/create');
    },

    create: function (req, res, next) {
        postModel.create(req.body, function (retPosts) {
            res.render('admin/post/create');
        });
    },

    updateView: function (req, res, next) {
        postModel.getByID(req.params.id, function (postOne) {
            console.log('createView');
            console.log(postOne);
            res.render('admin/post/update', { post: postOne });
        });
    },

    update: function (req, res, next) {
        postModel.update(req.body, function () {
            res.redirect('/posts');
        });
    },

    delete: function (req, res, next) {
        postModel.delete(req.params.id, function () {
            res.redirect('/posts');
        });
    },
    
    

};
 
module.exports = Post;

