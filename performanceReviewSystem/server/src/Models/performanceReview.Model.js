let mysqlConfig = require('../Utilities/mysqlConfig');
 
let initialize = () => {
mysqlConfig.getDB().query("create table IF NOT EXISTS performanceDetail (id INT auto_increment primary key, performanceCategory VARCHAR(30),  feedback VARCHAR(24), employeeId INT, assignEmployeeID INT)");
 
}
 
module.exports = {
initialize: initialize
}