const {faker} = require('@faker-js/faker')

const products = (count) => {
    let products = []
    for(let i=0; i<count; i++) {
        const product = {
            id: {"S": faker.string.uuid()},
            name: {"S": faker.commerce.productName()},
            description: {"S": faker.commerce.productDescription()},
            price: {"N": faker.commerce.price({dec: 3})},
            qty: {"N": `${faker.number.int({min: 10, max: 100})}`},
            sold: {"N": `${faker.number.int({min: 0, max: 10})}`},
            createdAt: {"S": faker.date.anytime().toDateString()},
            updatedAt: {"S": faker.date.anytime()}
        }
        products = [...products, product]
    }
    return products
}

module.exports = products