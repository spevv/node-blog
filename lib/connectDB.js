var mysql = require('mysql');
var config = require('../config');

var connection = mysql.createConnection(
    config.get('mysql')
);

connection.connect();


module.exports = connection;

