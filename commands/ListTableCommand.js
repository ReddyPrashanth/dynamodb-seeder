const Command = require('./Command.js')
const client = require('../common/connection.js')
const { ListTablesCommand } = require('@aws-sdk/client-dynamodb')

class ListTableCommand extends Command {
    constructor() {
        super(
            "ListTables",
            "Lists dynamodb tables",
            [],
            []
        )
    }

    async action(options) {
        const cmd = new ListTablesCommand
        this.result = await client.send(cmd)
    }
}

module.exports = ListTableCommand