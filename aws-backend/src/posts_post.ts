import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const mysql = require('mysql');
const intformat = require('biguint-format');
const FlakeId = require('flake-idgen');

const flakeIdGen = new FlakeId();

export const handler = (event: any, context: any, callback: any) => {
    console.log(event);
    console.log(context);

    const db_connection = mysql.createConnection({
        host: rds_endpoint,
        user: rds_username,
        password: rds_password,
        database: "Grapevine"
    });
    db_connection.connect((err: any) => {
        if (err) throw err;
        console.log('Connected!');
    });

    let postBody = JSON.parse(event.body);

    let sourceIp = event.requestContext.http.sourceIp;
    let id = intformat(flakeIdGen.next(), 'dec');
    let date = Date.now();
    let title = postBody.title;
    let content = postBody.content;
    let upvotes = 10;
    let downvotes = 0;

    db_connection.query('INSERT INTO posts (`id`, `date`, `ip`, `title`, `content`, `upvotes`, `downvotes`) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id, date, sourceIp, title, content, upvotes, downvotes],
        (err: any, res: any) => {
            callback(null, {
                statusCode: err ? '400' : '200',
                body: err ? err.message : JSON.stringify({id: id, date: date, title: title, content: content, upvotes: upvotes}),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            });

            db_connection.end()
        })
};