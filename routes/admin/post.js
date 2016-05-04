var express = require('express');
var router = express.Router();
var controllerPost = require('../../controllers/admin/post');

var postValidation = require('../../validation/post');




/* GET all posts. */
/*
router.get('/', function (req, res, next) {
    controllerPost.getAll(req, res, next);
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
 });*/



router.get('/', function(req, res, next) {
    controllerPost.createView(req, res, next);
});

router.post('/', function(req, res, next) {
    if(postValidation.titleValidation(req, res, next)){
        controllerPost.create(req, res, next);
    }
});

router.delete('/:id', function(req, res, next) {
    controllerPost.delete(req, res, next);
});

router.get('/delete/:id', function(req, res, next) {
    controllerPost.delete(req, res, next);
});

router.get('/:id', function(req, res, next) {
    controllerPost.updateView(req, res, next);
});

router.put('/:id', function(req, res, next) {
   if(postValidation.titleValidation(req, res, next)){
       controllerPost.update(req, res, next);
   }

});



module.exports = router;
