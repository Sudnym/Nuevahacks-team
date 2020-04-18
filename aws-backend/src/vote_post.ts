import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const mysql = require('mysql');

export const handler = (event: any, context: any, callback: any) => {
    console.log(event);
    console.log(context);

    if (event.queryStringParameters == null || event.queryStringParameters.id == null) {
        callback(null, {
            statusCode: '400',
            body: 'No post ID specified',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    if(event.body == null || JSON.parse(event.body).vote == null) {
        callback(null, {
            statusCode: '400',
            body: 'No vote specified',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    let post_id = event.queryStringParameters.id;
    let vote = JSON.parse(event.body).vote;
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

        db_connection.query('INSERT INTO votes (`ip`, `post_id`, `vote`) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE vote = ?',
            [sourceIp, post_id, vote, vote],
            (err: any, res: any) => {
                callback(null, {
                    statusCode: err ? '400' : '200',
                    body: err ? err.message : undefined,
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