import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const mysql = require('mysql');

console.log("1=====================================");

const db_connection = mysql.createConnection({
    host: rds_endpoint,
    user: rds_username,
    password: rds_password,
    database: "Grapevine"
});

console.log("2=====================================");

export const handler = (event: any, context: any, callback: any) => {
    console.log("3=====================================");
    console.log(event);
    console.log(context);

    db_connection.connect((err: any) => {
        if (err) throw err;
        console.log('Connected!');
    });

    switch (event.http_method) {
        case undefined:
        case 'GET':
            console.log("4=====================================");
            let sortMethod: string = 'hot';
            let first: number = 0;
            let count: number = 20;

            if (event.queryStringParameters != null) {
                if(event.queryStringParameters.sort != null) {
                    sortMethod = event.queryStringParameters.sort;
                }
                if (event.queryStringParameters.first != null) {
                    first = Number(event.queryStringParameters.first);
                }
                if(event.queryStringParameters.count != null) {
                    count = Number(event.queryStringParameters.count);
                }
            }

            console.log("5=====================================");

            if(count > 100) {
                count = 100
            }

            console.log("6=====================================");

            let serveResult = (err: any, res: any) => {
                console.warn(err);
                console.warn(res);
                callback(null, {
                    statusCode: err ? '400' : '200',
                    body: err ? err.message : JSON.stringify(res),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                db_connection.end()
            };

            switch(sortMethod) {
                case 'hot':
                    console.log("running db1");
                    db_connection.query('SELECT `id`, `date`, `title`, `content`, `upvotes`, (`upvotes` + 10 - TIMESTAMPDIFF(SECOND, CURRENT_TIMESTAMP, `date`)*2) as private_score FROM posts ORDER BY private_score DESC LIMIT ?,?;',
                        [first, first + count], serveResult);
                    break;
                case 'new':
                    console.log("running db2");
                    db_connection.query('SELECT `id`, `date`, `title`, `content`, `upvotes` FROM posts ORDER BY `date` DESC LIMIT ?,?;',
                        [first, first + count], serveResult);
                    break;
                case 'top':
                    console.log("running db3");
                    db_connection.query('SELECT `id`, `date`, `title`, `content`, `upvotes` FROM posts ORDER BY `upvotes` DESC LIMIT ?,?;',
                        [first, first + count], serveResult);
                    break;
                default:
                    callback(null, {
                        statusCode: '300',
                        body: 'Bad sort parameter'
                    })
            }
            break;
        default:
            console.log("Calling fallback");
            callback(null, {
                statusCode: '300',
                body: 'Bad HTTP method'
            })
    }
};
