const Command = require('./Command.js')
const client = require('../common/connection.js')
const { DescribeTableCommand } = require('@aws-sdk/client-dynamodb')

class DescribeTablesCommand extends Command {
    constructor() {
        super(
            "DescribeTable",
            "Describes dynamodb tables",
            [
                ["<name>", "Table name. This is a required."]
            ],
            []
        )
    }

    async action(name, options) { 
        const input = {
            TableName: name
        }
        const cmd = new DescribeTableCommand(input)
        this.result = await client.send(cmd);
    }
}

module.exports = DescribeTablesCommand