const {faker} = require('@faker-js/faker')

const products = (count) => {
    let products = []
    const timestamp = new Date(Date.now()).toISOString()
    for(let i=0; i<count; i++) {
        const product = {
            id: {"S": faker.string.uuid()},
            name: {"S": faker.commerce.productName()},
            description: {"S": faker.commerce.productDescription()},
            price: {"N": faker.commerce.price({dec: 3})},
            qty: {"N": `${faker.number.int({min: 10, max: 100})}`},
            sold: {"N": `${faker.number.int({min: 0, max: 10})}`},
            createdAt: {"S": timestamp},
            updatedAt: {"S": timestamp}
        }
        products = [...products, product]
    }
    return products
}

module.exports = products