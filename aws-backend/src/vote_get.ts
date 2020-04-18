import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const mysql = require('mysql');

export const handler = (event: any, context: any, callback: any) => {
    console.log(event);
    console.log(context);

    if(event.queryStringParameters == null || event.queryStringParameters.id == null) {
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

        db_connection.query('SELECT `vote` FROM votes WHERE `ip` = ? AND `post_id` = ? LIMIT 1',
            [sourceIp, post_id],
            (err: any, res: any) => {
                callback(null, {
                    statusCode: err ? '400' : '200',
                    body: err ? err.message : (res.length > 0 ? JSON.stringify(res[0]) : JSON.stringify({ vote: 0 })),
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                })
            });
    });

};