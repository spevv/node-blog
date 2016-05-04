var express = require('express');
var router = express.Router();
var controllerPost = require('../controllers/admin/post');

/* GET all posts. */
router.get('/', function(req, res,  next) {
    controllerPost.getAll(req, res,  next);
});


router.get('/create', function(req, res,  next) {
    // redirect to view
    controllerPost.createView(req, res,  next);
});

router.post('/create', function(req, res,  next) {
    console.log('create post ');
    controllerPost.create(req, res,  next);
});

router.get('/delete/:id', function(req, res,  next) {
    // redirect to view
    controllerPost.delete(req, res,  next);
});

router.get('/update/:id', function(req, res,  next) {
    // redirect to view
    controllerPost.updateView(req, res,  next);
});

router.post('/update/:id', function(req, res,  next) {
    console.log('update post ');
    controllerPost.update(req, res,  next);
});

/*
router('/update/:id')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });
*/

module.exports = router;
