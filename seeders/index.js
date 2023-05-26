const fs = require('fs')
const path = require('path')

const normalizedPath = path.join(__dirname, "./")

const seeders = fs
    .readdirSync(normalizedPath)
    .filter(file => file.match(/[a-zA-Z]+Seeder.js/))
    .map(file => {
        return {
            name: file.split('.')[0],
            method: require("./" + file)
        }
    }).reduce((p, c) => {
        p[c.name] = c.method
        return p
    }, {})


function Factory(name, count = 10) {
    const seeder = seeders[`${name}Seeder`]
    if(!seeder) throw Error('Seeder not found.')
    return seeder(count)
}

module.exports = Factory