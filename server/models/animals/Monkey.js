const Animal = require('../Animal')

class Monkey extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Monkey'
        this.habitat = "Jungle"
        this.sound = "uuaa"
    }
}

module.exports = Monkey