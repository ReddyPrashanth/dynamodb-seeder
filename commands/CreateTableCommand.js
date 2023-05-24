const Command = require('./Command.js')
const client = require('../common/connection.js')
const { CreateTableCommand } = require('@aws-sdk/client-dynamodb')

class CreateTablesCommand extends Command {
    constructor() {
        super(
            "CreateTable",
            "Creates dynamodb table",
            [
                ["<name>", "Table name. This is a required."]
            ],
            [
                ["-sc", "--schema <string>", "Table schema name"]
            ]
        )
    }

    async action(name, options) { 
        const schema = {
            TableName: name,
            AttributeDefinitions: [
                {
                    AttributeName: "id",
                    AttributeType: "S"
                }
            ],
            KeySchema: [
                {
                    AttributeName: "id",
                    KeyType: "HASH"
                }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            }
        }
        const cmd = new CreateTableCommand(schema)
        this.result = await client.send(cmd);
    }
}

module.exports = CreateTablesCommand