const Animal = require('../Animal')

class Fox extends Animal {
    constructor(name, sex, specie, id){
        super(name, sex, specie, id)
        this.description = 'This is a Fox'
        this.habitat = "Jungle"
        this.sound = "zzz"
    }
}

module.exports = Fox