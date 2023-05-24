const Command = require('./Command.js')
const client = require('../common/connection.js')
const Factory = require('../seeders/index.js')
const { Capitalize } = require('../common/utils.js')
const { BatchWriteItemCommand } = require('@aws-sdk/client-dynamodb')

class SeedDataCommand extends Command {
    constructor() {
        super(
            "SeedData",
            "Seeds sample data into given dynamodb table",
            [
                ["<name>", "Entity name. This is a required field."],
                ["<table>", "Table name. This is a required field."]
            ],
            [
                ["-c", "--count <number>", "Number of items to put into table", "10"]
            ]
        )
    }

    async action(name, table, options) { 
        const data = Factory(Capitalize(name))
        
        while(data.length) {
            const items = data.splice(0,25).map(i => {
                return {
                    PutRequest: {
                        Item: i
                    }
                }
            })
            const input = {
                RequestItems: {
                    [table]: items
                }
            }
            let cmd = new BatchWriteItemCommand(input)
            this.result = await client.send(cmd)
        }
    }
}

module.exports = SeedDataCommand