aws lambda update-function-code --function-name grapevine_posts_post --zip-file fileb://.serverless/grapevine-backend.zip
aws lambda update-function-code --function-name grapevine_posts --zip-file fileb://.serverless/grapevine-backend.zip
aws lambda update-function-code --function-name grapevine_post_get --zip-file fileb://.serverless/grapevine-backend.zip
aws lambda update-function-code --function-name grapevine_vote_get --zip-file fileb://.serverless/grapevine-backend.zip
aws lambda update-function-code --function-name grapevine_vote_post --zip-file fileb://.serverless/grapevine-backend.zip