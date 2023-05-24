const {DynamoDBClient} = require('@aws-sdk/client-dynamodb')

// endpoint: 'http://localhost:8000'

const config = {
    region: 'us-east-2'
};

const client = new DynamoDBClient(config);

module.exports = client
