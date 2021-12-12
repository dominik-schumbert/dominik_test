import {createConnection, Connection} from "mysql";
import { ReactElement } from "react";

function MySql(): ReactElement {
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
        return (
            <div className="MySql">
                <header className="MySql-header">
                    <table>
                        {results.map((elm) => {<tr><td>{elm}</td></tr>})}
                    </table>
                </header>
            </div>
        );
    });
    
    function processRow(row: any){
        var jsonResult: string | number | undefined = JSON.stringify(row);
        results.push(JSON.parse(jsonResult));
    }
    return (
        <div className="MySql">
            <header className="MySql-header">
                <table>
                {
                    results.map((elm) => {
                        <tr><td>{elm}</td></tr>
                    })
                }
                </table>
            </header>
        </div>
    );
}

export default MySql;

