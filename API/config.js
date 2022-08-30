const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ccs_masterlist'
});

dbConn.connect((error) => {
    if(error) throw error;
    console.log('Database Connected Succesfully!!');
})

module.exports = dbConn;