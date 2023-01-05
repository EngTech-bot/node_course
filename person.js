/*const person = {
    name : 'Abdelhay HAQIQ',
    country : 'Morocco'
}

module.exports = person */

//console.log(__dirname, __filename)

class Person{
    constructor(name,country) {
        this.name = name
        this.country = country
    }

    greeting(){
        console.log(`My name is ${this.name} and I'm from ${this.country}`)
    }
}
module.exports = Person


