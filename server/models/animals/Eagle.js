const Animal = require('../Animal')

class Eagle extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Eagle'
        this.habitat = "Jungle"
        this.sound = "aja"
    }
}

module.exports = Eagle