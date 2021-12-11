"use strict";
exports.__esModule = true;
var mysql_1 = require("mysql");
var express_1 = require("express");
var router = (0, express_1.Router)();
var db = (0, mysql_1.createConnection)({
    host: "localhost",
    user: "dominikschumbert",
    password: "",
    database: "nordwind"
});
var sql = "SELECT * FROM bestellungen";
var results = [];
var query = db.query(sql);
query
    .on('error', function (err) {
    // test
})
    .on('fields', function (fields) {
})
    .on('result', function (row) {
    db.pause();
    processRow(row);
    db.resume();
})
    .on('end', function () {
    console.log(results);
});
function processRow(row) {
    var jsonResult = JSON.stringify(row);
    results.push(JSON.parse(jsonResult));
}
