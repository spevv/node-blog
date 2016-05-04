var express = require('express');
var router = express.Router();
var controllerPosts = require('../../controllers/admin/posts');

/* GET all posts. */
 router.get('/', function (req, res, next) {
     controllerPosts.index(req, res, next);
 });

module.exports = router;
