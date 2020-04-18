import {rds_endpoint, rds_password, rds_username} from "./rds_credentials";

const AWS = require('aws-sdk');
const uuid = require('uuid');
const lambda = require('aws-lambda');
const mysql = require('mysql2');

import { APIGatewayEvent } from "aws-lambda";

const db_connection = mysql.createConnection({
    host: rds_endpoint,
    user: rds_username,
    password: rds_password
});

export const handler = (event: APIGatewayEvent, context: any, callback: any) => {
    switch (event.httpMethod) {
        case 'GET':
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
                callback(null, {
                    statusCode: err ? '400' : '200',
                    body: err ? err.message : JSON.stringify(res),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            };

            switch(sortMethod) {
                case 'hot':
                    db_connection.execute('SELECT `id`, `date`, `title`, `content`, `upvotes`, (`upvotes` + 10 - POW(TIMESTAMPDIFF(SECOND, CURRENT_TIMESTAMP, `date`), 1.01)*2) as private_score FROM posts ORDER BY private_score DESC LIMIT ?,?;',
                        [first, first + count], serveResult);
                    break;
                case 'new':
                    db_connection.execute('SELECT `id`, `date`, `title`, `content`, `upvotes` FROM posts ORDER BY `date` DESC LIMIT ?,?;',
                        [first, first + count], serveResult);
                    break;
                case 'top':
                    db_connection.execute('SELECT `id`, `date`, `title`, `content`, `upvotes` FROM posts ORDER BY `upvotes` DESC LIMIT ?,?;',
                        [first, first + count], serveResult);
                    break;
            }
    }
};
