/**
 * Created by spevv on 29.04.16.
 */

var connection = require('../lib/connectDB');
var tableName = 'posts';

var Post = {
    
    getAll: function (callback) {
        connection.query('SELECT * FROM `'+ tableName +'`', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    
    getByID: function (id, callback) {
        connection.query('SELECT * FROM `'+ tableName +'` WHERE `id` = '+ id + '', function(err, rows, fields) {
            if (err) throw err;
            callback(rows[0]);
        });
    },

    create: function (post, callback) {
        connection.query('INSERT INTO `'+ tableName +'` SET ' +
            ' `title` =  \'' + post.title + '\', ' +
            ' `text` = \'' + post.text + '\';', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },

    update: function (id, post, callback) {
        connection.query('UPDATE `'+ tableName +'` SET ' +
            ' `title` =  \'' + post.title +'\', ' +
            ' `text` = \'' + post.text +'\'' +
            ' WHERE `id`= '+ id + ';', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },

    delete: function (id, callback) {
        connection.query('DELETE FROM `'+ tableName +'` WHERE `id` = '+ id + '', function(err, rows, fields) {
            if (err) throw err;
            callback();
        });
    }
};

module.exports = Post;

