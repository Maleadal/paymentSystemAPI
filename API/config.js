const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6516910',
    password: 'V1qW1FD6eB',
    database: 'sql6516910',
    port: 3306
});

dbConn.connect((error) => {
    if(error) throw error;
    console.log('Database Connected Succesfully!!');
})

module.exports = dbConn;