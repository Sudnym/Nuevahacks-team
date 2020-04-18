import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const mysql = require('mysql');

export const handler = (event: any, context: any, callback: any) => {
    console.log(event);
    console.log(context);

    if (event.queryStringParameters == null || event.queryStringParameters.id == null || event.queryStringParameters.vote == null) {
        callback(null, {
            statusCode: '400',
            body: 'No post ID specified',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    let post_id = event.queryStringParameters.id;
    let vote = event.queryStringParameters.vote;
    let sourceIp = event.requestContext.http.sourceIp;

    const db_connection = mysql.createConnection({
        host: rds_endpoint,
        user: rds_username,
        password: rds_password,
        database: "Grapevine"
    });

    db_connection.connect((err: any) => {
        if (err) throw err;
        console.log('Connected!');

        // TODO: Check that post exists before updating

        db_connection.query('INSERT INTO votes (`ip`, `post_id`, `vote`) VALUES (?, ?, ?)',
            [sourceIp, post_id, vote],
            (err: any, res: any) => {
                callback(null, {
                    statusCode: err ? '400' : '200',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                });

                db_connection.query('UPDATE posts SET upvotes = (SELECT COUNT(*) FROM votes WHERE `post_id` = ?) WHERE `post_id` = ?',
                    [post_id, post_id], (err:any, res:any) => { db_connection.end(); });
        });

    });
};