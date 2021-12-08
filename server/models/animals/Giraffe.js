const Animal = require('../Animal')

class Giraffe extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Giraffe'
        this.habitat = "Jungle"
        this.sound = "jiji"
    }
}

module.exports = Giraffe