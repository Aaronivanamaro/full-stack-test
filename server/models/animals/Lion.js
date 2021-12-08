const Animal = require('../Animal')

class Lion extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Lion'
        this.habitat = "Jungle"
        this.sound = "grr"
    }
}

module.exports = Lion