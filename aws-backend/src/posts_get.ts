import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const mysql = require('mysql');

const db_connection = mysql.createConnection({
    host: rds_endpoint,
    user: rds_username,
    password: rds_password,
    database: "Grapevine"
});

export const handler = (event: any, context: any, callback: any) => {
    console.log(event);
    console.log(context);

    db_connection.connect((err: any) => {
        if (err) throw err;
        console.log('Connected!');
    });
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

    if(count > 100) {
        count = 100
    }

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
            db_connection.query('SELECT `id`, `date`, `title`, `content`, `upvotes`, (`upvotes` + 10 - TIMESTAMPDIFF(SECOND, CURRENT_TIMESTAMP, `date`)*2) as private_score FROM posts ORDER BY private_score DESC LIMIT ?,?;',
                [first, first + count], serveResult);
            break;
        case 'new':
            db_connection.query('SELECT `id`, `date`, `title`, `content`, `upvotes` FROM posts ORDER BY `date` DESC LIMIT ?,?;',
                [first, first + count], serveResult);
            break;
        case 'top':
            db_connection.query('SELECT `id`, `date`, `title`, `content`, `upvotes` FROM posts ORDER BY `upvotes` DESC LIMIT ?,?;',
                [first, first + count], serveResult);
            break;
        default:
            callback(null, {
                statusCode: '300',
                body: 'Bad sort parameter'
            })
    }
};
