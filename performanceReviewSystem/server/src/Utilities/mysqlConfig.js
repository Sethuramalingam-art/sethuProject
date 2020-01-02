var config = require('./config').config;
var mysql = require('mysql');
var connection = mysql.createConnection({
host: config.DB_URL_MYSQL.host,
user: config.DB_URL_MYSQL.user,
password: config.DB_URL_MYSQL.password,
database: config.DB_URL_MYSQL.database,
});
 
connection.connect((err) => {
    if (err) {
        return console.error('error: ' + err.message);
    }
require('../Models/performanceReview.Model').initialize();
});
 
let getDB = () => {
return connection;
}
 
module.exports = {
getDB: getDB
}