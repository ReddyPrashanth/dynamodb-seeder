const { ScanCommand } = require('@aws-sdk/client-dynamodb')
const Command = require('./Command.js')
const client = require('../common/connection.js')

class ScanTableCommand extends Command {
    constructor() {
        super(
            "ScanData",
            "Seeds sample data into given dynamodb table",
            [
                ["<name>", "Table name. This is a required."]
            ],
            [
                ["-l", "--limit <number>", "Number of items to scan from the table", "10"]
            ]
        )
    }

    async action(name, options) { 
        const input = {
            TableName: name,
            Limit: 10
        }
        let cmd = new ScanCommand(input)
        this.result = JSON.stringify(await client.send(cmd))
    }
}

module.exports = ScanTableCommand