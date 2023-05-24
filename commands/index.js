const fs = require('fs')
const path = require('path')

const normalizedPath = path.join(__dirname, "./")

const importedCommands = fs
    .readdirSync(normalizedPath)
    .filter(file => file.match(/[a-zA-Z]+Command.js/))
    .map(file => {
        const c = require("./" + file)
        return new c()
    })

module.exports = importedCommands