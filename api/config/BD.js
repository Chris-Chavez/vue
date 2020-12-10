const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "db_peliculas"
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) => {
    if(error){
        console.log("Ha ocurrido un error", error);
    } else {
        console.log("Base de datos conectada");
    }
})

module.exports = myConn;