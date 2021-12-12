import React, { ReactElement } from "react";
import * as mysql from "mysql";

function TableApp(): ReactElement {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'dominikschumbert',
        password: '',
        database: 'nordwind',
        charset: 'utf8'
    });

    const sql: string = "SELECT * FROM bestellungen";
    let columns: Array<any> = [];

    pool.getConnection((err: mysql.MysqlError, con: mysql.PoolConnection) => {
        con.query(sql, (err: mysql.MysqlError, res, fields: any) => {
            if (err) throw err;
            fields.forEach((item: any, index: any, array: any) => {
                columns.push(item.name);
            });
        })

    });

    return (
        <table>
            {
                columns.map((col) => {
                    <tr>
                        <td>{col}</td>
                    </tr>
                })
            }
        </table>
    )
}

export default TableApp;