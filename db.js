#!/usr/bin/env node

const {Command} = require('commander')
const commands = require('./commands/index.js')

const program = new Command()

commands.forEach(c => {
    // get command definition
    const cmdDef = c.definition()

    const subCmd = program
        .command(cmdDef.command)
        .description(cmdDef.help)
    
    cmdDef.arguments.forEach( arg => {
        subCmd.argument(arg[0], arg[1])
    })

    cmdDef.options.forEach( o => {
        subCmd.option([o[0], o[1]].join(","),o[2], o[3] ) 
    })

    subCmd
     .action(async function() {
        await c.action.apply(c, arguments)
        console.log(c.getResult())
     })
})

program.parse()