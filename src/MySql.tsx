import {createConnection, Connection, MysqlError} from "mysql";
import {Router} from "express";

var router: Router = Router();

const db: Connection = createConnection({
    host: "localhost",
    user: "dominikschumbert",
    password: "",
    database: "nordwind"
});

let sql: string = "SELECT * FROM bestellungen";

var results: Array<object> = [];


var query = db.query(sql);

query
.on('error', function(err) {
    // test
})
.on('fields', function(fields) {

})
.on('result', function(row) {
    db.pause()
    processRow(row);
    db.resume();
})
.on('end', function(){
    console.log(results);
});

function processRow(row: any){
    var jsonResult: string | number | undefined = JSON.stringify(row);
    results.push(JSON.parse(jsonResult));
}


