let environment = "dev";
 
let serverURLs = {
"dev": {
"NODE_SERVER": "localhost",
"NODE_SERVER_PORT": "3000",
"MYSQL_HOST": 'localhost',
"MYSQL_USER": 'root',
"MYSQL_PASSWORD": 'SuryaSethu@54321',
'MYSQL_DATABASE': 'performanceReviewSystem',
}
}
 
let config = {
"DB_URL_MYSQL": {
"host": `${serverURLs[environment].MYSQL_HOST}`,
"user": `${serverURLs[environment].MYSQL_USER}`,
"password": `${serverURLs[environment].MYSQL_PASSWORD}`,
"database": `${serverURLs[environment].MYSQL_DATABASE}`
},
"NODE_SERVER_PORT": {
"port": `${serverURLs[environment].NODE_SERVER_PORT}`
},
"NODE_SERVER_URL": {
"url": `${serverURLs[environment].NODE_SERVER}`
}
};
 
module.exports = {
config: config
};